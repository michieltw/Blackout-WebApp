import { Outlet, Link } from 'react-router-dom'
import { Activity } from 'lucide-react'

export function AppLayout() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased">
      <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity className="w-6 h-6 text-emerald-700" />
            <span className="font-bold text-lg tracking-tight">HockeyHub</span>
          </div>
          <nav className="flex items-center gap-4 text-sm font-medium">
            <Link to="/" className="text-slate-600 hover:text-slate-900 transition-colors">Dashboard</Link>
            <Link to="/teams" className="text-slate-600 hover:text-slate-900 transition-colors">Teams</Link>
            <Link to="/team-details" className="text-slate-600 hover:text-slate-900 transition-colors">Team Details</Link>
            <Link to="/lineups" className="text-slate-600 hover:text-slate-900 transition-colors">Lineups</Link>
            <Link to="/player-movement" className="text-slate-600 hover:text-slate-900 transition-colors">Player Movement</Link>
            <Link to="/officiating" className="text-slate-600 hover:text-slate-900 transition-colors">Officiating</Link>
            <Link to="/rules-and-discipline" className="text-slate-600 hover:text-slate-900 transition-colors">Discipline</Link>
            <Link to="/player-progression" className="text-slate-600 hover:text-slate-900 transition-colors">Progression</Link>
            <Link to="/drafts-and-financials" className="text-slate-600 hover:text-slate-900 transition-colors">Financials</Link>
            <Link to="/statistics" className="text-slate-600 hover:text-slate-900 transition-colors">Statistics</Link>
            <Link to="/achievements" className="text-slate-600 hover:text-slate-900 transition-colors">Achievements</Link>
            <Link to="/fan-base" className="text-slate-600 hover:text-slate-900 transition-colors">Fans</Link>
            <Link to="/commerce" className="text-slate-600 hover:text-slate-900 transition-colors">Commerce</Link>
            <Link to="/sponsorships" className="text-slate-600 hover:text-slate-900 transition-colors">Sponsorships</Link>
            <Link to="/season-transitions" className="text-slate-600 hover:text-slate-900 transition-colors">Transitions</Link>
            <Link to="/messages" className="text-slate-600 hover:text-slate-900 transition-colors">Messages</Link>
            <Link to="/live" className="text-slate-600 hover:text-slate-900 transition-colors">Live</Link>
            <Link to="/leaderboards" className="text-slate-600 hover:text-slate-900 transition-colors">Leaderboards</Link>
            <Link to="/system-admin" className="text-slate-600 hover:text-slate-900 transition-colors">Admin</Link>
            <Link to="/integrations" className="text-slate-600 hover:text-slate-900 transition-colors">Integrations</Link>
            <Link to="/invoicing-and-auditing" className="text-slate-600 hover:text-slate-900 transition-colors">Financials/Logs</Link>
            <Link to="/specialized-products" className="text-slate-600 hover:text-slate-900 transition-colors">Products</Link>
            <Link to="/scorekeeping-and-templates" className="text-slate-600 hover:text-slate-900 transition-colors">Scorekeeping</Link>
            <div className="w-8 h-8 rounded-full bg-slate-200 border border-slate-300"></div>
          </nav>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
    </div>
  )
}
