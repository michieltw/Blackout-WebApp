import { useEffect, useState } from 'react'
import { fetchTableData } from '@/lib/api'
import { Database } from '@/types/supabase'
import { Table, TableHeader, TableHead, TableBody, TableRow, TableCell } from '@/components/ui/Table'
import { Button } from '@/components/ui/Button'

type Suspension = Database['public']['Tables']['suspensions']['Row']
type PlayerDiscipline = Database['public']['Tables']['player_discipline']['Row']
type PenaltyBoxEvent = Database['public']['Tables']['penalty_box_events']['Row']
type LeagueBylaw = Database['public']['Tables']['league_bylaws']['Row']
type RuleEnforcementLog = Database['public']['Tables']['rule_enforcement_log']['Row']
type Appeal = Database['public']['Tables']['appeals']['Row']
type IncidentReport = Database['public']['Tables']['incident_reports']['Row']
type IncidentInvestigation = Database['public']['Tables']['incident_investigation']['Row']
type AppealWorkflowStep = Database['public']['Tables']['appeal_workflow_steps']['Row']

export function RulesAndDiscipline() {
  const [suspensions, setSuspensions] = useState<Suspension[]>([])
  const [playerDiscipline, setPlayerDiscipline] = useState<PlayerDiscipline[]>([])
  const [_penaltyBoxEvents, setPenaltyBoxEvents] = useState<PenaltyBoxEvent[]>([])
  const [leagueBylaws, setLeagueBylaws] = useState<LeagueBylaw[]>([])
  const [_ruleEnforcementLogs, setRuleEnforcementLogs] = useState<RuleEnforcementLog[]>([])
  const [appeals, setAppeals] = useState<Appeal[]>([])
  const [incidentReports, setIncidentReports] = useState<IncidentReport[]>([])
  const [investigations, setInvestigations] = useState<IncidentInvestigation[]>([])
  const [appealSteps, setAppealSteps] = useState<AppealWorkflowStep[]>([])

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function load() {
      try {
        const [
          suspensionsData,
          disciplineData,
          penaltyBoxData,
          bylawsData,
          enforcementData,
          appealsData,
          incidentsData,
          investigationsData,
          appealStepsData
        ] = await Promise.all([
          fetchTableData('suspensions'),
          fetchTableData('player_discipline'),
          fetchTableData('penalty_box_events'),
          fetchTableData('league_bylaws'),
          fetchTableData('rule_enforcement_log'),
          fetchTableData('appeals'),
          fetchTableData('incident_reports'),
          fetchTableData('incident_investigation'),
          fetchTableData('appeal_workflow_steps')
        ])

        setSuspensions(suspensionsData || [])
        setPlayerDiscipline(disciplineData || [])
        setPenaltyBoxEvents(penaltyBoxData || [])
        setLeagueBylaws(bylawsData || [])
        setRuleEnforcementLogs(enforcementData || [])
        setAppeals(appealsData || [])
        setIncidentReports(incidentsData || [])
        setInvestigations(investigationsData || [])
        setAppealSteps(appealStepsData || [])
      } catch (err: any) {
        setError(err.message || 'Failed to fetch rules and discipline data')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Rules & Discipline</h1>
        <div className="space-x-2">
          <Button variant="secondary">File Report</Button>
          <Button variant="primary">Issue Discipline</Button>
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
          {/* Suspensions */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Active Suspensions</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              {suspensions.length === 0 ? (
                <div className="text-sm text-slate-500">No suspensions found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Player ID</TableHead>
                    <TableHead>Reason</TableHead>
                    <TableHead>Games</TableHead>
                    <TableHead>Status</TableHead>
                  </TableHeader>
                  <TableBody>
                    {suspensions.map((s) => (
                      <TableRow key={s.id}>
                        <TableCell className="tabular-nums">{s.id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{s.player_id}</TableCell>
                        <TableCell className="text-slate-500 capitalize">{s.reason.replace(/_/g, ' ')}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{s.suspension_length_games}</TableCell>
                        <TableCell className="text-slate-500 capitalize">{s.status || '-'}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* Player Discipline */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Discipline History</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              {playerDiscipline.length === 0 ? (
                <div className="text-sm text-slate-500">No discipline history found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Player ID</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Reason</TableHead>
                    <TableHead>Date Imposed</TableHead>
                  </TableHeader>
                  <TableBody>
                    {playerDiscipline.map((pd) => (
                      <TableRow key={pd.id}>
                        <TableCell className="tabular-nums">{pd.id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{pd.player_id}</TableCell>
                        <TableCell className="text-slate-500 capitalize">{pd.discipline_type.replace(/_/g, ' ')}</TableCell>
                        <TableCell className="text-slate-500">{pd.reason}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{pd.imposed_date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* Incident Reports */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Incident Reports</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              {incidentReports.length === 0 ? (
                <div className="text-sm text-slate-500">No incident reports found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Game ID</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Reported Date</TableHead>
                  </TableHeader>
                  <TableBody>
                    {incidentReports.map((ir) => (
                      <TableRow key={ir.id}>
                        <TableCell className="tabular-nums">{ir.id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{ir.game_id || '-'}</TableCell>
                        <TableCell className="text-slate-500 capitalize">{ir.incident_type.replace(/_/g, ' ')}</TableCell>
                        <TableCell className="text-slate-500 capitalize">{ir.status || '-'}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{ir.report_date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* Appeals */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Appeals</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              {appeals.length === 0 ? (
                <div className="text-sm text-slate-500">No appeals found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Entity</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date Filed</TableHead>
                  </TableHeader>
                  <TableBody>
                    {appeals.map((a) => (
                      <TableRow key={a.id}>
                        <TableCell className="tabular-nums">{a.id}</TableCell>
                        <TableCell className="text-slate-500 capitalize">{a.appeal_type.replace(/_/g, ' ')}</TableCell>
                        <TableCell className="text-slate-500">{a.entity_type} {a.entity_id}</TableCell>
                        <TableCell className="text-slate-500 capitalize">{a.status || '-'}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{a.filed_date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* League Bylaws */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">League Bylaws</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              {leagueBylaws.length === 0 ? (
                <div className="text-sm text-slate-500">No bylaws found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Version</TableHead>
                    <TableHead>Effective Date</TableHead>
                  </TableHeader>
                  <TableBody>
                    {leagueBylaws.map((b) => (
                      <TableRow key={b.id}>
                        <TableCell className="tabular-nums">{b.id}</TableCell>
                        <TableCell className="font-medium text-slate-900">{b.title}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{b.version}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{b.effective_date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>



          {/* Incident Investigations */}
          <div className="grid gap-4 mt-8">
            <h2 className="text-lg font-semibold text-slate-800">Incident Investigations</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              {investigations.length === 0 ? (
                <div className="text-sm text-slate-500">No investigations found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Incident ID</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Findings</TableHead>
                  </TableHeader>
                  <TableBody>
                    {investigations.map((inv) => (
                      <TableRow key={inv.id}>
                        <TableCell className="tabular-nums">{inv.id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{inv.incident_id}</TableCell>
                        <TableCell className="capitalize">{inv.status || '-'}</TableCell>
                        <TableCell className="text-slate-500 line-clamp-2">{inv.findings || '-'}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* Appeal Workflow Steps */}
          <div className="grid gap-4 mt-8">
            <h2 className="text-lg font-semibold text-slate-800">Appeal Workflow Steps</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              {appealSteps.length === 0 ? (
                <div className="text-sm text-slate-500">No appeal steps found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Appeal ID</TableHead>
                    <TableHead>Step Name</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                  </TableHeader>
                  <TableBody>
                    {appealSteps.map((step) => (
                      <TableRow key={step.id}>
                        <TableCell className="tabular-nums">{step.id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{step.appeal_id}</TableCell>
                        <TableCell className="font-medium text-slate-900">{step.action}</TableCell>
                        <TableCell className="capitalize">{step.notes || '-'}</TableCell>
                        <TableCell className="tabular-nums text-slate-500">{step.timestamp || '-'}</TableCell>
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
