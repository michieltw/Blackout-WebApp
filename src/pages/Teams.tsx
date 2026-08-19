import { useEffect, useState } from 'react'
import { fetchTableData } from '@/lib/api'
import { Database } from '@/types/supabase'
import { Table, TableHeader, TableHead, TableBody, TableRow, TableCell } from '@/components/ui/Table'
import { Button } from '@/components/ui/Button'

type Team = Database['public']['Tables']['teams']['Row']

export function Teams() {
  const [teams, setTeams] = useState<Team[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      const data = await fetchTableData('teams')
      setTeams(data || [])
      setLoading(false)
    }
    load()
  }, [])

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Team Management</h1>
        <Button variant="primary">Add Team</Button>
      </div>

      <div className="grid gap-6">
        <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
          {loading ? (
            <div className="text-sm text-slate-500">Loading data...</div>
          ) : teams.length === 0 ? (
            <div className="text-sm text-slate-500">No teams found. Database might be empty.</div>
          ) : (
            <Table>
              <TableHeader>
                <TableHead>ID</TableHead>
                <TableHead>Logo</TableHead>
                <TableHead>Team Name</TableHead>
                <TableHead>Abbreviation</TableHead>
                <TableHead>Status</TableHead>
              </TableHeader>
              <TableBody>
                {(teams || []).map((team) => (
                  <TableRow key={team.id}>
                    <TableCell>{team.id}</TableCell>
                    <TableCell>
                      {team?.logo_url ? (
                        <img
                          src={team.logo_url}
                          alt={`${team?.name || 'Team'} logo`}
                          className="h-8 w-8 object-contain rounded"
                        />
                      ) : (
                        <div className="h-8 w-8 bg-slate-100 rounded flex items-center justify-center text-xs text-slate-400 border border-slate-200">
                          N/A
                        </div>
                      )}
                    </TableCell>
                    <TableCell className="font-medium text-slate-900">{team?.name || 'Unnamed'}</TableCell>
                    <TableCell className="text-slate-500">{team?.abbreviation || '-'}</TableCell>
                    <TableCell>
                      {team?.status?.toLowerCase() === 'active' ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                          {team?.status}
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200">
                          {team?.status || 'Unknown'}
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
