import { useEffect, useState } from 'react'
import { fetchTableData } from '@/lib/api'
import { Database } from '@/types/supabase'
import { Table, TableHeader, TableHead, TableBody, TableRow, TableCell } from '@/components/ui/Table'
import { Button } from '@/components/ui/Button'

type RosterPlayer = Database['public']['Tables']['rosters']['Row']

export function Rosters() {
  const [rosters, setRosters] = useState<RosterPlayer[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      const data = await fetchTableData('rosters')
      setRosters(data || [])
      setLoading(false)
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
      </div>
    </div>
  )
}
