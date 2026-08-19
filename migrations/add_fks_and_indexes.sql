-- SAFE FK + INDEX migration
-- RUN ON STAGING FIRST. These FKs are added NOT VALID so you can add them without waiting for full validation.
-- After fixing any violating data, run migrations/validate_fks.sql to validate constraints.

SET statement_timeout = 0;

-- persons.user_id -> users(id)
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_persons_user_id') THEN
    ALTER TABLE persons ADD CONSTRAINT fk_persons_user_id FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE ON DELETE SET NULL NOT VALID;
  END IF;
END
$$;
CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_persons_user_id ON persons (user_id);

-- roles.organization_id -> organizations(id)
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_roles_organization_id') THEN
    ALTER TABLE roles ADD CONSTRAINT fk_roles_organization_id FOREIGN KEY (organization_id) REFERENCES organizations(id) ON UPDATE CASCADE ON DELETE RESTRICT NOT VALID;
  END IF;
END
$$;
CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_roles_organization_id ON roles (organization_id);
CREATE UNIQUE INDEX IF NOT EXISTS ux_roles_organization_id_name ON roles (organization_id, name);

-- users.person_id -> persons(id)
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_users_person_id') THEN
    ALTER TABLE users ADD CONSTRAINT fk_users_person_id FOREIGN KEY (person_id) REFERENCES persons(id) ON UPDATE CASCADE ON DELETE RESTRICT NOT VALID;
  END IF;
END
$$;
CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_users_person_id ON users (person_id);

-- users.role_id -> roles(id)
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_users_role_id') THEN
    ALTER TABLE users ADD CONSTRAINT fk_users_role_id FOREIGN KEY (role_id) REFERENCES roles(id) ON UPDATE CASCADE ON DELETE RESTRICT NOT VALID;
  END IF;
END
$$;
CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_users_role_id ON users (role_id);

-- users.preferred_organization_id -> organizations(id)
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_users_preferred_organization_id') THEN
    ALTER TABLE users ADD CONSTRAINT fk_users_preferred_organization_id FOREIGN KEY (preferred_organization_id) REFERENCES organizations(id) ON UPDATE CASCADE ON DELETE SET NULL NOT VALID;
  END IF;
END
$$;
CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_users_preferred_organization_id ON users (preferred_organization_id);

-- membership_tiers.organization_id -> organizations(id)
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_membership_tiers_organization_id') THEN
    ALTER TABLE membership_tiers ADD CONSTRAINT fk_membership_tiers_organization_id FOREIGN KEY (organization_id) REFERENCES organizations(id) ON UPDATE CASCADE ON DELETE RESTRICT NOT VALID;
  END IF;
END
$$;
CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_membership_tiers_organization_id ON membership_tiers (organization_id);
CREATE UNIQUE INDEX IF NOT EXISTS ux_membership_tiers_org_tierlevel ON membership_tiers (organization_id, tier_level);

-- membership_benefits.tier_id -> membership_tiers(id)
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_membership_benefits_tier_id') THEN
    ALTER TABLE membership_benefits ADD CONSTRAINT fk_membership_benefits_tier_id FOREIGN KEY (tier_id) REFERENCES membership_tiers(id) ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;
  END IF;
END
$$;
CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_membership_benefits_tier_id ON membership_benefits (tier_id);

-- memberships.organization_id -> organizations(id)
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_memberships_organization_id') THEN
    ALTER TABLE memberships ADD CONSTRAINT fk_memberships_organization_id FOREIGN KEY (organization_id) REFERENCES organizations(id) ON UPDATE CASCADE ON DELETE RESTRICT NOT VALID;
  END IF;
END
$$;
CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_memberships_organization_id ON memberships (organization_id);

-- memberships.person_id -> persons(id)
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_memberships_person_id') THEN
    ALTER TABLE memberships ADD CONSTRAINT fk_memberships_person_id FOREIGN KEY (person_id) REFERENCES persons(id) ON UPDATE CASCADE ON DELETE RESTRICT NOT VALID;
  END IF;
END
$$;
CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_memberships_person_id ON memberships (person_id);

-- memberships.tier_id -> membership_tiers(id)
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_memberships_tier_id') THEN
    ALTER TABLE memberships ADD CONSTRAINT fk_memberships_tier_id FOREIGN KEY (tier_id) REFERENCES membership_tiers(id) ON UPDATE CASCADE ON DELETE SET NULL NOT VALID;
  END IF;
