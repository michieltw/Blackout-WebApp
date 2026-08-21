import { useEffect, useState } from 'react'
import { FileText, CreditCard, ShieldAlert, Bell, CheckCircle, Clock } from 'lucide-react'
import { fetchTableData } from '../lib/api'
import { Database as DB } from '../types/supabase'

type Invoice = DB['public']['Tables']['invoices']['Row']
type InvoiceItem = DB['public']['Tables']['invoice_items']['Row']
type Payment = DB['public']['Tables']['payments']['Row']
type AuditLog = DB['public']['Tables']['audit_logs']['Row']
type NotificationLog = DB['public']['Tables']['notification_logs']['Row']

export function InvoicingAndAuditing() {
  const [activeTab, setActiveTab] = useState<'invoices' | 'payments' | 'audit' | 'notifications'>('invoices')

  // Invoicing State
  const [invoices, setInvoices] = useState<Invoice[]>([])
  const [invoiceItems, setInvoiceItems] = useState<InvoiceItem[]>([])
  const [isLoadingInvoices, setIsLoadingInvoices] = useState(true)

  // Payments State
  const [payments, setPayments] = useState<Payment[]>([])
  const [isLoadingPayments, setIsLoadingPayments] = useState(true)

  // Audit Logs State
  const [auditLogs, setAuditLogs] = useState<AuditLog[]>([])
  const [isLoadingAudit, setIsLoadingAudit] = useState(true)

  // Notification Logs State
  const [notificationLogs, setNotificationLogs] = useState<NotificationLog[]>([])
  const [isLoadingNotifications, setIsLoadingNotifications] = useState(true)

  useEffect(() => {
    if (activeTab === 'invoices') {
      const loadInvoices = async () => {
        setIsLoadingInvoices(true)
        const [invoicesData, itemsData] = await Promise.all([
          fetchTableData('invoices'),
          fetchTableData('invoice_items')
        ])
        setInvoices(invoicesData || [])
        setInvoiceItems(itemsData || [])
        setIsLoadingInvoices(false)
      }
      loadInvoices()
    } else if (activeTab === 'payments') {
      const loadPayments = async () => {
        setIsLoadingPayments(true)
        const paymentsData = await fetchTableData('payments')
        setPayments(paymentsData || [])
        setIsLoadingPayments(false)
      }
      loadPayments()
    } else if (activeTab === 'audit') {
      const loadAuditLogs = async () => {
        setIsLoadingAudit(true)
        const auditData = await fetchTableData('audit_logs')
        setAuditLogs(auditData || [])
        setIsLoadingAudit(false)
      }
      loadAuditLogs()
    } else if (activeTab === 'notifications') {
      const loadNotifications = async () => {
        setIsLoadingNotifications(true)
        const notifData = await fetchTableData('notification_logs')
        setNotificationLogs(notifData || [])
        setIsLoadingNotifications(false)
      }
      loadNotifications()
    }
  }, [activeTab])

  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'N/A'
    return new Date(dateString).toLocaleString()
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Invoicing & Auditing</h1>
        <p className="text-slate-500 mt-1">Manage financial records and view system activity logs.</p>
      </div>

      <div className="border-b border-slate-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('invoices')}
            className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 ${
              activeTab === 'invoices'
                ? 'border-emerald-500 text-emerald-600'
                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
            }`}
          >
            <FileText className="w-4 h-4" />
            Invoices
          </button>
          <button
            onClick={() => setActiveTab('payments')}
            className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 ${
              activeTab === 'payments'
                ? 'border-emerald-500 text-emerald-600'
                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
            }`}
          >
            <CreditCard className="w-4 h-4" />
            Payments
          </button>
          <button
            onClick={() => setActiveTab('audit')}
            className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 ${
              activeTab === 'audit'
                ? 'border-emerald-500 text-emerald-600'
                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
            }`}
          >
            <ShieldAlert className="w-4 h-4" />
            Audit Logs
          </button>
          <button
            onClick={() => setActiveTab('notifications')}
            className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 ${
              activeTab === 'notifications'
                ? 'border-emerald-500 text-emerald-600'
                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
            }`}
          >
            <Bell className="w-4 h-4" />
            Notifications
          </button>
        </nav>
      </div>

      {activeTab === 'invoices' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <div className="p-6 border-b border-slate-200 flex justify-between items-center">
              <h2 className="text-lg font-semibold text-slate-900">Invoices</h2>
            </div>
            {isLoadingInvoices ? (
              <div className="p-6 text-center text-slate-500">Loading invoices...</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                    <tr>
                      <th className="px-6 py-3">Number</th>
                      <th className="px-6 py-3">Organization / Team</th>
                      <th className="px-6 py-3">Date</th>
                      <th className="px-6 py-3">Due Date</th>
                      <th className="px-6 py-3">Total Amount</th>
                      <th className="px-6 py-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {invoices.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="px-6 py-4 text-center text-slate-500">No invoices found.</td>
                      </tr>
                    ) : (
                      invoices.map(invoice => (
                        <tr key={invoice.id} className="hover:bg-slate-50">
                          <td className="px-6 py-4 font-medium tabular-nums">{invoice.invoice_number}</td>
                          <td className="px-6 py-4 tabular-nums">
                            {invoice.organization_id ? `Org: ${invoice.organization_id}` : ''}
                            {invoice.team_id ? `Team: ${invoice.team_id}` : ''}
                          </td>
                          <td className="px-6 py-4 text-slate-500">{new Date(invoice.invoice_date).toLocaleDateString()}</td>
                          <td className="px-6 py-4 text-slate-500">{new Date(invoice.due_date).toLocaleDateString()}</td>
                          <td className="px-6 py-4 font-medium tabular-nums">{formatCurrency(invoice.total_amount)}</td>
                          <td className="px-6 py-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              invoice.invoice_status === 'paid' ? 'bg-emerald-100 text-emerald-700' :
                              invoice.invoice_status === 'overdue' ? 'bg-red-100 text-red-700' :
                              'bg-amber-100 text-amber-700'
                            }`}>
                              {invoice.invoice_status}
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
              <h2 className="text-lg font-semibold text-slate-900">Invoice Items</h2>
            </div>
            {isLoadingInvoices ? (
              <div className="p-6 text-center text-slate-500">Loading items...</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                    <tr>
                      <th className="px-6 py-3">Invoice ID</th>
                      <th className="px-6 py-3">Description</th>
                      <th className="px-6 py-3">Qty</th>
                      <th className="px-6 py-3">Unit Price</th>
                      <th className="px-6 py-3">Line Total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {invoiceItems.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="px-6 py-4 text-center text-slate-500">No invoice items.</td>
                      </tr>
                    ) : (
                      invoiceItems.map(item => (
                        <tr key={item.id} className="hover:bg-slate-50">
                          <td className="px-6 py-4 tabular-nums">{item.invoice_id}</td>
                          <td className="px-6 py-4">{item.item_description}</td>
                          <td className="px-6 py-4 tabular-nums">{item.quantity}</td>
                          <td className="px-6 py-4 tabular-nums">{formatCurrency(item.unit_price)}</td>
                          <td className="px-6 py-4 font-medium tabular-nums">{formatCurrency(item.line_total)}</td>
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

      {activeTab === 'payments' && (
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900">Payment History</h2>
          </div>
          {isLoadingPayments ? (
            <div className="p-6 text-center text-slate-500">Loading payments...</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                  <tr>
                    <th className="px-6 py-3">Invoice ID</th>
                    <th className="px-6 py-3">Date</th>
                    <th className="px-6 py-3">Amount</th>
                    <th className="px-6 py-3">Method</th>
                    <th className="px-6 py-3">Status</th>
                    <th className="px-6 py-3">Ref</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {payments.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="px-6 py-4 text-center text-slate-500">No payments found.</td>
                    </tr>
                  ) : (
                    payments.map(payment => (
                      <tr key={payment.id} className="hover:bg-slate-50">
                        <td className="px-6 py-4 tabular-nums">{payment.invoice_id}</td>
                        <td className="px-6 py-4 text-slate-500">{new Date(payment.payment_date).toLocaleDateString()}</td>
                        <td className="px-6 py-4 font-medium tabular-nums">{formatCurrency(payment.payment_amount)}</td>
                        <td className="px-6 py-4">{payment.payment_method}</td>
                        <td className="px-6 py-4">
                           <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              payment.payment_status === 'completed' ? 'bg-emerald-100 text-emerald-700' :
                              payment.payment_status === 'failed' ? 'bg-red-100 text-red-700' :
                              'bg-amber-100 text-amber-700'
                            }`}>
                              {payment.payment_status}
                            </span>
                        </td>
                        <td className="px-6 py-4 font-mono text-xs">{payment.transaction_reference}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {activeTab === 'audit' && (
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900">System Audit Logs</h2>
          </div>
          {isLoadingAudit ? (
            <div className="p-6 text-center text-slate-500">Loading audit logs...</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                  <tr>
                    <th className="px-6 py-3">Timestamp</th>
                    <th className="px-6 py-3">User ID</th>
                    <th className="px-6 py-3">Action</th>
                    <th className="px-6 py-3">Entity Type</th>
                    <th className="px-6 py-3">Entity ID</th>
                    <th className="px-6 py-3">IP Address</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {auditLogs.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="px-6 py-4 text-center text-slate-500">No audit logs.</td>
                    </tr>
                  ) : (
                    auditLogs.map(log => (
                      <tr key={log.id} className="hover:bg-slate-50">
                        <td className="px-6 py-4 text-slate-500 whitespace-nowrap">{formatDate(log.created_at)}</td>
                        <td className="px-6 py-4 tabular-nums">{log.user_id}</td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded-md text-xs font-medium uppercase">
                            {log.action}
                          </span>
                        </td>
                        <td className="px-6 py-4 font-medium">{log.entity_type}</td>
                        <td className="px-6 py-4 tabular-nums">{log.entity_id}</td>
                        <td className="px-6 py-4 text-slate-500 font-mono text-xs">{log.ip_address}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {activeTab === 'notifications' && (
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900">Notification Logs</h2>
          </div>
          {isLoadingNotifications ? (
            <div className="p-6 text-center text-slate-500">Loading notifications...</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                  <tr>
                    <th className="px-6 py-3">Sent At</th>
                    <th className="px-6 py-3">User ID</th>
                    <th className="px-6 py-3">Type</th>
                    <th className="px-6 py-3">Status</th>
                    <th className="px-6 py-3">Read</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {notificationLogs.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="px-6 py-4 text-center text-slate-500">No notification logs.</td>
                    </tr>
                  ) : (
                    notificationLogs.map(log => (
                      <tr key={log.id} className="hover:bg-slate-50">
                        <td className="px-6 py-4 text-slate-500">{formatDate(log.sent_at)}</td>
                        <td className="px-6 py-4 tabular-nums">{log.user_id}</td>
                        <td className="px-6 py-4 font-medium">{log.notification_type}</td>
                        <td className="px-6 py-4">
                           <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              log.delivery_status === 'delivered' ? 'bg-emerald-100 text-emerald-700' :
                              log.delivery_status === 'failed' ? 'bg-red-100 text-red-700' :
                              'bg-amber-100 text-amber-700'
                            }`}>
                              {log.delivery_status}
                            </span>
                        </td>
                        <td className="px-6 py-4">
                          {log.read_at ? (
                            <CheckCircle className="w-4 h-4 text-emerald-500" />
                          ) : (
                            <Clock className="w-4 h-4 text-slate-300" />
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
      )}
    </div>
  )
}
