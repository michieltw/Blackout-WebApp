import { useEffect, useState } from 'react'
import { fetchTableData } from '@/lib/api'
import { Database } from '@/types/supabase'
import { Table, TableHeader, TableHead, TableBody, TableRow, TableCell } from '@/components/ui/Table'

type TeamStat = Database['public']['Tables']['team_season_stats_cache']['Row']


function getGoalDiffColor(gd: number) {
  if (gd > 0) return 'text-emerald-600';
  if (gd < 0) return 'text-amber-600';
  return 'text-slate-600';
}

export function Leaderboards() {
  const [standings, setStandings] = useState<TeamStat[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadStats() {
      const data = await fetchTableData('team_season_stats_cache')
      // Sort by points descending, then wins, then goal differential
      const sortedData = (data || []).sort((a, b) => {
        const pointsDiff = (b.points || 0) - (a.points || 0)
        if (pointsDiff !== 0) return pointsDiff
        const winsDiff = (b.wins || 0) - (a.wins || 0)
        if (winsDiff !== 0) return winsDiff

        const bGD = (b.goals_for || 0) - (b.goals_against || 0)
        const aGD = (a.goals_for || 0) - (a.goals_against || 0)
        return bGD - aGD
      })
      setStandings(sortedData)
      setLoading(false)
    }
    loadStats()
  }, [])

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">League Leaderboards</h1>
      </div>

      <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900 mb-4">Team Standings</h2>
        {loading ? (
          <div className="text-sm text-slate-500">Loading standings...</div>
        ) : standings.length === 0 ? (
          <div className="text-sm text-slate-500">No team stats available yet.</div>
        ) : (
          <Table>
            <TableHeader>
              <TableHead className="w-16">Rank</TableHead>
              <TableHead>Team</TableHead>
              <TableHead className="text-right">GP</TableHead>
              <TableHead className="text-right">W</TableHead>
              <TableHead className="text-right">L</TableHead>
              <TableHead className="text-right">T</TableHead>
              <TableHead className="text-right">GF</TableHead>
              <TableHead className="text-right">GA</TableHead>
              <TableHead className="text-right">GD</TableHead>
              <TableHead className="text-right font-bold">PTS</TableHead>
            </TableHeader>
            <TableBody>
              {(standings || []).map((stat, index) => {
                const gd = (stat?.goals_for || 0) - (stat?.goals_against || 0)
                return (
                  <TableRow key={stat.id}>
                    <TableCell className="font-semibold text-slate-900 tabular-nums">
                      {index + 1}
                    </TableCell>
                    <TableCell className="font-medium text-slate-900">
                      Team {stat?.team_id}
                    </TableCell>
                    <TableCell className="text-right tabular-nums text-slate-600">
                      {stat?.games_played || 0}
                    </TableCell>
                    <TableCell className="text-right tabular-nums text-emerald-600 font-medium">
                      {stat?.wins || 0}
                    </TableCell>
                    <TableCell className="text-right tabular-nums text-slate-600">
                      {stat?.losses || 0}
                    </TableCell>
                    <TableCell className="text-right tabular-nums text-slate-600">
                      {stat?.ties || 0}
                    </TableCell>
                    <TableCell className="text-right tabular-nums text-slate-600">
                      {stat?.goals_for || 0}
                    </TableCell>
                    <TableCell className="text-right tabular-nums text-slate-600">
                      {stat?.goals_against || 0}
                    </TableCell>
                    <TableCell className={`text-right tabular-nums font-medium ${
                      getGoalDiffColor(gd)
                    }`}>
                      {gd > 0 ? `+${gd}` : gd}
                    </TableCell>
                    <TableCell className="text-right tabular-nums font-bold text-slate-900 text-lg">
                      {stat?.points || 0}
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  )
}
