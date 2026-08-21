import { useEffect, useState } from 'react'
import { fetchTableData } from '@/lib/api'
import { Database } from '@/types/supabase'
import { Table, TableHeader, TableHead, TableBody, TableRow, TableCell } from '@/components/ui/Table'
import { Button } from '@/components/ui/Button'

type PlayerDraft = Database['public']['Tables']['player_drafts']['Row']
type DraftPick = Database['public']['Tables']['draft_picks']['Row']
type SalaryCapRule = Database['public']['Tables']['salary_cap_rules']['Row']
type SalaryCapTracking = Database['public']['Tables']['salary_cap_tracking']['Row']
type Expense = Database['public']['Tables']['expenses']['Row']

export function DraftsAndFinancials() {
  const [drafts, setDrafts] = useState<PlayerDraft[]>([])
  const [draftPicks, setDraftPicks] = useState<DraftPick[]>([])
  const [capRules, setCapRules] = useState<SalaryCapRule[]>([])
  const [capTracking, setCapTracking] = useState<SalaryCapTracking[]>([])
  const [expenses, setExpenses] = useState<Expense[]>([])

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function load() {
      try {
        const [
          draftsData,
          picksData,
          rulesData,
          trackingData,
          expensesData
        ] = await Promise.all([
          fetchTableData('player_drafts'),
          fetchTableData('draft_picks'),
          fetchTableData('salary_cap_rules'),
          fetchTableData('salary_cap_tracking'),
          fetchTableData('expenses')
        ])

        setDrafts(draftsData || [])
        setDraftPicks(picksData || [])
        setCapRules(rulesData || [])
        setCapTracking(trackingData || [])
        setExpenses(expensesData || [])
      } catch (err: any) {
        setError(err.message || 'Failed to fetch drafts and financials data')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Drafts & Financials</h1>
        <div className="space-x-2">
          <Button variant="secondary">Log Expense</Button>
          <Button variant="primary">Configure Draft</Button>
        </div>
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
          {/* Drafts */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Player Drafts</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              {drafts.length === 0 ? (
                <div className="text-sm text-slate-500">No drafts found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Season ID</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                  </TableHeader>
                  <TableBody>
                    {drafts.map((d) => (
                      <TableRow key={d.id}>
                        <TableCell className="tabular-nums">{d.id}</TableCell>
                        <TableCell className="font-medium text-slate-900">{d.draft_name}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{d.season_id}</TableCell>
                        <TableCell className="text-slate-500 capitalize">{d.draft_status || '-'}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{d.draft_date || '-'}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* Draft Picks */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Draft Picks</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              {draftPicks.length === 0 ? (
                <div className="text-sm text-slate-500">No draft picks found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Draft ID</TableHead>
                    <TableHead>Team ID</TableHead>
                    <TableHead>Player ID</TableHead>
                    <TableHead>Pick #</TableHead>
                  </TableHeader>
                  <TableBody>
                    {draftPicks.map((dp) => (
                      <TableRow key={dp.id}>
                        <TableCell className="tabular-nums">{dp.id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{dp.draft_id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{dp.draft_team_id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{dp.player_id}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{dp.pick_number || '-'}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* Cap Rules */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Salary Cap Rules</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              {capRules.length === 0 ? (
                <div className="text-sm text-slate-500">No cap rules found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Season ID</TableHead>
                    <TableHead>Total Cap</TableHead>
                    <TableHead>Min Payroll</TableHead>
                  </TableHeader>
                  <TableBody>
                    {capRules.map((cr) => (
                      <TableRow key={cr.id}>
                        <TableCell className="tabular-nums">{cr.id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{cr.season_id}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{cr.total_cap_amount}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{cr.minimum_payroll || '-'}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* Cap Tracking */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Team Cap Tracking</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              {capTracking.length === 0 ? (
                <div className="text-sm text-slate-500">No cap tracking data found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Team ID</TableHead>
                    <TableHead>Season ID</TableHead>
                    <TableHead>Total Payroll</TableHead>
                    <TableHead>Cap Room</TableHead>
                    <TableHead>Exceeds Cap</TableHead>
                  </TableHeader>
                  <TableBody>
                    {capTracking.map((ct) => (
                      <TableRow key={ct.id}>
                        <TableCell className="tabular-nums">{ct.id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{ct.team_id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{ct.season_id}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{ct.total_payroll || 0}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{ct.cap_room_remaining || 0}</TableCell>
                        <TableCell className="text-slate-500">{ct.exceeds_cap ? 'Yes' : 'No'}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* Expenses */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Expenses</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              {expenses.length === 0 ? (
                <div className="text-sm text-slate-500">No expenses found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Date</TableHead>
                  </TableHeader>
                  <TableBody>
                    {expenses.map((e) => (
                      <TableRow key={e.id}>
                        <TableCell className="tabular-nums">{e.id}</TableCell>
                        <TableCell className="text-slate-500 capitalize">{e.expense_type}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{e.amount}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{e.expense_date}</TableCell>
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
