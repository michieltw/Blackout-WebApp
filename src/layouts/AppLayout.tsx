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
