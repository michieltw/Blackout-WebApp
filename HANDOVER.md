# Developer Handover Document: Part 2 Journey Continuation

Hello, and welcome! You are stepping into a mature and well-architected React, Vite, and Supabase project for an Ice Hockey Ecosystem WebApp. The previous AI has made significant progress, but as its context window filled up, it gracefully stopped to hand the baton to you.

## Current State

We are currently working our way through `DEVELOPER_ROADMAP_PART2.md`.
So far in **Phase 6: Extended League & Club Management**, the following has been implemented:

*   **Sub-Phase 1: Leagues, Seasons, & Divisions**
    *   Created `src/pages/Leagues.tsx` for `leagues`.
    *   Created `src/pages/Seasons.tsx` for `seasons`.
    *   Created `src/pages/Divisions.tsx` for `divisions`.
    *   Created `src/pages/Clubs.tsx` for `clubs`.
    *   Created `src/pages/Conferences.tsx` for `conferences`.
    *   Created `src/pages/SeasonTransitions.tsx` for `season_current`, `season_archives`, `org_seasons`, and `season_phases`.
*   **Sub-Phase 2: Team Details & Staff Management**
    *   Created `src/pages/TeamDetails.tsx` for `team_profiles`, `farm_teams`, and `team_staff`.

All of these new pages fetch data from the Supabase backend utilizing the robust `fetchTableData` function from `src/lib/api.ts`. They display this data using standardized UI components (e.g., `<Table>`) and include proper loading states and error fallbacks. They are also integrated into the routing in `src/App.tsx` and the main navigation in `src/layouts/AppLayout.tsx`.

## Your Next Steps

Your immediate objective is to pick up where Phase 6 left off and then continue into Phase 7, progressing down the roadmap until your context window dictates another handover.

1.  **Familiarize yourself with the repository:**
    *   Read `DEVELOPER_ROADMAP.md` (for historical context of phases 1-5).
    *   Read `DEVELOPER_ROADMAP_PART2.md` (your primary directive).
    *   Review `src/lib/api.ts` to understand how data fetching/insertion/updating works (`fetchTableData`, `insertTableData`, `updateTableData`).
    *   Review `supabase_schema.sql` to understand the database structure for the entities you are about to implement.

2.  **Continue Phase 6: Advanced Roster & Lineup Management**
    *   Your first implementation task is to build views for dynamic lineup tools and player status tracking.
    *   Relevant tables: `lineups`, `lineup_players`, `lineup_units`, `lineup_unit_players`.
    *   Relevant tables for player status: `loan_players`, `waivers`, `transfers`, `player_transfers`, `player_movement_log`.
    *   Create the necessary React components (e.g., `src/pages/LineupManagement.tsx` and `src/pages/PlayerMovement.tsx`), implement data fetching, handle edge cases, and add routes in `App.tsx` and links in `AppLayout.tsx`.

3.  **Proceed to Phase 7: Tournaments, Playoffs, & Events**
    *   Once Phase 6 is entirely complete, move onto Tournament & Bracket management, Events & Venues, and Ice Time Scheduling as outlined in `DEVELOPER_ROADMAP_PART2.md`.

## Crucial Reminders & Rules

*   **Defensive Programming:** NEVER use hardcoded mock data. ALWAYS use optional chaining (e.g., `player?.name`) and fallback arrays (e.g., `(data || []).map()`) to avoid React render crashes.
*   **Data Fetching:** Strictly rely on `fetchTableData`, `insertTableData`, and `updateTableData`. Do not wrap calls to these API utility functions in generic `try...catch` blocks within the render functions, as they already catch and handle errors internally, returning `[]` or fallback data. Instead, check for empty arrays or nulls.
*   **Styling:** Follow the existing Tailwind CSS `slate` palette rules. Ensure you use `tabular-nums` for any rendering of scores, numbers, or IDs.
*   **TypeScript safety:** Fix TypeScript errors robustly. If using generic `.insert()` or `.update()` calls with mapped types causes deep inference issues, use `// @ts-expect-error` gracefully over generic `any` casting.
*   **Routing/Auth:** The `RequireAuth` component currently protects routes. For local testing or Playwright verification, do NOT modify `RequireAuth.tsx`. Instead, inject a mock Zustand session into `localStorage('auth-storage')` before navigation.
*   **Planning First:** Always use the deep planning mode: research, ask questions, draft an execution plan (`set_plan`), get a review, and stick to the pre-commit steps.

Good luck, and build an incredible web app!
