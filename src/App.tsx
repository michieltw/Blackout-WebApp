import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppLayout } from './layouts/AppLayout'
import { Dashboard } from './pages/Dashboard'
import { Teams } from './pages/Teams'
import { Organizations } from './pages/Organizations'
import { Rosters } from './pages/Rosters'
import { PlayerProfiles } from './pages/PlayerProfiles'
import { Login } from './pages/Login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="teams" element={<Teams />} />
          <Route path="organizations" element={<Organizations />} />
          <Route path="rosters" element={<Rosters />} />
          <Route path="players" element={<PlayerProfiles />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
