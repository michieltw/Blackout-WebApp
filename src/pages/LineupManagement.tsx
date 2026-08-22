import { useEffect, useState } from 'react'
import { fetchTableData } from '@/lib/api'
import { Database } from '@/types/supabase'
import { Table, TableHeader, TableHead, TableBody, TableRow, TableCell } from '@/components/ui/Table'
import { Button } from '@/components/ui/Button'

type Lineup = Database['public']['Tables']['lineups']['Row']
type LineupPlayer = Database['public']['Tables']['lineup_players']['Row']
type LineupUnit = Database['public']['Tables']['lineup_units']['Row']
type LineupUnitPlayer = Database['public']['Tables']['lineup_unit_players']['Row']

export function LineupManagement() {
  const [lineups, setLineups] = useState<Lineup[]>([])
  const [lineupPlayers, setLineupPlayers] = useState<LineupPlayer[]>([])
  const [lineupUnits, setLineupUnits] = useState<LineupUnit[]>([])
  const [lineupUnitPlayers, setLineupUnitPlayers] = useState<LineupUnitPlayer[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
        const [
          lineupsData,
          lineupPlayersData,
          lineupUnitsData,
          lineupUnitPlayersData
        ] = await Promise.all([
          fetchTableData('lineups'),
          fetchTableData('lineup_players'),
          fetchTableData('lineup_units'),
          fetchTableData('lineup_unit_players')
        ])

        setLineups(lineupsData || [])
        setLineupPlayers(lineupPlayersData || [])
        setLineupUnits(lineupUnitsData || [])
        setLineupUnitPlayers(lineupUnitPlayersData || [])
        setLoading(false)
    }
    load()
  }, [])

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Lineup Management</h1>
        <Button variant="primary">Manage Lineups</Button>
      </div>


      {loading ? (
        <div className="text-sm text-slate-500">Loading data...</div>
      ) : (
        <>
          {/* Lineups */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Lineups</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              {lineups.length === 0 ? (
                <div className="text-sm text-slate-500">No lineups found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Game ID</TableHead>
                    <TableHead>Team ID</TableHead>
                    <TableHead>Player ID</TableHead>
                    <TableHead>Position</TableHead>
                    <TableHead>Line Number</TableHead>
                  </TableHeader>
                  <TableBody>
                    {lineups.map((lineup) => (
                      <TableRow key={lineup.id}>
                        <TableCell className="tabular-nums">{lineup.id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{lineup.game_id || '-'}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{lineup.team_id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{lineup.player_id}</TableCell>
                        <TableCell className="text-slate-500 capitalize">{lineup.position || '-'}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{lineup.line_number || '-'}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* Lineup Players */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Lineup Players</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              {lineupPlayers.length === 0 ? (
                <div className="text-sm text-slate-500">No lineup players found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Lineup ID</TableHead>
                    <TableHead>Player ID</TableHead>
                    <TableHead>Jersey Number</TableHead>
                    <TableHead>Position</TableHead>
                  </TableHeader>
                  <TableBody>
                    {lineupPlayers.map((lp) => (
                      <TableRow key={lp.id}>
                        <TableCell className="tabular-nums">{lp.id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{lp.lineup_id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{lp.player_id}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{lp.jersey_number || '-'}</TableCell>
                        <TableCell className="text-slate-500 capitalize">{lp.position?.replace('_', ' ') || '-'}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* Lineup Units */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Lineup Units</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              {lineupUnits.length === 0 ? (
                <div className="text-sm text-slate-500">No lineup units found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Lineup ID</TableHead>
                    <TableHead>Unit Type</TableHead>
                    <TableHead>Unit Name</TableHead>
                    <TableHead>Unit Number</TableHead>
                  </TableHeader>
                  <TableBody>
                    {lineupUnits.map((lu) => (
                      <TableRow key={lu.id}>
                        <TableCell className="tabular-nums">{lu.id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{lu.lineup_id}</TableCell>
                        <TableCell className="text-slate-500 capitalize">{lu.unit_type}</TableCell>
                        <TableCell className="text-slate-500">{lu.unit_name || '-'}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{lu.unit_number || '-'}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* Lineup Unit Players */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Lineup Unit Players</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              {lineupUnitPlayers.length === 0 ? (
                <div className="text-sm text-slate-500">No lineup unit players found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Unit ID</TableHead>
                    <TableHead>Player ID</TableHead>
                    <TableHead>Position</TableHead>
                    <TableHead>Line Position</TableHead>
                  </TableHeader>
                  <TableBody>
                    {lineupUnitPlayers.map((lup) => (
                      <TableRow key={lup.id}>
                        <TableCell className="tabular-nums">{lup.id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{lup.lineup_unit_id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{lup.player_id}</TableCell>
                        <TableCell className="text-slate-500 capitalize">{lup.position?.replace('_', ' ') || '-'}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{lup.line_position || '-'}</TableCell>
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
