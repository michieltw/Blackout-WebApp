import { useEffect, useState } from 'react'
import { fetchTableData } from '@/lib/api'
import { Database } from '@/types/supabase'
import { Table, TableHeader, TableHead, TableBody, TableRow, TableCell } from '@/components/ui/Table'
import { Button } from '@/components/ui/Button'

type SeasonCurrent = Database['public']['Tables']['season_current']['Row']
type SeasonArchive = Database['public']['Tables']['season_archives']['Row']
type OrgSeason = Database['public']['Tables']['org_seasons']['Row']
type SeasonPhase = Database['public']['Tables']['season_phases']['Row']

export function SeasonTransitions() {
  const [currentSeasons, setCurrentSeasons] = useState<SeasonCurrent[]>([])
  const [archivedSeasons, setArchivedSeasons] = useState<SeasonArchive[]>([])
  const [orgSeasons, setOrgSeasons] = useState<OrgSeason[]>([])
  const [seasonPhases, setSeasonPhases] = useState<SeasonPhase[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function load() {
      try {
        const [currentData, archiveData, orgData, phaseData] = await Promise.all([
          fetchTableData('season_current'),
          fetchTableData('season_archives'),
          fetchTableData('org_seasons'),
          fetchTableData('season_phases')
        ])

        setCurrentSeasons(currentData || [])
        setArchivedSeasons(archiveData || [])
        setOrgSeasons(orgData || [])
        setSeasonPhases(phaseData || [])
      } catch (err: any) {
        setError(err.message || 'Failed to fetch season transition data')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Season Transitions</h1>
        <Button variant="primary">Manage Transitions</Button>
      </div>

      {error && (
        <div className="text-sm text-amber-700 bg-amber-50 border border-amber-200 p-3 rounded-md">
          {error}
        </div>
      )}

      {loading ? (
        <div className="text-sm text-slate-500">Loading data...</div>
      ) : (
        <>
          {/* Current Seasons */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Current Seasons</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              {currentSeasons.length === 0 ? (
                <div className="text-sm text-slate-500">No current seasons found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Organization ID</TableHead>
                    <TableHead>Season ID</TableHead>
                    <TableHead>Status</TableHead>
                  </TableHeader>
                  <TableBody>
                    {currentSeasons.map((season) => (
                      <TableRow key={season.id}>
                        <TableCell>{season.id}</TableCell>
                        <TableCell className="font-medium text-slate-900">{season.organization_id}</TableCell>
                        <TableCell className="font-medium text-slate-900">{season.season_id}</TableCell>
                        <TableCell>
                          {season.is_current ? (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                              Current
                            </span>
                          ) : (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-50 text-slate-700 border border-slate-200">
                              Past
                            </span>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* Org Seasons */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Organization Seasons</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              {orgSeasons.length === 0 ? (
                <div className="text-sm text-slate-500">No organization seasons found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Organization ID</TableHead>
                    <TableHead>Season ID</TableHead>
                    <TableHead>Status</TableHead>
                  </TableHeader>
                  <TableBody>
                    {orgSeasons.map((orgSeason) => (
                      <TableRow key={orgSeason.id}>
                        <TableCell>{orgSeason.id}</TableCell>
                        <TableCell className="font-medium text-slate-900">{orgSeason.organization_id}</TableCell>
                        <TableCell className="font-medium text-slate-900">{orgSeason.season_id}</TableCell>
                        <TableCell>
                          {orgSeason.is_active ? (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                              Active
                            </span>
                          ) : (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-50 text-slate-700 border border-slate-200">
                              Inactive
                            </span>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* Season Phases */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Season Phases</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              {seasonPhases.length === 0 ? (
                <div className="text-sm text-slate-500">No season phases found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Season ID</TableHead>
                    <TableHead>Phase</TableHead>
                    <TableHead>Start Date</TableHead>
                    <TableHead>End Date</TableHead>
                  </TableHeader>
                  <TableBody>
                    {seasonPhases.map((phase) => (
                      <TableRow key={phase.id}>
                        <TableCell>{phase.id}</TableCell>
                        <TableCell className="font-medium text-slate-900">{phase.season_id}</TableCell>
                        <TableCell className="capitalize text-slate-900">{phase.phase_name?.replace('_', ' ')}</TableCell>
                        <TableCell className="text-slate-500">{phase.start_date || '-'}</TableCell>
                        <TableCell className="text-slate-500">{phase.end_date || '-'}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* Season Archives */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Archived Seasons</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              {archivedSeasons.length === 0 ? (
                <div className="text-sm text-slate-500">No archived seasons found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Season ID</TableHead>
                    <TableHead>Archive Date</TableHead>
                    <TableHead>Champion Team ID</TableHead>
                    <TableHead>Status</TableHead>
                  </TableHeader>
                  <TableBody>
                    {archivedSeasons.map((archive) => (
                      <TableRow key={archive.id}>
                        <TableCell>{archive.id}</TableCell>
                        <TableCell className="font-medium text-slate-900">{archive.season_id}</TableCell>
                        <TableCell className="text-slate-500">{archive.archive_date || '-'}</TableCell>
                        <TableCell className="text-slate-900">{archive.champion_team_id || '-'}</TableCell>
                        <TableCell>
                          {archive.is_locked ? (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200">
                              Locked
                            </span>
                          ) : (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                              Open
                            </span>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
