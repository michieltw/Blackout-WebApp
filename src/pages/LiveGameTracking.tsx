import { useEffect, useState } from 'react'
import { fetchTableData, insertTableData } from '@/lib/api'
import { Database } from '@/types/supabase'
import { Button } from '@/components/ui/Button'

type Game = Database['public']['Tables']['games']['Row']
type GameEvent = Database['public']['Tables']['game_events']['Row']


function getEventStyle(eventType: string | undefined | null) {
  if (eventType === 'goal') return 'bg-emerald-50 text-emerald-700 border-emerald-200';
  if (eventType === 'penalty') return 'bg-amber-50 text-amber-700 border-amber-200';
  return 'bg-slate-50 text-slate-700 border-slate-200';
}

export function LiveGameTracking() {
  const [games, setGames] = useState<Game[]>([])
  const [selectedGameId, setSelectedGameId] = useState<number | null>(null)
  const [events, setEvents] = useState<GameEvent[]>([])
  const [loading, setLoading] = useState(true)

  // Form State
  const [eventType, setEventType] = useState('goal')
  const [teamId, setTeamId] = useState('')
  const [period, setPeriod] = useState('1')
  const [timeInPeriod, setTimeInPeriod] = useState('12:00')

  useEffect(() => {
    async function loadGames() {
      const data = await fetchTableData('games')
      // Only show scheduled or in_progress games for tracking
      const activeGames = (data || []).filter(g =>
        g.status === 'scheduled' || g.status === 'in_progress'
      )
      setGames(activeGames)
      setLoading(false)
    }
    loadGames()
  }, [])

  useEffect(() => {
    async function loadEvents() {
      if (!selectedGameId) {
        setEvents([])
        return
      }
      const data = await fetchTableData('game_events', { game_id: selectedGameId })
      const sorted = (data || []).sort((a, b) => b.id - a.id) // Newest first
      setEvents(sorted)
    }
    loadEvents()
  }, [selectedGameId])

  const handleLogEvent = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedGameId || !teamId) return

    const newEvent = {
      game_id: selectedGameId,
      team_id: parseInt(teamId),
      event_type: eventType,
      period: parseInt(period),
      time_in_period: timeInPeriod,
    }

    const result = await insertTableData('game_events', newEvent)
    if (result && result.length > 0) {
      // Refresh events
      const data = await fetchTableData('game_events', { game_id: selectedGameId })
      const sorted = (data || []).sort((a, b) => b.id - a.id)
      setEvents(sorted)
    }
  }

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Live Game Tracking</h1>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">Select Game</h2>
            {loading ? (
              <div className="text-sm text-slate-500">Loading games...</div>
            ) : games.length === 0 ? (
              <div className="text-sm text-slate-500">No active games found.</div>
            ) : (
              <div className="space-y-2">
                {(games || []).map(game => (
                  <button
                    key={game.id}
                    onClick={() => setSelectedGameId(game.id)}
                    className={`w-full text-left p-3 rounded-md border text-sm transition-colors ${
                      selectedGameId === game.id
                        ? 'bg-emerald-50 border-emerald-200 text-emerald-900 font-medium'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="tabular-nums">Game #{game.id}</span>
                      <span className={`text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full ${
                        game.status === 'in_progress' ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {game.status?.replace('_', ' ')}
                      </span>
                    </div>
                    <div>Team {game.home_team_id} vs Team {game.away_team_id}</div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="md:col-span-2 space-y-6">
          {!selectedGameId ? (
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-12 text-center text-slate-500">
              Select a game from the left to start tracking events.
            </div>
          ) : (
            <>
              <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
                <h2 className="text-lg font-semibold text-slate-900 mb-4">Log Event</h2>
                <form onSubmit={handleLogEvent} className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block text-sm font-medium text-slate-700 mb-1">Event Type</label>
                    <select
                      value={eventType}
                      onChange={(e) => setEventType(e.target.value)}
                      className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    >
                      <option value="goal">Goal</option>
                      <option value="penalty">Penalty</option>
                      <option value="shot">Shot</option>
                      <option value="hit">Hit</option>
                      <option value="period_start">Period Start</option>
                      <option value="period_end">Period End</option>
                    </select>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block text-sm font-medium text-slate-700 mb-1">Team ID</label>
                    <input
                      type="number"
                      required
                      value={teamId}
                      onChange={(e) => setTeamId(e.target.value)}
                      placeholder="e.g. 1"
                      className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 tabular-nums focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  <div className="col-span-1">
                    <label className="block text-sm font-medium text-slate-700 mb-1">Period</label>
                    <input
                      type="number"
                      min="1"
                      value={period}
                      onChange={(e) => setPeriod(e.target.value)}
                      className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 tabular-nums focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  <div className="col-span-1">
                    <label className="block text-sm font-medium text-slate-700 mb-1">Time (MM:SS)</label>
                    <input
                      type="text"
                      value={timeInPeriod}
                      onChange={(e) => setTimeInPeriod(e.target.value)}
                      placeholder="12:00"
                      className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 tabular-nums focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  <div className="col-span-2 pt-2">
                    <Button type="submit" variant="primary" className="w-full">
                      Log Event
                    </Button>
                  </div>
                </form>
              </div>

              <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
                <h2 className="text-lg font-semibold text-slate-900 mb-4">Play-by-Play</h2>
                {events.length === 0 ? (
                  <div className="text-sm text-slate-500 text-center py-4">No events logged yet.</div>
                ) : (
                  <div className="space-y-3">
                    {(events || []).map(event => (
                      <div key={event.id} className="flex items-center gap-4 p-3 rounded-md bg-slate-50 border border-slate-200">
                        <div className="shrink-0 w-12 text-center">
                          <div className="text-xs font-semibold text-slate-500">P{event?.period}</div>
                          <div className="text-sm font-medium text-slate-900 tabular-nums">{event?.time_in_period}</div>
                        </div>
                        <div className="shrink-0">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                            getEventStyle(event?.event_type)
                          }`}>
                            {event?.event_type?.toUpperCase()}
                          </span>
                        </div>
                        <div className="flex-1 text-sm text-slate-700">
                          Team {event?.team_id}
                          {event?.player_id ? ` (Player ${event.player_id})` : ''}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
