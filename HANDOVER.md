# Developer Handover Document: Part 3 Journey Continuation

Hello, and welcome! You are stepping into a mature and well-architected React, Vite, and Supabase project for an Ice Hockey Ecosystem WebApp. The previous AI has made significant progress, but as its context window filled up, it gracefully stopped to hand the baton to you.

## Current State

We are currently working our way through `DEVELOPER_ROADMAP_PART2.md`.
So far, the following phases have been fully implemented:

*   **Phase 6: Extended League & Club Management**
    *   **Sub-Phase 1:** Created `Leagues.tsx`, `Seasons.tsx`, `Divisions.tsx`, `Clubs.tsx`, `Conferences.tsx`, and `SeasonTransitions.tsx`.
    *   **Sub-Phase 2:** Created `TeamDetails.tsx` for `team_profiles`, `farm_teams`, and `team_staff`.
    *   **Sub-Phase 3:** Created `LineupManagement.tsx` for `lineups`, `lineup_players`, `lineup_units`, and `lineup_unit_players`.
    *   **Sub-Phase 3:** Created `PlayerMovement.tsx` for player status: `loan_players`, `waivers`, `transfers`, `player_transfers`, `player_movement_log`.

*   **Phase 7: Tournaments, Playoffs, & Events**
    *   **Sub-Phase 4:** Created `Tournaments.tsx` for `tournaments`, `tournament_teams`, and `tournament_brackets`.
    *   **Sub-Phase 4:** Created `Playoffs.tsx` for `competitions`, `competition_teams`, `playoff_brackets`, `playoff_seedings`, `playoff_rounds`, `playoff_series`, and `playoff_series_games`.
    *   **Sub-Phase 5 & 6:** Created `Venues.tsx` for `venues`, `ice_time_bookings`, `ice_time_availability`, and `game_scheduling_conflicts`.
    *   **Sub-Phase 5 & 6:** Created `Events.tsx` for general events, `event_rsvps`, `event_status_log`, `practice_sessions`, `practice_attendance`, and `player_availability`.

All of these new pages fetch data from the Supabase backend utilizing the robust `fetchTableData` function from `src/lib/api.ts`. They display this data using standardized UI components (e.g., `<Table>`) and include proper loading states and error fallbacks. They are also integrated into the routing in `src/App.tsx` and the main navigation in `src/layouts/AppLayout.tsx`.

## Your Next Steps

Your immediate objective is to pick up where Phase 7 left off and continue into Phase 8 and Phase 9, progressing down the roadmap until your context window dictates another handover.

1.  **Familiarize yourself with the repository:**
    *   Read `DEVELOPER_ROADMAP.md` (for historical context of phases 1-5).
    *   Read `DEVELOPER_ROADMAP_PART2.md` (your primary directive).
    *   Review `src/lib/api.ts` to understand how data fetching/insertion/updating works (`fetchTableData`, `insertTableData`, `updateTableData`).
    *   Review `supabase_schema.sql` to understand the database structure for the entities you are about to implement.

2.  **Proceed to Phase 8: Officiating, Rules, & Discipline**
    *   Your first implementation task is to build views for officiating management.
    *   Relevant tables: `officials`, `game_officials`, `official_assignments`, `official_ratings`.
    *   Then build views for rules and discipline tracking.
    *   Relevant tables: `suspensions`, `player_discipline`, `penalty_box_events`, `league_bylaws`, `rule_enforcement_log`, `appeals`, `appeal_workflow_steps`, `incident_reports`, `incident_investigation`.
    *   Create the necessary React components (e.g., `src/pages/Officiating.tsx` and `src/pages/Discipline.tsx`), implement data fetching, handle edge cases, and add routes in `App.tsx` and links in `AppLayout.tsx`.

3.  **Proceed to Phase 9: Player Progression & Finance**
    *   Once Phase 8 is entirely complete, move onto Player Development & Contracts, Drafts, and Financials as outlined in `DEVELOPER_ROADMAP_PART2.md`.

## Crucial Reminders & Rules

*   **Defensive Programming:** NEVER use hardcoded mock data. ALWAYS use optional chaining (e.g., `player?.name`) and fallback arrays (e.g., `(data || []).map()`) to avoid React render crashes.
*   **Data Fetching:** Strictly rely on `fetchTableData`, `insertTableData`, and `updateTableData`. Do not wrap calls to these API utility functions in generic `try...catch` blocks within the render functions, as they already catch and handle errors internally, returning `[]` or fallback data. Instead, check for empty arrays or nulls.
*   **Styling:** Follow the existing Tailwind CSS `slate` palette rules. Ensure you use `tabular-nums` for any rendering of scores, numbers, or IDs.
*   **TypeScript safety:** Fix TypeScript errors robustly. If using generic `.insert()` or `.update()` calls with mapped types causes deep inference issues, use `// @ts-expect-error` gracefully over generic `any` casting.
*   **Routing/Auth:** The `RequireAuth` component currently protects routes. For local testing or Playwright verification, do NOT modify `RequireAuth.tsx`. Instead, inject a mock Zustand session into `localStorage('sb-<project-ref>-auth-token')` and `localStorage('auth-storage')` before navigation. Note: `VITE_SUPABASE_ANON_KEY` and `VITE_SUPABASE_URL` can be found in `.env` to determine the project ref.
*   **Planning First:** Always use the deep planning mode: research, ask questions, draft an execution plan (`set_plan`), get a review, and stick to the pre-commit steps.

Good luck, and build an incredible web app!
