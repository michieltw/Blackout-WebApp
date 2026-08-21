import { useEffect, useState } from 'react'
import { fetchTableData } from '@/lib/api'
import { Database } from '@/types/supabase'
import { Table, TableHeader, TableHead, TableBody, TableRow, TableCell } from '@/components/ui/Table'
import { Button } from '@/components/ui/Button'

type Official = Database['public']['Tables']['officials']['Row']
type GameOfficial = Database['public']['Tables']['game_officials']['Row']
type OfficialAssignment = Database['public']['Tables']['official_assignments']['Row']
type OfficialRating = Database['public']['Tables']['official_ratings']['Row']

export function Officiating() {
  const [officials, setOfficials] = useState<Official[]>([])
  const [gameOfficials, setGameOfficials] = useState<GameOfficial[]>([])
  const [assignments, setAssignments] = useState<OfficialAssignment[]>([])
  const [ratings, setRatings] = useState<OfficialRating[]>([])

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function load() {
      try {
        const [oData, goData, aData, rData] = await Promise.all([
          fetchTableData('officials'),
          fetchTableData('game_officials'),
          fetchTableData('official_assignments'),
          fetchTableData('official_ratings')
        ])

        setOfficials(oData || [])
        setGameOfficials(goData || [])
        setAssignments(aData || [])
        setRatings(rData || [])
      } catch (err: any) {
        setError(err.message || 'Failed to fetch officiating data')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Officiating Management</h1>
        <Button variant="primary">Add Official</Button>
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
          {/* Officials */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Officials Directory</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              {officials.length === 0 ? (
                <div className="text-sm text-slate-500">No officials found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Person ID</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Level</TableHead>
                    <TableHead>License No.</TableHead>
                  </TableHeader>
                  <TableBody>
                    {officials.map((o) => (
                      <TableRow key={o.id}>
                        <TableCell className="tabular-nums">{o.id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{o.person_id}</TableCell>
                        <TableCell className="text-slate-500 capitalize">{o.official_role}</TableCell>
                        <TableCell className="text-slate-500 capitalize">{o.certification_level || '-'}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{o.license_number || '-'}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* Game Officials */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Game Assignments</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              {gameOfficials.length === 0 ? (
                <div className="text-sm text-slate-500">No game assignments found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Game ID</TableHead>
                    <TableHead>Person ID</TableHead>
                    <TableHead>Role</TableHead>
                  </TableHeader>
                  <TableBody>
                    {gameOfficials.map((go) => (
                      <TableRow key={go.id}>
                        <TableCell className="tabular-nums">{go.id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{go.game_id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{go.person_id}</TableCell>
                        <TableCell className="text-slate-500 capitalize">{go.official_role}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* Official Assignments */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Availability & Preferences</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              {assignments.length === 0 ? (
                <div className="text-sm text-slate-500">No assignment preferences found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Person ID</TableHead>
                    <TableHead>Season ID</TableHead>
                    <TableHead>Available</TableHead>
                    <TableHead>Max Games/Wk</TableHead>
                  </TableHeader>
                  <TableBody>
                    {assignments.map((a) => (
                      <TableRow key={a.id}>
                        <TableCell className="tabular-nums">{a.id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{a.person_id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{a.season_id}</TableCell>
                        <TableCell className="text-slate-500">{a.is_available ? 'Yes' : 'No'}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{a.max_games_per_week || '-'}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* Official Ratings */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Ratings & Reviews</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              {ratings.length === 0 ? (
                <div className="text-sm text-slate-500">No ratings found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Official ID</TableHead>
                    <TableHead>Game ID</TableHead>
                    <TableHead>Rating</TableHead>
                    <TableHead>Date</TableHead>
                  </TableHeader>
                  <TableBody>
                    {ratings.map((r) => (
                      <TableRow key={r.id}>
                        <TableCell className="tabular-nums">{r.id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{r.official_id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{r.game_id}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{r.rating_value}/5</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{r.rating_date}</TableCell>
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
