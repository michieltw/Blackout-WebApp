import { render, screen, waitFor } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { Dashboard } from './Dashboard'
import * as api from '@/lib/api'

// Mock the API module
vi.mock('@/lib/api', () => ({
  fetchTableData: vi.fn(),
}))

describe('Dashboard Component', () => {
  beforeEach(() => {
    vi.resetAllMocks()
  })

  it('renders loading state initially', () => {
    // Return a promise that doesn't resolve immediately to keep it in loading state
    vi.mocked(api.fetchTableData).mockImplementation(() => new Promise(() => {}))

    render(<Dashboard />)

    expect(screen.getAllByText('Loading data...')[0]).toBeInTheDocument()
    expect(screen.queryByRole('table')).not.toBeInTheDocument()
  })

  it('renders empty state when no teams are found', async () => {
    vi.mocked(api.fetchTableData).mockResolvedValue([])

    render(<Dashboard />)

    // Wait for the loading state to finish and empty message to appear
    await waitFor(() => {
      // In Dashboard.tsx, the text might be rendered multiple times
      expect(screen.getAllByText('No teams found. Database might be empty.')[0]).toBeInTheDocument()
    })

    expect(screen.queryByRole('table')).not.toBeInTheDocument()
  })

  it('renders a table with teams when data is populated', async () => {
    const mockTeams = [
      { id: 1, name: 'Team Alpha', status: 'Active', created_at: '2023-01-01', updated_at: '2023-01-01' },
      { id: 2, name: 'Team Beta', status: 'Inactive', created_at: '2023-01-02', updated_at: '2023-01-02' }
    ] as any

    vi.mocked(api.fetchTableData).mockResolvedValue(mockTeams)

    render(<Dashboard />)

    // Wait for the table to appear
    await waitFor(() => {
      expect(screen.getAllByRole('table')[0]).toBeInTheDocument()
    })

    // Check if team names are rendered
    expect(screen.getAllByText('Team Alpha')[0]).toBeInTheDocument()
    expect(screen.getAllByText('Team Beta')[0]).toBeInTheDocument()

    // Check if statuses are rendered
    expect(screen.getAllByText('Active')[0]).toBeInTheDocument()
    expect(screen.getAllByText('Inactive')[0]).toBeInTheDocument()
  })
})
