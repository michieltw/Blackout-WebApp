import { useEffect, useState } from 'react'
import { fetchTableData } from '@/lib/api'
import { Database } from '@/types/supabase'
import { Table, TableHeader, TableHead, TableBody, TableRow, TableCell } from '@/components/ui/Table'
import { Button } from '@/components/ui/Button'

type Game = Database['public']['Tables']['games']['Row']

export function Schedule() {
  const [games, setGames] = useState<Game[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
        const data = await fetchTableData('games')
        // Sort by scheduled time descending for better display
        const sortedData = (data || []).sort((a, b) =>
          new Date(b.scheduled_time).getTime() - new Date(a.scheduled_time).getTime()
        )
        setGames(sortedData)
        setLoading(false)
    }
    load()
  }, [])

  const formatDateTime = (dateString: string) => {
    try {
      const date = new Date(dateString)
      return new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit'
      }).format(date)
    } catch {
      return dateString
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Game Schedule</h1>
        <Button variant="primary">Schedule Game</Button>
      </div>

      <div className="grid gap-6">
        <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
          {loading ? (
            <div className="text-sm text-slate-500">Loading data...</div>
          ) : games.length === 0 ? (
            <div className="text-sm text-slate-500">No games scheduled. Database might be empty.</div>
          ) : (
            <Table>
              <TableHeader>
                <TableHead>Game ID</TableHead>
                <TableHead>Date & Time</TableHead>
                <TableHead>Matchup</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Status</TableHead>
              </TableHeader>
              <TableBody>
                {(games || []).map((game) => (
                  <TableRow key={game.id}>
                    <TableCell>{game.id}</TableCell>
                    <TableCell className="text-slate-600">
                      {game?.scheduled_time ? formatDateTime(game.scheduled_time) : '-'}
                    </TableCell>
                    <TableCell className="font-medium text-slate-900">
                      Team {game?.home_team_id} vs Team {game?.away_team_id}
                    </TableCell>
                    <TableCell className="font-semibold text-slate-700">
                      {game?.home_goals !== null && game?.away_goals !== null
                        ? `${game.home_goals} - ${game.away_goals}`
                        : 'TBD'
                      }
                    </TableCell>
                    <TableCell>
                      {game?.status?.toLowerCase() === 'completed' ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">
                          {game?.status}
                        </span>
                      ) : game?.status?.toLowerCase() === 'scheduled' ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                          {game?.status}
                        </span>
                      ) : game?.status?.toLowerCase() === 'in_progress' ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200">
                          In Progress
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-50 text-slate-500 border border-slate-200">
                          {game?.status || 'Unknown'}
                        </span>
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
  )
}
