# FK & Index Migration

This branch adds migration helper files to create foreign key constraints and indexes based on the Consolidated_Database_JSON schema.

What is included
- scripts/generate_fk_and_indexes.py - generator that reads Consolidated_Database_JSON and produces add_fks_and_indexes.sql and validate_fks.sql
- migrations/add_fks_and_indexes.sql - prepared, safe migration SQL that adds FKs NOT VALID and creates indexes CONCURRENTLY for main refs found in the schema
- migrations/validate_fks.sql - validates constraints once you fix data issues

How to use (recommended)
1) Run this on a staging DB only. Make a snapshot of production first if you plan to run it in prod.
2) Optionally re-generate the SQL with the script if you want to include all refs: python3 scripts/generate_fk_and_indexes.py
3) Apply the migration to staging:
   psql -h <host> -U <user> -d <db> -f migrations/add_fks_and_indexes.sql
4) Run validation queries (or examine migrations/fk_warnings.txt if you re-ran generator) and fix any orphaned rows.
5) Validate the constraints:
   psql -h <host> -U <user> -d <db> -f migrations/validate_fks.sql
6) Run tests and smoke tests. If all good, schedule production migration.

Notes
- The migration uses NOT VALID for the initial ADD CONSTRAINT to avoid long locks during creation; you MUST run the validation step to enforce the constraints.
- Where the JSON referenced a `user_accounts` table I couldn't find, the migration leaves commented blocks for manual review — if you use `users` instead, uncomment and map accordingly.