END
$$;
CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_memberships_tier_id ON memberships (tier_id);
CREATE UNIQUE INDEX IF NOT EXISTS ux_memberships_org_person ON memberships (organization_id, person_id);

-- membership_fees.membership_id -> memberships(id)
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_membership_fees_membership_id') THEN
    ALTER TABLE membership_fees ADD CONSTRAINT fk_membership_fees_membership_id FOREIGN KEY (membership_id) REFERENCES memberships(id) ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;
  END IF;
END
$$;
CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_membership_fees_membership_id ON membership_fees (membership_id);

-- membership_fees.paid_by -> user_accounts(id) -- WARNING: 'user_accounts' table not found in JSON snippet; please verify mapping
-- If you have `user_accounts` table, uncomment the following block. Otherwise change 'user_accounts' to the correct table (e.g., users)
-- DO $$
-- BEGIN
--   IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_membership_fees_paid_by') THEN
--     ALTER TABLE membership_fees ADD CONSTRAINT fk_membership_fees_paid_by FOREIGN KEY (paid_by) REFERENCES user_accounts(id) ON UPDATE CASCADE ON DELETE SET NULL NOT VALID;
--   END IF;
-- END
-- $$;
CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_membership_fees_paid_by ON membership_fees (paid_by);

-- membership_history.person_id -> persons(id)
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_membership_history_person_id') THEN
    ALTER TABLE membership_history ADD CONSTRAINT fk_membership_history_person_id FOREIGN KEY (person_id) REFERENCES persons(id) ON UPDATE CASCADE ON DELETE RESTRICT NOT VALID;
  END IF;
END
$$;
CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_membership_history_person_id ON membership_history (person_id);

-- membership_history.organization_id -> organizations(id)
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_membership_history_organization_id') THEN
    ALTER TABLE membership_history ADD CONSTRAINT fk_membership_history_organization_id FOREIGN KEY (organization_id) REFERENCES organizations(id) ON UPDATE CASCADE ON DELETE RESTRICT NOT VALID;
  END IF;
END
$$;
CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_membership_history_organization_id ON membership_history (organization_id);

-- member_status_log.membership_id -> memberships(id)
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_member_status_log_membership_id') THEN
    ALTER TABLE member_status_log ADD CONSTRAINT fk_member_status_log_membership_id FOREIGN KEY (membership_id) REFERENCES memberships(id) ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;
  END IF;
END
$$;
CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_member_status_log_membership_id ON member_status_log (membership_id);

-- member_status_log.changed_by -> user_accounts(id) -- WARNING: 'user_accounts' table not found; review before applying.
-- CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_member_status_log_changed_by ON member_status_log (changed_by);

-- user_profiles.user_id -> user_accounts(id)  -- WARNING: references user_accounts
-- If 'user_accounts' isn't present, map to users(id) instead:
-- DO $$
-- BEGIN
--   IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_user_profiles_user_id') THEN
--     ALTER TABLE user_profiles ADD CONSTRAINT fk_user_profiles_user_id FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;
--   END IF;
-- END
-- $$;
CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_user_profiles_user_id ON user_profiles (user_id);

-- organizations.parent_organization_id -> organizations(id)
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_organizations_parent_organization_id') THEN
    ALTER TABLE organizations ADD CONSTRAINT fk_organizations_parent_organization_id FOREIGN KEY (parent_organization_id) REFERENCES organizations(id) ON UPDATE CASCADE ON DELETE SET NULL NOT VALID;
  END IF;
END
$$;
CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_organizations_parent_organization_id ON organizations (parent_organization_id);

-- organizations.created_by_user_id -> users(id)
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_organizations_created_by_user_id') THEN
    ALTER TABLE organizations ADD CONSTRAINT fk_organizations_created_by_user_id FOREIGN KEY (created_by_user_id) REFERENCES users(id) ON UPDATE CASCADE ON DELETE SET NULL NOT VALID;
  END IF;
END
$$;
CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_organizations_created_by_user_id ON organizations (created_by_user_id);

-- (Add more FK blocks following the same pattern for other refs in Consolidated_Database_JSON)

-- End of prepared FK migration
