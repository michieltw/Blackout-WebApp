import { useEffect, useState } from 'react'
import { fetchTableData } from '@/lib/api'
import { Database } from '@/types/supabase'
import { Button } from '@/components/ui/Button'

type Announcement = Database['public']['Tables']['announcements']['Row']

export function SocialFeed() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function load() {
      try {
        const data = await fetchTableData('announcements')
        // Sort by publish date descending to show newest first
        const sortedData = (data || []).sort((a, b) => {
          const dateA = a.publish_date || a.created_at || ''
          const dateB = b.publish_date || b.created_at || ''
          return new Date(dateB).getTime() - new Date(dateA).getTime()
        })
        setAnnouncements(sortedData)
      } catch (err: any) {
        setError(err.message || 'Failed to fetch announcements')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'Recently'
    try {
      const date = new Date(dateString)
      return new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit'
      }).format(date)
    } catch {
      return 'Recently'
    }
  }

  const getTypeColor = (type: string | undefined) => {
    switch (type?.toLowerCase()) {
      case 'alert':
      case 'rule_change':
        return 'bg-amber-50 text-amber-700 border-amber-200'
      case 'maintenance':
        return 'bg-slate-100 text-slate-700 border-slate-200'
      default:
        return 'bg-emerald-50 text-emerald-700 border-emerald-200'
    }
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Community Feed</h1>
        <Button variant="primary">Post Update</Button>
      </div>

      <div className="grid gap-6">
        {error && (
          <div className="text-sm text-amber-700 bg-amber-50 border border-amber-200 p-3 rounded-md">
            {error}
          </div>
        )}
        {loading ? (
          <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm text-sm text-slate-500">
            Loading feed...
          </div>
        ) : announcements.length === 0 ? (
          <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm text-sm text-slate-500">
            No announcements found right now.
          </div>
        ) : (
          (announcements || []).map((announcement) => (
            <article
              key={announcement.id}
              className={`bg-white p-6 rounded-lg border shadow-sm ${announcement.is_pinned ? 'border-emerald-500' : 'border-slate-200'}`}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getTypeColor(announcement.announcement_type)}`}>
                      {announcement?.announcement_type?.replace('_', ' ').toUpperCase() || 'NEWS'}
                    </span>
                    {announcement?.is_pinned && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-emerald-600 text-white">
                        Pinned
                      </span>
                    )}
                  </div>
                  <h2 className="text-lg font-semibold text-slate-900">{announcement?.title}</h2>
                </div>
                <div className="text-sm text-slate-500 tabular-nums text-right">
                  {formatDate(announcement?.publish_date || announcement?.created_at)}
                </div>
              </div>

              <div className="prose prose-sm prose-slate max-w-none text-slate-700">
                <p className="whitespace-pre-wrap">{announcement?.content}</p>
              </div>
            </article>
          ))
        )}
      </div>
    </div>
  )
}
