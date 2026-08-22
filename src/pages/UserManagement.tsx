import { useEffect, useState } from 'react'
import { Users, User, IdentificationBadge, MagnifyingGlass } from '@phosphor-icons/react'
import { fetchTableData } from '../lib/api'
import { Database } from '../types/supabase'
import { Table, TableHeader, TableHead, TableBody, TableRow, TableCell } from '../components/ui/Table'

type UserRecord = Database['public']['Tables']['users']['Row']
type Person = Database['public']['Tables']['persons']['Row']
type UserProfile = Database['public']['Tables']['user_profiles']['Row']
type PlayerLookup = Database['public']['Tables']['player_lookup']['Row']

export function UserManagement() {
  const [activeTab, setActiveTab] = useState<'users' | 'persons' | 'profiles' | 'player_lookup'>('users')

  const [users, setUsers] = useState<UserRecord[]>([])
  const [persons, setPersons] = useState<Person[]>([])
  const [profiles, setProfiles] = useState<UserProfile[]>([])
  const [playerLookups, setPlayerLookups] = useState<PlayerLookup[]>([])

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadData() {
      setIsLoading(true)
        if (activeTab === 'users') {
          const data = await fetchTableData('users')
          setUsers(data || [])
        } else if (activeTab === 'persons') {
          const data = await fetchTableData('persons')
          setPersons(data || [])
        } else if (activeTab === 'profiles') {
          const data = await fetchTableData('user_profiles')
          setProfiles(data || [])
        } else if (activeTab === 'player_lookup') {
          const data = await fetchTableData('player_lookup')
          setPlayerLookups(data || [])
        }
        setIsLoading(false)
    }
    loadData()
  }, [activeTab])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">User Management</h1>
        <p className="text-slate-500 mt-1">Manage core authorization entities, persons, profiles, and player lookups.</p>
      </div>

      <div className="border-b border-slate-200">
        <nav className="-mb-px flex space-x-8 overflow-x-auto">
          <button
            onClick={() => setActiveTab('users')}
            className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 ${
              activeTab === 'users'
                ? 'border-emerald-500 text-emerald-600'
                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
            }`}
          >
            <Users weight="bold" className="w-4 h-4" /> Users
          </button>
          <button
            onClick={() => setActiveTab('persons')}
            className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 ${
              activeTab === 'persons'
                ? 'border-emerald-500 text-emerald-600'
                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
            }`}
          >
            <User weight="bold" className="w-4 h-4" /> Persons
          </button>
          <button
            onClick={() => setActiveTab('profiles')}
            className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 ${
              activeTab === 'profiles'
                ? 'border-emerald-500 text-emerald-600'
                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
            }`}
          >
            <IdentificationBadge weight="bold" className="w-4 h-4" /> Profiles
          </button>
          <button
            onClick={() => setActiveTab('player_lookup')}
            className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 ${
              activeTab === 'player_lookup'
                ? 'border-emerald-500 text-emerald-600'
                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
            }`}
          >
            <MagnifyingGlass weight="bold" className="w-4 h-4" /> Player Lookup
          </button>
        </nav>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">

        {isLoading ? (
          <div className="p-12 text-center text-slate-500">Loading data...</div>
        ) : (
          <div className="overflow-x-auto">
            {activeTab === 'users' && (
              <Table>
                <TableHeader>
                  <TableHead>Auth User ID</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Created At</TableHead>
                </TableHeader>
                <TableBody>
                  {users.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={3} className="text-center text-slate-500">No users found.</TableCell>
                    </TableRow>
                  ) : (
                    users.map(user => (
                      <TableRow key={user.id}>
                        <TableCell className="tabular-nums">{user.id}</TableCell>
                        <TableCell className="font-medium text-slate-900">{user.email || '-'}</TableCell>
                        <TableCell className="tabular-nums">{user.created_at ? new Date(user.created_at).toLocaleDateString() : '-'}</TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            )}

            {activeTab === 'persons' && (
              <Table>
                <TableHeader>
                  <TableHead>ID</TableHead>
                  <TableHead>User ID</TableHead>
                  <TableHead>First Name</TableHead>
                  <TableHead>Last Name</TableHead>
                  <TableHead>Date of Birth</TableHead>
                  <TableHead>Gender</TableHead>
                </TableHeader>
                <TableBody>
                  {persons.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center text-slate-500">No persons found.</TableCell>
                    </TableRow>
                  ) : (
                    persons.map(person => (
                      <TableRow key={person.id}>
                        <TableCell className="tabular-nums">{person.id}</TableCell>
                        <TableCell className="tabular-nums">{person.user_id || '-'}</TableCell>
                        <TableCell className="font-medium text-slate-900">{person.first_name}</TableCell>
                        <TableCell className="font-medium text-slate-900">{person.last_name}</TableCell>
                        <TableCell className="tabular-nums">{person.date_of_birth ? new Date(person.date_of_birth).toLocaleDateString() : '-'}</TableCell>
                        <TableCell className="capitalize">{person.gender || '-'}</TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            )}

            {activeTab === 'profiles' && (
              <Table>
                <TableHeader>
                  <TableHead>ID</TableHead>
                  <TableHead>User ID</TableHead>
                  <TableHead>Phone Number</TableHead>
                  <TableHead>Avatar</TableHead>
                </TableHeader>
                <TableBody>
                  {profiles.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={4} className="text-center text-slate-500">No profiles found.</TableCell>
                    </TableRow>
                  ) : (
                    profiles.map(profile => (
                      <TableRow key={profile.id}>
                        <TableCell className="tabular-nums">{profile.id}</TableCell>
                        <TableCell className="tabular-nums">{profile.user_id}</TableCell>
                        <TableCell className="font-medium text-slate-900">{profile.phone_number || '-'}</TableCell>
                        <TableCell>
                           {profile.profile_picture_url ? (
                             <img src={profile.profile_picture_url} alt="Avatar" className="w-8 h-8 rounded-full object-cover" />
                           ) : (
                             <div className="w-8 h-8 rounded-full bg-slate-200"></div>
                           )}
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            )}

            {activeTab === 'player_lookup' && (
              <Table>
                <TableHeader>
                  <TableHead>ID</TableHead>
                  <TableHead>Person ID</TableHead>
                  <TableHead>First Name</TableHead>
                  <TableHead>Last Name</TableHead>
                </TableHeader>
                <TableBody>
                  {playerLookups.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={4} className="text-center text-slate-500">No player lookups found.</TableCell>
                    </TableRow>
                  ) : (
                    playerLookups.map(lookup => (
                      <TableRow key={lookup.id}>
                        <TableCell className="tabular-nums">{lookup.id}</TableCell>
                        <TableCell className="tabular-nums">{lookup.person_id}</TableCell>
                        <TableCell className="font-medium text-slate-900">{lookup.first_name}</TableCell>
                        <TableCell className="font-medium text-slate-900">{lookup.last_name}</TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
