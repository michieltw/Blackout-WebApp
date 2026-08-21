import { useEffect, useState } from 'react'
import { fetchTableData } from '@/lib/api'
import { Database } from '@/types/supabase'
import { Table, TableHeader, TableHead, TableBody, TableRow, TableCell } from '@/components/ui/Table'
import { Button } from '@/components/ui/Button'

type Brand = Database['public']['Tables']['brands']['Row']
type Retailer = Database['public']['Tables']['retailers']['Row']
type Sponsor = Database['public']['Tables']['sponsors']['Row']
type Advertisement = Database['public']['Tables']['advertisements']['Row']
type SocialMediaAccount = Database['public']['Tables']['social_media_accounts']['Row']
type Document = Database['public']['Tables']['documents']['Row']

export function Sponsorships() {
  const [brands, setBrands] = useState<Brand[]>([])
  const [retailers, setRetailers] = useState<Retailer[]>([])
  const [sponsors, setSponsors] = useState<Sponsor[]>([])
  const [advertisements, setAdvertisements] = useState<Advertisement[]>([])
  const [socialAccounts, setSocialAccounts] = useState<SocialMediaAccount[]>([])
  const [documents, setDocuments] = useState<Document[]>([])

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function load() {
      try {
        const [
          bData, rData, sData,
          adData, smData, docData
        ] = await Promise.all([
          fetchTableData('brands'),
          fetchTableData('retailers'),
          fetchTableData('sponsors'),
          fetchTableData('advertisements'),
          fetchTableData('social_media_accounts'),
          fetchTableData('documents')
        ])

        setBrands(bData || [])
        setRetailers(rData || [])
        setSponsors(sData || [])
        setAdvertisements(adData || [])
        setSocialAccounts(smData || [])
        setDocuments(docData || [])
      } catch (err: any) {
        setError(err.message || 'Failed to fetch sponsorships data')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Sponsorships & Marketing</h1>
        <div className="space-x-2">
          <Button variant="secondary">New Campaign</Button>
          <Button variant="primary">Add Sponsor</Button>
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
          {/* Sponsors */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Sponsors</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm overflow-x-auto">
              {sponsors.length === 0 ? (
                <div className="text-sm text-slate-500">No sponsors found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Brand ID</TableHead>
                    <TableHead>Level</TableHead>
                    <TableHead>Contract Dates</TableHead>
                  </TableHeader>
                  <TableBody>
                    {sponsors.map((s) => (
                      <TableRow key={s.id}>
                        <TableCell className="tabular-nums">{s.id}</TableCell>
                        <TableCell className="font-medium text-slate-900">{s.name}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{s.brand_id || '-'}</TableCell>
                        <TableCell className="text-slate-500 capitalize">{s.sponsorship_level || '-'}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">
                          {s.start_date || '?'} - {s.end_date || '?'}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* Advertisements */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Advertisements & Campaigns</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm overflow-x-auto">
              {advertisements.length === 0 ? (
                <div className="text-sm text-slate-500">No advertisements configured.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Active Dates</TableHead>
                  </TableHeader>
                  <TableBody>
                    {advertisements.map((ad) => (
                      <TableRow key={ad.id}>
                        <TableCell className="tabular-nums">{ad.id}</TableCell>
                        <TableCell className="font-medium text-slate-900">{ad.ad_title}</TableCell>
                        <TableCell className="text-slate-500 capitalize">{ad.ad_type}</TableCell>
                        <TableCell className="text-slate-500 capitalize">{ad.ad_status || '-'}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">
                          {ad.start_date} to {ad.end_date || 'Ongoing'}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* Brands & Retailers */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="grid gap-4">
              <h2 className="text-lg font-semibold text-slate-800">Brands</h2>
              <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm overflow-x-auto">
                {brands.length === 0 ? (
                  <div className="text-sm text-slate-500">No brands found.</div>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableHead>ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Website</TableHead>
                    </TableHeader>
                    <TableBody>
                      {brands.map((b) => (
                        <TableRow key={b.id}>
                          <TableCell className="tabular-nums">{b.id}</TableCell>
                          <TableCell className="font-medium text-slate-900">{b.name}</TableCell>
                          <TableCell className="text-blue-600 hover:underline">
                            {b.website ? <a href={b.website} target="_blank" rel="noreferrer">Link</a> : '-'}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </div>
            </div>

            <div className="grid gap-4">
              <h2 className="text-lg font-semibold text-slate-800">Retailers</h2>
              <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm overflow-x-auto">
                {retailers.length === 0 ? (
                  <div className="text-sm text-slate-500">No retailers found.</div>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableHead>ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Website</TableHead>
                    </TableHeader>
                    <TableBody>
                      {retailers.map((r) => (
                        <TableRow key={r.id}>
                          <TableCell className="tabular-nums">{r.id}</TableCell>
                          <TableCell className="font-medium text-slate-900">{r.name}</TableCell>
                          <TableCell className="text-blue-600 hover:underline">
                            {r.website ? <a href={r.website} target="_blank" rel="noreferrer">Link</a> : '-'}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </div>
            </div>
          </div>

          {/* Social Media & Marketing Assets */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="grid gap-4">
              <h2 className="text-lg font-semibold text-slate-800">Social Accounts</h2>
              <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm overflow-x-auto">
                {socialAccounts.length === 0 ? (
                  <div className="text-sm text-slate-500">No social accounts found.</div>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableHead>Platform</TableHead>
                      <TableHead>Account Name</TableHead>
                    </TableHeader>
                    <TableBody>
                      {socialAccounts.map((sa) => (
                        <TableRow key={sa.id}>
                          <TableCell className="font-medium text-slate-900 capitalize">{sa.platform}</TableCell>
                          <TableCell className="text-slate-500">
                            {sa.account_handle ? <a href={`https://${sa.platform}.com/${sa.account_handle}`} target="_blank" rel="noreferrer" className="hover:underline">{sa.account_name}</a> : sa.account_name}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </div>
            </div>

            <div className="grid gap-4">
              <h2 className="text-lg font-semibold text-slate-800">Marketing Documents</h2>
              <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm overflow-x-auto">
                {documents.length === 0 ? (
                  <div className="text-sm text-slate-500">No documents found.</div>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableHead>Title</TableHead>
                      <TableHead>Type</TableHead>
                    </TableHeader>
                    <TableBody>
                      {documents.slice(0, 10).map((d) => (
                        <TableRow key={d.id}>
                          <TableCell className="font-medium text-slate-900">{d.title}</TableCell>
                          <TableCell className="text-slate-500 capitalize">{d.document_type.replace(/_/g, ' ')}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </div>
            </div>
          </div>

        </>
      )}
    </div>
  )
}
