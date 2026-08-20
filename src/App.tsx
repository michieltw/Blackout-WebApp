import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppLayout } from './layouts/AppLayout'
import { Dashboard } from './pages/Dashboard'
import { Teams } from './pages/Teams'
import { Organizations } from './pages/Organizations'
import { SeasonTransitions } from './pages/SeasonTransitions'
import { TeamDetails } from './pages/TeamDetails'
import { Rosters } from './pages/Rosters'
import { PlayerProfiles } from './pages/PlayerProfiles'
import { Schedule } from './pages/Schedule'
import { SocialFeed } from './pages/SocialFeed'
import { Messages } from './pages/Messages'
import { LiveGameTracking } from './pages/LiveGameTracking'
import { Leaderboards } from './pages/Leaderboards'
import { Login } from './pages/Login'
import { Signup } from './pages/Signup'
import { RequireAuth } from './components/RequireAuth'
import { useAuthStore } from './lib/store'

function App() {
  const initializeAuth = useAuthStore((state) => state.initializeAuth)

  useEffect(() => {
    initializeAuth()
  }, [initializeAuth])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<RequireAuth><AppLayout /></RequireAuth>}>
          <Route index element={<Dashboard />} />
          <Route path="teams" element={<Teams />} />
          <Route path="team-details" element={<TeamDetails />} />
          <Route path="organizations" element={<Organizations />} />
          <Route path="season-transitions" element={<SeasonTransitions />} />
          <Route path="rosters" element={<Rosters />} />
          <Route path="players" element={<PlayerProfiles />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="feed" element={<SocialFeed />} />
          <Route path="messages" element={<Messages />} />
          <Route path="live" element={<LiveGameTracking />} />
          <Route path="leaderboards" element={<Leaderboards />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
