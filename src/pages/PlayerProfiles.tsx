import { useEffect, useState } from 'react'
import { fetchTableData } from '@/lib/api'
import { Database } from '@/types/supabase'
import { Table, TableHeader, TableHead, TableBody, TableRow, TableCell } from '@/components/ui/Table'
import { Button } from '@/components/ui/Button'

type PlayerProfile = Database['public']['Tables']['player_profiles']['Row']

export function PlayerProfiles() {
  const [profiles, setProfiles] = useState<PlayerProfile[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function load() {
      try {
        const data = await fetchTableData('player_profiles')
        setProfiles(data || [])
      } catch (err: any) {
        setError(err.message || 'Failed to fetch player profiles')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Player Profiles</h1>
        <Button variant="primary">Create Profile</Button>
      </div>

      <div className="grid gap-6">
        <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
          {error && (
            <div className="mb-4 text-sm text-amber-700 bg-amber-50 border border-amber-200 p-3 rounded-md">
              {error}
            </div>
          )}
          {loading ? (
            <div className="text-sm text-slate-500">Loading data...</div>
          ) : profiles.length === 0 ? (
            <div className="text-sm text-slate-500">No player profiles found. Database might be empty.</div>
          ) : (
            <Table>
              <TableHeader>
                <TableHead>Profile ID</TableHead>
                <TableHead>Photo</TableHead>
                <TableHead>Player ID</TableHead>
                <TableHead>Skill Level</TableHead>
                <TableHead>Experience</TableHead>
                <TableHead>Preferred Positions</TableHead>
              </TableHeader>
              <TableBody>
                {(profiles || []).map((profile) => (
                  <TableRow key={profile.id}>
                    <TableCell>{profile.id}</TableCell>
                    <TableCell>
                      {profile?.photo_url ? (
                        <img
                          src={profile.photo_url}
                          alt="Player Profile Photo"
                          className="h-8 w-8 object-cover rounded-full border border-slate-200"
                        />
                      ) : (
                        <div className="h-8 w-8 bg-slate-100 rounded-full flex items-center justify-center text-xs text-slate-400 border border-slate-200">
                          ?
                        </div>
                      )}
                    </TableCell>
                    <TableCell>{profile?.player_id}</TableCell>
                    <TableCell className="text-slate-700 capitalize">{profile?.skill_level || '-'}</TableCell>
                    <TableCell>
                      {profile?.years_experience !== null ? (
                        `${profile.years_experience} ${profile.years_experience === 1 ? 'year' : 'years'}`
                      ) : (
                        '-'
                      )}
                    </TableCell>
                    <TableCell className="text-slate-500">{profile?.preferred_positions || '-'}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </div>
      </div>
    </div>
  )
}
