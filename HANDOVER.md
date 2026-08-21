# Developer Handover Document: Part 3 Journey Continuation

Hello, and welcome! You are stepping into a mature and well-architected React, Vite, and Supabase project for an Ice Hockey Ecosystem WebApp. The previous AI has made significant progress, but as its context window filled up, it gracefully stopped to hand the baton to you.

## Current State

We are currently working our way through `DEVELOPER_ROADMAP_PART2.md`.
So far, the following phases from Part 2 have been successfully implemented:
*   **Phase 6:** Extended League & Club Management (Leagues, Seasons, Divisions, Clubs, Conferences, Season Transitions, Team Details, Lineups, Player Movement)
*   **Phase 7:** Tournaments, Playoffs, & Events (Tournaments, Events, Venues, Practices, Ice Time Scheduling)
*   **Phase 8:** Officiating, Rules, & Discipline (Officiating, Rules & Discipline)
*   **Phase 9:** Player Progression & Finance (Player Progression, Contracts, Drafts, Financials)
*   **Phase 10:** Advanced Statistics & Gamification (Deep Statistics, Achievements & Milestones)
*   **Phase 11:** Fan Engagement, Commerce, & Media (Fan Base, Commerce, Sponsorships)

All of these new pages fetch data from the Supabase backend utilizing the robust `fetchTableData` function from `src/lib/api.ts`. They display this data using standardized UI components (e.g., `<Table>`, `<Button>`) and include proper loading states and error fallbacks. They are also integrated into the routing in `src/App.tsx` and the main navigation in `src/layouts/AppLayout.tsx`.

## Your Next Steps

Your immediate objective is to pick up where Phase 11 left off and complete the remaining phases outlined in `DEVELOPER_ROADMAP_PART2.md`. This represents the final stretch to complete the core entity views for the ecosystem.

1.  **Familiarize yourself with the repository:**
    *   Read `DEVELOPER_ROADMAP.md` (for historical context of phases 1-5).
    *   Read `DEVELOPER_ROADMAP_PART2.md` (your primary directive).
    *   Review `src/lib/api.ts` to understand how data fetching/insertion/updating works (`fetchTableData`, `insertTableData`, `updateTableData`).
    *   Review `supabase_schema.sql` to understand the database structure for the entities you are about to implement.

2.  **Proceed to Phase 12: System Admin & Integrations**
    *   Implement settings and admin tools: `system_settings`, `app_settings`, `definitions`, `user_timezone`, `dashboard_widgets`, `user_preferences`, `roles`, `role_permissions`, `user_roles`.
    *   Implement data management utilities: `archived_records`, `jobs`, `bulk_import_staging`, `sheet_build_order`, `first_time_setup`.
    *   Implement external integrations (Shopify, Google Workspace, IJshockey): `shopify_settings`, `shopify_integration`, `shopify_product_sync`, `google_sheets_settings`, `google_sheets_config`, `google_sheets_sync_log`, `google_apps_script_settings`, `gas_integration`, `gas_executions`, `ijshockey_sync_log`.
    *   Implement invoicing and auditing tracking: `invoices`, `invoice_items`, `payments`, `audit_logs`, `notification_logs`.

3.  **Proceed to Phase 13: Specialized Products & Niche Features**
    *   Implement custom stick functionality: `stick_products`, `stick_customization_orders`, `stick_customization_specs`, `stick_polls`, `stick_poll_responses`, `stick_feedback`, `stick_recommendations`.
    *   Implement template and scorekeeping tools: `template_entity`, `template_link`, `template_settings`, `template_log`, `scorekeeper_default_settings`, `scorekeeper_game_settings`, `scorekeeper_sessions`, `game_approvals`, `game_attendance`, `game_captains`, `game_periods`.

4.  **Wire up new views**
    *   Create the necessary React components, implement data fetching, handle edge cases, and add routes in `App.tsx` and links in `AppLayout.tsx` as done in previous phases.

## Crucial Reminders & Rules

*   **Defensive Programming:** NEVER use hardcoded mock data. ALWAYS use optional chaining (e.g., `player?.name`) and fallback arrays (e.g., `(data || []).map()`) to avoid React render crashes.
*   **Data Fetching:** Strictly rely on `fetchTableData`, `insertTableData`, and `updateTableData`. Do not wrap calls to these API utility functions in generic `try...catch` blocks within the render functions, as they already catch and handle errors internally, returning `[]` or fallback data. Instead, check for empty arrays or nulls.
*   **Styling:** Follow the existing Tailwind CSS `slate` palette rules. Ensure you use `tabular-nums` for any rendering of scores, numbers, or IDs.
*   **TypeScript safety:** Fix TypeScript errors robustly. If using generic `.insert()` or `.update()` calls with mapped types causes deep inference issues, use `// @ts-expect-error` gracefully over generic `any` casting.
*   **Routing/Auth:** The `RequireAuth` component currently protects routes. For Playwright visual verification scripts, bypass the RequireAuth guard by intercepting Supabase auth network responses (`**/auth/v1/session*` and `**/auth/v1/user*`) and providing a mock auth session response. See the history in `verify_pages.py` or memory for the proper implementation.
*   **Planning First:** Always use the deep planning mode: research, ask questions, draft an execution plan (`set_plan`), get a review, and stick to the pre-commit steps.

Good luck completing the final phases!
