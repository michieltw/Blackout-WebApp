import re

with open('HANDOVER.md', 'r') as f:
    content = f.read()

# Update Completed section
new_completed = """*   Implemented **Phase 16: Extended Competitions & Game Mechanics** from `DEVELOPER_ROADMAP_PART3.md`.
*   Updated `src/pages/Playoffs.tsx` to include `brackets`, `bracket_teams`, and `bracket_matches`.
*   Updated `src/pages/DeepStatistics.tsx` to include `team_goals`, `standings`, and `rivalry_stats`.
*   Implemented **Phase 17: Social, Media & Engagement** from `DEVELOPER_ROADMAP_PART3.md`.
*   Updated `src/pages/SocialFeed.tsx` to include `social_media_posts`, `media`, `groups`, and `group_members`.
*   Updated `src/pages/FanBase.tsx` to include `memberships` and `fan_club_members`.
*   Implemented **Phase 18: Advanced Commerce, Niche Features, & Admin** from `DEVELOPER_ROADMAP_PART3.md`.
*   Updated `src/pages/Sponsorships.tsx` to include `sponsorship_deliverables`, `sponsorship_payments`, and `ad_placements`.
*   Updated `src/pages/RulesAndDiscipline.tsx` to include `incident_investigation` and `appeal_workflow_steps`.
*   Updated `src/pages/SystemAdmin.tsx` to include `schema_tables`."""

content = content.replace("## Completed", f"## Completed\n{new_completed}")

# Update To Do section
# Remove Phase 16
content = re.sub(r'\*   \*\*Phase 16.*?\n(.*?)\n\*   \*\*Phase 17', '*   **Phase 17', content, flags=re.DOTALL)

# Update Phase 17
content = content.replace("Social Hub & Media (`social_media_posts`, `media`, `announcement_audience`).", "Social Hub & Media (`announcement_audience`).")
content = content.replace("Group dynamics (`groups`, `group_members`).\n", "")
content = content.replace("Memberships & Fan Engagement (`memberships`, `membership_lookup`, `membership_history`, `member_status_log`, `membership_benefits`, `membership_fees`, `fan_club_members`).", "Memberships & Fan Engagement (`membership_lookup`, `membership_history`, `member_status_log`, `membership_benefits`, `membership_fees`).")

# Update Phase 18
content = content.replace("Commerce & Sponsorships (`sponsorship_deliverables`, `sponsorship_payments`, `ad_placements`).\n", "")
content = content.replace("Discipline & Appeals workflow (`incident_investigation`, `appeal_workflow_steps`).\n", "")
content = content.replace("    *   System Architecture Admin (`schema_tables`).\n", "")


with open('HANDOVER.md', 'w') as f:
    f.write(content)
