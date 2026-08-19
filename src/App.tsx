import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppLayout } from './layouts/AppLayout'
import { Dashboard } from './pages/Dashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="teams" element={<div className="p-4 bg-white border border-slate-200 rounded-md">Teams Placeholder</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
