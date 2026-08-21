import { useEffect, useState } from 'react'
import { fetchTableData } from '@/lib/api'
import { Database } from '@/types/supabase'
import { Table, TableHeader, TableHead, TableBody, TableRow, TableCell } from '@/components/ui/Table'
import { Button } from '@/components/ui/Button'

type Competition = Database['public']['Tables']['competitions']['Row']
type CompetitionTeam = Database['public']['Tables']['competition_teams']['Row']
type PlayoffBracket = Database['public']['Tables']['playoff_brackets']['Row']
type PlayoffSeeding = Database['public']['Tables']['playoff_seedings']['Row']
type PlayoffRound = Database['public']['Tables']['playoff_rounds']['Row']
type PlayoffSeries = Database['public']['Tables']['playoff_series']['Row']
type PlayoffSeriesGame = Database['public']['Tables']['playoff_series_games']['Row']

export function Playoffs() {
  const [competitions, setCompetitions] = useState<Competition[]>([])
  const [competitionTeams, setCompetitionTeams] = useState<CompetitionTeam[]>([])
  const [playoffBrackets, setPlayoffBrackets] = useState<PlayoffBracket[]>([])
  const [playoffSeedings, setPlayoffSeedings] = useState<PlayoffSeeding[]>([])
  const [playoffRounds, setPlayoffRounds] = useState<PlayoffRound[]>([])
  const [playoffSeries, setPlayoffSeries] = useState<PlayoffSeries[]>([])
  const [playoffSeriesGames, setPlayoffSeriesGames] = useState<PlayoffSeriesGame[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function load() {
      try {
        const [
          compsData,
          compTeamsData,
          bracketsData,
          seedingsData,
          roundsData,
          seriesData,
          seriesGamesData
        ] = await Promise.all([
          fetchTableData('competitions'),
          fetchTableData('competition_teams'),
          fetchTableData('playoff_brackets'),
          fetchTableData('playoff_seedings'),
          fetchTableData('playoff_rounds'),
          fetchTableData('playoff_series'),
          fetchTableData('playoff_series_games')
        ])

        setCompetitions(compsData || [])
        setCompetitionTeams(compTeamsData || [])
        setPlayoffBrackets(bracketsData || [])
        setPlayoffSeedings(seedingsData || [])
        setPlayoffRounds(roundsData || [])
        setPlayoffSeries(seriesData || [])
        setPlayoffSeriesGames(seriesGamesData || [])
      } catch (err: any) {
        setError(err.message || 'Failed to fetch playoff data')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Playoffs & Competitions</h1>
        <Button variant="primary">Manage Playoffs</Button>
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
          {/* Competitions */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Competitions</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              {competitions.length === 0 ? (
                <div className="text-sm text-slate-500">No competitions found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Season ID</TableHead>
                    <TableHead>Start Date</TableHead>
                  </TableHeader>
                  <TableBody>
                    {competitions.map((comp) => (
                      <TableRow key={comp.id}>
                        <TableCell className="tabular-nums">{comp.id}</TableCell>
                        <TableCell className="font-medium text-slate-900">{comp.competition_name}</TableCell>
                        <TableCell className="text-slate-500 capitalize">{comp.competition_type || '-'}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{comp.season_id || '-'}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{comp.start_date || '-'}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* Competition Teams */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Competition Teams</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              {competitionTeams.length === 0 ? (
                <div className="text-sm text-slate-500">No competition teams found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Competition ID</TableHead>
                    <TableHead>Team ID</TableHead>
                    <TableHead>Joined Date</TableHead>
                  </TableHeader>
                  <TableBody>
                    {competitionTeams.map((team) => (
                      <TableRow key={team.id}>
                        <TableCell className="tabular-nums">{team.id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{team.competition_id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{team.team_id}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{team.joined_date || '-'}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* Playoff Brackets */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Playoff Brackets</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              {playoffBrackets.length === 0 ? (
                <div className="text-sm text-slate-500">No playoff brackets found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Season ID</TableHead>
                    <TableHead>Division ID</TableHead>
                    <TableHead>Round</TableHead>
                    <TableHead>Home Team</TableHead>
                    <TableHead>Away Team</TableHead>
                    <TableHead>Winner</TableHead>
                  </TableHeader>
                  <TableBody>
                    {playoffBrackets.map((bracket) => (
                      <TableRow key={bracket.id}>
                        <TableCell className="tabular-nums">{bracket.id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{bracket.season_id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{bracket.division_id}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{bracket.round}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{bracket.home_team_id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{bracket.away_team_id}</TableCell>
                        <TableCell className="font-bold text-emerald-700 tabular-nums">{bracket.winner_team_id || '-'}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* Playoff Seedings */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Playoff Seedings</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              {playoffSeedings.length === 0 ? (
                <div className="text-sm text-slate-500">No playoff seedings found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Team ID</TableHead>
                    <TableHead>Seed Rank</TableHead>
                    <TableHead>Points</TableHead>
                    <TableHead>Seeding Date</TableHead>
                  </TableHeader>
                  <TableBody>
                    {playoffSeedings.map((seed) => (
                      <TableRow key={seed.id}>
                        <TableCell className="tabular-nums">{seed.id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{seed.team_id}</TableCell>
                        <TableCell className="font-bold text-slate-900 tabular-nums">{seed.seed_rank}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{seed.points_at_seeding || '-'}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{seed.seeding_date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* Playoff Rounds */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Playoff Rounds</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              {playoffRounds.length === 0 ? (
                <div className="text-sm text-slate-500">No playoff rounds found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Competition ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Number</TableHead>
                    <TableHead>Format</TableHead>
                  </TableHeader>
                  <TableBody>
                    {playoffRounds.map((round) => (
                      <TableRow key={round.id}>
                        <TableCell className="tabular-nums">{round.id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{round.competition_id}</TableCell>
                        <TableCell className="text-slate-500">{round.round_name}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{round.round_number}</TableCell>
                        <TableCell className="text-slate-500 capitalize">{round.round_format}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* Playoff Series */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Playoff Series</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              {playoffSeries.length === 0 ? (
                <div className="text-sm text-slate-500">No playoff series found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Round ID</TableHead>
                    <TableHead>Team A</TableHead>
                    <TableHead>Team B</TableHead>
                    <TableHead>Wins (A - B)</TableHead>
                    <TableHead>Status</TableHead>
                  </TableHeader>
                  <TableBody>
                    {playoffSeries.map((series) => (
                      <TableRow key={series.id}>
                        <TableCell className="tabular-nums">{series.id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{series.playoff_round_id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{series.team_a_id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{series.team_b_id}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{series.team_a_wins} - {series.team_b_wins}</TableCell>
                        <TableCell className="text-slate-500 capitalize">{series.series_status || '-'}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* Playoff Series Games */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Playoff Series Games</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              {playoffSeriesGames.length === 0 ? (
                <div className="text-sm text-slate-500">No playoff series games found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Series ID</TableHead>
                    <TableHead>Game ID</TableHead>
                    <TableHead>Game Number</TableHead>
                  </TableHeader>
                  <TableBody>
                    {playoffSeriesGames.map((game) => (
                      <TableRow key={game.id}>
                        <TableCell className="tabular-nums">{game.id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{game.playoff_series_id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{game.game_id}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{game.game_number_in_series || '-'}</TableCell>
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
