import { useEffect, useState } from 'react'
import { fetchTableData } from '@/lib/api'
import { Database } from '@/types/supabase'
import { Table, TableHeader, TableHead, TableBody, TableRow, TableCell } from '@/components/ui/Table'
import { Button } from '@/components/ui/Button'

type PlayerProfile = Database['public']['Tables']['player_profiles']['Row']
type Player = Database['public']['Tables']['players']['Row']

export function PlayerProfiles() {
  const [profiles, setProfiles] = useState<PlayerProfile[]>([])
  const [players, setPlayers] = useState<Player[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
        const [profilesData, playersData] = await Promise.all([
          fetchTableData('player_profiles'),
          fetchTableData('players')
        ])
        setProfiles(profilesData || [])
        setPlayers(playersData || [])
        setLoading(false)
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

      <div className="grid gap-6">
        <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">Players Base Info</h2>
          {players.length === 0 ? (
            <div className="text-sm text-slate-500">No players found.</div>
          ) : (
            <Table>
              <TableHeader>
                <TableHead>Player ID</TableHead>
                <TableHead>Person ID</TableHead>
                <TableHead>Position</TableHead>
                <TableHead>Handedness</TableHead>
                <TableHead>Height (cm)</TableHead>
                <TableHead>Weight (kg)</TableHead>
                <TableHead>Draft Year</TableHead>
              </TableHeader>
              <TableBody>
                {players.map((player) => (
                  <TableRow key={player.id}>
                    <TableCell className="tabular-nums">{player.id}</TableCell>
                    <TableCell className="tabular-nums">{player.person_id}</TableCell>
                    <TableCell className="text-slate-700 capitalize">{player.position || '-'}</TableCell>
                    <TableCell className="text-slate-700 capitalize">{player.handedness || '-'}</TableCell>
                    <TableCell className="text-slate-500 tabular-nums">{player.height_cm || '-'}</TableCell>
                    <TableCell className="text-slate-500 tabular-nums">{player.weight_kg || '-'}</TableCell>
                    <TableCell className="text-slate-500 tabular-nums">{player.draft_year || '-'}</TableCell>
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
