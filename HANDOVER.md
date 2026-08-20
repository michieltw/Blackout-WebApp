# Ice Hockey Ecosystem WebApp - Handover Document

## Current Status

We have successfully completed the foundation and a significant portion of the core features outlined in the `DEVELOPER_ROADMAP.md`.

**Completed Phases:**
* **Phase 1: Foundation & Backend Bootstrapping:** Database schema and Supabase configurations are established.
* **Phase 2: Frontend Bootstrapping & Core Architecture:** Vite + React + TypeScript setup is complete. Tailwind CSS is configured according to strict project constraints (`slate`, `emerald`, `amber`). The generic API data access layer (`src/lib/api.ts`) is fully functional.
* **Phase 3: Core Ecosystem Features:**
  * **Auth & Onboarding (Step 7):** Basic UI flows for Login (`src/pages/Login.tsx`) and Signup (`src/pages/Signup.tsx`) are implemented. We established a Zustand store (`src/lib/store.ts`) for session state and a `RequireAuth` component for route protection. Crucially, the signup flow handles Supabase auth *and* properly inserts related records into the custom `persons` and `users` tables.
  * **CRUD Views (Steps 8-10):** We built out data-fetching dashboard views for:
    * `Teams` (`src/pages/Teams.tsx`)
    * `Organizations` (`src/pages/Organizations.tsx`)
    * `Rosters` (`src/pages/Rosters.tsx`)
    * `PlayerProfiles` (`src/pages/PlayerProfiles.tsx`)
    * `Schedule` (`src/pages/Schedule.tsx`)
* **Phase 4: Social Hub & Gamification (Started):**
  * **Social Feed (Step 11):** Implemented the `SocialFeed.tsx` view fetching from the `announcements` table.

All built views have been integrated into the `react-router-dom` configuration in `src/App.tsx`.

## Key Technical Decisions & Constraints Enforced

1. **Defensive Programming:** The entire frontend is built to never crash on missing data. You will see extensive use of optional chaining (e.g., `team?.status`) and fallback arrays (`(teams || []).map()`) across all components. **Never use hardcoded mock data in the production code.**
2. **Styling Rules:** We strictly adhere to the Tailwind `slate` palette for general layout, using `emerald-50/700` for positive/active statuses and `amber-50/700` for neutral/inactive statuses. We extensively utilize the `tabular-nums` utility class for all scores, IDs, and timestamps to prevent layout shifting.
3. **Data Fetching:** Do not write raw Supabase queries inside components. Always use the typed generic wrappers `fetchTableData` and `insertTableData` provided in `src/lib/api.ts`.
4. **State Management:** Global state, specifically Authentication, is managed via Zustand (`src/lib/store.ts`). Use `useAuthStore` to access session data.

## Next Steps for the Incoming Developer

You should pick up from the remainder of **Phase 4: Social Hub & Gamification** and move towards **Phase 5**.

1. **Complete Step 11 (Messages):** The current Social Feed only pulls from `announcements`. Expand this or create a new view to handle direct/team `messages`.
2. **Step 12: Live Event Tracking & Play-by-Play:** Build the UI for staff to input `game_events`. This is a complex view that needs to interact heavily with the `games` and `game_events` tables.
3. **Step 13: Gamification & Leaderboards:** Develop dashboards for player/team statistics and leaderboards, leveraging the data denormalized by backend triggers.
4. **Step 14 & 15: Defensive & Styling Audits:** Perform a final sweep to ensure no mock data remains and that all numbers strictly use `tabular-nums`.
5. **Step 16: CI/CD:** Finalize deployment pipelines.

## Project Execution Commands
* Start local server: `npm run dev`
* Typecheck and build: `npm run build`
* Lint: `npm run lint`

Good luck!
