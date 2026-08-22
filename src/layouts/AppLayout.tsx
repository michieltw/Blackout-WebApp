import { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { Activity, Menu, X } from 'lucide-react'

export function AppLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased">
      <div className="flex h-screen overflow-hidden bg-slate-50 relative">

        {/* Mobile Sidebar Overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-slate-900/50 z-30 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <div className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 absolute lg:relative z-40 w-64 flex-shrink-0 border-r border-slate-200 bg-white flex flex-col h-full overflow-hidden transition-transform duration-300 ease-in-out`}>
          <div className="h-16 flex items-center px-6 border-b border-slate-200 flex-shrink-0 justify-between">
            <div className="flex items-center">
              <Activity className="w-6 h-6 text-emerald-700 mr-2" />
              <span className="font-bold text-lg tracking-tight text-slate-900">HockeyHub</span>
            </div>
            <button
              className="lg:hidden text-slate-500 hover:text-slate-700"
              onClick={() => setIsSidebarOpen(false)}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1 scrollbar-thin scrollbar-thumb-slate-200 hover:scrollbar-thumb-slate-300">
            <Link to="/" className="block px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors" onClick={() => setIsSidebarOpen(false)}>Dashboard</Link>

            <div className="pt-4 pb-2">
              <p className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Competition</p>
            </div>
            <Link to="/schedule" className="block px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors" onClick={() => setIsSidebarOpen(false)}>Schedule</Link>
            <Link to="/live" className="block px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors" onClick={() => setIsSidebarOpen(false)}>Live Games</Link>
            <Link to="/leaderboards" className="block px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors" onClick={() => setIsSidebarOpen(false)}>Leaderboards</Link>
            <Link to="/statistics" className="block px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors" onClick={() => setIsSidebarOpen(false)}>Deep Statistics</Link>
            <Link to="/scorekeeping-and-templates" className="block px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors" onClick={() => setIsSidebarOpen(false)}>Scorekeeping</Link>
            <Link to="/officiating" className="block px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors" onClick={() => setIsSidebarOpen(false)}>Officiating</Link>

            <div className="pt-4 pb-2">
              <p className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Team Manager</p>
            </div>
            <Link to="/teams" className="block px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors" onClick={() => setIsSidebarOpen(false)}>Teams</Link>
            <Link to="/team-details" className="block px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors" onClick={() => setIsSidebarOpen(false)}>Team Details</Link>
            <Link to="/rosters" className="block px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors" onClick={() => setIsSidebarOpen(false)}>Rosters</Link>
            <Link to="/lineups" className="block px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors" onClick={() => setIsSidebarOpen(false)}>Lineups</Link>
            <Link to="/drafts-and-financials" className="block px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors" onClick={() => setIsSidebarOpen(false)}>Drafts & Financials</Link>

            <div className="pt-4 pb-2">
              <p className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Player Hub</p>
            </div>
            <Link to="/players" className="block px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors" onClick={() => setIsSidebarOpen(false)}>Players</Link>
            <Link to="/player-movement" className="block px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors" onClick={() => setIsSidebarOpen(false)}>Player Movement</Link>
            <Link to="/player-progression" className="block px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors" onClick={() => setIsSidebarOpen(false)}>Progression</Link>
            <Link to="/achievements" className="block px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors" onClick={() => setIsSidebarOpen(false)}>Achievements</Link>

            <div className="pt-4 pb-2">
              <p className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Community & Social</p>
            </div>
            <Link to="/feed" className="block px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors" onClick={() => setIsSidebarOpen(false)}>Social Feed</Link>
            <Link to="/fan-base" className="block px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors" onClick={() => setIsSidebarOpen(false)}>Fan Base</Link>
            <Link to="/messages" className="block px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors" onClick={() => setIsSidebarOpen(false)}>Messages</Link>

            <div className="pt-4 pb-2">
              <p className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">League Operations</p>
            </div>
            <Link to="/organizations" className="block px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors" onClick={() => setIsSidebarOpen(false)}>Organizations</Link>
            <Link to="/season-transitions" className="block px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors" onClick={() => setIsSidebarOpen(false)}>Season Transitions</Link>
            <Link to="/rules-and-discipline" className="block px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors" onClick={() => setIsSidebarOpen(false)}>Rules & Discipline</Link>
            <Link to="/commerce" className="block px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors" onClick={() => setIsSidebarOpen(false)}>Commerce</Link>
            <Link to="/sponsorships" className="block px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors" onClick={() => setIsSidebarOpen(false)}>Sponsorships</Link>

            <div className="pt-4 pb-2">
              <p className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Settings & Admin</p>
            </div>
            <Link to="/foundational-entities" className="block px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors" onClick={() => setIsSidebarOpen(false)}>Foundational Entities</Link>
            <Link to="/user-management" className="block px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors" onClick={() => setIsSidebarOpen(false)}>User Management</Link>
            <Link to="/system-admin" className="block px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors" onClick={() => setIsSidebarOpen(false)}>System Admin</Link>
            <Link to="/integrations" className="block px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors" onClick={() => setIsSidebarOpen(false)}>Integrations</Link>
            <Link to="/invoicing-and-auditing" className="block px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors" onClick={() => setIsSidebarOpen(false)}>Invoicing & Audits</Link>
            <Link to="/specialized-products" className="block px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors" onClick={() => setIsSidebarOpen(false)}>Specialized Products</Link>
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
          <header className="h-16 flex items-center justify-between lg:justify-end px-6 border-b border-slate-200 bg-white/80 backdrop-blur-md flex-shrink-0">
             <button
               className="lg:hidden text-slate-500 hover:text-slate-700"
               onClick={() => setIsSidebarOpen(true)}
             >
               <Menu className="w-6 h-6" />
             </button>
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
