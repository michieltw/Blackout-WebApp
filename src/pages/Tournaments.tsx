import { useEffect, useState } from 'react'
import { fetchTableData } from '@/lib/api'
import { Database } from '@/types/supabase'
import { Table, TableHeader, TableHead, TableBody, TableRow, TableCell } from '@/components/ui/Table'
import { Button } from '@/components/ui/Button'

type Tournament = Database['public']['Tables']['tournaments']['Row']
type TournamentTeam = Database['public']['Tables']['tournament_teams']['Row']
type TournamentBracket = Database['public']['Tables']['tournament_brackets']['Row']

export function Tournaments() {
  const [tournaments, setTournaments] = useState<Tournament[]>([])
  const [tournamentTeams, setTournamentTeams] = useState<TournamentTeam[]>([])
  const [tournamentBrackets, setTournamentBrackets] = useState<TournamentBracket[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function load() {
      try {
        const [
          tournamentsData,
          teamsData,
          bracketsData
        ] = await Promise.all([
          fetchTableData('tournaments'),
          fetchTableData('tournament_teams'),
          fetchTableData('tournament_brackets')
        ])

        setTournaments(tournamentsData || [])
        setTournamentTeams(teamsData || [])
        setTournamentBrackets(bracketsData || [])
      } catch (err: any) {
        setError(err.message || 'Failed to fetch tournament data')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Tournament Management</h1>
        <Button variant="primary">Create Tournament</Button>
      </div>

      {error && (
        <div className="text-sm text-amber-700 bg-amber-50 border border-amber-200 p-3 rounded-md">
          {error}
        </div>
      )}

      {loading ? (
        <div className="text-sm text-slate-500">Loading data...</div>
      ) : (
        <>
          {/* Tournaments */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Tournaments</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              {tournaments.length === 0 ? (
                <div className="text-sm text-slate-500">No tournaments found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Format</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Start Date</TableHead>
                    <TableHead>End Date</TableHead>
                  </TableHeader>
                  <TableBody>
                    {tournaments.map((tournament) => (
                      <TableRow key={tournament.id}>
                        <TableCell className="tabular-nums">{tournament.id}</TableCell>
                        <TableCell className="font-medium text-slate-900">{tournament.name}</TableCell>
                        <TableCell className="text-slate-500 capitalize">{tournament.format.replace('_', ' ')}</TableCell>
                        <TableCell className="text-slate-500 capitalize">{tournament.status?.replace('_', ' ') || '-'}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{tournament.start_date}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{tournament.end_date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* Tournament Teams */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Tournament Teams</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              {tournamentTeams.length === 0 ? (
                <div className="text-sm text-slate-500">No tournament teams found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Tournament ID</TableHead>
                    <TableHead>Team ID</TableHead>
                    <TableHead>Seed</TableHead>
                    <TableHead>Confirmed</TableHead>
                  </TableHeader>
                  <TableBody>
                    {tournamentTeams.map((team) => (
                      <TableRow key={team.id}>
                        <TableCell className="tabular-nums">{team.id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{team.tournament_id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{team.team_id}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{team.seed_position || '-'}</TableCell>
                        <TableCell className="text-slate-500">{team.is_confirmed ? 'Yes' : 'No'}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* Tournament Brackets */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Tournament Brackets</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              {tournamentBrackets.length === 0 ? (
                <div className="text-sm text-slate-500">No tournament brackets found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Tournament ID</TableHead>
                    <TableHead>Round</TableHead>
                    <TableHead>Position</TableHead>
                    <TableHead>Home Team</TableHead>
                    <TableHead>Away Team</TableHead>
                    <TableHead>Winner</TableHead>
                  </TableHeader>
                  <TableBody>
                    {tournamentBrackets.map((bracket) => (
                      <TableRow key={bracket.id}>
                        <TableCell className="tabular-nums">{bracket.id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{bracket.tournament_id}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{bracket.round}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{bracket.bracket_position}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{bracket.home_team_id || '-'}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{bracket.away_team_id || '-'}</TableCell>
                        <TableCell className="font-bold text-emerald-700 tabular-nums">{bracket.winner_team_id || '-'}</TableCell>
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
