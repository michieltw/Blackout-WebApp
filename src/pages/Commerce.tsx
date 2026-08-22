import { useEffect, useState } from 'react'
import { fetchTableData } from '@/lib/api'
import { Database } from '@/types/supabase'
import { Table, TableHeader, TableHead, TableBody, TableRow, TableCell } from '@/components/ui/Table'
import { Button } from '@/components/ui/Button'

type TicketInventory = Database['public']['Tables']['ticket_inventory']['Row']
type TicketSale = Database['public']['Tables']['ticket_sales']['Row']
type MerchandiseProduct = Database['public']['Tables']['merchandise_products']['Row']
type MerchandiseOrder = Database['public']['Tables']['merchandise_orders']['Row']
type MerchandiseOrderItem = Database['public']['Tables']['merchandise_order_items']['Row']
type Equipment = Database['public']['Tables']['equipment']['Row']
type EquipmentAssignment = Database['public']['Tables']['equipment_assignments']['Row']
type EquipmentMaintenance = Database['public']['Tables']['equipment_maintenance']['Row']
type PersonalEquipment = Database['public']['Tables']['personal_equipment']['Row']
type PlayerStick = Database['public']['Tables']['player_sticks']['Row']

export function Commerce() {
  const [ticketInventory, setTicketInventory] = useState<TicketInventory[]>([])
  const [ticketSales, setTicketSales] = useState<TicketSale[]>([])
  const [merchandiseProducts, setMerchandiseProducts] = useState<MerchandiseProduct[]>([])
  const [_merchandiseOrders, setMerchandiseOrders] = useState<MerchandiseOrder[]>([])
  const [_merchandiseOrderItems, setMerchandiseOrderItems] = useState<MerchandiseOrderItem[]>([])
  const [equipment, setEquipment] = useState<Equipment[]>([])
  const [_equipmentAssignments, setEquipmentAssignments] = useState<EquipmentAssignment[]>([])
  const [_equipmentMaintenance, setEquipmentMaintenance] = useState<EquipmentMaintenance[]>([])
  const [personalEquipment, setPersonalEquipment] = useState<PersonalEquipment[]>([])
  const [playerSticks, setPlayerSticks] = useState<PlayerStick[]>([])

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
        const [
          tiData, tsData, mpData, moData, moiData,
          eqData, eaData, emData, peData, psData
        ] = await Promise.all([
          fetchTableData('ticket_inventory'),
          fetchTableData('ticket_sales'),
          fetchTableData('merchandise_products'),
          fetchTableData('merchandise_orders'),
          fetchTableData('merchandise_order_items'),
          fetchTableData('equipment'),
          fetchTableData('equipment_assignments'),
          fetchTableData('equipment_maintenance'),
          fetchTableData('personal_equipment'),
          fetchTableData('player_sticks')
        ])

        setTicketInventory((tiData || []).slice(0, 10))
        setTicketSales((tsData || []).slice(0, 10))
        setMerchandiseProducts(mpData || [])
        setMerchandiseOrders(moData || [])
        setMerchandiseOrderItems(moiData || [])
        setEquipment(eqData || [])
        setEquipmentAssignments(eaData || [])
        setEquipmentMaintenance(emData || [])
        setPersonalEquipment((peData || []).slice(0, 10))
        setPlayerSticks((psData || []).slice(0, 10))
        setLoading(false)
    }
    load()
  }, [])

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Commerce & Inventory</h1>
        <div className="space-x-2">
          <Button variant="secondary">Add Product</Button>
          <Button variant="primary">Manage Inventory</Button>
        </div>
      </div>


      {loading ? (
        <div className="text-sm text-slate-500">Loading data...</div>
      ) : (
        <>
          {/* Ticketing */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Ticketing</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm overflow-x-auto">
                <h3 className="text-md font-medium text-slate-700 mb-4">Inventory</h3>
                {ticketInventory.length === 0 ? (
                  <div className="text-sm text-slate-500">No ticket inventory found.</div>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableHead>Venue ID</TableHead>
                      <TableHead>Section</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Status</TableHead>
                    </TableHeader>
                    <TableBody>
                      {(ticketInventory || []).map((ti) => (
                        <TableRow key={ti.id}>
                          <TableCell className="font-medium text-slate-900 tabular-nums">{ti.venue_id}</TableCell>
                          <TableCell className="text-slate-500">{ti.section} {ti.row}-{ti.seat_number}</TableCell>
                          <TableCell className="text-slate-500 capitalize">{ti.ticket_type}</TableCell>
                          <TableCell className="text-slate-500 tabular-nums">${ti.price.toFixed(2)}</TableCell>
                          <TableCell className="text-slate-500 capitalize">{ti.status || '-'}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </div>
              <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm overflow-x-auto">
                <h3 className="text-md font-medium text-slate-700 mb-4">Recent Sales</h3>
                {ticketSales.length === 0 ? (
                  <div className="text-sm text-slate-500">No ticket sales found.</div>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableHead>Sale ID</TableHead>
                      <TableHead>Game ID</TableHead>
                      <TableHead>Buyer</TableHead>
                      <TableHead>Amount</TableHead>
                    </TableHeader>
                    <TableBody>
                      {(ticketSales || []).map((ts) => (
                        <TableRow key={ts.id}>
                          <TableCell className="tabular-nums">{ts.id}</TableCell>
                          <TableCell className="font-medium text-slate-900 tabular-nums">{ts.game_id}</TableCell>
                          <TableCell className="text-slate-500">{ts.buyer_name || '-'}</TableCell>
                          <TableCell className="text-slate-500 tabular-nums">${ts.sale_price?.toFixed(2) || '0.00'}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </div>
            </div>
          </div>

          {/* Merchandise */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Merchandise Products</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm overflow-x-auto">
              {merchandiseProducts.length === 0 ? (
                <div className="text-sm text-slate-500">No merchandise products found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>SKU</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Stock</TableHead>
                  </TableHeader>
                  <TableBody>
                    {merchandiseProducts.map((mp) => (
                      <TableRow key={mp.id}>
                        <TableCell className="tabular-nums">{mp.id}</TableCell>
                        <TableCell className="font-medium text-slate-900">{mp.name}</TableCell>
                        <TableCell className="text-slate-500 capitalize">{mp.merchandise_type}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{mp.sku || '-'}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">${mp.price.toFixed(2)}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">{mp.stock_quantity || 0}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* Equipment */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Equipment Inventory</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm overflow-x-auto">
              {equipment.length === 0 ? (
                <div className="text-sm text-slate-500">No equipment inventory found.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Team ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Condition</TableHead>
                    <TableHead>Available / Total</TableHead>
                  </TableHeader>
                  <TableBody>
                    {equipment.map((e) => (
                      <TableRow key={e.id}>
                        <TableCell className="tabular-nums">{e.id}</TableCell>
                        <TableCell className="font-medium text-slate-900 tabular-nums">{e.team_id}</TableCell>
                        <TableCell className="font-medium text-slate-900">{e.equipment_name}</TableCell>
                        <TableCell className="text-slate-500 capitalize">{e.equipment_type}</TableCell>
                        <TableCell className="text-slate-500 capitalize">{e.condition || '-'}</TableCell>
                        <TableCell className="text-slate-500 tabular-nums">
                          {e.quantity_available || 0} / {e.quantity_total || 0}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* Player Personal Equipment & Sticks */}
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-slate-800">Player Personal Equipment</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm overflow-x-auto">
                <h3 className="text-md font-medium text-slate-700 mb-4">Personal Equipment</h3>
                {personalEquipment.length === 0 ? (
                  <div className="text-sm text-slate-500">No personal equipment found.</div>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableHead>Player ID</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Brand ID</TableHead>
                    </TableHeader>
                    <TableBody>
                      {(personalEquipment || []).map((pe) => (
                        <TableRow key={pe.id}>
                          <TableCell className="font-medium text-slate-900 tabular-nums">{pe.player_id}</TableCell>
                          <TableCell className="text-slate-500 capitalize">{pe.equipment_type}</TableCell>
                          <TableCell className="text-slate-500 tabular-nums">{pe.brand_id || '-'}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </div>
              <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm overflow-x-auto">
                <h3 className="text-md font-medium text-slate-700 mb-4">Player Sticks</h3>
                {playerSticks.length === 0 ? (
                  <div className="text-sm text-slate-500">No stick records found.</div>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableHead>Player ID</TableHead>
                      <TableHead>Brand</TableHead>
                      <TableHead>Model</TableHead>
                      <TableHead>Flex/Curve</TableHead>
                    </TableHeader>
                    <TableBody>
                      {(playerSticks || []).map((ps) => (
                        <TableRow key={ps.id}>
                          <TableCell className="font-medium text-slate-900 tabular-nums">{ps.player_id}</TableCell>
                          <TableCell className="text-slate-500">{ps.stick_brand}</TableCell>
                          <TableCell className="text-slate-500">{ps.stick_model}</TableCell>
                          <TableCell className="text-slate-500">{ps.stick_flex} / {ps.stick_curve}</TableCell>
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
