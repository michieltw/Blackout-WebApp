import { Outlet, Link } from 'react-router-dom'
import { Activity } from 'lucide-react'

export function AppLayout() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased">
      <div className="flex h-screen overflow-hidden bg-slate-50">
        {/* Sidebar */}
        <div className="w-64 flex-shrink-0 border-r border-slate-200 bg-white flex flex-col h-full overflow-hidden">
          <div className="h-16 flex items-center px-6 border-b border-slate-200 flex-shrink-0">
            <Activity className="w-6 h-6 text-emerald-700 mr-2" />
            <span className="font-bold text-lg tracking-tight text-slate-900">HockeyHub</span>
          </div>

          <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1 scrollbar-thin scrollbar-thumb-slate-200 hover:scrollbar-thumb-slate-300">
            <Link to="/" className="block px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">Dashboard</Link>

            <div className="pt-4 pb-2">
              <p className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Core</p>
            </div>
            <Link to="/foundational-entities" className="block px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">Foundational Entities</Link>
            <Link to="/user-management" className="block px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">User Management</Link>
            <Link to="/organizations" className="block px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">Organizations</Link>
            <Link to="/system-admin" className="block px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">System Admin</Link>

            <div className="pt-4 pb-2">
              <p className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Team Management</p>
            </div>
            <Link to="/teams" className="block px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">Teams</Link>
            <Link to="/team-details" className="block px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">Team Details</Link>
            <Link to="/rosters" className="block px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">Rosters</Link>
            <Link to="/lineups" className="block px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">Lineups</Link>

            <div className="pt-4 pb-2">
              <p className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Player Operations</p>
            </div>
            <Link to="/players" className="block px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">Players</Link>
            <Link to="/player-movement" className="block px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">Player Movement</Link>
            <Link to="/player-progression" className="block px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">Progression</Link>
            <Link to="/drafts-and-financials" className="block px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">Drafts & Financials</Link>

            <div className="pt-4 pb-2">
              <p className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Competition</p>
            </div>
            <Link to="/schedule" className="block px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">Schedule</Link>
            <Link to="/live" className="block px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">Live Games</Link>
            <Link to="/leaderboards" className="block px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">Leaderboards</Link>
            <Link to="/statistics" className="block px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">Deep Statistics</Link>
            <Link to="/scorekeeping-and-templates" className="block px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">Scorekeeping</Link>
            <Link to="/officiating" className="block px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">Officiating</Link>

            <div className="pt-4 pb-2">
              <p className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Community & Ops</p>
            </div>
            <Link to="/rules-and-discipline" className="block px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">Rules & Discipline</Link>
            <Link to="/achievements" className="block px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">Achievements</Link>
            <Link to="/fan-base" className="block px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">Fan Base</Link>
            <Link to="/commerce" className="block px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">Commerce</Link>
            <Link to="/sponsorships" className="block px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">Sponsorships</Link>
            <Link to="/season-transitions" className="block px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">Season Transitions</Link>
            <Link to="/messages" className="block px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">Messages</Link>
            <Link to="/integrations" className="block px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">Integrations</Link>
            <Link to="/invoicing-and-auditing" className="block px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">Invoicing & Audits</Link>
            <Link to="/specialized-products" className="block px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">Specialized Products</Link>
          </nav>

          <div className="p-4 border-t border-slate-200">
             <div className="flex items-center gap-3">
               <div className="w-8 h-8 rounded-full bg-slate-200 border border-slate-300"></div>
               <div className="text-sm font-medium text-slate-700">User Account</div>
             </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <header className="h-16 flex items-center justify-end px-6 border-b border-slate-200 bg-white/80 backdrop-blur-md flex-shrink-0">
             {/* Optional top right actions like notifications */}
          </header>
          <main className="flex-1 overflow-y-auto bg-slate-50 p-6 lg:p-8">
            <div className="max-w-6xl mx-auto">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
