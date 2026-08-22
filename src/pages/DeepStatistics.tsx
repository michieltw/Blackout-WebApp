import { useEffect, useState } from 'react'
import { fetchTableData } from '@/lib/api'
import { Database } from '@/types/supabase'
import { Table, TableHeader, TableHead, TableBody, TableRow, TableCell } from '@/components/ui/Table'
import { Button } from '@/components/ui/Button'

type PlayerStats = Database['public']['Tables']['player_statistics']['Row']
type TeamStats = Database['public']['Tables']['team_statistics']['Row']
type GoalieStats = Database['public']['Tables']['goalie_statistics']['Row']
type TeamAdvancedStats = Database['public']['Tables']['team_advanced_stats']['Row']
type TeamStandings = Database['public']['Tables']['team_standings']['Row']
type TeamVersusRecord = Database['public']['Tables']['team_versus_team_records']['Row']
type TeamRivalry = Database['public']['Tables']['team_rivalries']['Row']

type Standings = Database['public']['Tables']['standings']['Row']
type TeamGoal = Database['public']['Tables']['team_goals']['Row']
type RivalryStat = Database['public']['Tables']['rivalry_stats']['Row']

export function DeepStatistics() {
  const [playerStats, setPlayerStats] = useState<PlayerStats[]>([])
  const [teamStats, setTeamStats] = useState<TeamStats[]>([])
  const [goalieStats, setGoalieStats] = useState<GoalieStats[]>([])
  const [advancedStats, setAdvancedStats] = useState<TeamAdvancedStats[]>([])
  const [teamStandings, setTeamStandings] = useState<TeamStandings[]>([])
  const [_versusRecords, setVersusRecords] = useState<TeamVersusRecord[]>([])
  const [_rivalries, setRivalries] = useState<TeamRivalry[]>([])

  const [standings, setStandings] = useState<Standings[]>([])
  const [teamGoals, setTeamGoals] = useState<TeamGoal[]>([])
  const [rivalryStats, setRivalryStats] = useState<RivalryStat[]>([])

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
        const [
          psData, tsData, gsData,
          asData, stdData, vrData, rvData,
          standingsData, tgData, rsData
        ] = await Promise.all([
          fetchTableData('player_statistics'),
          fetchTableData('team_statistics'),
          fetchTableData('goalie_statistics'),
          fetchTableData('team_advanced_stats'),
          fetchTableData('team_standings'),
          fetchTableData('team_versus_team_records'),
          fetchTableData('team_rivalries'),
          fetchTableData('standings'),
          fetchTableData('team_goals'),
          fetchTableData('rivalry_stats')
        ])

        setPlayerStats(psData || [])
        setTeamStats(tsData || [])
        setGoalieStats(gsData || [])
        setAdvancedStats(asData || [])
        setTeamStandings(stdData || [])
        setVersusRecords(vrData || [])
        setRivalries(rvData || [])
        setStandings(standingsData || [])
        setTeamGoals(tgData || [])
        setRivalryStats(rsData || [])
        setLoading(false)
    }
    load()
  }, [])

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Deep Statistics</h1>
        <div className="space-x-2">
          <Button variant="secondary">Export Report</Button>
          <Button variant="primary">Refresh Data</Button>
        </div>
      </div>


      {loading ? (
        <div className="text-sm text-slate-500">Loading data...</div>
      ) : (
        <>
          {/* Team Standings */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Team Standings</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              {teamStandings.length === 0 ? (
                <div className="text-sm text-slate-500">No standings data found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>Rank</TableHead>
                    <TableHead>Team ID</TableHead>
                    <TableHead>Season ID</TableHead>
                    <TableHead>GP</TableHead>
                    <TableHead>W</TableHead>
                    <TableHead>L</TableHead>
                    <TableHead>PTS</TableHead>
                  </TableHeader>
                  <TableBody>
                    {teamStandings.map((std) => (
                      <TableRow key={std.id}>
                        <TableCell className="tabular-nums font-bold">{std.rank || '-'}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{std.team_id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{std.season_id}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{std.games_played || 0}</TableCell>
                        <TableCell className="text-emerald-600 tabular-nums">{std.wins || 0}</TableCell>
                        <TableCell className="text-rose-600 tabular-nums">{std.losses || 0}</TableCell>
                        <TableCell className="text-slate-900 font-bold tabular-nums">{std.points || 0}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* Team Statistics */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Team Statistics</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              {teamStats.length === 0 ? (
                <div className="text-sm text-slate-500">No team statistics found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Team ID</TableHead>
                    <TableHead>Goals For</TableHead>
                    <TableHead>Goals Against</TableHead>
                    <TableHead>PPG</TableHead>
                  </TableHeader>
                  <TableBody>
                    {teamStats.map((ts) => (
                      <TableRow key={ts.id}>
                        <TableCell className="tabular-nums">{ts.id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{ts.team_id}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{ts.goals_for || 0}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{ts.goals_against || 0}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{ts.power_play_goals || 0}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* Player Statistics */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Skater Statistics</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm overflow-x-auto">
              {playerStats.length === 0 ? (
                <div className="text-sm text-slate-500">No player statistics found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Player ID</TableHead>
                    <TableHead>Team ID</TableHead>
                    <TableHead>GP</TableHead>
                    <TableHead>G</TableHead>
                    <TableHead>A</TableHead>
                    <TableHead>PTS</TableHead>
                    <TableHead>+/-</TableHead>
                  </TableHeader>
                  <TableBody>
                    {playerStats.map((ps) => (
                      <TableRow key={ps.id}>
                        <TableCell className="tabular-nums">{ps.id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{ps.player_id}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{ps.team_id}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{ps.games_played || 0}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{ps.goals || 0}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{ps.assists || 0}</TableCell>
                        <TableCell className="font-bold text-slate-900 tabular-nums">{ps.points || 0}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{ps.plus_minus || 0}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* Goalie Statistics */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Goalie Statistics</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm overflow-x-auto">
              {goalieStats.length === 0 ? (
                <div className="text-sm text-slate-500">No goalie statistics found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Player ID</TableHead>
                    <TableHead>GP</TableHead>
                    <TableHead>W</TableHead>
                    <TableHead>L</TableHead>
                    <TableHead>GAA</TableHead>
                    <TableHead>SV%</TableHead>
                    <TableHead>SO</TableHead>
                  </TableHeader>
                  <TableBody>
                    {goalieStats.map((gs) => (
                      <TableRow key={gs.id}>
                        <TableCell className="tabular-nums">{gs.id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{gs.player_id}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{gs.games_played || 0}</TableCell>
                        <TableCell className="text-emerald-600 tabular-nums">{gs.wins || 0}</TableCell>
                        <TableCell className="text-rose-600 tabular-nums">{gs.losses || 0}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{gs.goals_against_average?.toFixed(2) || '0.00'}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{gs.save_percentage?.toFixed(3) || '.000'}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{gs.shutouts || 0}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* Team Advanced Stats */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Team Advanced Stats</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              {advancedStats.length === 0 ? (
                <div className="text-sm text-slate-500">No advanced stats found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>Team ID</TableHead>
                    <TableHead>PP%</TableHead>
                    <TableHead>PK%</TableHead>
                    <TableHead>Corsi For %</TableHead>
                  </TableHeader>
                  <TableBody>
                    {advancedStats.map((as) => (
                      <TableRow key={as.id}>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{as.team_id}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{as.power_play_percentage?.toFixed(1) || '-'}%</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{as.penalty_kill_percentage?.toFixed(1) || '-'}%</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{as.corsi_for_percentage?.toFixed(1) || '-'}%</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* Standings (Legacy/Base) */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Standings (Base)</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm overflow-x-auto">
              {standings.length === 0 ? (
                <div className="text-sm text-slate-500">No standings data found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>Division ID</TableHead>
                    <TableHead>Team ID</TableHead>
                    <TableHead>GP</TableHead>
                    <TableHead>W</TableHead>
                    <TableHead>L</TableHead>
                    <TableHead>T</TableHead>
                    <TableHead>PTS</TableHead>
                    <TableHead>GF</TableHead>
                    <TableHead>GA</TableHead>
                  </TableHeader>
                  <TableBody>
                    {standings.map((std) => (
                      <TableRow key={std.id}>
                        <TableCell className="tabular-nums text-slate-500">{std.division_id}</TableCell>
                        <TableCell className="tabular-nums font-medium text-slate-900">{std.team_id}</TableCell>
                        <TableCell className="tabular-nums text-slate-500">{std.games_played || 0}</TableCell>
                        <TableCell className="tabular-nums text-emerald-600">{std.wins || 0}</TableCell>
                        <TableCell className="tabular-nums text-rose-600">{std.losses || 0}</TableCell>
                        <TableCell className="tabular-nums text-slate-500">{std.ties || 0}</TableCell>
                        <TableCell className="tabular-nums font-bold text-slate-900">{std.points || 0}</TableCell>
                        <TableCell className="tabular-nums text-slate-500">{std.goals_for || 0}</TableCell>
                        <TableCell className="tabular-nums text-slate-500">{std.goals_against || 0}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* Team Goals */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Team Goals</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm overflow-x-auto">
              {teamGoals.length === 0 ? (
                <div className="text-sm text-slate-500">No team goals found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>Team ID</TableHead>
                    <TableHead>Season ID</TableHead>
                    <TableHead>Goal Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Target</TableHead>
                    <TableHead>Current</TableHead>
                    <TableHead>Progress</TableHead>
                    <TableHead>Status</TableHead>
                  </TableHeader>
                  <TableBody>
                    {teamGoals.map((tg) => (
                      <TableRow key={tg.id}>
                        <TableCell className="tabular-nums text-slate-500">{tg.team_id}</TableCell>
                        <TableCell className="tabular-nums text-slate-500">{tg.season_id}</TableCell>
                        <TableCell className="font-medium text-slate-900">{tg.goal_name}</TableCell>
                        <TableCell className="capitalize text-slate-500">{tg.goal_type}</TableCell>
                        <TableCell className="tabular-nums text-slate-500">{tg.target_value}</TableCell>
                        <TableCell className="tabular-nums text-slate-500">{tg.current_value}</TableCell>
                        <TableCell className="tabular-nums text-slate-500">{tg.progress_percentage}%</TableCell>
                        <TableCell className="capitalize text-slate-500">{tg.status}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* Rivalry Stats */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Rivalry Stats</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm overflow-x-auto">
              {rivalryStats.length === 0 ? (
                <div className="text-sm text-slate-500">No rivalry stats found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>Rivalry ID</TableHead>
                    <TableHead>Season ID</TableHead>
                    <TableHead>GP</TableHead>
                    <TableHead>Team A Wins</TableHead>
                    <TableHead>Team B Wins</TableHead>
                    <TableHead>Ties</TableHead>
                    <TableHead>Team A GF</TableHead>
                    <TableHead>Team B GF</TableHead>
                    <TableHead>Last Meeting</TableHead>
                  </TableHeader>
                  <TableBody>
                    {rivalryStats.map((rs) => (
                      <TableRow key={rs.id}>
                        <TableCell className="tabular-nums text-slate-500">{rs.team_rivalry_id}</TableCell>
                        <TableCell className="tabular-nums text-slate-500">{rs.season_id}</TableCell>
                        <TableCell className="tabular-nums text-slate-500">{rs.games_played}</TableCell>
                        <TableCell className="tabular-nums text-emerald-600">{rs.team_a_wins}</TableCell>
                        <TableCell className="tabular-nums text-emerald-600">{rs.team_b_wins}</TableCell>
                        <TableCell className="tabular-nums text-slate-500">{rs.ties}</TableCell>
                        <TableCell className="tabular-nums text-slate-500">{rs.team_a_goals}</TableCell>
                        <TableCell className="tabular-nums text-slate-500">{rs.team_b_goals}</TableCell>
                        <TableCell className="tabular-nums text-slate-500">{rs.last_meeting_date || '-'}</TableCell>
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
