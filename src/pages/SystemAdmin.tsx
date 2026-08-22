import { useEffect, useState } from 'react'
import { Settings, Users, Database, Clock, Layout, FileText, CheckCircle, Archive, HardDrive } from 'lucide-react'
import { fetchTableData } from '../lib/api'
import { Database as DB } from '../types/supabase'

type SystemSetting = DB['public']['Tables']['system_settings']['Row']
type AppSetting = DB['public']['Tables']['app_settings']['Row']
type Definition = DB['public']['Tables']['definitions']['Row']
type UserTimezone = DB['public']['Tables']['user_timezone']['Row']
type DashboardWidget = DB['public']['Tables']['dashboard_widgets']['Row']
type UserPreference = DB['public']['Tables']['user_preferences']['Row']

type Role = DB['public']['Tables']['roles']['Row']
type RolePermission = DB['public']['Tables']['role_permissions']['Row']
type UserRole = DB['public']['Tables']['user_roles']['Row']

type ArchivedRecord = DB['public']['Tables']['archived_records']['Row']
type Job = DB['public']['Tables']['jobs']['Row']
type BulkImport = DB['public']['Tables']['bulk_import_staging']['Row']
type SheetBuildOrder = DB['public']['Tables']['sheet_build_order']['Row']
type FirstTimeSetup = DB['public']['Tables']['first_time_setup']['Row']
type SchemaTable = DB['public']['Tables']['schema_tables']['Row']

