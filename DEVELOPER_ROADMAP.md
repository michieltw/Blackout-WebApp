# Developer Journey Roadmap: Ice Hockey Ecosystem WebApp

This roadmap outlines the complete development journey to build our Ice Hockey ecosystem manager, social hub, and multiplayer gamification WebApp. It is designed specifically for an AI developer to execute, ensuring strict adherence to our constraints, tech stack, and best practices.

## Core Directives & Constraints
- **Tech Stack:** React (Vite), TypeScript, Tailwind CSS, React Router, Zustand, and Supabase.
- **Styling Guidelines:** Tailwind `slate` palette (bg-white, text-slate-900, subtle borders), specific status colors (`emerald-50/700`, `amber-50/700`), and `tabular-nums` for all numeric values (scores, IDs, times, etc.).
- **Data Fetching:** Fetch and write data strictly using `fetchTableData` and `insertTableData` custom hooks/utilities.
- **Defensive Programming:** NO hardcoded mock data in production. ALWAYS use optional chaining (e.g., `game?.status`) and fallback arrays (e.g., `(games || []).map()`).
- **Database/Backend Architecture:** Single Source of Truth via Supabase. Utilize robust post-processing triggers (e.g., `syncGameEvents`, `syncPlayerLookup`) for automated data denormalization and aggregation.

---

## Phase 1: Foundation & Backend Bootstrapping

1. **Database Initialization**
   - Execute the `supabase_schema.sql` (generated from our `Consolidated_Database_JSON`) in the Supabase SQL Editor to establish the foundational relational schema, ENUMs, foreign keys, and indexes.
   - Verify that all constraints (e.g., ON DELETE CASCADE) and composite unique indexes are active.

2. **Supabase Edge Functions & Triggers**
   - Write PostgreSQL triggers and Supabase Edge Functions for critical post-processing tasks.
   - *Example:* Implement the `syncGameEvents` trigger to automatically aggregate penalty minutes and calculate goals/assists upon insert/update of `game_events`, updating the denormalized scoreboard on the `games` table.
   - *Example:* Implement the `syncPlayerLookup` trigger to automatically denormalize player stats or roster changes.

3. **Supabase RLS (Row Level Security)**
   - Define baseline RLS policies across the ~199 tables.
   - Ensure secure read access for public endpoints (like generic game scores) and restricted write access bound to authenticated organizations, teams, or specific roles.

---

## Phase 2: Frontend Bootstrapping & Core Architecture

4. **Vite + React Setup**
   - Scaffold the Vite application using the React + TypeScript template.
   - Install Tailwind CSS, configure the `tailwind.config.js` to define our core `slate`, `emerald`, and `amber` palettes explicitly.

5. **State Management & Routing**
   - Initialize Zustand stores for global states (e.g., Auth User Session, Active Organization/Team context).
   - Set up React Router for core layouts: `PublicLayout`, `DashboardLayout`, and `GamificationLayout`.

6. **Data Access Layer (API Client)**
   - Create the generic Supabase client wrappers: `fetchTableData` and `insertTableData`.
   - Ensure these wrappers handle Supabase errors gracefully and enforce strict TypeScript interfaces derived from the database schema.

---

## Phase 3: Core Ecosystem Features (CRUD & Management)

7. **Authentication & Onboarding Flow**
   - Implement Supabase Auth (Email/Password, Magic Link).
   - Build user profile creation mapped to the `persons` and `users` tables.

8. **Organization & Team Management**
   - Build views to list, create, and edit organizations and teams.
   - Implement tables using standard `slate` styling and `tabular-nums`. Apply defensive mapping to prevent crashes on empty databases.

9. **Roster & Player Profiles**
   - Develop player profile pages and dynamic team roster tables.
   - Ensure robust mapping between `persons`, `players`, and `rosters` tables, keeping the UI fail-safe with optional chaining.

10. **Schedule & Game Management**
    - Create the centralized calendar/schedule view for games and practice sessions.
    - Build the "Game Boxscore" interface capable of displaying real-time denormalized data fetched directly from the `games` table.

---

## Phase 4: Social Hub & Gamification

11. **Social Feed & Announcements**
    - Build a real-time feed fetching from `messages` and `announcements`.
    - Implement real-time subscriptions via Supabase to update the UI dynamically when new announcements are pushed.

12. **Live Event Tracking & Play-by-Play**
    - Create the live game logger UI where staff input `game_events` (goals, penalties).
    - Rely on the backend triggers (`syncGameEvents`) to process the logic while the frontend simply listens to updates on the `games` table to refresh the scoreboard.

13. **Gamification & Leaderboards**
    - Develop the player/team statistics dashboards and leaderboards.
    - Implement the logic to display milestones, achievements, and ranking changes securely relying on the single-source-of-truth tables.

---

## Phase 5: Polish, Testing, & Production Readiness

14. **Defensive UI Auditing**
    - Perform a sweep across all components to ensure absolutely no mock data is utilized.
    - Confirm all `map()` functions use fallbacks `|| []` and all object property accesses use optional chaining `?.`.

15. **Performance & Typography Review**
    - Verify that all numerical outputs (scores, standings, IDs) leverage the `tabular-nums` utility class to prevent layout shifting.
    - Ensure styling strictly conforms to the requested subtle border aesthetic and palette limitations.

16. **CI/CD & Deployment**
    - Set up GitHub Actions for TypeScript type-checking and Vite build checks.
    - Configure staging and production environments on Vercel/Netlify.
    - Deploy Supabase schema and Edge Functions to production via Supabase CLI migrations.

---
**End of Journey:** Upon completion of these 16 steps, the Ice Hockey WebApp will be a robust, defensively-programmed, single-source-of-truth application ready for live users.
