#!/usr/bin/env python3
"""
Generate safe FK and index migration SQL from Consolidated_Database_JSON.

Usage:
  python3 scripts/generate_fk_and_indexes.py \
    --input Consolidated_Database_JSON \
    --out migrations/add_fks_and_indexes.sql \
    --validate_out migrations/validate_fks.sql \
    --warnings_out migrations/fk_warnings.txt

Behavior:
- For every column with a "ref" in the JSON, emits a DO $$ BEGIN IF NOT EXISTS(...) THEN ALTER TABLE ... ADD CONSTRAINT ... FOREIGN KEY (...) REFERENCES ... (...) ON UPDATE CASCADE ON DELETE <action> NOT VALID; END IF; END $$;
- For each FK column it emits CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_<table>_<column> ON <table>(<column>);
- For composite unique indexes described in the JSON it emits CREATE UNIQUE INDEX IF NOT EXISTS ux_<table>_<cols>...
- The default ON DELETE action: "SET NULL" if the column has "nullable": true, otherwise "RESTRICT".
- If the referenced table is not present in the JSON, a WARNING line is written to the warnings file and the FK is emitted as a commented block for manual review.

This script does not execute SQL — it only writes files for you to run in staging.
"""
import argparse
import json
import re
from pathlib import Path


def safe_name(s):
    return re.sub(r'[^a-zA-Z0-9_]', '_', s)


def main():
    p = argparse.ArgumentParser()
    p.add_argument("--input", default="Consolidated_Database_JSON")
    p.add_argument("--out", default="migrations/add_fks_and_indexes.sql")
    p.add_argument("--validate_out", default="migrations/validate_fks.sql")
    p.add_argument("--warnings_out", default="migrations/fk_warnings.txt")
    args = p.parse_args()

    inp = Path(args.input)
    out = Path(args.out)
    validate_out = Path(args.validate_out)
    warnings_out = Path(args.warnings_out)
    out.parent.mkdir(parents=True, exist_ok=True)

    data = json.loads(inp.read_text())
    tables = {t["name"]: t for t in data.get("tables", [])}

    fk_lines = []
    idx_lines = []
    ux_lines = []
    validate_lines = []
    warnings = []

    for t in data.get("tables", []):
        tname = t["name"]
        # indexes declared in JSON
        for idx in t.get("indexes", []):
            cols = idx.get("columns", [])
            if not cols:
                continue
            cols_s = ",".join(cols)
            cols_safe = safe_name("_".join(cols))
            if idx.get("unique"):
                ux_lines.append(f"CREATE UNIQUE INDEX IF NOT EXISTS ux_{tname}_{cols_safe} ON {tname} ({cols_s});")
            else:
                idx_lines.append(f"CREATE INDEX IF NOT EXISTS idx_{tname}_{cols_safe} ON {tname} ({cols_s});")

        for col in t.get("columns", []):
            if "ref" not in col:
                continue
            cname = col["name"]
            ref = col["ref"]
            rtable = ref["table"]
            rcol = ref.get("column", "id")
            nullable = col.get("nullable", False)
            on_delete = "SET NULL" if nullable else "RESTRICT"
            fk_name = f"fk_{tname}_{cname}"
            # check referenced table exists
            if rtable not in tables:
                warnings.append(f"Referenced table '{rtable}' for {tname}.{cname} not found in input JSON.")
                # emit commented FK for manual review
                fk_lines.append(f"-- WARNING: referenced table '{rtable}' not found. Review manually before applying.\n-- ALTER TABLE {tname} ADD CONSTRAINT {fk_name} FOREIGN KEY ({cname}) REFERENCES {rtable}({rcol}) ON UPDATE CASCADE ON DELETE {on_delete} NOT VALID;")
            else:
                # Use DO block to avoid duplicate-constraint errors
                fk_lines.append(
f"""DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = '{fk_name}') THEN
    ALTER TABLE {tname}
      ADD CONSTRAINT {fk_name}
      FOREIGN KEY ({cname}) REFERENCES {rtable}({rcol}) ON UPDATE CASCADE ON DELETE {on_delete} NOT VALID;
  END IF;
END
$$;
""")
                validate_lines.append(f"ALTER TABLE {tname} VALIDATE CONSTRAINT {fk_name};")
            # create index
            idx_lines.append(f"CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_{tname}_{cname} ON {tname} ({cname});")

    # write migration SQL
    header = "-- AUTO-GENERATED: add_fks_and_indexes.sql\n-- Review before running. Run on staging first.\n\nSET statement_timeout = 0;\n\n"
    out.write_text(header + "\n".join(fk_lines) + "\n\n-- Indexes\n" + "\n".join(idx_lines) + "\n\n-- Unique indexes\n" + "\n".join(ux_lines) + "\n")
    validate_out.write_text("-- AUTO-GENERATED: validate_fks.sql\n-- Run this after you have fixed any FK violations on staging.\n\n" + "\n".join(validate_lines) + "\n")
    warnings_out.write_text("\n".join(warnings) + ("\n" if warnings else "No warnings.\n"))

    print(f"Wrote {out} and {validate_out} and warnings to {warnings_out}")


if __name__ == "__main__":
    main()
