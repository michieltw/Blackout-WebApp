import { useEffect, useState } from 'react'
import { ShoppingCart, LayoutList, ListChecks, MessageSquare, Star, TrendingUp, CheckCircle } from 'lucide-react'
import { fetchTableData } from '../lib/api'
import { Database as DB } from '../types/supabase'

type StickProduct = DB['public']['Tables']['stick_products']['Row']
type StickOrder = DB['public']['Tables']['stick_customization_orders']['Row']
type StickSpec = DB['public']['Tables']['stick_customization_specs']['Row']

type StickPoll = DB['public']['Tables']['stick_polls']['Row']
type StickPollResponse = DB['public']['Tables']['stick_poll_responses']['Row']

type StickFeedback = DB['public']['Tables']['stick_feedback']['Row']
type StickRecommendation = DB['public']['Tables']['stick_recommendations']['Row']

export function SpecializedProducts() {
  const [activeTab, setActiveTab] = useState<'products' | 'polls' | 'feedback'>('products')

  // Products & Orders State
  const [stickProducts, setStickProducts] = useState<StickProduct[]>([])
  const [stickOrders, setStickOrders] = useState<StickOrder[]>([])
  const [stickSpecs, setStickSpecs] = useState<StickSpec[]>([])
  const [isLoadingProducts, setIsLoadingProducts] = useState(true)

  // Polls State
  const [stickPolls, setStickPolls] = useState<StickPoll[]>([])
  const [stickPollResponses, setStickPollResponses] = useState<StickPollResponse[]>([])
  const [isLoadingPolls, setIsLoadingPolls] = useState(true)

  // Feedback State
  const [stickFeedback, setStickFeedback] = useState<StickFeedback[]>([])
  const [stickRecommendations, setStickRecommendations] = useState<StickRecommendation[]>([])
  const [isLoadingFeedback, setIsLoadingFeedback] = useState(true)

  useEffect(() => {
    if (activeTab === 'products') {
      const loadProducts = async () => {
        setIsLoadingProducts(true)
        const [products, orders, specs] = await Promise.all([
          fetchTableData('stick_products'),
          fetchTableData('stick_customization_orders'),
          fetchTableData('stick_customization_specs')
        ])
        setStickProducts(products || [])
        setStickOrders(orders || [])
        setStickSpecs(specs || [])
        setIsLoadingProducts(false)
      }
      loadProducts()
    } else if (activeTab === 'polls') {
      const loadPolls = async () => {
        setIsLoadingPolls(true)
        const [polls, responses] = await Promise.all([
          fetchTableData('stick_polls'),
          fetchTableData('stick_poll_responses')
        ])
        setStickPolls(polls || [])
        setStickPollResponses(responses || [])
        setIsLoadingPolls(false)
      }
      loadPolls()
    } else if (activeTab === 'feedback') {
      const loadFeedback = async () => {
        setIsLoadingFeedback(true)
        const [feedback, recommendations] = await Promise.all([
          fetchTableData('stick_feedback'),
          fetchTableData('stick_recommendations')
        ])
        setStickFeedback(feedback || [])
        setStickRecommendations(recommendations || [])
        setIsLoadingFeedback(false)
      }
      loadFeedback()
    }
  }, [activeTab])

  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'N/A'
    return new Date(dateString).toLocaleDateString()
  }

  const formatCurrency = (amount: number | null) => {
    if (amount === null) return 'N/A'
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Specialized Stick Products</h1>
        <p className="text-slate-500 mt-1">Manage stick customization, product catalogs, polls, and recommendations.</p>
      </div>

      <div className="border-b border-slate-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('products')}
            className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 ${
              activeTab === 'products'
                ? 'border-emerald-500 text-emerald-600'
                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
            }`}
          >
            <ShoppingCart className="w-4 h-4" />
            Products & Orders
          </button>
          <button
            onClick={() => setActiveTab('polls')}
            className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 ${
              activeTab === 'polls'
                ? 'border-emerald-500 text-emerald-600'
                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
            }`}
          >
            <ListChecks className="w-4 h-4" />
            Polls & Responses
          </button>
          <button
            onClick={() => setActiveTab('feedback')}
            className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 ${
              activeTab === 'feedback'
                ? 'border-emerald-500 text-emerald-600'
                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            Feedback & Recommendations
          </button>
        </nav>
      </div>

      {activeTab === 'products' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <div className="p-6 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <LayoutList className="w-5 h-5 text-emerald-600" />
                <h2 className="text-lg font-semibold text-slate-900">Stick Product Catalog</h2>
              </div>
            </div>
            {isLoadingProducts ? (
              <div className="p-6 text-center text-slate-500">Loading products...</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                    <tr>
                      <th className="px-6 py-3">Product</th>
                      <th className="px-6 py-3">Brand / Model</th>
                      <th className="px-6 py-3">Flex / Curve</th>
                      <th className="px-6 py-3">Price</th>
                      <th className="px-6 py-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {stickProducts.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="px-6 py-4 text-center text-slate-500">No products available.</td>
                      </tr>
                    ) : (
                      stickProducts.map(product => (
                        <tr key={product.id} className="hover:bg-slate-50">
                          <td className="px-6 py-4 font-medium">{product.product_name}</td>
                          <td className="px-6 py-4">{product.brand} - {product.model}</td>
                          <td className="px-6 py-4 text-slate-500">{product.flex || 'N/A'} / {product.curve || 'N/A'}</td>
                          <td className="px-6 py-4 font-medium tabular-nums">{formatCurrency(product.price)}</td>
                          <td className="px-6 py-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${product.is_active ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-700'}`}>
                              {product.is_active ? 'Active' : 'Inactive'}
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
                <ShoppingCart className="w-5 h-5 text-emerald-600" />
                <h2 className="text-lg font-semibold text-slate-900">Customization Orders</h2>
              </div>
            </div>
            {isLoadingProducts ? (
              <div className="p-6 text-center text-slate-500">Loading orders...</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                    <tr>
                      <th className="px-6 py-3">Order Number</th>
                      <th className="px-6 py-3">Player ID</th>
                      <th className="px-6 py-3">Order Date</th>
                      <th className="px-6 py-3">Quantity</th>
                      <th className="px-6 py-3">Total Cost</th>
                      <th className="px-6 py-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {stickOrders.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="px-6 py-4 text-center text-slate-500">No orders found.</td>
                      </tr>
                    ) : (
                      stickOrders.map(order => (
                        <tr key={order.id} className="hover:bg-slate-50">
                          <td className="px-6 py-4 font-medium font-mono text-xs">{order.order_number}</td>
                          <td className="px-6 py-4 tabular-nums">{order.player_id}</td>
                          <td className="px-6 py-4 text-slate-500">{formatDate(order.order_date)}</td>
                          <td className="px-6 py-4 tabular-nums">{order.stick_quantity}</td>
                          <td className="px-6 py-4 font-medium tabular-nums">{formatCurrency(order.total_cost)}</td>
                          <td className="px-6 py-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              order.order_status === 'delivered' ? 'bg-emerald-100 text-emerald-700' :
                              order.order_status === 'processing' ? 'bg-amber-100 text-amber-700' :
                              'bg-slate-100 text-slate-700'
                            }`}>
                              {order.order_status}
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
              <h2 className="text-lg font-semibold text-slate-900">Customization Specifications</h2>
            </div>
            {isLoadingProducts ? (
              <div className="p-6 text-center text-slate-500">Loading specs...</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                    <tr>
                      <th className="px-6 py-3">Order ID</th>
                      <th className="px-6 py-3">Flex / Curve</th>
                      <th className="px-6 py-3">Length (cm)</th>
                      <th className="px-6 py-3">Weight (g)</th>
                      <th className="px-6 py-3">Grip / Shaft</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {stickSpecs.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="px-6 py-4 text-center text-slate-500">No specs available.</td>
                      </tr>
                    ) : (
                      stickSpecs.map(spec => (
                        <tr key={spec.id} className="hover:bg-slate-50">
                          <td className="px-6 py-4 tabular-nums">{spec.customization_order_id}</td>
                          <td className="px-6 py-4 font-medium">{spec.flex} / {spec.curve}</td>
                          <td className="px-6 py-4 tabular-nums">{spec.length_cm}</td>
                          <td className="px-6 py-4 tabular-nums">{spec.weight_grams || 'N/A'}</td>
                          <td className="px-6 py-4 text-slate-500">{spec.grip_type || '-'} / {spec.shaft_material || '-'}</td>
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

      {activeTab === 'polls' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <div className="p-6 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <ListChecks className="w-5 h-5 text-emerald-600" />
                <h2 className="text-lg font-semibold text-slate-900">Active Stick Polls</h2>
              </div>
            </div>
            {isLoadingPolls ? (
              <div className="p-6 text-center text-slate-500">Loading polls...</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                    <tr>
                      <th className="px-6 py-3">Title</th>
                      <th className="px-6 py-3">Question</th>
                      <th className="px-6 py-3">Type</th>
                      <th className="px-6 py-3">Date Range</th>
                      <th className="px-6 py-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {stickPolls.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="px-6 py-4 text-center text-slate-500">No active polls.</td>
                      </tr>
                    ) : (
                      stickPolls.map(poll => (
                        <tr key={poll.id} className="hover:bg-slate-50">
                          <td className="px-6 py-4 font-medium">{poll.poll_title}</td>
                          <td className="px-6 py-4 text-slate-600">{poll.poll_question}</td>
                          <td className="px-6 py-4">
                            <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded-md text-xs">
                              {poll.poll_type}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-slate-500 text-xs">
                            {formatDate(poll.start_date)} - {formatDate(poll.end_date)}
                          </td>
                          <td className="px-6 py-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${poll.is_active ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-700'}`}>
                              {poll.is_active ? 'Active' : 'Closed'}
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
              <h2 className="text-lg font-semibold text-slate-900">Recent Poll Responses</h2>
            </div>
            {isLoadingPolls ? (
              <div className="p-6 text-center text-slate-500">Loading responses...</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                    <tr>
                      <th className="px-6 py-3">Poll ID</th>
                      <th className="px-6 py-3">Player ID</th>
                      <th className="px-6 py-3">Response</th>
                      <th className="px-6 py-3">Timestamp</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {stickPollResponses.length === 0 ? (
                      <tr>
                        <td colSpan={4} className="px-6 py-4 text-center text-slate-500">No responses recorded.</td>
                      </tr>
                    ) : (
                      stickPollResponses.map(response => (
                        <tr key={response.id} className="hover:bg-slate-50">
                          <td className="px-6 py-4 tabular-nums">{response.stick_poll_id}</td>
                          <td className="px-6 py-4 tabular-nums">{response.player_id}</td>
                          <td className="px-6 py-4 font-medium">{response.response_value}</td>
                          <td className="px-6 py-4 text-slate-500">{formatDate(response.responded_at)}</td>
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

      {activeTab === 'feedback' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <div className="p-6 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-amber-500" />
                <h2 className="text-lg font-semibold text-slate-900">Player Feedback</h2>
              </div>
            </div>
            {isLoadingFeedback ? (
              <div className="p-6 text-center text-slate-500">Loading feedback...</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                    <tr>
                      <th className="px-6 py-3">Player / Product</th>
                      <th className="px-6 py-3">Title</th>
                      <th className="px-6 py-3">Rating</th>
                      <th className="px-6 py-3">Recommend</th>
                      <th className="px-6 py-3">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {stickFeedback.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="px-6 py-4 text-center text-slate-500">No feedback submitted.</td>
                      </tr>
                    ) : (
                      stickFeedback.map(fb => (
                        <tr key={fb.id} className="hover:bg-slate-50">
                          <td className="px-6 py-4 text-slate-500 tabular-nums">P: {fb.player_id} / Pr: {fb.stick_product_id || '-'}</td>
                          <td className="px-6 py-4 font-medium">{fb.feedback_title}</td>
                          <td className="px-6 py-4">
                            {fb.rating_value ? (
                              <div className="flex items-center gap-1">
                                <span className="font-medium tabular-nums">{fb.rating_value}</span>
                                <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                              </div>
                            ) : '-'}
                          </td>
                          <td className="px-6 py-4">
                            {fb.would_recommend ? (
                              <CheckCircle className="w-4 h-4 text-emerald-500" />
                            ) : '-'}
                          </td>
                          <td className="px-6 py-4 text-slate-500">{formatDate(fb.submitted_at)}</td>
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
                <TrendingUp className="w-5 h-5 text-emerald-600" />
                <h2 className="text-lg font-semibold text-slate-900">Stick Recommendations</h2>
              </div>
            </div>
            {isLoadingFeedback ? (
              <div className="p-6 text-center text-slate-500">Loading recommendations...</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                    <tr>
                      <th className="px-6 py-3">Player ID</th>
                      <th className="px-6 py-3">Product ID</th>
                      <th className="px-6 py-3">Reason</th>
                      <th className="px-6 py-3">Specs (Flex/Curve)</th>
                      <th className="px-6 py-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {stickRecommendations.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="px-6 py-4 text-center text-slate-500">No recommendations found.</td>
                      </tr>
                    ) : (
                      stickRecommendations.map(rec => (
                        <tr key={rec.id} className="hover:bg-slate-50">
                          <td className="px-6 py-4 tabular-nums">{rec.player_id}</td>
                          <td className="px-6 py-4 tabular-nums">{rec.recommended_stick_product_id}</td>
                          <td className="px-6 py-4 text-slate-600 max-w-xs truncate">{rec.recommendation_reason}</td>
                          <td className="px-6 py-4 font-medium">{rec.suggested_flex || '-'} / {rec.suggested_curve || '-'}</td>
                          <td className="px-6 py-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              rec.recommendation_status === 'accepted' ? 'bg-emerald-100 text-emerald-700' :
                              rec.recommendation_status === 'rejected' ? 'bg-red-100 text-red-700' :
                              'bg-amber-100 text-amber-700'
                            }`}>
                              {rec.recommendation_status || 'Pending'}
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
    </div>
  )
}
