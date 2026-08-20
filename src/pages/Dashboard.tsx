import { useEffect, useState } from 'react'
import { fetchTableData } from '@/lib/api'
import { Database } from '@/types/supabase'
import { Table, TableHeader, TableHead, TableBody, TableRow, TableCell } from '@/components/ui/Table'

type Team = Database['public']['Tables']['teams']['Row']

export function Dashboard() {
  const [teams, setTeams] = useState<Team[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function load() {
      const data = await fetchTableData('teams')
      setTeams((data || []).slice(0, 5))
      setLoading(false)
    }
    load()
  }, [])

  const renderTeamsTable = () => {
    if (loading) {
      return <div className="text-sm text-slate-500">Loading data...</div>
    }

    if (teams.length === 0) {
      return <div className="text-sm text-slate-500">No teams found. Database might be empty.</div>
    }

    return (
      <Table>
        <TableHeader>
          <TableHead>ID</TableHead>
          <TableHead>Team Name</TableHead>
          <TableHead>Status</TableHead>
        </TableHeader>
        <TableBody>
          {(teams || []).slice(0, 5).map((team) => (
            <TableRow key={team.id}>
              <TableCell>{team.id}</TableCell>
              <TableCell className="font-medium text-slate-900">{team?.name || 'Unnamed'}</TableCell>
              <TableCell>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                  {team?.status || 'Active'}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Dashboard Overview</h1>
      </div>

      <div className="grid gap-6">
        <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
          <h2 className="text-lg font-semibold mb-4 text-slate-800">Active Teams</h2>
          {renderTeamsTable()}
          {loading ? (
            <div className="text-sm text-slate-500">Loading data...</div>
          ) : teams.length === 0 ? (
            <div className="text-sm text-slate-500">No teams found. Database might be empty.</div>
          ) : (
            <Table>
              <TableHeader>
                <TableHead>ID</TableHead>
                <TableHead>Team Name</TableHead>
                <TableHead>Status</TableHead>
              </TableHeader>
              <TableBody>
                {(teams || []).map((team) => (
                  <TableRow key={team.id}>
                    <TableCell>{team.id}</TableCell>
                    <TableCell className="font-medium text-slate-900">{team?.name || 'Unnamed'}</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                        {team?.status || 'Active'}
                      </span>
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
