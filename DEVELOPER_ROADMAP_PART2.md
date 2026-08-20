# Developer Journey Roadmap Part 2: Ice Hockey Ecosystem WebApp

This roadmap outlines the continuation of the development journey to build the remaining features of our Ice Hockey ecosystem manager, social hub, and multiplayer gamification WebApp. This document picks up where Phase 4 and Phase 5 left off in `DEVELOPER_ROADMAP.md` and `HANDOVER.md`.

## Core Directives & Constraints Reminder
- **Tech Stack:** React (Vite), TypeScript, Tailwind CSS, React Router, Zustand, and Supabase.
- **Styling Guidelines:** Tailwind `slate` palette, specific status colors (`emerald-50/700`, `amber-50/700`), and `tabular-nums` for numeric values.
- **Data Fetching:** Strictly use `fetchTableData`, `insertTableData`, and `updateTableData` from `src/lib/api.ts`.
- **Defensive Programming:** NO hardcoded mock data. ALWAYS use optional chaining and fallback arrays.
- **Database/Backend Architecture:** Rely on Supabase as the Single Source of Truth with robust triggers.

---

## Phase 6: Extended League & Club Management

1. **Leagues, Seasons, & Divisions**
   - Implement views to manage `leagues`, `seasons`, `divisions`, `clubs`, and `conferences`.
   - Build tools to manage season transitions (`season_current`, `season_archives`, `org_seasons`, `season_phases`).

2. **Team Details & Staff Management**
   - Expand team management with `team_profiles`, `farm_teams`, and `team_managers`.
   - Develop interfaces for managing `team_staff`, `coaching_notes`, `playbooks`, and `playbook_diagrams`.

3. **Advanced Roster & Lineup Management**
   - Build dynamic lineup tools utilizing `lineups`, `lineup_players`, `lineup_units`, and `lineup_unit_players`.
   - Implement player status tracking: `loan_players`, `waivers`, `transfers`, `player_transfers`, `player_movement_log`.

---

## Phase 7: Tournaments, Playoffs, & Events

4. **Tournament & Bracket Management**
   - Build tournament creation and management utilizing `tournaments`, `tournament_teams`, and `tournament_brackets`.
   - Implement playoff tracking with `competitions`, `competition_teams`, `brackets`, `bracket_teams`, `bracket_matches`, `playoff_brackets`, `playoff_seedings`, `playoff_rounds`, `playoff_series`, and `playoff_series_games`.

5. **Events & Venues**
   - Create venue management tools using `venues`.
   - Build general event management (non-game) with `events`, `event_rsvps`, and `event_status_log`.
   - Develop practice session tracking: `practice_sessions`, `practice_attendance`, `player_availability`.

6. **Ice Time & Scheduling**
   - Implement advanced scheduling with `ice_time_bookings`, `ice_time_availability`, and `game_scheduling_conflicts`.

---

## Phase 8: Officiating, Rules, & Discipline

7. **Officiating Management**
   - Build interfaces for `officials`, `game_officials`, `official_assignments`, and `official_ratings`.

8. **Rules & Discipline Tracking**
   - Develop tracking for `suspensions`, `player_discipline`, `penalty_box_events`.
   - Implement league rules management: `league_bylaws`, `rule_enforcement_log`, `appeals`, `appeal_workflow_steps`, `incident_reports`, `incident_investigation`.

---

## Phase 9: Player Progression & Finance

9. **Player Development & Contracts**
   - Build views for `player_development_plans`, `development_milestones`, `player_ratings`, `player_injuries`.
   - Implement contract management: `player_contracts`, `contract_terms`, `player_contract_history`, `player_salary`.

10. **Drafts & Financials**
    - Develop draft tools: `player_draft`, `player_drafts`, `draft_teams`, `draft_picks`.
    - Implement team financials and salary caps: `salary_cap_rules`, `salary_cap_tracking`, `expenses`.

---

## Phase 10: Advanced Statistics & Gamification

11. **Deep Statistics**
    - Build dashboards for `player_statistics`, `team_statistics`, `goalie_statistics`, `team_advanced_stats`.
    - Implement tracking for `team_standings`, `team_goals`, `team_versus_team_records`, `team_rivalries`, `rivalry_stats`.

12. **Achievements & Milestones**
    - Expand gamification with `achievements`, `player_achievements`, `milestones`.
    - Build KPI tracking: `team_kpis`, `team_kpi_history`, `season_objectives`.

---

## Phase 11: Fan Engagement, Commerce, & Media

13. **Fan Base & Memberships**
    - Develop views for `fan_profiles`, `fan_memberships`, `loyalty_points`, `season_tickets`, `fan_clubs`, `fan_club_members`.
    - Expand general memberships: `membership_tiers`, `membership_benefits`, `memberships`, `membership_fees`, `membership_history`, `member_status_log`, `membership_lookup`.

14. **Commerce & Inventory**
    - Implement ticketing: `ticket_inventory`, `ticket_sales`.
    - Build merchandise management: `merchandise_products`, `merchandise_orders`, `merchandise_order_items`.
    - Manage equipment: `equipment`, `equipment_assignments`, `equipment_maintenance`, `personal_equipment`, `player_sticks`.

15. **Sponsorships & Marketing**
    - Develop tools for `brands`, `retailers`, `sponsors`, `sponsorship_deliverables`, `sponsorship_payments`.
    - Build ad management: `advertisements`, `ad_placements`.
    - Manage media and communications: `social_media_accounts`, `social_media_posts`, `media`, `documents`, `announcement_audience`.

---

## Phase 12: System Admin & Integrations

16. **Settings & Admin Tools**
    - Implement configuration interfaces for `system_settings`, `app_settings`, `definitions`, `user_timezone`, `dashboard_widgets`, `user_preferences`.
    - Build role and permission management: `roles`, `role_permissions`, `user_roles`.
    - Add utilities for `archived_records`, `jobs`, `bulk_import_staging`, `sheet_build_order`, `first_time_setup`.

17. **External Integrations**
    - Build UI for syncing and managing integrations: `shopify_settings`, `shopify_integration`, `shopify_product_sync`.
    - Google workspace integrations: `google_sheets_settings`, `google_sheets_config`, `google_sheets_sync_log`, `google_apps_script_settings`, `gas_integration`, `gas_executions`.
    - IJshockey integration: `ijshockey_sync_log`.

18. **Invoicing & Auditing**
    - Implement financial tracking: `invoices`, `invoice_items`, `payments`.
    - Build security and logging dashboards: `audit_logs`, `notification_logs`.

---

## Phase 13: Specialized Products & Niche Features

19. **Stick Customization**
    - Build interfaces for `stick_products`, `stick_customization_orders`, `stick_customization_specs`.
    - Manage feedback: `stick_polls`, `stick_poll_responses`, `stick_feedback`, `stick_recommendations`.

20. **Templates & Scorekeeping**
    - Develop template management: `template_entity`, `template_link`, `template_settings`, `template_log`.
    - Build specialized scorekeeper tools: `scorekeeper_default_settings`, `scorekeeper_game_settings`, `scorekeeper_sessions`, `game_approvals`, `game_attendance`, `game_captains`, `game_periods`.

---

**End of Journey Part 2:** Upon completion of these phases, the WebApp will have fully implemented interfaces and workflows for every entity in the database, fulfilling the vision of a comprehensive Ice Hockey ecosystem manager.
