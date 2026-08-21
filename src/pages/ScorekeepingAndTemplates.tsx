import { useEffect, useState } from 'react'
import { FileCode, Settings2, Clock, CheckSquare, Users, Activity, Layers, Link as LinkIcon, History } from 'lucide-react'
import { fetchTableData } from '../lib/api'
import { Database as DB } from '../types/supabase'

// Template Types
type TemplateEntity = DB['public']['Tables']['template_entity']['Row']
type TemplateLink = DB['public']['Tables']['template_link']['Row']
type TemplateSettings = DB['public']['Tables']['template_settings']['Row']
type TemplateLog = DB['public']['Tables']['template_log']['Row']

// Scorekeeping Types
type ScorekeeperDefault = DB['public']['Tables']['scorekeeper_default_settings']['Row']
type ScorekeeperGame = DB['public']['Tables']['scorekeeper_game_settings']['Row']
type ScorekeeperSession = DB['public']['Tables']['scorekeeper_sessions']['Row']

// Game Workflow Types
type GameApproval = DB['public']['Tables']['game_approvals']['Row']
type GameAttendance = DB['public']['Tables']['game_attendance']['Row']
type GameCaptain = DB['public']['Tables']['game_captains']['Row']
type GamePeriod = DB['public']['Tables']['game_periods']['Row']

