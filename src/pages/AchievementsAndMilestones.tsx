import { useEffect, useState } from 'react'
import { fetchTableData } from '@/lib/api'
import { Database } from '@/types/supabase'
import { Table, TableHeader, TableHead, TableBody, TableRow, TableCell } from '@/components/ui/Table'
import { Button } from '@/components/ui/Button'

type Achievement = Database['public']['Tables']['achievements']['Row']
type PlayerAchievement = Database['public']['Tables']['player_achievements']['Row']
type Milestone = Database['public']['Tables']['milestones']['Row']
type TeamKPI = Database['public']['Tables']['team_kpis']['Row']
type TeamKPIHistory = Database['public']['Tables']['team_kpi_history']['Row']
type SeasonObjective = Database['public']['Tables']['season_objectives']['Row']

export function AchievementsAndMilestones() {
  const [achievements, setAchievements] = useState<Achievement[]>([])
  const [playerAchievements, setPlayerAchievements] = useState<PlayerAchievement[]>([])
  const [milestones, setMilestones] = useState<Milestone[]>([])
  const [teamKPIs, setTeamKPIs] = useState<TeamKPI[]>([])
  const [_kpiHistory, setKpiHistory] = useState<TeamKPIHistory[]>([])
  const [seasonObjectives, setSeasonObjectives] = useState<SeasonObjective[]>([])

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
        const [
          aData,
          paData,
          mData,
          kData,
          khData,
          soData
        ] = await Promise.all([
          fetchTableData('achievements'),
          fetchTableData('player_achievements'),
          fetchTableData('milestones'),
          fetchTableData('team_kpis'),
          fetchTableData('team_kpi_history'),
          fetchTableData('season_objectives')
        ])

        setAchievements(aData || [])
        setPlayerAchievements(paData || [])
        setMilestones(mData || [])
        setTeamKPIs(kData || [])
        setKpiHistory(khData || [])
        setSeasonObjectives(soData || [])
        setLoading(false)
    }
    load()
  }, [])

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Achievements & Milestones</h1>
        <div className="space-x-2">
          <Button variant="secondary">Configure Achievement</Button>
          <Button variant="primary">Log Milestone</Button>
        </div>
      </div>


      {loading ? (
        <div className="text-sm text-slate-500">Loading data...</div>
      ) : (
        <>
          {/* Achievements Catalog */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Available Achievements</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm overflow-x-auto">
              {achievements.length === 0 ? (
                <div className="text-sm text-slate-500">No achievements configured.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Tier</TableHead>
                    <TableHead>Criteria</TableHead>
                  </TableHeader>
                  <TableBody>
                    {achievements.map((a) => (
                      <TableRow key={a.id}>
                        <TableCell className="tabular-nums">{a.id}</TableCell>
                        <TableCell className="font-medium text-slate-900">{a.name}</TableCell>
                        <TableCell className="text-slate-500 capitalize">{a.category || '-'}</TableCell>
                        <TableCell className="text-slate-500 capitalize">{a.rarity_tier || '-'}</TableCell>
                        <TableCell className="text-slate-500 truncate max-w-xs">{a.criteria || '-'}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* Player Achievements */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Earned Player Achievements</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm overflow-x-auto">
              {playerAchievements.length === 0 ? (
                <div className="text-sm text-slate-500">No achievements earned yet.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Player ID</TableHead>
                    <TableHead>Achievement ID</TableHead>
                    <TableHead>Earned Date</TableHead>
                  </TableHeader>
                  <TableBody>
                    {playerAchievements.map((pa) => (
                      <TableRow key={pa.id}>
                        <TableCell className="tabular-nums">{pa.id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{pa.player_id}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{pa.achievement_id}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{pa.earned_date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* Player Milestones */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Player Milestones</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm overflow-x-auto">
              {milestones.length === 0 ? (
                <div className="text-sm text-slate-500">No milestones found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Player ID</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Value</TableHead>
                    <TableHead>Achieved Date</TableHead>
                  </TableHeader>
                  <TableBody>
                    {milestones.map((m) => (
                      <TableRow key={m.id}>
                        <TableCell className="tabular-nums">{m.id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{m.player_id}</TableCell>
                        <TableCell className="text-slate-500 capitalize">{m.milestone_type?.replace(/_/g, ' ') || '-'}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{m.value || '-'}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{m.achieved_date || '-'}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* Team KPIs */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Team KPIs</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm overflow-x-auto">
              {teamKPIs.length === 0 ? (
                <div className="text-sm text-slate-500">No KPIs found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Team ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Value</TableHead>
                    <TableHead>Target</TableHead>
                  </TableHeader>
                  <TableBody>
                    {teamKPIs.map((kpi) => (
                      <TableRow key={kpi.id}>
                        <TableCell className="tabular-nums">{kpi.id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{kpi.team_id}</TableCell>
                        <TableCell className="font-medium text-slate-900">{kpi.kpi_name}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{kpi.kpi_value || '-'}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{kpi.kpi_target || '-'}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* Season Objectives */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Season Objectives</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm overflow-x-auto">
              {seasonObjectives.length === 0 ? (
                <div className="text-sm text-slate-500">No season objectives found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Team ID</TableHead>
                    <TableHead>Objective</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Priority</TableHead>
                  </TableHeader>
                  <TableBody>
                    {seasonObjectives.map((so) => (
                      <TableRow key={so.id}>
                        <TableCell className="tabular-nums">{so.id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{so.team_id}</TableCell>
                        <TableCell className="font-medium text-slate-900">{so.objective_name}</TableCell>
                        <TableCell className="text-slate-500 capitalize">{so.status || '-'}</TableCell>
                        <TableCell className="text-slate-500 capitalize">{so.priority || '-'}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
