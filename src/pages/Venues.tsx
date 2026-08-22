import { useEffect, useState } from 'react'
import { fetchTableData } from '@/lib/api'
import { Database } from '@/types/supabase'
import { Table, TableHeader, TableHead, TableBody, TableRow, TableCell } from '@/components/ui/Table'
import { Button } from '@/components/ui/Button'

type Venue = Database['public']['Tables']['venues']['Row']
type IceTimeBooking = Database['public']['Tables']['ice_time_bookings']['Row']
type IceTimeAvailability = Database['public']['Tables']['ice_time_availability']['Row']
type GameSchedulingConflict = Database['public']['Tables']['game_scheduling_conflicts']['Row']

export function Venues() {
  const [venues, setVenues] = useState<Venue[]>([])
  const [bookings, setBookings] = useState<IceTimeBooking[]>([])
  const [availability, setAvailability] = useState<IceTimeAvailability[]>([])
  const [conflicts, setConflicts] = useState<GameSchedulingConflict[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
        const [
          venuesData,
          bookingsData,
          availabilityData,
          conflictsData
        ] = await Promise.all([
          fetchTableData('venues'),
          fetchTableData('ice_time_bookings'),
          fetchTableData('ice_time_availability'),
          fetchTableData('game_scheduling_conflicts')
        ])

        setVenues(venuesData || [])
        setBookings(bookingsData || [])
        setAvailability(availabilityData || [])
        setConflicts(conflictsData || [])
        setLoading(false)
    }
    load()
  }, [])

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Venues & Ice Time</h1>
        <Button variant="primary">Manage Venues</Button>
      </div>


      {loading ? (
        <div className="text-sm text-slate-500">Loading data...</div>
      ) : (
        <>
          {/* Venues */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Venues</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              {venues.length === 0 ? (
                <div className="text-sm text-slate-500">No venues found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Organization ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>City</TableHead>
                    <TableHead>Capacity</TableHead>
                  </TableHeader>
                  <TableBody>
                    {venues.map((venue) => (
                      <TableRow key={venue.id}>
                        <TableCell className="tabular-nums">{venue.id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{venue.organization_id}</TableCell>
                        <TableCell className="font-medium text-slate-900">{venue.name}</TableCell>
                        <TableCell className="text-slate-500">{venue.city || '-'}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{venue.capacity || '-'}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* Ice Time Bookings */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Ice Time Bookings</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              {bookings.length === 0 ? (
                <div className="text-sm text-slate-500">No ice time bookings found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Venue ID</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Start Time</TableHead>
                    <TableHead>End Time</TableHead>
                    <TableHead>Type</TableHead>
                  </TableHeader>
                  <TableBody>
                    {bookings.map((booking) => (
                      <TableRow key={booking.id}>
                        <TableCell className="tabular-nums">{booking.id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{booking.venue_id}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{booking.booking_date}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{booking.start_time}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{booking.end_time}</TableCell>
                        <TableCell className="text-slate-500 capitalize">{booking.booking_type}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* Ice Time Availability */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Ice Time Availability</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              {availability.length === 0 ? (
                <div className="text-sm text-slate-500">No ice time availability records found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Venue ID</TableHead>
                    <TableHead>Day of Week</TableHead>
                    <TableHead>Start Time</TableHead>
                    <TableHead>End Time</TableHead>
                    <TableHead>Available</TableHead>
                  </TableHeader>
                  <TableBody>
                    {availability.map((avail) => (
                      <TableRow key={avail.id}>
                        <TableCell className="tabular-nums">{avail.id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{avail.venue_id}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{avail.day_of_week}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{avail.start_time}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{avail.end_time}</TableCell>
                        <TableCell className="text-slate-500">{avail.is_available ? 'Yes' : 'No'}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* Game Scheduling Conflicts */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Game Scheduling Conflicts</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              {conflicts.length === 0 ? (
                <div className="text-sm text-slate-500">No scheduling conflicts found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Game ID</TableHead>
                    <TableHead>Conflict Type</TableHead>
                    <TableHead>Severity</TableHead>
                    <TableHead>Resolved</TableHead>
                  </TableHeader>
                  <TableBody>
                    {conflicts.map((conflict) => (
                      <TableRow key={conflict.id}>
                        <TableCell className="tabular-nums">{conflict.id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{conflict.game_id}</TableCell>
                        <TableCell className="text-slate-500 capitalize">{conflict.conflict_type}</TableCell>
                        <TableCell className="text-slate-500 capitalize">{conflict.severity || '-'}</TableCell>
                        <TableCell className="text-slate-500">{conflict.is_resolved ? 'Yes' : 'No'}</TableCell>
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
