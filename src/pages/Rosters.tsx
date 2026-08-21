import { useEffect, useState } from 'react'
import { fetchTableData } from '@/lib/api'
import { Database } from '@/types/supabase'
import { Table, TableHeader, TableHead, TableBody, TableRow, TableCell } from '@/components/ui/Table'
import { Button } from '@/components/ui/Button'

type RosterPlayer = Database['public']['Tables']['rosters']['Row']
type RosterPlayerDetailed = Database['public']['Tables']['roster_players']['Row']
type TeamSeasonRoster = Database['public']['Tables']['team_season_rosters']['Row']
type TeamManager = Database['public']['Tables']['team_managers']['Row']

export function Rosters() {
  const [rosters, setRosters] = useState<RosterPlayer[]>([])
  const [rosterPlayersDetailed, setRosterPlayersDetailed] = useState<RosterPlayerDetailed[]>([])
  const [teamSeasonRosters, setTeamSeasonRosters] = useState<TeamSeasonRoster[]>([])
  const [teamManagers, setTeamManagers] = useState<TeamManager[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function load() {
      try {
        const [
          rostersData,
          rosterPlayersDetailedData,
          teamSeasonRostersData,
          teamManagersData
        ] = await Promise.all([
          fetchTableData('rosters'),
          fetchTableData('roster_players'),
          fetchTableData('team_season_rosters'),
          fetchTableData('team_managers')
        ])
        setRosters(rostersData || [])
        setRosterPlayersDetailed(rosterPlayersDetailedData || [])
        setTeamSeasonRosters(teamSeasonRostersData || [])
        setTeamManagers(teamManagersData || [])
      } catch (err: any) {
        setError(err.message || 'Failed to fetch rosters')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Roster Management</h1>
        <Button variant="primary">Add to Roster</Button>
      </div>

      <div className="grid gap-6">
        <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
          {error && (
            <div className="mb-4 text-sm text-amber-700 bg-amber-50 border border-amber-200 p-3 rounded-md">
              {error}
            </div>
          )}
          {loading ? (
            <div className="text-sm text-slate-500">Loading data...</div>
          ) : rosters.length === 0 ? (
            <div className="text-sm text-slate-500">No roster entries found. Database might be empty.</div>
          ) : (
            <Table>
              <TableHeader>
                <TableHead>ID</TableHead>
                <TableHead>Photo</TableHead>
                <TableHead>Player Name</TableHead>
                <TableHead>Number</TableHead>
                <TableHead>Leadership</TableHead>
                <TableHead>Status</TableHead>
              </TableHeader>
              <TableBody>
                {(rosters || []).map((player) => (
                  <TableRow key={player.id}>
                    <TableCell>{player.id}</TableCell>
                    <TableCell>
                      {player?.photo_url ? (
                        <img
                          src={player.photo_url}
                          alt={`${player?.name || 'Player'} photo`}
                          className="h-8 w-8 object-cover rounded-full border border-slate-200"
                        />
                      ) : (
                        <div className="h-8 w-8 bg-slate-100 rounded-full flex items-center justify-center text-xs text-slate-400 border border-slate-200">
                          ?
                        </div>
                      )}
                    </TableCell>
                    <TableCell className="font-medium text-slate-900">{player?.name || 'Unknown Player'}</TableCell>
                    <TableCell className="text-slate-500">{player?.jersey_number !== null ? `#${player.jersey_number}` : '-'}</TableCell>
                    <TableCell>
                      {player?.is_captain ? (
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-slate-800 text-slate-100">C</span>
                      ) : player?.is_alternate_captain ? (
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-slate-600 text-slate-100">A</span>
                      ) : (
                        <span className="text-slate-400">-</span>
                      )}
                    </TableCell>
                    <TableCell>
                      {player?.status?.toLowerCase() === 'active' ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                          {player?.status}
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200">
                          {player?.status || 'Unknown'}
                        </span>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </div>
          {/* Team Managers */}
          <div className="grid gap-4 mt-8">
            <h2 className="text-lg font-semibold text-slate-800">Team Managers</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              {teamManagers.length === 0 ? (
                <div className="text-sm text-slate-500">No team managers found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Team ID</TableHead>
                    <TableHead>User ID</TableHead>
                    <TableHead>Role</TableHead>
                  </TableHeader>
                  <TableBody>
                    {(teamManagers || []).map((manager) => (
                      <TableRow key={manager.id}>
                        <TableCell className="tabular-nums">{manager.id}</TableCell>
                        <TableCell className="tabular-nums">{manager.team_id}</TableCell>
                        <TableCell className="tabular-nums">{manager.user_id}</TableCell>
                        <TableCell className="capitalize text-slate-600">{manager.role || '-'}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* Team Season Rosters */}
          <div className="grid gap-4 mt-8">
            <h2 className="text-lg font-semibold text-slate-800">Team Season Rosters</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              {teamSeasonRosters.length === 0 ? (
                <div className="text-sm text-slate-500">No season rosters found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Team ID</TableHead>
                    <TableHead>Season ID</TableHead>
                    <TableHead>Player Count</TableHead>
                    <TableHead>Status</TableHead>
                  </TableHeader>
                  <TableBody>
                    {(teamSeasonRosters || []).map((sr) => (
                      <TableRow key={sr.id}>
                        <TableCell className="tabular-nums">{sr.id}</TableCell>
                        <TableCell className="tabular-nums">{sr.team_id}</TableCell>
                        <TableCell className="tabular-nums">{sr.season_id}</TableCell>
                        <TableCell className="tabular-nums">{sr.player_count || '-'}</TableCell>
                        <TableCell className="capitalize text-slate-600">{sr.roster_status || '-'}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* Detailed Roster Players */}
          <div className="grid gap-4 mt-8">
            <h2 className="text-lg font-semibold text-slate-800">Roster Players (Detailed)</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              {rosterPlayersDetailed.length === 0 ? (
                <div className="text-sm text-slate-500">No detailed roster players found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Roster ID</TableHead>
                    <TableHead>Player ID</TableHead>
                    <TableHead>Jersey #</TableHead>
                    <TableHead>Position</TableHead>
                    <TableHead>Active</TableHead>
                  </TableHeader>
                  <TableBody>
                    {(rosterPlayersDetailed || []).map((rp) => (
                      <TableRow key={rp.id}>
                        <TableCell className="tabular-nums">{rp.id}</TableCell>
                        <TableCell className="tabular-nums">{rp.roster_id}</TableCell>
                        <TableCell className="tabular-nums">{rp.player_id}</TableCell>
                        <TableCell className="tabular-nums">{rp.jersey_number || '-'}</TableCell>
                        <TableCell className="text-slate-600">{rp.position}</TableCell>
                        <TableCell>
                          {rp.is_active ? (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">Yes</span>
                          ) : (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">No</span>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>
      </div>
    </div>
  )
}
