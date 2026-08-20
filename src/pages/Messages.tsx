import { useEffect, useState } from 'react'
import { fetchTableData } from '@/lib/api'
import { Database } from '@/types/supabase'
import { Button } from '@/components/ui/Button'

type Message = Database['public']['Tables']['messages']['Row']

export function Messages() {
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      const data = await fetchTableData('messages')
      const sortedData = (data || []).sort((a, b) => {
        const dateA = a.created_at || ''
        const dateB = b.created_at || ''
        return new Date(dateB).getTime() - new Date(dateA).getTime()
      })
      setMessages(sortedData)
      setLoading(false)
    }
    load()
  }, [])

  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'Unknown'
    try {
      const date = new Date(dateString)
      return new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit'
      }).format(date)
    } catch {
      return 'Unknown'
    }
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Messages</h1>
        <Button variant="primary">New Message</Button>
      </div>

      <div className="grid gap-4">
        {loading ? (
          <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm text-sm text-slate-500">
            Loading messages...
          </div>
        ) : messages.length === 0 ? (
          <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm text-sm text-slate-500">
            No messages found.
          </div>
        ) : (
          (messages || []).map((message) => (
            <div
              key={message.id}
              className={`bg-white p-4 rounded-lg border shadow-sm flex items-start gap-4 transition-colors hover:bg-slate-50 cursor-pointer ${
                message.is_read ? 'border-slate-200 opacity-80' : 'border-emerald-200 bg-emerald-50/10'
              }`}
            >
              <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-semibold shrink-0">
                U
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className={`text-sm font-semibold truncate ${message.is_read ? 'text-slate-700' : 'text-slate-900'}`}>
                    {message?.subject || 'No Subject'}
                  </h3>
                  <span className="text-xs text-slate-500 tabular-nums ml-2 shrink-0">
                    {formatDate(message?.created_at)}
                  </span>
                </div>
                <p className={`text-sm truncate ${message.is_read ? 'text-slate-500' : 'text-slate-700 font-medium'}`}>
                  {message?.body}
                </p>
                <div className="mt-2 flex items-center gap-2">
                   <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-600 border border-slate-200 uppercase tracking-wider">
                      {message?.message_type?.replace('_', ' ')}
                   </span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
