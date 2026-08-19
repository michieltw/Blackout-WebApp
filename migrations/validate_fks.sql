-- Run these once you've fixed any violating rows in staging.
-- Validates constraints added NOT VALID above.

-- persons
ALTER TABLE persons VALIDATE CONSTRAINT fk_persons_user_id;

-- roles
ALTER TABLE roles VALIDATE CONSTRAINT fk_roles_organization_id;

-- users
ALTER TABLE users VALIDATE CONSTRAINT fk_users_person_id;
ALTER TABLE users VALIDATE CONSTRAINT fk_users_role_id;
ALTER TABLE users VALIDATE CONSTRAINT fk_users_preferred_organization_id;

-- membership_tiers
ALTER TABLE membership_tiers VALIDATE CONSTRAINT fk_membership_tiers_organization_id;

-- membership_benefits
ALTER TABLE membership_benefits VALIDATE CONSTRAINT fk_membership_benefits_tier_id;

-- memberships
ALTER TABLE memberships VALIDATE CONSTRAINT fk_memberships_organization_id;
ALTER TABLE memberships VALIDATE CONSTRAINT fk_memberships_person_id;
ALTER TABLE memberships VALIDATE CONSTRAINT fk_memberships_tier_id;

-- membership_fees
ALTER TABLE membership_fees VALIDATE CONSTRAINT fk_membership_fees_membership_id;

-- membership_history
ALTER TABLE membership_history VALIDATE CONSTRAINT fk_membership_history_person_id;
ALTER TABLE membership_history VALIDATE CONSTRAINT fk_membership_history_organization_id;

-- member_status_log
ALTER TABLE member_status_log VALIDATE CONSTRAINT fk_member_status_log_membership_id;

-- organizations
ALTER TABLE organizations VALIDATE CONSTRAINT fk_organizations_parent_organization_id;
ALTER TABLE organizations VALIDATE CONSTRAINT fk_organizations_created_by_user_id;

-- (Add more VALIDATE lines as you add FKs)
