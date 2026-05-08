import { useState, useMemo } from "react"
import Sidebar from "../../components/Sidebar"
import AdminHeader from "../../components/AdminHeader"
import { useOrder } from "../../context/useOrder"
import { useAuth } from "../../context/useAuth"
import { useProduct } from "../../context/useProduct"

function InteractiveChart({ orders }) {
    const [view, setView] = useState("weekly")
    const [hoveredIdx, setHoveredIdx] = useState(null)

    const chartData = useMemo(() => {
        if (!orders || orders.length === 0) return []

        if (view === "weekly") {
            const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
            const now = new Date()
            const dayTotals = Array(7).fill(0)
            orders.forEach(o => {
                const d = new Date(o.date)
                const diffDays = Math.floor((now - d) / 86400000)
                if (diffDays < 7) {
                    dayTotals[d.getDay()] += o.total || 0
                }
            })
            const max = Math.max(...dayTotals, 1)
            return days.map((day, i) => ({
                day,
                value: Math.round((dayTotals[i] / max) * 100),
                sales: `$${dayTotals[i].toFixed(2)}`
            }))
        } else {
            const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            const now = new Date()
            const monthTotals = Array(12).fill(0)
            orders.forEach(o => {
                const d = new Date(o.date)
                if (d.getFullYear() === now.getFullYear()) {
                    monthTotals[d.getMonth()] += o.total || 0
                }
            })
            const max = Math.max(...monthTotals, 1)
            const currentMonth = now.getMonth()
            return months.slice(0, currentMonth + 1).map((day, i) => ({
                day,
                value: Math.round((monthTotals[i] / max) * 100),
                sales: `$${monthTotals[i].toFixed(2)}`
            }))
        }
    }, [orders, view])

    // Top category by order volume
    const topCategory = useMemo(() => {
        if (!orders || orders.length === 0) return "—"
        const catCount = {}
        orders.forEach(o => {
            o.items?.forEach(item => {
                const cat = item.category || "General"
                catCount[cat] = (catCount[cat] || 0) + item.qty
            })
        })
        const sorted = Object.entries(catCount).sort((a, b) => b[1] - a[1])
        return sorted[0]?.[0] || "Collars"
    }, [orders])

    // Best selling item
    const bestSeller = useMemo(() => {
        if (!orders || orders.length === 0) return "—"
        const itemCount = {}
        orders.forEach(o => {
            o.items?.forEach(item => {
                itemCount[item.name] = (itemCount[item.name] || 0) + item.qty
            })
        })
        const sorted = Object.entries(itemCount).sort((a, b) => b[1] - a[1])
        const name = sorted[0]?.[0] || "—"
        return name.length > 22 ? name.slice(0, 20) + "…" : name
    }, [orders])

    const totalPeriodRevenue = chartData.reduce((sum, d) => {
        const val = parseFloat(d.sales.replace("$", "")) || 0
        return sum + val
    }, 0)

    return (
        <div className="bg-surface-container-low rounded-2xl p-6 space-y-5">
            <div className="flex justify-between items-center flex-wrap gap-3">
                <div>
                    <h2 className="text-xl font-extrabold tracking-tight">Sales Trajectory</h2>
                    <p className="text-xs text-on-surface-variant font-medium mt-0.5">
                        {view === "weekly" ? "Last 7 days" : `Year ${new Date().getFullYear()}`} · Revenue: <span className="text-primary font-black">${totalPeriodRevenue.toFixed(2)}</span>
                    </p>
                </div>
                <div className="flex bg-white/80 p-1 rounded-full border border-outline-variant/20 shadow-sm">
                    <button
                        onClick={() => setView("weekly")}
                        className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${view === "weekly" ? "bg-primary text-on-primary shadow-sm" : "text-on-surface-variant hover:text-on-surface"}`}
                    >Weekly</button>
                    <button
                        onClick={() => setView("monthly")}
                        className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${view === "monthly" ? "bg-primary text-on-primary shadow-sm" : "text-on-surface-variant hover:text-on-surface"}`}
                    >Monthly</button>
                </div>
            </div>

            {/* Chart */}
            <div className="relative h-[220px] flex items-end gap-3 px-2">
                <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between py-1 pr-2">
                    {["100%", "75%", "50%", "25%", "0%"].map(l => (
                        <span key={l} className="text-[9px] text-on-surface-variant font-bold">{l}</span>
                    ))}
                </div>
                <div className="absolute left-8 right-0 top-0 bottom-0 flex flex-col justify-between pointer-events-none">
                    {[0,1,2,3,4].map(i => (
                        <div key={i} className="border-t border-outline-variant/10 w-full" />
                    ))}
                </div>
                <div className="flex-1 flex items-end gap-2 pl-8 h-full">
                    {chartData.length === 0 ? (
                        <div className="flex-1 flex items-center justify-center">
                            <p className="text-xs text-on-surface-variant">No order data yet</p>
                        </div>
                    ) : chartData.map((d, i) => (
                        <div key={`${view}-${i}`} className="flex-1 flex flex-col items-center gap-1 relative group"
                            onMouseEnter={() => setHoveredIdx(i)}
                            onMouseLeave={() => setHoveredIdx(null)}>
                            {hoveredIdx === i && (
                                <div className="absolute -top-14 left-1/2 -translate-x-1/2 bg-on-surface text-white text-[10px] px-3 py-2 rounded-lg shadow-xl whitespace-nowrap z-10">
                                    <p className="font-black">{d.day}</p>
                                    <p className="opacity-80">{d.sales}</p>
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-on-surface" />
                                </div>
                            )}
                            <div
                                className={`w-full rounded-t-lg transition-all duration-500 ease-out cursor-pointer ${
                                    hoveredIdx === i
                                        ? "bg-primary shadow-[0_-4px_20px_rgba(143,78,0,0.3)]"
                                        : hoveredIdx === null
                                        ? (d.value === Math.max(...chartData.map(x => x.value)) ? "bg-secondary" : "bg-primary-container")
                                        : "bg-primary-container/40"
                                }`}
                                style={{ height: `${Math.max(d.value, 3)}%` }}
                            />
                            <span className="text-[9px] font-bold text-on-surface-variant">{d.day}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-3 border-t border-outline-variant/15">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary shadow-sm flex-shrink-0">
                        <span className="material-symbols-outlined text-lg">shopping_basket</span>
                    </div>
                    <div className="min-w-0">
                        <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Top Category</p>
                        <p className="text-sm font-black truncate">{topCategory}</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-secondary shadow-sm flex-shrink-0">
                        <span className="material-symbols-outlined text-lg">stars</span>
                    </div>
                    <div className="min-w-0">
                        <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Best Seller</p>
                        <p className="text-sm font-black truncate">{bestSeller}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function AdminDashboard() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const { orders } = useOrder()
    const { users } = useAuth()
    const { products } = useProduct()

    // --- Total Sales (MTD) ---
    const salesStats = useMemo(() => {
        const now = new Date()
        const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)
        const startOfLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1)

        const mtdOrders = orders.filter(o => {
            const d = new Date(o.date)
            return d >= startOfMonth && o.status !== "Cancelled"
        })
        const lastMonthOrders = orders.filter(o => {
            const d = new Date(o.date)
            return d >= startOfLastMonth && d < startOfMonth && o.status !== "Cancelled"
        })

        const mtdTotal = mtdOrders.reduce((sum, o) => sum + (o.total || 0), 0)
        const lastMonthTotal = lastMonthOrders.reduce((sum, o) => sum + (o.total || 0), 0)
        const growth = lastMonthTotal > 0 ? ((mtdTotal - lastMonthTotal) / lastMonthTotal * 100).toFixed(1) : null

        return { total: mtdTotal, growth, orderCount: mtdOrders.length }
    }, [orders])

    // --- Active Appointments (orders in Processing/Confirmed) ---
    const appointmentStats = useMemo(() => {
        const active = orders.filter(o => o.status === "Processing" || o.status === "Confirmed")
        const total = orders.filter(o => o.status !== "Cancelled").length
        const pct = total > 0 ? Math.round((active.length / Math.max(total, 1)) * 100) : 0
        return { active: active.length, total: Math.max(total, active.length), pct }
    }, [orders])

    // --- Inventory Health ---
    const inventoryStats = useMemo(() => {
        const LOW_STOCK_THRESHOLD = 5
        if (!products || products.length === 0) return { pct: 100, lowStock: 0, total: 0, alerts: [] }

        const productsWithStock = products.map(p => ({
            ...p,
            stock: p.stock !== undefined ? p.stock : 10
        }))
        const lowStockItems = productsWithStock.filter(p => p.stock <= LOW_STOCK_THRESHOLD)
        const healthyPct = Math.round(((productsWithStock.length - lowStockItems.length) / productsWithStock.length) * 100)

        // Category alerts
        const catAlerts = {}
        lowStockItems.forEach(p => {
            const cat = p.category || "General"
            catAlerts[cat] = (catAlerts[cat] || 0) + 1
        })
        const alerts = Object.entries(catAlerts).map(([cat, count]) => ({ cat, count })).slice(0, 2)

        return { pct: healthyPct, lowStock: lowStockItems.length, total: productsWithStock.length, alerts }
    }, [products])

    // --- Recent Orders Quick List ---
    const recentOrders = useMemo(() => {
        return [...orders]
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 5)
    }, [orders])

    const getUserName = (userId) => {
        const found = users.find(u => u.id === userId)
        return found ? found.name : "Guest"
    }

    const STATUS_STYLE = {
        "Processing": "bg-blue-100 text-blue-700",
        "Confirmed": "bg-amber-100 text-amber-700",
        "Shipped": "bg-purple-100 text-purple-700",
        "Delivered": "bg-green-100 text-green-700",
        "Cancelled": "bg-red-100 text-red-700"
    }

    return (
        <>
            <div className="flex flex-col md:flex-row min-h-screen bg-surface-container-lowest">
                <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
                <div className="flex-1 flex flex-col min-w-0">
                    <AdminHeader onMenuClick={() => setIsSidebarOpen(true)} title="Dashboard" />
                    <main className="flex-grow flex flex-col min-w-0">
                        <div className="p-6 md:p-8 space-y-8">

                            {/* Page Header */}
                            <section className="flex items-center justify-between">
                                <div>
                                    <h1 className="text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight leading-none">Dashboard</h1>
                                    <p className="text-on-surface-variant text-sm mt-1 font-medium">
                                        {new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
                                    </p>
                                </div>
                                <button className="px-4 py-2 md:px-6 md:py-3 bg-secondary-container text-on-secondary-container font-bold rounded-full hover:shadow-lg transition-all flex items-center gap-2 text-sm">
                                    <span className="material-symbols-outlined text-base md:flex hidden">download</span>
                                    Export
                                </button>
                            </section>

                            {/* Stat Cards */}
                            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">

                                {/* Total Sales */}
                                <div className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgba(25,28,29,0.07)] relative overflow-hidden group">
                                    <div className="absolute -right-6 -top-6 w-32 h-32 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center">
                                            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>payments</span>
                                        </div>
                                        {salesStats.growth !== null && (
                                            <span className={`text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1 ${parseFloat(salesStats.growth) >= 0 ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-600"}`}>
                                                <span className="material-symbols-outlined text-[13px]">{parseFloat(salesStats.growth) >= 0 ? "trending_up" : "trending_down"}</span>
                                                {parseFloat(salesStats.growth) >= 0 ? "+" : ""}{salesStats.growth}%
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="text-on-surface-variant text-xs font-bold uppercase tracking-widest">Total Sales (MTD)</h3>
                                    <p className="text-3xl font-black text-on-surface mt-1">${salesStats.total.toFixed(2)}</p>
                                    <p className="text-xs text-on-surface-variant font-medium mt-3 flex items-center gap-1">
                                        <span className="material-symbols-outlined text-[13px]">receipt_long</span>
                                        {salesStats.orderCount} order{salesStats.orderCount !== 1 ? "s" : ""} this month
                                    </p>
                                </div>

                                {/* Active Appointments */}
                                <div className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgba(25,28,29,0.07)] relative overflow-hidden group">
                                    <div className="absolute -right-6 -top-6 w-32 h-32 bg-secondary/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="w-11 h-11 bg-secondary/10 rounded-xl flex items-center justify-center">
                                            <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>pending_actions</span>
                                        </div>
                                        <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-secondary/10 text-secondary">
                                            {appointmentStats.pct}% Active
                                        </span>
                                    </div>
                                    <h3 className="text-on-surface-variant text-xs font-bold uppercase tracking-widest">Active Orders</h3>
                                    <div className="flex items-baseline gap-2 mt-1">
                                        <span className="text-3xl font-black text-on-surface">{appointmentStats.active}</span>
                                        <span className="text-on-surface-variant text-sm">/ {appointmentStats.total} total</span>
                                    </div>
                                    <div className="mt-4 space-y-1.5">
                                        <div className="flex justify-between text-[10px] font-bold text-on-surface-variant">
                                            <span>Processing + Confirmed</span>
                                            <span>{appointmentStats.pct}%</span>
                                        </div>
                                        <div className="w-full bg-surface-container-low h-2 rounded-full overflow-hidden">
                                            <div
                                                className="bg-secondary h-full rounded-full transition-all duration-700"
                                                style={{ width: `${appointmentStats.pct}%` }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Inventory Health */}
                                <div className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgba(25,28,29,0.07)] relative overflow-hidden group">
                                    <div className="absolute -right-6 -top-6 w-32 h-32 bg-tertiary/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="w-11 h-11 bg-tertiary/10 rounded-xl flex items-center justify-center">
                                            <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>inventory_2</span>
                                        </div>
                                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${inventoryStats.lowStock > 0 ? "bg-orange-50 text-orange-600" : "bg-emerald-50 text-emerald-600"}`}>
                                            {inventoryStats.lowStock > 0 ? `${inventoryStats.lowStock} low stock` : "All optimal"}
                                        </span>
                                    </div>
                                    <h3 className="text-on-surface-variant text-xs font-bold uppercase tracking-widest">Inventory Health</h3>
                                    <div className="flex items-baseline gap-2 mt-1">
                                        <span className="text-3xl font-black text-on-surface">{inventoryStats.pct}%</span>
                                        <span className="text-on-surface-variant text-sm">{inventoryStats.total} products</span>
                                    </div>
                                    <div className="mt-4 flex flex-wrap gap-1.5">
                                        {inventoryStats.alerts.length > 0
                                            ? inventoryStats.alerts.map(a => (
                                                <span key={a.cat} className="px-2.5 py-1 bg-error/10 text-error rounded-full text-[10px] font-bold uppercase">
                                                    {a.cat} Alert
                                                </span>
                                            ))
                                            : <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-full text-[10px] font-bold uppercase">Stock Healthy</span>
                                        }
                                    </div>
                                </div>
                            </section>

                            {/* Chart + Recent Orders Grid */}
                            <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                                <div className="lg:col-span-8">
                                    <InteractiveChart orders={orders} />
                                </div>

                                {/* Recent Orders Panel */}
                                <div className="lg:col-span-4 bg-white rounded-2xl shadow-[0_8px_30px_rgba(25,28,29,0.07)] overflow-hidden">
                                    <div className="px-5 py-4 border-b border-surface-container-high flex items-center justify-between">
                                        <h3 className="font-black text-sm">Recent Orders</h3>
                                        <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">{orders.length} total</span>
                                    </div>
                                    <div className="divide-y divide-surface-container-high">
                                        {recentOrders.length === 0 ? (
                                            <div className="px-5 py-8 text-center">
                                                <span className="material-symbols-outlined text-4xl text-on-surface-variant/30 block mb-2">receipt_long</span>
                                                <p className="text-xs text-on-surface-variant">No orders yet</p>
                                            </div>
                                        ) : recentOrders.map(order => (
                                            <div key={order.id} className="px-5 py-3 hover:bg-surface-container-lowest transition-colors">
                                                <div className="flex items-center justify-between gap-2">
                                                    <div className="min-w-0">
                                                        <p className="text-xs font-black text-on-surface truncate">{order.id}</p>
                                                        <p className="text-[10px] text-on-surface-variant truncate">{getUserName(order.userId)}</p>
                                                    </div>
                                                    <div className="text-right flex-shrink-0">
                                                        <p className="text-xs font-black text-primary">${(order.total || 0).toFixed(2)}</p>
                                                        <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${STATUS_STYLE[order.status] || "bg-surface-container text-on-surface-variant"}`}>
                                                            {order.status}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    {orders.length > 5 && (
                                        <div className="px-5 py-3 border-t border-surface-container-high">
                                            <p className="text-[10px] font-bold text-on-surface-variant text-center">+{orders.length - 5} more orders</p>
                                        </div>
                                    )}
                                </div>
                            </section>

                            {/* Summary Stats Row */}
                            <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {[
                                    { label: "Total Orders", value: orders.length, icon: "receipt_long", color: "text-primary" },
                                    { label: "Total Users", value: users.filter(u => u.role === "user").length, icon: "group", color: "text-secondary" },
                                    { label: "Total Products", value: products.length, icon: "inventory_2", color: "text-tertiary" },
                                    { label: "Delivered", value: orders.filter(o => o.status === "Delivered").length, icon: "package_2", color: "text-emerald-600" },
                                ].map(stat => (
                                    <div key={stat.label} className="bg-white rounded-2xl p-5 shadow-[0_4px_16px_rgba(25,28,29,0.06)] flex items-center gap-4">
                                        <span className={`material-symbols-outlined text-3xl ${stat.color}`} style={{ fontVariationSettings: "'FILL' 1" }}>{stat.icon}</span>
                                        <div>
                                            <p className="text-2xl font-black text-on-surface">{stat.value}</p>
                                            <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">{stat.label}</p>
                                        </div>
                                    </div>
                                ))}
                            </section>

                        </div>
                    </main>
                </div>
             </div>
        </>
    )
}