import { useEffect, useState } from 'react'
import { fetchTableData } from '@/lib/api'
import { Database } from '@/types/supabase'
import { Table, TableHeader, TableHead, TableBody, TableRow, TableCell } from '@/components/ui/Table'
import { Button } from '@/components/ui/Button'

type Event = Database['public']['Tables']['events']['Row']
type EventRsvp = Database['public']['Tables']['event_rsvps']['Row']
type EventStatusLog = Database['public']['Tables']['event_status_log']['Row']
type PracticeSession = Database['public']['Tables']['practice_sessions']['Row']
type PracticeAttendance = Database['public']['Tables']['practice_attendance']['Row']
type PlayerAvailability = Database['public']['Tables']['player_availability']['Row']

export function Events() {
  const [events, setEvents] = useState<Event[]>([])
  const [rsvps, setRsvps] = useState<EventRsvp[]>([])
  const [statusLogs, setStatusLogs] = useState<EventStatusLog[]>([])
  const [practiceSessions, setPracticeSessions] = useState<PracticeSession[]>([])
  const [practiceAttendance, setPracticeAttendance] = useState<PracticeAttendance[]>([])
  const [playerAvailability, setPlayerAvailability] = useState<PlayerAvailability[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function load() {
      try {
        const [
          eventsData,
          rsvpsData,
          logsData,
          sessionsData,
          attendanceData,
          availabilityData
        ] = await Promise.all([
          fetchTableData('events'),
          fetchTableData('event_rsvps'),
          fetchTableData('event_status_log'),
          fetchTableData('practice_sessions'),
          fetchTableData('practice_attendance'),
          fetchTableData('player_availability')
        ])

        setEvents(eventsData || [])
        setRsvps(rsvpsData || [])
        setStatusLogs(logsData || [])
        setPracticeSessions(sessionsData || [])
        setPracticeAttendance(attendanceData || [])
        setPlayerAvailability(availabilityData || [])
      } catch (err: any) {
        setError(err.message || 'Failed to fetch events data')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Events & Practice Sessions</h1>
        <Button variant="primary">Create Event</Button>
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
          {/* General Events */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Events</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              {events.length === 0 ? (
                <div className="text-sm text-slate-500">No events found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Venue ID</TableHead>
                    <TableHead>Status</TableHead>
                  </TableHeader>
                  <TableBody>
                    {events.map((event) => (
                      <TableRow key={event.id}>
                        <TableCell className="tabular-nums">{event.id}</TableCell>
                        <TableCell className="font-medium text-slate-900">{event.name}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{event.event_date}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{event.venue_id || '-'}</TableCell>
                        <TableCell className="text-slate-500 capitalize">{event.status?.replace('_', ' ') || '-'}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* Event RSVPs */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Event RSVPs</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              {rsvps.length === 0 ? (
                <div className="text-sm text-slate-500">No RSVPs found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Event ID</TableHead>
                    <TableHead>User ID</TableHead>
                    <TableHead>Status</TableHead>
                  </TableHeader>
                  <TableBody>
                    {rsvps.map((rsvp) => (
                      <TableRow key={rsvp.id}>
                        <TableCell className="tabular-nums">{rsvp.id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{rsvp.event_id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{rsvp.user_id}</TableCell>
                        <TableCell className="text-slate-500 capitalize">{rsvp.status?.replace('_', ' ') || '-'}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* Practice Sessions */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Practice Sessions</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              {practiceSessions.length === 0 ? (
                <div className="text-sm text-slate-500">No practice sessions found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Team ID</TableHead>
                    <TableHead>Scheduled Time</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Status</TableHead>
                  </TableHeader>
                  <TableBody>
                    {practiceSessions.map((session) => (
                      <TableRow key={session.id}>
                        <TableCell className="tabular-nums">{session.id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{session.team_id}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{session.scheduled_time}</TableCell>
                        <TableCell className="text-slate-500 capitalize">{session.session_type.replace('_', ' ')}</TableCell>
                        <TableCell className="text-slate-500">{session.is_cancelled ? 'Cancelled' : 'Scheduled'}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* Practice Attendance */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Practice Attendance</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              {practiceAttendance.length === 0 ? (
                <div className="text-sm text-slate-500">No practice attendance records found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Practice ID</TableHead>
                    <TableHead>Player ID</TableHead>
                    <TableHead>Status</TableHead>
                  </TableHeader>
                  <TableBody>
                    {practiceAttendance.map((att) => (
                      <TableRow key={att.id}>
                        <TableCell className="tabular-nums">{att.id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{att.practice_id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{att.player_id}</TableCell>
                        <TableCell className="text-slate-500 capitalize">{att.attendance_status}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* Player Availability */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Player Availability</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              {playerAvailability.length === 0 ? (
                <div className="text-sm text-slate-500">No player availability records found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Player ID</TableHead>
                    <TableHead>Season ID</TableHead>
                    <TableHead>Available</TableHead>
                    <TableHead>Reason</TableHead>
                  </TableHeader>
                  <TableBody>
                    {playerAvailability.map((avail) => (
                      <TableRow key={avail.id}>
                        <TableCell className="tabular-nums">{avail.id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{avail.player_id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{avail.season_id}</TableCell>
                        <TableCell className="text-slate-500">{avail.is_available ? 'Yes' : 'No'}</TableCell>
                        <TableCell className="text-slate-500">{avail.reason || '-'}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* Event Status Log */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Event Status Log</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              {statusLogs.length === 0 ? (
                <div className="text-sm text-slate-500">No event status logs found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Entity ID</TableHead>
                    <TableHead>Old Status</TableHead>
                    <TableHead>New Status</TableHead>
                    <TableHead>Changed At</TableHead>
                  </TableHeader>
                  <TableBody>
                    {statusLogs.map((log) => (
                      <TableRow key={log.id}>
                        <TableCell className="tabular-nums">{log.id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{log.entity_id}</TableCell>
                        <TableCell className="text-slate-500 capitalize">{log.old_status || '-'}</TableCell>
                        <TableCell className="text-slate-500 capitalize">{log.new_status || '-'}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{log.changed_at || '-'}</TableCell>
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