export function SystemAdmin() {
  const [activeTab, setActiveTab] = useState<'settings' | 'preferences' | 'roles' | 'data'>('settings')

  // Settings State
  const [systemSettings, setSystemSettings] = useState<SystemSetting[]>([])
  const [appSettings, setAppSettings] = useState<AppSetting[]>([])
  const [definitions, setDefinitions] = useState<Definition[]>([])
  const [isLoadingSettings, setIsLoadingSettings] = useState(true)

  // Preferences State
  const [userTimezones, setUserTimezones] = useState<UserTimezone[]>([])
  const [dashboardWidgets, setDashboardWidgets] = useState<DashboardWidget[]>([])
  const [userPreferences, setUserPreferences] = useState<UserPreference[]>([])
  const [isLoadingPreferences, setIsLoadingPreferences] = useState(true)

  // Roles State
  const [roles, setRoles] = useState<Role[]>([])
  const [rolePermissions, setRolePermissions] = useState<RolePermission[]>([])
  const [userRoles, setUserRoles] = useState<UserRole[]>([])
  const [isLoadingRoles, setIsLoadingRoles] = useState(true)

  // Data Management State
  const [archivedRecords, setArchivedRecords] = useState<ArchivedRecord[]>([])
  const [jobs, setJobs] = useState<Job[]>([])
  const [bulkImports, setBulkImports] = useState<BulkImport[]>([])
  const [sheetBuildOrders, setSheetBuildOrders] = useState<SheetBuildOrder[]>([])
  const [firstTimeSetups, setFirstTimeSetups] = useState<FirstTimeSetup[]>([])
  const [schemaTables, setSchemaTables] = useState<SchemaTable[]>([])
  const [isLoadingData, setIsLoadingData] = useState(true)

  useEffect(() => {
    if (activeTab === 'settings') {
      const loadSettings = async () => {
        setIsLoadingSettings(true)
        const [systemData, appData, defData] = await Promise.all([
          fetchTableData('system_settings'),
          fetchTableData('app_settings'),
          fetchTableData('definitions')
        ])
        setSystemSettings(systemData || [])
        setAppSettings(appData || [])
        setDefinitions(defData || [])
        setIsLoadingSettings(false)
      }
      loadSettings()
    } else if (activeTab === 'preferences') {
      const loadPreferences = async () => {
        setIsLoadingPreferences(true)
        const [tzData, widgetData, prefData] = await Promise.all([
          fetchTableData('user_timezone'),
          fetchTableData('dashboard_widgets'),
          fetchTableData('user_preferences')
        ])
        setUserTimezones(tzData || [])
        setDashboardWidgets(widgetData || [])
        setUserPreferences(prefData || [])
        setIsLoadingPreferences(false)
      }
      loadPreferences()
    } else if (activeTab === 'roles') {
      const loadRoles = async () => {
        setIsLoadingRoles(true)
        const [roleData, permData, userRoleData] = await Promise.all([
          fetchTableData('roles'),
          fetchTableData('role_permissions'),
          fetchTableData('user_roles')
        ])
        setRoles(roleData || [])
        setRolePermissions(permData || [])
        setUserRoles(userRoleData || [])
        setIsLoadingRoles(false)
      }
      loadRoles()
    } else if (activeTab === 'data') {
      const loadData = async () => {
        setIsLoadingData(true)
        const [archiveData, jobsData, bulkData, sheetData, setupData, schemaData] = await Promise.all([
          fetchTableData('archived_records'),
          fetchTableData('jobs'),
          fetchTableData('bulk_import_staging'),
          fetchTableData('sheet_build_order'),
          fetchTableData('first_time_setup'),
          fetchTableData('schema_tables')
        ])
        setArchivedRecords(archiveData || [])
        setJobs(jobsData || [])
        setBulkImports(bulkData || [])
        setSheetBuildOrders(sheetData || [])
        setFirstTimeSetups(setupData || [])
        setSchemaTables(schemaData || [])
        setIsLoadingData(false)
      }
      loadData()
    }
  }, [activeTab])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">System Admin</h1>
        <p className="text-slate-500 mt-1">Manage system configurations, user preferences, roles, and data utilities.</p>
      </div>

      <div className="border-b border-slate-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('settings')}
            className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'settings'
                ? 'border-emerald-500 text-emerald-600'
                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
            }`}
          >
            Settings & Definitions
          </button>
          <button
            onClick={() => setActiveTab('preferences')}
            className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'preferences'
                ? 'border-emerald-500 text-emerald-600'
                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
            }`}
          >
            User Preferences
          </button>
          <button
            onClick={() => setActiveTab('roles')}
            className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'roles'
                ? 'border-emerald-500 text-emerald-600'
                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
            }`}
          >
            Roles & Permissions
          </button>
          <button
            onClick={() => setActiveTab('data')}
            className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'data'
                ? 'border-emerald-500 text-emerald-600'
                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
            }`}
          >
            Data Management
          </button>
        </nav>
      </div>

      {activeTab === 'settings' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <div className="p-6 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <Settings className="w-5 h-5 text-emerald-600" />
                <h2 className="text-lg font-semibold text-slate-900">System Settings</h2>
              </div>
            </div>
            {isLoadingSettings ? (
              <div className="p-6 text-center text-slate-500">Loading settings...</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                    <tr>
                      <th className="px-6 py-3">ID</th>
                      <th className="px-6 py-3">Organization ID</th>
                      <th className="px-6 py-3">Key</th>
                      <th className="px-6 py-3">Value</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {systemSettings.length === 0 ? (
                      <tr>
                        <td colSpan={4} className="px-6 py-4 text-center text-slate-500">No system settings found.</td>
                      </tr>
                    ) : (
                      systemSettings.map(setting => (
                        <tr key={setting.id} className="hover:bg-slate-50">
                          <td className="px-6 py-4 tabular-nums">{setting.id}</td>
                          <td className="px-6 py-4 tabular-nums">{setting.organization_id}</td>
                          <td className="px-6 py-4 font-medium">{setting.setting_key}</td>
                          <td className="px-6 py-4 truncate max-w-xs">{String(setting.setting_value)}</td>
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
                <Layout className="w-5 h-5 text-emerald-600" />
                <h2 className="text-lg font-semibold text-slate-900">App Settings</h2>
              </div>
            </div>
            {isLoadingSettings ? (
              <div className="p-6 text-center text-slate-500">Loading settings...</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                    <tr>
                      <th className="px-6 py-3">Key</th>
                      <th className="px-6 py-3">Value</th>
                      <th className="px-6 py-3">Type</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {appSettings.length === 0 ? (
                      <tr>
                        <td colSpan={3} className="px-6 py-4 text-center text-slate-500">No app settings found.</td>
                      </tr>
                    ) : (
                      appSettings.map(setting => (
                        <tr key={setting.id} className="hover:bg-slate-50">
                          <td className="px-6 py-4 font-medium">{setting.setting_key}</td>
                          <td className="px-6 py-4">{setting.setting_value}</td>
                          <td className="px-6 py-4">{setting.setting_type}</td>
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
                <FileText className="w-5 h-5 text-emerald-600" />
                <h2 className="text-lg font-semibold text-slate-900">Definitions</h2>
              </div>
            </div>
            {isLoadingSettings ? (
              <div className="p-6 text-center text-slate-500">Loading definitions...</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                    <tr>
                      <th className="px-6 py-3">Key</th>
                      <th className="px-6 py-3">Category</th>
                      <th className="px-6 py-3">Value</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {definitions.length === 0 ? (
                      <tr>
                        <td colSpan={3} className="px-6 py-4 text-center text-slate-500">No definitions found.</td>
                      </tr>
                    ) : (
                      definitions.map(def => (
                        <tr key={def.id} className="hover:bg-slate-50">
                          <td className="px-6 py-4 font-medium">{def.definition_key}</td>
                          <td className="px-6 py-4">{def.category}</td>
                          <td className="px-6 py-4 truncate max-w-xs">{def.definition_value}</td>
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

      {activeTab === 'preferences' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <div className="p-6 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-emerald-600" />
                <h2 className="text-lg font-semibold text-slate-900">User Timezones</h2>
              </div>
            </div>
            {isLoadingPreferences ? (
              <div className="p-6 text-center text-slate-500">Loading...</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                    <tr>
                      <th className="px-6 py-3">User ID</th>
                      <th className="px-6 py-3">Timezone</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {userTimezones.length === 0 ? (
                      <tr>
                        <td colSpan={2} className="px-6 py-4 text-center text-slate-500">No timezones configured.</td>
                      </tr>
                    ) : (
                      userTimezones.map(tz => (
                        <tr key={tz.id} className="hover:bg-slate-50">
                          <td className="px-6 py-4 tabular-nums">{tz.user_id}</td>
                          <td className="px-6 py-4 font-medium">{tz.timezone}</td>
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
                <Settings className="w-5 h-5 text-emerald-600" />
                <h2 className="text-lg font-semibold text-slate-900">User Preferences</h2>
              </div>
            </div>
            {isLoadingPreferences ? (
              <div className="p-6 text-center text-slate-500">Loading...</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                    <tr>
                      <th className="px-6 py-3">User ID</th>
                      <th className="px-6 py-3">Theme</th>
                      <th className="px-6 py-3">Language</th>
                      <th className="px-6 py-3">Notifications</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {userPreferences.length === 0 ? (
                      <tr>
                        <td colSpan={4} className="px-6 py-4 text-center text-slate-500">No preferences set.</td>
                      </tr>
                    ) : (
                      userPreferences.map(pref => (
                        <tr key={pref.id} className="hover:bg-slate-50">
                          <td className="px-6 py-4 tabular-nums">{pref.user_id}</td>
                          <td className="px-6 py-4">{pref.theme}</td>
                          <td className="px-6 py-4">{pref.language}</td>
                          <td className="px-6 py-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${pref.notifications_enabled ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-700'}`}>
                              {pref.notifications_enabled ? 'Enabled' : 'Disabled'}
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
                <Layout className="w-5 h-5 text-emerald-600" />
                <h2 className="text-lg font-semibold text-slate-900">Dashboard Widgets</h2>
              </div>
            </div>
            {isLoadingPreferences ? (
              <div className="p-6 text-center text-slate-500">Loading...</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                    <tr>
                      <th className="px-6 py-3">User ID</th>
                      <th className="px-6 py-3">Widget Type</th>
                      <th className="px-6 py-3">Position</th>
                      <th className="px-6 py-3">Visibility</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {dashboardWidgets.length === 0 ? (
                      <tr>
                        <td colSpan={4} className="px-6 py-4 text-center text-slate-500">No widgets configured.</td>
                      </tr>
                    ) : (
                      dashboardWidgets.map(widget => (
                        <tr key={widget.id} className="hover:bg-slate-50">
                          <td className="px-6 py-4 tabular-nums">{widget.user_id}</td>
                          <td className="px-6 py-4 font-medium">{widget.widget_type}</td>
                          <td className="px-6 py-4 tabular-nums">{widget.position}</td>
                          <td className="px-6 py-4">
                             <span className={`px-2 py-1 rounded-full text-xs font-medium ${widget.is_visible ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-700'}`}>
                              {widget.is_visible ? 'Visible' : 'Hidden'}
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
      )}

      {activeTab === 'roles' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <div className="p-6 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-emerald-600" />
                  <h2 className="text-lg font-semibold text-slate-900">Roles</h2>
                </div>
              </div>
              {isLoadingRoles ? (
                <div className="p-6 text-center text-slate-500">Loading roles...</div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                      <tr>
                        <th className="px-6 py-3">ID</th>
                        <th className="px-6 py-3">Name</th>
                        <th className="px-6 py-3">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {roles.length === 0 ? (
                        <tr>
                          <td colSpan={3} className="px-6 py-4 text-center text-slate-500">No roles defined.</td>
                        </tr>
                      ) : (
                        roles.map(role => (
                          <tr key={role.id} className="hover:bg-slate-50">
                            <td className="px-6 py-4 tabular-nums">{role.id}</td>
                            <td className="px-6 py-4 font-medium">{role.name}</td>
                            <td className="px-6 py-4 text-slate-500">{role.description}</td>
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
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <h2 className="text-lg font-semibold text-slate-900">Role Permissions</h2>
                </div>
              </div>
              {isLoadingRoles ? (
                <div className="p-6 text-center text-slate-500">Loading permissions...</div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                      <tr>
                        <th className="px-6 py-3">Role ID</th>
                        <th className="px-6 py-3">Permission Type</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {rolePermissions.length === 0 ? (
                        <tr>
                          <td colSpan={2} className="px-6 py-4 text-center text-slate-500">No permissions mapped.</td>
                        </tr>
                      ) : (
                        rolePermissions.map(perm => (
                          <tr key={perm.id} className="hover:bg-slate-50">
                            <td className="px-6 py-4 tabular-nums">{perm.role_id}</td>
                            <td className="px-6 py-4 font-medium">
                              <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded-md text-xs">
                                {perm.permission_type}
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

          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <div className="p-6 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-emerald-600" />
                <h2 className="text-lg font-semibold text-slate-900">User Roles</h2>
              </div>
            </div>
            {isLoadingRoles ? (
              <div className="p-6 text-center text-slate-500">Loading user roles...</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                    <tr>
                      <th className="px-6 py-3">User ID</th>
                      <th className="px-6 py-3">Role ID</th>
                      <th className="px-6 py-3">Organization ID</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {userRoles.length === 0 ? (
                      <tr>
                        <td colSpan={3} className="px-6 py-4 text-center text-slate-500">No users assigned to roles.</td>
                      </tr>
                    ) : (
                      userRoles.map(ur => (
                        <tr key={ur.id} className="hover:bg-slate-50">
                          <td className="px-6 py-4 tabular-nums">{ur.user_id}</td>
                          <td className="px-6 py-4 tabular-nums">{ur.role_id}</td>
                          <td className="px-6 py-4 tabular-nums">{ur.organization_id}</td>
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

      {activeTab === 'data' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <div className="p-6 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <Archive className="w-5 h-5 text-emerald-600" />
                  <h2 className="text-lg font-semibold text-slate-900">Archived Records</h2>
                </div>
              </div>
              {isLoadingData ? (
                <div className="p-6 text-center text-slate-500">Loading...</div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                      <tr>
                        <th className="px-6 py-3">Entity Type</th>
                        <th className="px-6 py-3">Entity ID</th>
                        <th className="px-6 py-3">Archived By</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {archivedRecords.length === 0 ? (
                        <tr>
                          <td colSpan={3} className="px-6 py-4 text-center text-slate-500">No archived records.</td>
                        </tr>
                      ) : (
                        archivedRecords.map(record => (
                          <tr key={record.id} className="hover:bg-slate-50">
                            <td className="px-6 py-4 font-medium">{record.entity_type}</td>
                            <td className="px-6 py-4 tabular-nums">{record.entity_id}</td>
                            <td className="px-6 py-4 tabular-nums">{record.archived_by_user_id}</td>
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
                  <Database className="w-5 h-5 text-emerald-600" />
                  <h2 className="text-lg font-semibold text-slate-900">Jobs</h2>
                </div>
              </div>
              {isLoadingData ? (
                <div className="p-6 text-center text-slate-500">Loading...</div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                      <tr>
                        <th className="px-6 py-3">Name</th>
                        <th className="px-6 py-3">Type</th>
                        <th className="px-6 py-3">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {jobs.length === 0 ? (
                        <tr>
                          <td colSpan={3} className="px-6 py-4 text-center text-slate-500">No background jobs.</td>
                        </tr>
                      ) : (
                        jobs.map(job => (
                          <tr key={job.id} className="hover:bg-slate-50">
                            <td className="px-6 py-4 font-medium">{job.job_name}</td>
                            <td className="px-6 py-4">{job.job_type}</td>
                            <td className="px-6 py-4">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                job.job_status === 'completed' ? 'bg-emerald-100 text-emerald-700' :
                                job.job_status === 'failed' ? 'bg-red-100 text-red-700' :
                                'bg-amber-100 text-amber-700'
                              }`}>
                                {job.job_status}
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

          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <div className="p-6 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <HardDrive className="w-5 h-5 text-emerald-600" />
                <h2 className="text-lg font-semibold text-slate-900">Bulk Import & Build Order</h2>
              </div>
            </div>
            {isLoadingData ? (
              <div className="p-6 text-center text-slate-500">Loading...</div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
                <div className="overflow-x-auto">
                  <div className="p-4 bg-slate-50 border-b border-slate-200 font-medium text-sm text-slate-700">Bulk Import Staging</div>
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-slate-500 uppercase bg-slate-50/50">
                      <tr>
                        <th className="px-6 py-3">Org ID</th>
                        <th className="px-6 py-3">Import Type</th>
                        <th className="px-6 py-3">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {bulkImports.length === 0 ? (
                        <tr>
                          <td colSpan={3} className="px-6 py-4 text-center text-slate-500">No import staging records.</td>
                        </tr>
                      ) : (
                        bulkImports.map(bi => (
                          <tr key={bi.id} className="hover:bg-slate-50">
                            <td className="px-6 py-4 tabular-nums">{bi.organization_id}</td>
                            <td className="px-6 py-4">{bi.import_type}</td>
                            <td className="px-6 py-4">{bi.status}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>

                <div className="overflow-x-auto">
                  <div className="p-4 bg-slate-50 border-b border-slate-200 font-medium text-sm text-slate-700">Sheet Build Order</div>
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-slate-500 uppercase bg-slate-50/50">
                      <tr>
                        <th className="px-6 py-3">Table Name</th>
                        <th className="px-6 py-3">Category</th>
                        <th className="px-6 py-3">Priority</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {sheetBuildOrders.length === 0 ? (
                        <tr>
                          <td colSpan={3} className="px-6 py-4 text-center text-slate-500">No build order defined.</td>
                        </tr>
                      ) : (
                        sheetBuildOrders.map(sbo => (
                          <tr key={sbo.id} className="hover:bg-slate-50">
                            <td className="px-6 py-4 font-medium">{sbo.table_name}</td>
                            <td className="px-6 py-4">{sbo.category}</td>
                            <td className="px-6 py-4 tabular-nums">{sbo.priority_order}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <div className="p-6 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <h2 className="text-lg font-semibold text-slate-900">First Time Setup Progress</h2>
              </div>
            </div>
            {isLoadingData ? (
              <div className="p-6 text-center text-slate-500">Loading...</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                    <tr>
                      <th className="px-6 py-3">User ID</th>
                      <th className="px-6 py-3">Organization ID</th>
                      <th className="px-6 py-3">Setup Step</th>
                      <th className="px-6 py-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {firstTimeSetups.length === 0 ? (
                      <tr>
                        <td colSpan={4} className="px-6 py-4 text-center text-slate-500">No setup records.</td>
                      </tr>
                    ) : (
                      firstTimeSetups.map(setup => (
                        <tr key={setup.id} className="hover:bg-slate-50">
                          <td className="px-6 py-4 tabular-nums">{setup.user_id}</td>
                          <td className="px-6 py-4 tabular-nums">{setup.organization_id}</td>
                          <td className="px-6 py-4">{setup.setup_step}</td>
                          <td className="px-6 py-4">
                            {setup.is_completed ? (
                              <span className="px-2 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
                                Completed
                              </span>
                            ) : (
                              <span className="px-2 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700">
                                Pending
                              </span>
                            )}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Schema Tables */}
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <div className="p-6 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <Database className="w-5 h-5 text-slate-600" />
                <h2 className="text-lg font-semibold text-slate-900">Database Schema Tables</h2>
              </div>
            </div>
            {isLoadingData ? (
              <div className="p-6 text-center text-slate-500">Loading...</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                    <tr>
                      <th className="px-6 py-3">Table Name</th>
                      <th className="px-6 py-3">Category</th>
                      <th className="px-6 py-3">Rows</th>
                      <th className="px-6 py-3">Core</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {schemaTables.length === 0 ? (
                      <tr>
                        <td colSpan={4} className="px-6 py-4 text-center text-slate-500">No schema tables defined.</td>
                      </tr>
                    ) : (
                      schemaTables.map(st => (
                        <tr key={st.id} className="hover:bg-slate-50">
                          <td className="px-6 py-4 font-medium text-slate-900">{st.table_name}</td>
                          <td className="px-6 py-4 capitalize">{st.table_category?.replace(/_/g, ' ') || '-'}</td>
                          <td className="px-6 py-4 tabular-nums">{st.row_count || 0}</td>
                          <td className="px-6 py-4">
                            {st.is_core_table ? (
                              <span className="text-emerald-600">Yes</span>
                            ) : (
                              <span className="text-slate-400">No</span>
                            )}
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
      )}
    </div>
  )
}
