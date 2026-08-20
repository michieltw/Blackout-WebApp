import { useEffect, useState } from 'react'
import { fetchTableData } from '@/lib/api'
import { Database } from '@/types/supabase'
import { Table, TableHeader, TableHead, TableBody, TableRow, TableCell } from '@/components/ui/Table'
import { Button } from '@/components/ui/Button'

type TeamProfile = Database['public']['Tables']['team_profiles']['Row']
type FarmTeam = Database['public']['Tables']['farm_teams']['Row']
type TeamStaff = Database['public']['Tables']['team_staff']['Row']

export function TeamDetails() {
  const [teamProfiles, setTeamProfiles] = useState<TeamProfile[]>([])
  const [farmTeams, setFarmTeams] = useState<FarmTeam[]>([])
  const [teamStaff, setTeamStaff] = useState<TeamStaff[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function load() {
      try {
        const [profileData, farmData, staffData] = await Promise.all([
          fetchTableData('team_profiles'),
          fetchTableData('farm_teams'),
          fetchTableData('team_staff')
        ])

        setTeamProfiles(profileData || [])
        setFarmTeams(farmData || [])
        setTeamStaff(staffData || [])
      } catch (err: any) {
        setError(err.message || 'Failed to fetch team details data')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Team Details & Staff Management</h1>
        <Button variant="primary">Add Details</Button>
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
          {/* Team Profiles */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Team Profiles</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              {teamProfiles.length === 0 ? (
                <div className="text-sm text-slate-500">No team profiles found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Team ID</TableHead>
                    <TableHead>Record (W-L-T)</TableHead>
                    <TableHead>Goals (For-Against)</TableHead>
                  </TableHeader>
                  <TableBody>
                    {teamProfiles.map((profile) => (
                      <TableRow key={profile.id}>
                        <TableCell>{profile.id}</TableCell>
                        <TableCell className="font-medium text-slate-900">{profile.team_id}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">
                          {profile.win_count}-{profile.loss_count}-{profile.tie_count}
                        </TableCell>
                        <TableCell className="text-slate-500 tabular-nums">
                          {profile.goals_for}-{profile.goals_against}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* Farm Teams */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Farm Teams</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              {farmTeams.length === 0 ? (
                <div className="text-sm text-slate-500">No farm teams found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Logo</TableHead>
                    <TableHead>Parent Team ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Abbreviation</TableHead>
                  </TableHeader>
                  <TableBody>
                    {farmTeams.map((farm) => (
                      <TableRow key={farm.id}>
                        <TableCell>{farm.id}</TableCell>
                        <TableCell>
                          {farm?.logo_url ? (
                            <img
                              src={farm.logo_url}
                              alt={`${farm?.name || 'Farm Team'} logo`}
                              className="h-8 w-8 object-contain rounded"
                            />
                          ) : (
                            <div className="h-8 w-8 bg-slate-100 rounded flex items-center justify-center text-xs text-slate-400 border border-slate-200">
                              N/A
                            </div>
                          )}
                        </TableCell>
                        <TableCell className="font-medium text-slate-900">{farm.parent_team_id}</TableCell>
                        <TableCell className="font-medium text-slate-900">{farm?.name || 'Unnamed'}</TableCell>
                        <TableCell className="text-slate-500 uppercase">{farm?.abbreviation || '-'}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* Team Staff */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Team Staff</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              {teamStaff.length === 0 ? (
                <div className="text-sm text-slate-500">No team staff found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Team ID</TableHead>
                    <TableHead>Person ID</TableHead>
                    <TableHead>Staff Role</TableHead>
                    <TableHead>Hire Date</TableHead>
                  </TableHeader>
                  <TableBody>
                    {teamStaff.map((staff) => (
                      <TableRow key={staff.id}>
                        <TableCell>{staff.id}</TableCell>
                        <TableCell className="font-medium text-slate-900">{staff.team_id}</TableCell>
                        <TableCell className="font-medium text-slate-900">{staff.person_id}</TableCell>
                        <TableCell className="font-medium text-slate-900 capitalize">{staff.staff_role?.replace('_', ' ')}</TableCell>
                        <TableCell className="text-slate-500">
                          {staff.hire_date || "-"}
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
