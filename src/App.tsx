import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppLayout } from './layouts/AppLayout'
import { Dashboard } from './pages/Dashboard'
import { Teams } from './pages/Teams'
import { Organizations } from './pages/Organizations'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="teams" element={<Teams />} />
          <Route path="organizations" element={<Organizations />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