export function ScorekeepingAndTemplates() {
  const [activeTab, setActiveTab] = useState<'templates' | 'scorekeeping' | 'workflows'>('templates')

  // Templates State
  const [templateEntities, setTemplateEntities] = useState<TemplateEntity[]>([])
  const [templateLinks, setTemplateLinks] = useState<TemplateLink[]>([])
  const [templateSettings, setTemplateSettings] = useState<TemplateSettings[]>([])
  const [templateLogs, setTemplateLogs] = useState<TemplateLog[]>([])
  const [isLoadingTemplates, setIsLoadingTemplates] = useState(true)

  // Scorekeeping State
  const [defaultSettings, setDefaultSettings] = useState<ScorekeeperDefault[]>([])
  const [gameSettings, setGameSettings] = useState<ScorekeeperGame[]>([])
  const [sessions, setSessions] = useState<ScorekeeperSession[]>([])
  const [isLoadingScorekeeping, setIsLoadingScorekeeping] = useState(true)

  // Workflows State
  const [approvals, setApprovals] = useState<GameApproval[]>([])
  const [attendance, setAttendance] = useState<GameAttendance[]>([])
  const [captains, setCaptains] = useState<GameCaptain[]>([])
  const [periods, setPeriods] = useState<GamePeriod[]>([])
  const [isLoadingWorkflows, setIsLoadingWorkflows] = useState(true)

  useEffect(() => {
    if (activeTab === 'templates') {
      const loadTemplates = async () => {
        setIsLoadingTemplates(true)
        const [entities, links, settings, logs] = await Promise.all([
          fetchTableData('template_entity'),
          fetchTableData('template_link'),
          fetchTableData('template_settings'),
          fetchTableData('template_log')
        ])
        setTemplateEntities(entities || [])
        setTemplateLinks(links || [])
        setTemplateSettings(settings || [])
        setTemplateLogs(logs || [])
        setIsLoadingTemplates(false)
      }
      loadTemplates()
    } else if (activeTab === 'scorekeeping') {
      const loadScorekeeping = async () => {
        setIsLoadingScorekeeping(true)
        const [defaults, game, sess] = await Promise.all([
          fetchTableData('scorekeeper_default_settings'),
          fetchTableData('scorekeeper_game_settings'),
          fetchTableData('scorekeeper_sessions')
        ])
        setDefaultSettings(defaults || [])
        setGameSettings(game || [])
        setSessions(sess || [])
        setIsLoadingScorekeeping(false)
      }
      loadScorekeeping()
    } else if (activeTab === 'workflows') {
      const loadWorkflows = async () => {
        setIsLoadingWorkflows(true)
        const [apps, att, caps, pers] = await Promise.all([
          fetchTableData('game_approvals'),
          fetchTableData('game_attendance'),
          fetchTableData('game_captains'),
          fetchTableData('game_periods')
        ])
        setApprovals(apps || [])
        setAttendance(att || [])
        setCaptains(caps || [])
        setPeriods(pers || [])
        setIsLoadingWorkflows(false)
      }
      loadWorkflows()
    }
  }, [activeTab])

  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'N/A'
    return new Date(dateString).toLocaleString()
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Scorekeeping & Templates</h1>
        <p className="text-slate-500 mt-1">Manage game templates, scorekeeper configurations, and game workflows.</p>
      </div>

      <div className="border-b border-slate-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('templates')}
            className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 ${
              activeTab === 'templates'
                ? 'border-emerald-500 text-emerald-600'
                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
            }`}
          >
            <Layers className="w-4 h-4" />
            Templates
          </button>
          <button
            onClick={() => setActiveTab('scorekeeping')}
            className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 ${
              activeTab === 'scorekeeping'
                ? 'border-emerald-500 text-emerald-600'
                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
            }`}
          >
            <Clock className="w-4 h-4" />
            Scorekeeping Setup
          </button>
          <button
            onClick={() => setActiveTab('workflows')}
            className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 ${
              activeTab === 'workflows'
                ? 'border-emerald-500 text-emerald-600'
                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
            }`}
          >
            <Activity className="w-4 h-4" />
            Game Workflows
          </button>
        </nav>
      </div>

      {activeTab === 'templates' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <div className="p-6 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <FileCode className="w-5 h-5 text-emerald-600" />
                  <h2 className="text-lg font-semibold text-slate-900">Template Entities</h2>
                </div>
              </div>
              {isLoadingTemplates ? (
                <div className="p-6 text-center text-slate-500">Loading templates...</div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                      <tr>
                        <th className="px-6 py-3">ID</th>
                        <th className="px-6 py-3">Name</th>
                        <th className="px-6 py-3">Code</th>
                        <th className="px-6 py-3">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {templateEntities.length === 0 ? (
                        <tr>
                          <td colSpan={4} className="px-6 py-4 text-center text-slate-500">No templates found.</td>
                        </tr>
                      ) : (
                        templateEntities.map(entity => (
                          <tr key={entity.id} className="hover:bg-slate-50">
                            <td className="px-6 py-4 tabular-nums">{entity.id}</td>
                            <td className="px-6 py-4 font-medium">{entity.name}</td>
                            <td className="px-6 py-4 font-mono text-xs">{entity.code || '-'}</td>
                            <td className="px-6 py-4">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${entity.is_active ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-700'}`}>
                                {entity.is_active ? 'Active' : 'Inactive'}
                              </span>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <div className="p-6 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <LinkIcon className="w-5 h-5 text-emerald-600" />
                  <h2 className="text-lg font-semibold text-slate-900">Template Links</h2>
                </div>
              </div>
              {isLoadingTemplates ? (
                <div className="p-6 text-center text-slate-500">Loading links...</div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                      <tr>
                        <th className="px-6 py-3">Entity A</th>
                        <th className="px-6 py-3">Entity B</th>
                        <th className="px-6 py-3">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {templateLinks.length === 0 ? (
                        <tr>
                          <td colSpan={3} className="px-6 py-4 text-center text-slate-500">No template links.</td>
                        </tr>
                      ) : (
                        templateLinks.map(link => (
                          <tr key={link.id} className="hover:bg-slate-50">
                            <td className="px-6 py-4 tabular-nums">{link.entity_a_id}</td>
                            <td className="px-6 py-4 tabular-nums">{link.entity_b_id}</td>
                            <td className="px-6 py-4">
                              <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded-md text-xs">
                                {link.status || 'Linked'}
                              </span>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <div className="p-6 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <Settings2 className="w-5 h-5 text-emerald-600" />
                  <h2 className="text-lg font-semibold text-slate-900">Template Settings</h2>
                </div>
              </div>
              {isLoadingTemplates ? (
                <div className="p-6 text-center text-slate-500">Loading settings...</div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                      <tr>
                        <th className="px-6 py-3">Org ID</th>
                        <th className="px-6 py-3">Key</th>
                        <th className="px-6 py-3">Value</th>
                        <th className="px-6 py-3">Enabled</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {templateSettings.length === 0 ? (
                        <tr>
                          <td colSpan={4} className="px-6 py-4 text-center text-slate-500">No settings defined.</td>
                        </tr>
                      ) : (
                        templateSettings.map(setting => (
                          <tr key={setting.id} className="hover:bg-slate-50">
                            <td className="px-6 py-4 tabular-nums">{setting.organization_id}</td>
                            <td className="px-6 py-4 font-medium">{setting.setting_key}</td>
                            <td className="px-6 py-4 truncate max-w-[150px]">{setting.setting_value}</td>
                            <td className="px-6 py-4">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${setting.is_enabled ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-700'}`}>
                                {setting.is_enabled ? 'Yes' : 'No'}
                              </span>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <div className="p-6 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <History className="w-5 h-5 text-emerald-600" />
                  <h2 className="text-lg font-semibold text-slate-900">Template Logs</h2>
                </div>
              </div>
              {isLoadingTemplates ? (
                <div className="p-6 text-center text-slate-500">Loading logs...</div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                      <tr>
                        <th className="px-6 py-3">Action</th>
                        <th className="px-6 py-3">Entity Type/ID</th>
                        <th className="px-6 py-3">Timestamp</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {templateLogs.length === 0 ? (
                        <tr>
                          <td colSpan={3} className="px-6 py-4 text-center text-slate-500">No logs recorded.</td>
                        </tr>
                      ) : (
                        templateLogs.map(log => (
                          <tr key={log.id} className="hover:bg-slate-50">
                            <td className="px-6 py-4 font-medium">{log.action}</td>
                            <td className="px-6 py-4">{log.entity_type} <span className="tabular-nums">({log.entity_id})</span></td>
                            <td className="px-6 py-4 text-slate-500">{formatDate(log.created_at)}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'scorekeeping' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <div className="p-6 border-b border-slate-200">
                <h2 className="text-lg font-semibold text-slate-900">Default Scorekeeping Settings</h2>
              </div>
              {isLoadingScorekeeping ? (
                <div className="p-6 text-center text-slate-500">Loading defaults...</div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                      <tr>
                        <th className="px-6 py-3">Org ID</th>
                        <th className="px-6 py-3">Periods (min)</th>
                        <th className="px-6 py-3">Overtime</th>
                        <th className="px-6 py-3">Auto Clock</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {defaultSettings.length === 0 ? (
                        <tr>
                          <td colSpan={4} className="px-6 py-4 text-center text-slate-500">No defaults set.</td>
                        </tr>
                      ) : (
                        defaultSettings.map(setting => (
                          <tr key={setting.id} className="hover:bg-slate-50">
                            <td className="px-6 py-4 tabular-nums">{setting.organization_id}</td>
                            <td className="px-6 py-4 tabular-nums">{setting.period_duration_minutes || '-'}</td>
                            <td className="px-6 py-4">{setting.overtime_format || '-'}</td>
                            <td className="px-6 py-4">
                              <span className="text-xs text-slate-600">
                                Start: {setting.auto_clock_start ? 'Y' : 'N'} / Stop: {setting.auto_clock_stop ? 'Y' : 'N'}
                              </span>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <div className="p-6 border-b border-slate-200">
                <h2 className="text-lg font-semibold text-slate-900">Game Overrides</h2>
              </div>
              {isLoadingScorekeeping ? (
                <div className="p-6 text-center text-slate-500">Loading settings...</div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                      <tr>
                        <th className="px-6 py-3">Game ID</th>
                        <th className="px-6 py-3">Scorekeeper ID</th>
                        <th className="px-6 py-3">Periods (min)</th>
                        <th className="px-6 py-3">Overtime</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {gameSettings.length === 0 ? (
                        <tr>
                          <td colSpan={4} className="px-6 py-4 text-center text-slate-500">No game overrides.</td>
                        </tr>
                      ) : (
                        gameSettings.map(setting => (
                          <tr key={setting.id} className="hover:bg-slate-50">
                            <td className="px-6 py-4 tabular-nums">{setting.game_id}</td>
                            <td className="px-6 py-4 tabular-nums">{setting.scorekeeper_user_id || 'Unassigned'}</td>
                            <td className="px-6 py-4 tabular-nums">{setting.period_duration_minutes || '-'}</td>
                            <td className="px-6 py-4">{setting.overtime_format || '-'}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <div className="p-6 border-b border-slate-200">
              <h2 className="text-lg font-semibold text-slate-900">Active Scorekeeping Sessions</h2>
            </div>
            {isLoadingScorekeeping ? (
              <div className="p-6 text-center text-slate-500">Loading sessions...</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                    <tr>
                      <th className="px-6 py-3">Game ID</th>
                      <th className="px-6 py-3">Scorekeeper ID</th>
                      <th className="px-6 py-3">Period</th>
                      <th className="px-6 py-3">Clock (sec)</th>
                      <th className="px-6 py-3">Score (H - A)</th>
                      <th className="px-6 py-3">Started</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {sessions.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="px-6 py-4 text-center text-slate-500">No active sessions.</td>
                      </tr>
                    ) : (
                      sessions.map(sess => (
                        <tr key={sess.id} className="hover:bg-slate-50">
                          <td className="px-6 py-4 tabular-nums font-medium">{sess.game_id}</td>
                          <td className="px-6 py-4 tabular-nums">{sess.scorekeeper_user_id}</td>
                          <td className="px-6 py-4 font-medium">{sess.current_period || '-'}</td>
                          <td className="px-6 py-4 tabular-nums font-mono">{sess.period_time_seconds || 0}</td>
                          <td className="px-6 py-4 tabular-nums font-bold text-center">
                            {sess.home_team_score || 0} - {sess.away_team_score || 0}
                          </td>
                          <td className="px-6 py-4 text-slate-500 text-xs">{formatDate(sess.session_start)}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      )}

      {activeTab === 'workflows' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <div className="p-6 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <CheckSquare className="w-5 h-5 text-emerald-600" />
                  <h2 className="text-lg font-semibold text-slate-900">Game Approvals</h2>
                </div>
              </div>
              {isLoadingWorkflows ? (
                <div className="p-6 text-center text-slate-500">Loading approvals...</div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                      <tr>
                        <th className="px-6 py-3">Game ID</th>
                        <th className="px-6 py-3">Approver ID</th>
                        <th className="px-6 py-3">Status</th>
                        <th className="px-6 py-3">Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {approvals.length === 0 ? (
                        <tr>
                          <td colSpan={4} className="px-6 py-4 text-center text-slate-500">No approvals found.</td>
                        </tr>
                      ) : (
                        approvals.map(approval => (
                          <tr key={approval.id} className="hover:bg-slate-50">
                            <td className="px-6 py-4 tabular-nums">{approval.game_id}</td>
                            <td className="px-6 py-4 tabular-nums">{approval.approved_by}</td>
                            <td className="px-6 py-4">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                approval.approval_status === 'approved' ? 'bg-emerald-100 text-emerald-700' :
                                approval.approval_status === 'rejected' ? 'bg-red-100 text-red-700' :
                                'bg-amber-100 text-amber-700'
                              }`}>
                                {approval.approval_status || 'Pending'}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-slate-500">{formatDate(approval.approval_date)}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <div className="p-6 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-emerald-600" />
                  <h2 className="text-lg font-semibold text-slate-900">Game Captains</h2>
                </div>
              </div>
              {isLoadingWorkflows ? (
                <div className="p-6 text-center text-slate-500">Loading captains...</div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                      <tr>
                        <th className="px-6 py-3">Game ID</th>
                        <th className="px-6 py-3">Team / Player</th>
                        <th className="px-6 py-3">Role</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {captains.length === 0 ? (
                        <tr>
                          <td colSpan={3} className="px-6 py-4 text-center text-slate-500">No captains assigned.</td>
                        </tr>
                      ) : (
                        captains.map(captain => (
                          <tr key={captain.id} className="hover:bg-slate-50">
                            <td className="px-6 py-4 tabular-nums">{captain.game_id}</td>
                            <td className="px-6 py-4 tabular-nums">T: {captain.team_id} / P: {captain.player_id}</td>
                            <td className="px-6 py-4">
                              {captain.is_captain ? (
                                <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-md text-xs font-bold">C</span>
                              ) : captain.is_alternate_captain ? (
                                <span className="px-2 py-1 bg-amber-100 text-amber-700 rounded-md text-xs font-bold">A</span>
                              ) : '-'}
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <div className="p-6 border-b border-slate-200">
                <h2 className="text-lg font-semibold text-slate-900">Game Periods Log</h2>
              </div>
              {isLoadingWorkflows ? (
                <div className="p-6 text-center text-slate-500">Loading periods...</div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                      <tr>
                        <th className="px-6 py-3">Game ID</th>
                        <th className="px-6 py-3">Period</th>
                        <th className="px-6 py-3">Goals (H - A)</th>
                        <th className="px-6 py-3">Duration (m)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {periods.length === 0 ? (
                        <tr>
                          <td colSpan={4} className="px-6 py-4 text-center text-slate-500">No period data.</td>
                        </tr>
                      ) : (
                        periods.map(period => (
                          <tr key={period.id} className="hover:bg-slate-50">
                            <td className="px-6 py-4 tabular-nums">{period.game_id}</td>
                            <td className="px-6 py-4 font-medium tabular-nums">{period.period_number}</td>
                            <td className="px-6 py-4 tabular-nums text-center">
                              {period.home_goals_in_period || 0} - {period.away_goals_in_period || 0}
                            </td>
                            <td className="px-6 py-4 tabular-nums">{period.duration_minutes || '-'}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <div className="p-6 border-b border-slate-200">
                <h2 className="text-lg font-semibold text-slate-900">Attendance Log</h2>
              </div>
              {isLoadingWorkflows ? (
                <div className="p-6 text-center text-slate-500">Loading attendance...</div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                      <tr>
                        <th className="px-6 py-3">Game ID</th>
                        <th className="px-6 py-3">Total / Capacity</th>
                        <th className="px-6 py-3">Paid / Free</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {attendance.length === 0 ? (
                        <tr>
                          <td colSpan={3} className="px-6 py-4 text-center text-slate-500">No attendance data.</td>
                        </tr>
                      ) : (
                        attendance.map(att => (
                          <tr key={att.id} className="hover:bg-slate-50">
                            <td className="px-6 py-4 tabular-nums">{att.game_id}</td>
                            <td className="px-6 py-4 tabular-nums">
                              {att.total_attendance || 0} ({att.capacity_utilization_percent || 0}%)
                            </td>
                            <td className="px-6 py-4 tabular-nums text-slate-600">
                              {att.paid_count || 0} / {att.free_count || 0}
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
