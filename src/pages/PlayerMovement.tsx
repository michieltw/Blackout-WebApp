import { useEffect, useState } from 'react'
import { fetchTableData } from '@/lib/api'
import { Database } from '@/types/supabase'
import { Table, TableHeader, TableHead, TableBody, TableRow, TableCell } from '@/components/ui/Table'
import { Button } from '@/components/ui/Button'

type LoanPlayer = Database['public']['Tables']['loan_players']['Row']
type Waiver = Database['public']['Tables']['waivers']['Row']
type Transfer = Database['public']['Tables']['transfers']['Row']
type PlayerTransfer = Database['public']['Tables']['player_transfers']['Row']
type PlayerMovementLog = Database['public']['Tables']['player_movement_log']['Row']

export function PlayerMovement() {
  const [loanPlayers, setLoanPlayers] = useState<LoanPlayer[]>([])
  const [waivers, setWaivers] = useState<Waiver[]>([])
  const [transfers, setTransfers] = useState<Transfer[]>([])
  const [playerTransfers, setPlayerTransfers] = useState<PlayerTransfer[]>([])
  const [movementLogs, setMovementLogs] = useState<PlayerMovementLog[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
        const [
          loanData,
          waiverData,
          transferData,
          playerTransferData,
          movementLogData
        ] = await Promise.all([
          fetchTableData('loan_players'),
          fetchTableData('waivers'),
          fetchTableData('transfers'),
          fetchTableData('player_transfers'),
          fetchTableData('player_movement_log')
        ])

        setLoanPlayers(loanData || [])
        setWaivers(waiverData || [])
        setTransfers(transferData || [])
        setPlayerTransfers(playerTransferData || [])
        setMovementLogs(movementLogData || [])
        setLoading(false)
    }
    load()
  }, [])

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Player Movement Tracking</h1>
        <Button variant="primary">Record Movement</Button>
      </div>


      {loading ? (
        <div className="text-sm text-slate-500">Loading data...</div>
      ) : (
        <>
          {/* Loan Players */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Loan Players</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              {loanPlayers.length === 0 ? (
                <div className="text-sm text-slate-500">No loan records found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Player ID</TableHead>
                    <TableHead>From Team</TableHead>
                    <TableHead>To Team</TableHead>
                    <TableHead>Start Date</TableHead>
                    <TableHead>Status</TableHead>
                  </TableHeader>
                  <TableBody>
                    {loanPlayers.map((loan) => (
                      <TableRow key={loan.id}>
                        <TableCell className="tabular-nums">{loan.id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{loan.player_id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{loan.from_team_id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{loan.to_team_id}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{loan.start_date}</TableCell>
                        <TableCell className="text-slate-500 capitalize">{loan.status || '-'}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* Waivers */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Waivers</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              {waivers.length === 0 ? (
                <div className="text-sm text-slate-500">No waivers found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Player ID</TableHead>
                    <TableHead>Season ID</TableHead>
                    <TableHead>Requesting Team</TableHead>
                    <TableHead>Status</TableHead>
                  </TableHeader>
                  <TableBody>
                    {waivers.map((waiver) => (
                      <TableRow key={waiver.id}>
                        <TableCell className="tabular-nums">{waiver.id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{waiver.player_id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{waiver.season_id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{waiver.requesting_team_id}</TableCell>
                        <TableCell className="text-slate-500 capitalize">{waiver.status || '-'}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* Transfers */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Transfers</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              {transfers.length === 0 ? (
                <div className="text-sm text-slate-500">No transfers found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Player ID</TableHead>
                    <TableHead>From Team</TableHead>
                    <TableHead>To Team</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Status</TableHead>
                  </TableHeader>
                  <TableBody>
                    {transfers.map((transfer) => (
                      <TableRow key={transfer.id}>
                        <TableCell className="tabular-nums">{transfer.id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{transfer.player_id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{transfer.from_team_id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{transfer.to_team_id}</TableCell>
                        <TableCell className="text-slate-500 capitalize">{transfer.transfer_type || '-'}</TableCell>
                        <TableCell className="text-slate-500 capitalize">{transfer.status || '-'}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* Player Transfers */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Player Transfers (Historical)</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              {playerTransfers.length === 0 ? (
                <div className="text-sm text-slate-500">No historical transfers found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Player ID</TableHead>
                    <TableHead>From Team</TableHead>
                    <TableHead>To Team</TableHead>
                    <TableHead>Date</TableHead>
                  </TableHeader>
                  <TableBody>
                    {playerTransfers.map((pt) => (
                      <TableRow key={pt.id}>
                        <TableCell className="tabular-nums">{pt.id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{pt.player_id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{pt.from_team_id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{pt.to_team_id}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{pt.transfer_date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* Movement Log */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Movement Log</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              {movementLogs.length === 0 ? (
                <div className="text-sm text-slate-500">No movement logs found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Player ID</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>From Team</TableHead>
                    <TableHead>To Team</TableHead>
                    <TableHead>Date</TableHead>
                  </TableHeader>
                  <TableBody>
                    {movementLogs.map((log) => (
                      <TableRow key={log.id}>
                        <TableCell className="tabular-nums">{log.id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{log.player_id}</TableCell>
                        <TableCell className="text-slate-500 capitalize">{log.movement_type}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{log.from_team_id || '-'}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{log.to_team_id || '-'}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{log.movement_date}</TableCell>
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
