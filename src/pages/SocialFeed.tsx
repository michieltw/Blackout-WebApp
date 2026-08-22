import { useEffect, useState } from 'react'
import { fetchTableData } from '@/lib/api'
import { Database } from '@/types/supabase'
import { Button } from '@/components/ui/Button'

type Announcement = Database['public']['Tables']['announcements']['Row']
type SocialMediaPost = Database['public']['Tables']['social_media_posts']['Row']
type Media = Database['public']['Tables']['media']['Row']
type Group = Database['public']['Tables']['groups']['Row']
type AnnouncementAudience = Database['public']['Tables']['announcement_audience']['Row']
type GroupMember = Database['public']['Tables']['group_members']['Row']

export function SocialFeed() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [posts, setPosts] = useState<SocialMediaPost[]>([])
  const [media, setMedia] = useState<Media[]>([])
  const [groups, setGroups] = useState<Group[]>([])

  const [announcementAudiences, setAnnouncementAudiences] = useState<AnnouncementAudience[]>([])
  const [groupMembers, setGroupMembers] = useState<GroupMember[]>([])

  const [activeTab, setActiveTab] = useState('announcements')

  useEffect(() => {
    async function load() {
      try {
        const [
          announcementsData,
          postsData,
          mediaData,
          groupsData,
          audienceData,
          groupMembersData
        ] = await Promise.all([
          fetchTableData('announcements'),
          fetchTableData('social_media_posts'),
          fetchTableData('media'),
          fetchTableData('groups'),
          fetchTableData('announcement_audience'),
          fetchTableData('group_members')
        ])

        // Sort by publish date descending to show newest first
        const sortedData = (announcementsData || []).sort((a, b) => {
          const dateA = a.publish_date || a.created_at || ''
          const dateB = b.publish_date || b.created_at || ''
          return new Date(dateB).getTime() - new Date(dateA).getTime()
        })
        setAnnouncements(sortedData)

        setPosts(postsData || [])
        setMedia(mediaData || [])
        setGroups(groupsData || [])
        setAnnouncementAudiences(audienceData || [])
        setGroupMembers(groupMembersData || [])

      } catch (err: any) {
        setError(err.message || 'Failed to fetch data')
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
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Community & Media</h1>
        <Button variant="primary">Create</Button>
      </div>

      <div className="border-b border-slate-200">
        <nav className="-mb-px flex space-x-6 overflow-x-auto" aria-label="Tabs">
          <button
            onClick={() => setActiveTab('announcements')}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'announcements'
                ? 'border-emerald-500 text-emerald-600'
                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
            }`}
          >
            Announcements
          </button>
          <button
            onClick={() => setActiveTab('social')}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'social'
                ? 'border-emerald-500 text-emerald-600'
                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
            }`}
          >
            Social Posts
          </button>
          <button
            onClick={() => setActiveTab('media')}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'media'
                ? 'border-emerald-500 text-emerald-600'
                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
            }`}
          >
            Media
          </button>
          <button
            onClick={() => setActiveTab('groups')}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'groups'
                ? 'border-emerald-500 text-emerald-600'
                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
            }`}
          >
            Groups
          </button>
        </nav>
      </div>

      <div className="grid gap-6">
        {error && (
          <div className="text-sm text-amber-700 bg-amber-50 border border-amber-200 p-3 rounded-md">
            {error}
          </div>
        )}
        {loading ? (
          <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm text-sm text-slate-500">
            Loading...
          </div>
        ) : (
          <>
            {activeTab === 'announcements' && (
              <div className="space-y-4">
                {announcements.length === 0 ? (
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
            )}

            {activeTab === 'social' && (
              <div className="space-y-4">
                {posts.length === 0 ? (
                  <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm text-sm text-slate-500">
                    No social media posts found.
                  </div>
                ) : (
                  posts.map(post => (
                    <article key={post.id} className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500">
                            {post.account_id}
                          </div>
                          <div>
                            <div className="font-semibold text-slate-900">User {post.account_id}</div>
                            <div className="text-xs text-slate-500">{formatDate(post.created_at)}</div>
                          </div>
                        </div>
                      </div>
                      <p className="text-slate-700 mb-4 whitespace-pre-wrap">{post.content}</p>
                    </article>
                  ))
                )}
              </div>
            )}

            {activeTab === 'media' && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {media.length === 0 ? (
                  <div className="col-span-full bg-white p-6 rounded-lg border border-slate-200 shadow-sm text-sm text-slate-500">
                    No media items found.
                  </div>
                ) : (
                  media.map(item => (
                    <div key={item.id} className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
                      <div className="aspect-square bg-slate-100 flex items-center justify-center p-4">
                        {item.media_type === 'image' ? (
                          <div className="w-full h-full bg-slate-200 rounded object-cover" />
                        ) : (
                          <div className="w-full h-full bg-slate-300 rounded flex items-center justify-center">Video</div>
                        )}
                      </div>
                      <div className="p-3">
                        <div className="font-medium text-sm text-slate-900 truncate">{item.media_name || 'Untitled'}</div>
                        <div className="text-xs text-slate-500 capitalize">{item.media_type}</div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}

            {activeTab === 'groups' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {groups.length === 0 ? (
                    <div className="col-span-full bg-white p-6 rounded-lg border border-slate-200 shadow-sm text-sm text-slate-500">
                      No groups found.
                    </div>
                  ) : (
                    groups.map(group => (
                      <div key={group.id} className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
                        <h3 className="font-bold text-lg text-slate-900">{group.name}</h3>
                        <p className="text-sm text-slate-600 mt-1 line-clamp-2">{group.description || 'No description'}</p>
                        <div className="mt-4 flex items-center gap-2">
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-800 capitalize border border-slate-200">
                            {group.group_type}
                          </span>
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-800 capitalize border border-slate-200">
                            {group.is_active ? 'Active' : 'Inactive'}
                          </span>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                <h3 className="text-lg font-semibold text-slate-800 pt-4">Group Members</h3>
                <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm overflow-x-auto">
                  {groupMembers.length === 0 ? (
                    <div className="text-sm text-slate-500">No group members found.</div>
                  ) : (
                    <table className="min-w-full divide-y divide-slate-200">
                      <thead>
                        <tr>
                          <th className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900">ID</th>
                          <th className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900">Group ID</th>
                          <th className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900">Type</th>
                          <th className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900">Member ID</th>
                          <th className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900">Role</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 bg-white">
                        {groupMembers.map((member) => (
                          <tr key={member.id}>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500 tabular-nums">{member.id}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500 tabular-nums">{member.group_id}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500 capitalize">{member.member_type}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500 tabular-nums">{member.member_id}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500">{member.role || '-'}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'announcements' && announcementAudiences.length > 0 && (
              <div className="mt-8 space-y-6">
                <h3 className="text-lg font-semibold text-slate-800">Announcement Audiences</h3>
                <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm overflow-x-auto">
                  <table className="min-w-full divide-y divide-slate-200">
                    <thead>
                      <tr>
                        <th className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900">ID</th>
                        <th className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900">Announcement ID</th>
                        <th className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900">Audience Type</th>
                        <th className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900">Target Entity Type</th>
                        <th className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900">Target Entity ID</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      {announcementAudiences.map((audience) => (
                        <tr key={audience.id}>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500 tabular-nums">{audience.id}</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500 tabular-nums">{audience.announcement_id}</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500 capitalize">{audience.audience_type}</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500">{audience.target_entity_type || '-'}</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500 tabular-nums">{audience.target_entity_id || '-'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
