import { useEffect, useState } from 'react'
import { ShoppingBag, FileSpreadsheet, Code, GitMerge, CheckCircle, XCircle, Clock } from 'lucide-react'
import { fetchTableData } from '../lib/api'
import { Database as DB } from '../types/supabase'

type ShopifySetting = DB['public']['Tables']['shopify_settings']['Row']
type ShopifyIntegration = DB['public']['Tables']['shopify_integration']['Row']
type ShopifyProductSync = DB['public']['Tables']['shopify_product_sync']['Row']

type GoogleSheetsSetting = DB['public']['Tables']['google_sheets_settings']['Row']
type GoogleSheetsConfig = DB['public']['Tables']['google_sheets_config']['Row']
type GoogleSheetsSyncLog = DB['public']['Tables']['google_sheets_sync_log']['Row']

type GasSetting = DB['public']['Tables']['google_apps_script_settings']['Row']
type GasIntegration = DB['public']['Tables']['gas_integration']['Row']
type GasExecution = DB['public']['Tables']['gas_executions']['Row']

type IjshockeySyncLog = DB['public']['Tables']['ijshockey_sync_log']['Row']

export function Integrations() {
  const [activeTab, setActiveTab] = useState<'shopify' | 'google' | 'gas' | 'ijshockey'>('shopify')

  // Shopify State
  const [shopifySettings, setShopifySettings] = useState<ShopifySetting[]>([])
  const [shopifyIntegrations, setShopifyIntegrations] = useState<ShopifyIntegration[]>([])
  const [shopifyProductSyncs, setShopifyProductSyncs] = useState<ShopifyProductSync[]>([])
  const [isLoadingShopify, setIsLoadingShopify] = useState(true)

  // Google Sheets State
  const [googleSheetsSettings, setGoogleSheetsSettings] = useState<GoogleSheetsSetting[]>([])
  const [googleSheetsConfigs, setGoogleSheetsConfigs] = useState<GoogleSheetsConfig[]>([])
  const [googleSheetsSyncLogs, setGoogleSheetsSyncLogs] = useState<GoogleSheetsSyncLog[]>([])
  const [isLoadingGoogle, setIsLoadingGoogle] = useState(true)

  // Google Apps Script State
  const [gasSettings, setGasSettings] = useState<GasSetting[]>([])
  const [gasIntegrations, setGasIntegrations] = useState<GasIntegration[]>([])
  const [gasExecutions, setGasExecutions] = useState<GasExecution[]>([])
  const [isLoadingGas, setIsLoadingGas] = useState(true)

  // IJshockey State
  const [ijshockeySyncLogs, setIjshockeySyncLogs] = useState<IjshockeySyncLog[]>([])
  const [isLoadingIjshockey, setIsLoadingIjshockey] = useState(true)

  useEffect(() => {
    if (activeTab === 'shopify') {
      const loadShopify = async () => {
        setIsLoadingShopify(true)
        const [settings, integrations, productSyncs] = await Promise.all([
          fetchTableData('shopify_settings'),
          fetchTableData('shopify_integration'),
          fetchTableData('shopify_product_sync')
        ])
        setShopifySettings(settings || [])
        setShopifyIntegrations(integrations || [])
        setShopifyProductSyncs(productSyncs || [])
        setIsLoadingShopify(false)
      }
      loadShopify()
    } else if (activeTab === 'google') {
      const loadGoogle = async () => {
        setIsLoadingGoogle(true)
        const [settings, configs, syncLogs] = await Promise.all([
          fetchTableData('google_sheets_settings'),
          fetchTableData('google_sheets_config'),
          fetchTableData('google_sheets_sync_log')
        ])
        setGoogleSheetsSettings(settings || [])
        setGoogleSheetsConfigs(configs || [])
        setGoogleSheetsSyncLogs(syncLogs || [])
        setIsLoadingGoogle(false)
      }
      loadGoogle()
    } else if (activeTab === 'gas') {
      const loadGas = async () => {
        setIsLoadingGas(true)
        const [settings, integrations, executions] = await Promise.all([
          fetchTableData('google_apps_script_settings'),
          fetchTableData('gas_integration'),
          fetchTableData('gas_executions')
        ])
        setGasSettings(settings || [])
        setGasIntegrations(integrations || [])
        setGasExecutions(executions || [])
        setIsLoadingGas(false)
      }
      loadGas()
    } else if (activeTab === 'ijshockey') {
      const loadIjshockey = async () => {
        setIsLoadingIjshockey(true)
        const [logs] = await Promise.all([
          fetchTableData('ijshockey_sync_log')
        ])
        setIjshockeySyncLogs(logs || [])
        setIsLoadingIjshockey(false)
      }
      loadIjshockey()
    }
  }, [activeTab])

  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'N/A'
    return new Date(dateString).toLocaleString()
  }

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case 'success':
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-emerald-500" />
      case 'failed':
      case 'error':
        return <XCircle className="w-4 h-4 text-red-500" />
      default:
        return <Clock className="w-4 h-4 text-amber-500" />
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">External Integrations</h1>
        <p className="text-slate-500 mt-1">Manage connections and sync logs for third-party platforms.</p>
      </div>

      <div className="border-b border-slate-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('shopify')}
            className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 ${
              activeTab === 'shopify'
                ? 'border-emerald-500 text-emerald-600'
                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            Shopify
          </button>
          <button
            onClick={() => setActiveTab('google')}
            className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 ${
              activeTab === 'google'
                ? 'border-emerald-500 text-emerald-600'
                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
            }`}
          >
            <FileSpreadsheet className="w-4 h-4" />
            Google Sheets
          </button>
          <button
            onClick={() => setActiveTab('gas')}
            className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 ${
              activeTab === 'gas'
                ? 'border-emerald-500 text-emerald-600'
                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
            }`}
          >
            <Code className="w-4 h-4" />
            Apps Script
          </button>
          <button
            onClick={() => setActiveTab('ijshockey')}
            className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 ${
              activeTab === 'ijshockey'
                ? 'border-emerald-500 text-emerald-600'
                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
            }`}
          >
            <GitMerge className="w-4 h-4" />
            IJshockey.nl
          </button>
        </nav>
      </div>

      {activeTab === 'shopify' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <div className="p-6 border-b border-slate-200">
                <h2 className="text-lg font-semibold text-slate-900">Shopify Settings</h2>
              </div>
              {isLoadingShopify ? (
                <div className="p-6 text-center text-slate-500">Loading settings...</div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                      <tr>
                        <th className="px-6 py-3">Org ID</th>
                        <th className="px-6 py-3">Store Domain</th>
                        <th className="px-6 py-3">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {shopifySettings.length === 0 ? (
                        <tr>
                          <td colSpan={3} className="px-6 py-4 text-center text-slate-500">No settings found.</td>
                        </tr>
                      ) : (
                        shopifySettings.map(setting => (
                          <tr key={setting.id} className="hover:bg-slate-50">
                            <td className="px-6 py-4 tabular-nums">{setting.organization_id}</td>
                            <td className="px-6 py-4 font-medium">{setting.shop_name}</td>
                            <td className="px-6 py-4">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${setting.sync_enabled ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-700'}`}>
                                {setting.sync_enabled ? 'Active' : 'Inactive'}
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
                <h2 className="text-lg font-semibold text-slate-900">Integration Status</h2>
              </div>
              {isLoadingShopify ? (
                <div className="p-6 text-center text-slate-500">Loading integration...</div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                      <tr>
                        <th className="px-6 py-3">Integration Type</th>
                        <th className="px-6 py-3">Last Sync</th>
                        <th className="px-6 py-3">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {shopifyIntegrations.length === 0 ? (
                        <tr>
                          <td colSpan={3} className="px-6 py-4 text-center text-slate-500">No integrations mapped.</td>
                        </tr>
                      ) : (
                        shopifyIntegrations.map(integration => (
                          <tr key={integration.id} className="hover:bg-slate-50">
                            <td className="px-6 py-4 font-medium">{integration.shopify_shop_name}</td>
                            <td className="px-6 py-4 text-slate-500">{formatDate(integration.last_sync_time)}</td>
                            <td className="px-6 py-4">
                               <span className={`px-2 py-1 rounded-full text-xs font-medium ${integration.is_active ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-700'}`}>
                                {integration.is_active ? 'Active' : 'Inactive'}
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
              <h2 className="text-lg font-semibold text-slate-900">Product Sync Logs</h2>
            </div>
            {isLoadingShopify ? (
              <div className="p-6 text-center text-slate-500">Loading logs...</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                    <tr>
                      <th className="px-6 py-3">Product ID</th>
                      <th className="px-6 py-3">Shopify Product ID</th>
                      <th className="px-6 py-3">Sync Direction</th>
                      <th className="px-6 py-3">Status</th>
                      <th className="px-6 py-3">Timestamp</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {shopifyProductSyncs.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="px-6 py-4 text-center text-slate-500">No product sync logs.</td>
                      </tr>
                    ) : (
                      shopifyProductSyncs.map(sync => (
                        <tr key={sync.id} className="hover:bg-slate-50">
                          <td className="px-6 py-4 tabular-nums">{sync.shopify_integration_id}</td>
                          <td className="px-6 py-4 font-medium tabular-nums">{sync.shopify_product_id}</td>
                          <td className="px-6 py-4">{sync.product_name}</td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              {getStatusIcon(sync.sync_status || '')}
                              <span>{sync.sync_status}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-slate-500">{formatDate(sync.created_at)}</td>
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

      {activeTab === 'google' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <div className="p-6 border-b border-slate-200">
                <h2 className="text-lg font-semibold text-slate-900">Google Sheets Settings</h2>
              </div>
              {isLoadingGoogle ? (
                <div className="p-6 text-center text-slate-500">Loading settings...</div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                      <tr>
                        <th className="px-6 py-3">Org ID</th>
                        <th className="px-6 py-3">Service Account</th>
                        <th className="px-6 py-3">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {googleSheetsSettings.length === 0 ? (
                        <tr>
                          <td colSpan={3} className="px-6 py-4 text-center text-slate-500">No settings found.</td>
                        </tr>
                      ) : (
                        googleSheetsSettings.map(setting => (
                          <tr key={setting.id} className="hover:bg-slate-50">
                            <td className="px-6 py-4 tabular-nums">{setting.organization_id}</td>
                            <td className="px-6 py-4 font-medium truncate max-w-[200px]">{setting.sheet_id}</td>
                            <td className="px-6 py-4">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${setting.sync_enabled ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-700'}`}>
                                {setting.sync_enabled ? 'Active' : 'Inactive'}
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
                <h2 className="text-lg font-semibold text-slate-900">Sheet Configurations</h2>
              </div>
              {isLoadingGoogle ? (
                <div className="p-6 text-center text-slate-500">Loading configs...</div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                      <tr>
                        <th className="px-6 py-3">Table Name</th>
                        <th className="px-6 py-3">Sheet ID</th>
                        <th className="px-6 py-3">Sync Direction</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {googleSheetsConfigs.length === 0 ? (
                        <tr>
                          <td colSpan={3} className="px-6 py-4 text-center text-slate-500">No configurations mapped.</td>
                        </tr>
                      ) : (
                        googleSheetsConfigs.map(config => (
                          <tr key={config.id} className="hover:bg-slate-50">
                            <td className="px-6 py-4 font-medium">{config.sheet_name}</td>
                            <td className="px-6 py-4 font-mono text-xs truncate max-w-[150px]">{config.sheet_id}</td>
                            <td className="px-6 py-4">{config.sync_direction}</td>
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
              <h2 className="text-lg font-semibold text-slate-900">Sync Logs</h2>
            </div>
            {isLoadingGoogle ? (
              <div className="p-6 text-center text-slate-500">Loading logs...</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                    <tr>
                      <th className="px-6 py-3">Config ID</th>
                      <th className="px-6 py-3">Sync Type</th>
                      <th className="px-6 py-3">Status</th>
                      <th className="px-6 py-3">Records Processed</th>
                      <th className="px-6 py-3">Timestamp</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {googleSheetsSyncLogs.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="px-6 py-4 text-center text-slate-500">No sync logs.</td>
                      </tr>
                    ) : (
                      googleSheetsSyncLogs.map(log => (
                        <tr key={log.id} className="hover:bg-slate-50">
                          <td className="px-6 py-4 tabular-nums">{log.google_sheets_config_id}</td>
                          <td className="px-6 py-4">{log.sync_type}</td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              {getStatusIcon(log.sync_status || '')}
                              <span>{log.sync_status}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 tabular-nums">{log.rows_synced}</td>
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
      )}

      {activeTab === 'gas' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <div className="p-6 border-b border-slate-200">
                <h2 className="text-lg font-semibold text-slate-900">Apps Script Settings</h2>
              </div>
              {isLoadingGas ? (
                <div className="p-6 text-center text-slate-500">Loading settings...</div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                      <tr>
                        <th className="px-6 py-3">Org ID</th>
                        <th className="px-6 py-3">Project ID</th>
                        <th className="px-6 py-3">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {gasSettings.length === 0 ? (
                        <tr>
                          <td colSpan={3} className="px-6 py-4 text-center text-slate-500">No settings found.</td>
                        </tr>
                      ) : (
                        gasSettings.map(setting => (
                          <tr key={setting.id} className="hover:bg-slate-50">
                            <td className="px-6 py-4 tabular-nums">{setting.organization_id}</td>
                            <td className="px-6 py-4 font-mono text-xs">{setting.project_id}</td>
                            <td className="px-6 py-4">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${setting.enabled ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-700'}`}>
                                {setting.enabled ? 'Active' : 'Inactive'}
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
                <h2 className="text-lg font-semibold text-slate-900">Integrations</h2>
              </div>
              {isLoadingGas ? (
                <div className="p-6 text-center text-slate-500">Loading configs...</div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                      <tr>
                        <th className="px-6 py-3">Integration Name</th>
                        <th className="px-6 py-3">Script ID</th>
                        <th className="px-6 py-3">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {gasIntegrations.length === 0 ? (
                        <tr>
                          <td colSpan={3} className="px-6 py-4 text-center text-slate-500">No integrations mapped.</td>
                        </tr>
                      ) : (
                        gasIntegrations.map(integration => (
                          <tr key={integration.id} className="hover:bg-slate-50">
                            <td className="px-6 py-4 font-medium">{integration.script_project_id}</td>
                            <td className="px-6 py-4 font-mono text-xs truncate max-w-[150px]">{integration.script_url}</td>
                            <td className="px-6 py-4">
                               <span className={`px-2 py-1 rounded-full text-xs font-medium ${integration.is_active ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-700'}`}>
                                {integration.is_active ? 'Active' : 'Inactive'}
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
              <h2 className="text-lg font-semibold text-slate-900">Execution Logs</h2>
            </div>
            {isLoadingGas ? (
              <div className="p-6 text-center text-slate-500">Loading logs...</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                    <tr>
                      <th className="px-6 py-3">Integration ID</th>
                      <th className="px-6 py-3">Function Name</th>
                      <th className="px-6 py-3">Status</th>
                      <th className="px-6 py-3">Timestamp</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {gasExecutions.length === 0 ? (
                      <tr>
                        <td colSpan={4} className="px-6 py-4 text-center text-slate-500">No execution logs.</td>
                      </tr>
                    ) : (
                      gasExecutions.map(exec => (
                        <tr key={exec.id} className="hover:bg-slate-50">
                          <td className="px-6 py-4 tabular-nums">{exec.gas_integration_id}</td>
                          <td className="px-6 py-4 font-medium">{exec.script_name}</td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              {getStatusIcon(exec.execution_status || '')}
                              <span>{exec.execution_status}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-slate-500">{formatDate(exec.created_at)}</td>
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

      {activeTab === 'ijshockey' && (
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900">IJshockey.nl Sync Logs</h2>
          </div>
          {isLoadingIjshockey ? (
            <div className="p-6 text-center text-slate-500">Loading logs...</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                  <tr>
                    <th className="px-6 py-3">ID</th>
                    <th className="px-6 py-3">Sync Type</th>
                    <th className="px-6 py-3">Status</th>
                    <th className="px-6 py-3">Records Processed</th>
                    <th className="px-6 py-3">Timestamp</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {ijshockeySyncLogs.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="px-6 py-4 text-center text-slate-500">No sync logs.</td>
                    </tr>
                  ) : (
                    ijshockeySyncLogs.map(log => (
                      <tr key={log.id} className="hover:bg-slate-50">
                        <td className="px-6 py-4 tabular-nums">{log.id}</td>
                        <td className="px-6 py-4 font-medium">{log.entity_type}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            {getStatusIcon(log.sync_status || '')}
                            <span>{log.sync_status}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 tabular-nums">{log.entity_id}</td>
                        <td className="px-6 py-4 text-slate-500">{formatDate(log.created_at)}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
