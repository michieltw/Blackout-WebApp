import { useEffect, useState } from 'react'
import { fetchTableData } from '@/lib/api'
import { Database } from '@/types/supabase'
import { Table, TableHeader, TableHead, TableBody, TableRow, TableCell } from '@/components/ui/Table'
import { Button } from '@/components/ui/Button'

type FanProfile = Database['public']['Tables']['fan_profiles']['Row']
type FanMembership = Database['public']['Tables']['fan_memberships']['Row']
type LoyaltyPoints = Database['public']['Tables']['loyalty_points']['Row']
type SeasonTicket = Database['public']['Tables']['season_tickets']['Row']
type FanClub = Database['public']['Tables']['fan_clubs']['Row']
type MembershipTier = Database['public']['Tables']['membership_tiers']['Row']
type Membership = Database['public']['Tables']['memberships']['Row']
type FanClubMember = Database['public']['Tables']['fan_club_members']['Row']

export function FanBase() {
  const [fanProfiles, setFanProfiles] = useState<FanProfile[]>([])
  const [fanMemberships, setFanMemberships] = useState<FanMembership[]>([])
  const [loyaltyPoints, setLoyaltyPoints] = useState<LoyaltyPoints[]>([])
  const [seasonTickets, setSeasonTickets] = useState<SeasonTicket[]>([])
  const [fanClubs, setFanClubs] = useState<FanClub[]>([])
  const [membershipTiers, setMembershipTiers] = useState<MembershipTier[]>([])
  const [memberships, setMemberships] = useState<Membership[]>([])
  const [fanClubMembers, setFanClubMembers] = useState<FanClubMember[]>([])

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function load() {
      try {
        const [
          fpData,
          fmData,
          lpData,
          stData,
          fcData,
          mtData,
          membershipsData,
          fanClubMembersData
        ] = await Promise.all([
          fetchTableData('fan_profiles'),
          fetchTableData('fan_memberships'),
          fetchTableData('loyalty_points'),
          fetchTableData('season_tickets'),
          fetchTableData('fan_clubs'),
          fetchTableData('membership_tiers'),
          fetchTableData('memberships'),
          fetchTableData('fan_club_members')
        ])

        setFanProfiles(fpData || [])
        setFanMemberships(fmData || [])
        setLoyaltyPoints(lpData || [])
        setSeasonTickets(stData || [])
        setFanClubs(fcData || [])
        setMembershipTiers(mtData || [])
        setMemberships(membershipsData || [])
        setFanClubMembers(fanClubMembersData || [])
      } catch (err: any) {
        setError(err.message || 'Failed to fetch fan base data')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Fan Base & Memberships</h1>
        <div className="space-x-2">
          <Button variant="secondary">Create Fan Club</Button>
          <Button variant="primary">Manage Tiers</Button>
        </div>
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
          {/* Fan Profiles */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Fan Profiles</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm overflow-x-auto">
              {fanProfiles.length === 0 ? (
                <div className="text-sm text-slate-500">No fan profiles found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Person ID</TableHead>
                    <TableHead>Favorite Team</TableHead>
                    <TableHead>Newsletter</TableHead>
                    <TableHead>VIP</TableHead>
                  </TableHeader>
                  <TableBody>
                    {fanProfiles.map((fp) => (
                      <TableRow key={fp.id}>
                        <TableCell className="tabular-nums">{fp.id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{fp.person_id}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{fp.favorite_team_id || '-'}</TableCell>
                        <TableCell className="text-slate-500">{fp.newsletter_subscribed ? 'Yes' : 'No'}</TableCell>
                        <TableCell className="text-slate-500">{fp.vip_member ? 'Yes' : 'No'}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* Membership Tiers */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Membership Tiers</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm overflow-x-auto">
              {membershipTiers.length === 0 ? (
                <div className="text-sm text-slate-500">No membership tiers configured.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Level</TableHead>
                    <TableHead>Annual Fee</TableHead>
                    <TableHead>Active</TableHead>
                  </TableHeader>
                  <TableBody>
                    {membershipTiers.map((mt) => (
                      <TableRow key={mt.id}>
                        <TableCell className="tabular-nums">{mt.id}</TableCell>
                        <TableCell className="font-medium text-slate-900">{mt.name}</TableCell>
                        <TableCell className="text-slate-500 capitalize">{mt.tier_level}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{mt.annual_fee || '-'}</TableCell>
                        <TableCell className="text-slate-500">{mt.is_active ? 'Yes' : 'No'}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* Fan Memberships */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Fan Memberships</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm overflow-x-auto">
              {fanMemberships.length === 0 ? (
                <div className="text-sm text-slate-500">No fan memberships found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>User ID</TableHead>
                    <TableHead>Tier ID</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Enrollment Date</TableHead>
                  </TableHeader>
                  <TableBody>
                    {fanMemberships.map((fm) => (
                      <TableRow key={fm.id}>
                        <TableCell className="tabular-nums">{fm.id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{fm.user_id}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{fm.membership_tier_id}</TableCell>
                        <TableCell className="text-slate-500 capitalize">{fm.membership_status || '-'}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{fm.enrollment_date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* Loyalty Points */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Loyalty Points Transactions</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm overflow-x-auto">
              {loyaltyPoints.length === 0 ? (
                <div className="text-sm text-slate-500">No loyalty points history found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Membership ID</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Date Earned</TableHead>
                  </TableHeader>
                  <TableBody>
                    {loyaltyPoints.map((lp) => (
                      <TableRow key={lp.id}>
                        <TableCell className="tabular-nums">{lp.id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{lp.fan_membership_id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{lp.points_amount}</TableCell>
                        <TableCell className="text-slate-500 capitalize">{lp.transaction_type}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{lp.points_earned_date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* Season Tickets */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Season Tickets</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm overflow-x-auto">
              {seasonTickets.length === 0 ? (
                <div className="text-sm text-slate-500">No season tickets found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>User ID</TableHead>
                    <TableHead>Team ID</TableHead>
                    <TableHead>Package Name</TableHead>
                    <TableHead>Ticket Count</TableHead>
                  </TableHeader>
                  <TableBody>
                    {seasonTickets.map((st) => (
                      <TableRow key={st.id}>
                        <TableCell className="tabular-nums">{st.id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{st.user_id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{st.team_id}</TableCell>
                        <TableCell className="text-slate-500">{st.ticket_package_name}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{st.ticket_count || '-'}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* Fan Clubs */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Fan Clubs</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm overflow-x-auto">
              {fanClubs.length === 0 ? (
                <div className="text-sm text-slate-500">No fan clubs found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Team ID</TableHead>
                    <TableHead>Members</TableHead>
                    <TableHead>Official</TableHead>
                  </TableHeader>
                  <TableBody>
                    {fanClubs.map((fc) => (
                      <TableRow key={fc.id}>
                        <TableCell className="tabular-nums">{fc.id}</TableCell>
                        <TableCell className="font-medium text-slate-900">{fc.fan_club_name}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{fc.team_id || '-'}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{fc.member_count || 0}</TableCell>
                        <TableCell className="text-slate-500">{fc.is_official ? 'Yes' : 'No'}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>



          {/* Memberships */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Memberships</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              {memberships.length === 0 ? (
                <div className="text-sm text-slate-500">No memberships found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>User ID</TableHead>
                    <TableHead>Tier ID</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Valid From</TableHead>
                    <TableHead>Valid Until</TableHead>
                  </TableHeader>
                  <TableBody>
                    {memberships.map((membership) => (
                      <TableRow key={membership.id}>
                        <TableCell className="tabular-nums">{membership.id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{membership.person_id}</TableCell>
                        <TableCell className="tabular-nums">{membership.tier_id}</TableCell>
                        <TableCell className="capitalize">{membership.status || '-'}</TableCell>
                        <TableCell className="tabular-nums text-slate-500">{membership.join_date}</TableCell>
                        <TableCell className="tabular-nums text-slate-500">{membership.end_date || 'Forever'}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* Fan Club Members */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Fan Club Members</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              {fanClubMembers.length === 0 ? (
                <div className="text-sm text-slate-500">No fan club members found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Fan Club ID</TableHead>
                    <TableHead>Fan Profile ID</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Joined Date</TableHead>
                  </TableHeader>
                  <TableBody>
                    {fanClubMembers.map((member) => (
                      <TableRow key={member.id}>
                        <TableCell className="tabular-nums">{member.id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{member.fan_club_id}</TableCell>
                        <TableCell className="tabular-nums">{member.user_id}</TableCell>
                        <TableCell className="capitalize">{member.role || 'Member'}</TableCell>
                        <TableCell className="tabular-nums text-slate-500">{member.join_date}</TableCell>
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
