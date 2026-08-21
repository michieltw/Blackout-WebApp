import { useEffect, useState } from 'react'
import { fetchTableData } from '@/lib/api'
import { Database } from '@/types/supabase'
import { Table, TableHeader, TableHead, TableBody, TableRow, TableCell } from '@/components/ui/Table'
import { Button } from '@/components/ui/Button'

type DevelopmentPlan = Database['public']['Tables']['player_development_plans']['Row']
type PlayerRating = Database['public']['Tables']['player_ratings']['Row']
type PlayerInjury = Database['public']['Tables']['player_injuries']['Row']
type PlayerContract = Database['public']['Tables']['player_contracts']['Row']
type PlayerSalary = Database['public']['Tables']['player_salary']['Row']
type CoachingNote = Database['public']['Tables']['coaching_notes']['Row']
type Playbook = Database['public']['Tables']['playbooks']['Row']
type PlaybookDiagram = Database['public']['Tables']['playbook_diagrams']['Row']
type DevelopmentMilestone = Database['public']['Tables']['development_milestones']['Row']

export function PlayerProgression() {
  const [developmentPlans, setDevelopmentPlans] = useState<DevelopmentPlan[]>([])
  const [playerRatings, setPlayerRatings] = useState<PlayerRating[]>([])
  const [playerInjuries, setPlayerInjuries] = useState<PlayerInjury[]>([])
  const [playerContracts, setPlayerContracts] = useState<PlayerContract[]>([])
  const [playerSalaries, setPlayerSalaries] = useState<PlayerSalary[]>([])

  const [coachingNotes, setCoachingNotes] = useState<CoachingNote[]>([])
  const [playbooks, setPlaybooks] = useState<Playbook[]>([])
  const [playbookDiagrams, setPlaybookDiagrams] = useState<PlaybookDiagram[]>([])
  const [developmentMilestones, setDevelopmentMilestones] = useState<DevelopmentMilestone[]>([])

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function load() {
      try {
        const [
          plansData,
          ratingsData,
          injuriesData,
          contractsData,
          salariesData,
          notesData,
          playbooksData,
          diagramsData,
          milestonesData
        ] = await Promise.all([
          fetchTableData('player_development_plans'),
          fetchTableData('player_ratings'),
          fetchTableData('player_injuries'),
          fetchTableData('player_contracts'),
          fetchTableData('player_salary'),
          fetchTableData('coaching_notes'),
          fetchTableData('playbooks'),
          fetchTableData('playbook_diagrams'),
          fetchTableData('development_milestones')
        ])

        setDevelopmentPlans(plansData || [])
        setPlayerRatings(ratingsData || [])
        setPlayerInjuries(injuriesData || [])
        setPlayerContracts(contractsData || [])
        setPlayerSalaries(salariesData || [])
        setCoachingNotes(notesData || [])
        setPlaybooks(playbooksData || [])
        setPlaybookDiagrams(diagramsData || [])
        setDevelopmentMilestones(milestonesData || [])
      } catch (err: any) {
        setError(err.message || 'Failed to fetch player progression data')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Player Progression & Contracts</h1>
        <div className="space-x-2">
          <Button variant="secondary">Log Injury</Button>
          <Button variant="primary">Create Plan</Button>
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
          {/* Development Plans */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Development Plans</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              {developmentPlans.length === 0 ? (
                <div className="text-sm text-slate-500">No development plans found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Player ID</TableHead>
                    <TableHead>Coach ID</TableHead>
                    <TableHead>Goal</TableHead>
                    <TableHead>Status</TableHead>
                  </TableHeader>
                  <TableBody>
                    {developmentPlans.map((dp) => (
                      <TableRow key={dp.id}>
                        <TableCell className="tabular-nums">{dp.id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{dp.player_id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{dp.coach_id}</TableCell>
                        <TableCell className="text-slate-500">{dp.goal_description}</TableCell>
                        <TableCell className="text-slate-500 capitalize">{dp.status || '-'}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* Player Ratings */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Player Ratings</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              {playerRatings.length === 0 ? (
                <div className="text-sm text-slate-500">No ratings found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Player ID</TableHead>
                    <TableHead>Rater ID</TableHead>
                    <TableHead>Rating</TableHead>
                    <TableHead>Date</TableHead>
                  </TableHeader>
                  <TableBody>
                    {playerRatings.map((pr) => (
                      <TableRow key={pr.id}>
                        <TableCell className="tabular-nums">{pr.id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{pr.player_id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{pr.rater_user_id}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{pr.rating_value}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{pr.rating_date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* Player Injuries */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Injury Reports</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              {playerInjuries.length === 0 ? (
                <div className="text-sm text-slate-500">No injury reports found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Player ID</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Start Date</TableHead>
                    <TableHead>Active</TableHead>
                  </TableHeader>
                  <TableBody>
                    {playerInjuries.map((pi) => (
                      <TableRow key={pi.id}>
                        <TableCell className="tabular-nums">{pi.id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{pi.player_id}</TableCell>
                        <TableCell className="text-slate-500">{pi.injury_type}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{pi.unavailable_start_date}</TableCell>
                        <TableCell className="text-slate-500">{pi.is_active ? 'Yes' : 'No'}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* Player Contracts */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Player Contracts</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              {playerContracts.length === 0 ? (
                <div className="text-sm text-slate-500">No contracts found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Player ID</TableHead>
                    <TableHead>Team ID</TableHead>
                    <TableHead>Start Date</TableHead>
                    <TableHead>End Date</TableHead>
                  </TableHeader>
                  <TableBody>
                    {playerContracts.map((pc) => (
                      <TableRow key={pc.id}>
                        <TableCell className="tabular-nums">{pc.id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{pc.player_id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{pc.team_id}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{pc.contract_start_date}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{pc.contract_end_date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* Player Salaries */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Salaries</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              {playerSalaries.length === 0 ? (
                <div className="text-sm text-slate-500">No salary records found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Player ID</TableHead>
                    <TableHead>Team ID</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Currency</TableHead>
                  </TableHeader>
                  <TableBody>
                    {playerSalaries.map((ps) => (
                      <TableRow key={ps.id}>
                        <TableCell className="tabular-nums">{ps.id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{ps.player_id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{ps.team_id}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{ps.salary_amount}</TableCell>
                        <TableCell className="text-slate-500">{ps.currency || 'USD'}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>


          {/* Coaching Notes */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Coaching Notes</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              {coachingNotes.length === 0 ? (
                <div className="text-sm text-slate-500">No coaching notes found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Coach ID</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Visibility</TableHead>
                  </TableHeader>
                  <TableBody>
                    {coachingNotes.map((note) => (
                      <TableRow key={note.id}>
                        <TableCell className="tabular-nums">{note.id}</TableCell>
                        <TableCell className="tabular-nums">{note.coach_id}</TableCell>
                        <TableCell className="font-medium text-slate-900">{note.title}</TableCell>
                        <TableCell className="text-slate-500 capitalize">{note.visibility || '-'}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* Playbooks */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Playbooks</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              {playbooks.length === 0 ? (
                <div className="text-sm text-slate-500">No playbooks found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Team ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Active</TableHead>
                  </TableHeader>
                  <TableBody>
                    {playbooks.map((pb) => (
                      <TableRow key={pb.id}>
                        <TableCell className="tabular-nums">{pb.id}</TableCell>
                        <TableCell className="tabular-nums">{pb.team_id}</TableCell>
                        <TableCell className="font-medium text-slate-900">{pb.name}</TableCell>
                        <TableCell className="text-slate-500">{pb.is_active ? 'Yes' : 'No'}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* Playbook Diagrams */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Playbook Diagrams</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              {playbookDiagrams.length === 0 ? (
                <div className="text-sm text-slate-500">No playbook diagrams found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Playbook ID</TableHead>
                    <TableHead>Play Name</TableHead>
                  </TableHeader>
                  <TableBody>
                    {playbookDiagrams.map((pd) => (
                      <TableRow key={pd.id}>
                        <TableCell className="tabular-nums">{pd.id}</TableCell>
                        <TableCell className="tabular-nums">{pd.playbook_id}</TableCell>
                        <TableCell className="font-medium text-slate-900">{pd.play_name}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* Development Milestones */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Development Milestones</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              {developmentMilestones.length === 0 ? (
                <div className="text-sm text-slate-500">No development milestones found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Plan ID</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Target Date</TableHead>
                    <TableHead>Achieved</TableHead>
                  </TableHeader>
                  <TableBody>
                    {developmentMilestones.map((dm) => (
                      <TableRow key={dm.id}>
                        <TableCell className="tabular-nums">{dm.id}</TableCell>
                        <TableCell className="tabular-nums">{dm.plan_id}</TableCell>
                        <TableCell className="font-medium text-slate-900">{dm.milestone_description}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{dm.target_date || '-'}</TableCell>
                        <TableCell className="text-slate-500">{dm.achieved ? 'Yes' : 'No'}</TableCell>
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
