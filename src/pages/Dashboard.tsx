import { useEffect, useState } from 'react'
import { fetchTableData } from '@/lib/api'
import { Database } from '@/types/supabase'
import { Table, TableHeader, TableHead, TableBody, TableRow, TableCell } from '@/components/ui/Table'

type Team = Database['public']['Tables']['teams']['Row']

export function Dashboard() {
  const [teams, setTeams] = useState<Team[]>([])
  const [loading, setLoading] = useState(true)

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
        <div>
          <select className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-slate-900 ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-emerald-600 sm:text-sm sm:leading-6">
            <option>Pro League Season 1</option>
            <option>Amateur League</option>
            <option>Junior Series</option>
          </select>
        </div>
      </div>

      <div className="bg-slate-900 text-white rounded-xl p-8 mb-6 shadow-md relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Playoffs Approaching!</h2>
          <p className="text-slate-300 max-w-xl">
            The regular season is winding down. Ensure your rosters are locked and finalized before the trade deadline hits this Friday.
          </p>
          <button className="mt-6 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-md transition-colors text-sm">
            View Playoff Tree
          </button>
        </div>
        {/* Decorative elements for the banner */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-emerald-500/20 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-10 w-40 h-40 rounded-full bg-blue-500/20 blur-3xl pointer-events-none"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
            <div className="flex justify-between items-center mb-4">
               <h2 className="text-lg font-semibold text-slate-800">League Standings</h2>
               <button className="text-sm font-medium text-emerald-600 hover:text-emerald-700">View All</button>
            </div>
            {renderTeamsTable()}
          </div>

          <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
            <h2 className="text-lg font-semibold mb-4 text-slate-800">Announcements</h2>
            <div className="space-y-4">
               <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                     <span className="text-emerald-700 font-bold text-sm">L</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-slate-900">League Office <span className="text-slate-500 font-normal ml-2">2 hours ago</span></h3>
                    <p className="text-sm text-slate-600 mt-1">Reminder: Next week's captain meeting has been rescheduled to Thursday at 7 PM.</p>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                     <span className="text-blue-700 font-bold text-sm">S</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-slate-900">System Admin <span className="text-slate-500 font-normal ml-2">1 day ago</span></h3>
                    <p className="text-sm text-slate-600 mt-1">The new stats tracker is now live! Check out the deep statistics page to analyze player performance.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm h-full">
            <div className="flex justify-between items-center mb-4">
               <h2 className="text-lg font-semibold text-slate-800">Latest Scores</h2>
               <button className="text-sm font-medium text-emerald-600 hover:text-emerald-700">Full Schedule</button>
            </div>

            <div className="space-y-4">
              {/* Mock Match 1 */}
              <div className="p-3 border border-slate-100 rounded-md bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer">
                <div className="text-xs text-slate-500 mb-2 font-medium">Final • Yesterday</div>
                <div className="flex justify-between items-center mb-1">
                   <div className="flex items-center gap-2">
                     <div className="w-4 h-4 rounded bg-red-500"></div>
                     <span className="text-sm font-medium text-slate-900">Thunder</span>
                   </div>
                   <span className="text-sm font-bold tabular-nums text-slate-900">4</span>
                </div>
                <div className="flex justify-between items-center">
                   <div className="flex items-center gap-2">
                     <div className="w-4 h-4 rounded bg-blue-500"></div>
                     <span className="text-sm font-medium text-slate-500">Ice Bears</span>
                   </div>
                   <span className="text-sm font-bold tabular-nums text-slate-500">2</span>
                </div>
              </div>

              {/* Mock Match 2 */}
              <div className="p-3 border border-slate-100 rounded-md bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer">
                <div className="text-xs text-slate-500 mb-2 font-medium">Final/OT • 2 days ago</div>
                <div className="flex justify-between items-center mb-1">
                   <div className="flex items-center gap-2">
                     <div className="w-4 h-4 rounded bg-slate-800"></div>
                     <span className="text-sm font-medium text-slate-900">Knights</span>
                   </div>
                   <span className="text-sm font-bold tabular-nums text-slate-900">3</span>
                </div>
                <div className="flex justify-between items-center">
                   <div className="flex items-center gap-2">
                     <div className="w-4 h-4 rounded bg-amber-500"></div>
                     <span className="text-sm font-medium text-slate-500">Blizzards</span>
                   </div>
                   <span className="text-sm font-bold tabular-nums text-slate-500">2</span>
                </div>
              </div>

              {/* Mock Match 3 */}
              <div className="p-3 border border-slate-100 rounded-md bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer">
                <div className="text-xs text-slate-500 mb-2 font-medium">Final • 3 days ago</div>
                <div className="flex justify-between items-center mb-1">
                   <div className="flex items-center gap-2">
                     <div className="w-4 h-4 rounded bg-purple-600"></div>
                     <span className="text-sm font-medium text-slate-500">Royals</span>
                   </div>
                   <span className="text-sm font-bold tabular-nums text-slate-500">1</span>
                </div>
                <div className="flex justify-between items-center">
                   <div className="flex items-center gap-2">
                     <div className="w-4 h-4 rounded bg-emerald-600"></div>
                     <span className="text-sm font-medium text-slate-900">Vipers</span>
                   </div>
                   <span className="text-sm font-bold tabular-nums text-slate-900">5</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
