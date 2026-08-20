import { Navigate, useLocation } from 'react-router-dom'
import { useAuthStore } from '@/lib/store'

export function RequireAuth({ children }: { children: React.ReactNode }) {
  const { session, initialized } = useAuthStore()
  const location = useLocation()

  if (!initialized) {
    // Optionally return a loading spinner here while checking session
    return <div className="min-h-screen flex items-center justify-center text-slate-500">Loading...</div>
  }

  if (!session) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience.
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}
