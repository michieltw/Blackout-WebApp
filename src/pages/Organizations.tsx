import { useEffect, useState } from 'react'
import { fetchTableData } from '@/lib/api'
import { Database } from '@/types/supabase'
import { Table, TableHeader, TableHead, TableBody, TableRow, TableCell } from '@/components/ui/Table'
import { Button } from '@/components/ui/Button'

type Organization = Database['public']['Tables']['organizations']['Row']

export function Organizations() {
  const [organizations, setOrganizations] = useState<Organization[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
        const data = await fetchTableData('organizations')
        setOrganizations(data || [])
        setLoading(false)
    }
    load()
  }, [])

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Organization Management</h1>
        <Button variant="primary">Add Organization</Button>
      </div>

      <div className="grid gap-6">
        <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
          {loading ? (
            <div className="text-sm text-slate-500">Loading data...</div>
          ) : organizations.length === 0 ? (
            <div className="text-sm text-slate-500">No organizations found. Database might be empty.</div>
          ) : (
            <Table>
              <TableHeader>
                <TableHead>ID</TableHead>
                <TableHead>Logo</TableHead>
                <TableHead>Organization Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
              </TableHeader>
              <TableBody>
                {(organizations || []).map((org) => (
                  <TableRow key={org.id}>
                    <TableCell>{org.id}</TableCell>
                    <TableCell>
                      {org?.logo_url ? (
                        <img
                          src={org.logo_url}
                          alt={`${org?.name || 'Organization'} logo`}
                          className="h-8 w-8 object-contain rounded"
                        />
                      ) : (
                        <div className="h-8 w-8 bg-slate-100 rounded flex items-center justify-center text-xs text-slate-400 border border-slate-200">
                          N/A
                        </div>
                      )}
                    </TableCell>
                    <TableCell className="font-medium text-slate-900">{org?.name || 'Unnamed'}</TableCell>
                    <TableCell className="text-slate-500 capitalize">{org?.organization_type?.replace('_', ' ') || '-'}</TableCell>
                    <TableCell>
                      {org?.is_active ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                          Active
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200">
                          Inactive
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
