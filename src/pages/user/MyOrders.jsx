import { useState } from "react"
import { Link } from "react-router-dom"
import { useOrder } from "../../context/useOrder"
import { useAuth } from "../../context/useAuth"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

const STATUS_CONFIG = {
    "Processing": { color: "bg-blue-100 text-blue-700", icon: "progress_activity", spin: true },
    "Confirmed": { color: "bg-amber-100 text-amber-700", icon: "check_circle", spin: false },
    "Shipped": { color: "bg-purple-100 text-purple-700", icon: "local_shipping", spin: false },
    "Delivered": { color: "bg-green-100 text-green-700", icon: "package_2", spin: false },
    "Cancelled": { color: "bg-red-100 text-red-700", icon: "cancel", spin: false }
}

function OrderCard({ order, isAdmin, onUpdateStatus }) {
    const [expanded, setExpanded] = useState(false)
    const cfg = STATUS_CONFIG[order.status] || STATUS_CONFIG["Processing"]
    const formattedDate = new Date(order.date).toLocaleDateString("en-US", {
        year: "numeric", month: "long", day: "numeric"
    })
    const formattedTime = new Date(order.date).toLocaleTimeString("en-US", {
        hour: "2-digit", minute: "2-digit"
    })

    return (
        <div className="bg-white rounded-2xl shadow-[0_4px_24px_rgba(25,28,29,0.06)] overflow-hidden border border-surface-container-high hover:shadow-[0_8px_32px_rgba(25,28,29,0.1)] transition-shadow duration-300">
            {/* Card Header */}
            <div className="px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>receipt_long</span>
                    </div>
                    <div>
                        <p className="font-black text-on-surface text-sm">{order.id}</p>
                        <p className="text-xs text-on-surface-variant mt-0.5">{formattedDate} · {formattedTime}</p>
                        <p className="text-xs font-bold text-on-surface-variant mt-1">
                            {order.items?.length || 0} item{order.items?.length !== 1 ? "s" : ""} · 
                            <span className="text-primary font-black ml-1">${(order.total || 0).toFixed(2)}</span>
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    {isAdmin ? (
                        <div className="relative">
                            <select
                                value={order.status}
                                onChange={(e) => onUpdateStatus(order.id, e.target.value)}
                                className={`appearance-none outline-none pr-8 pl-3 py-1.5 rounded-full text-xs font-bold cursor-pointer transition-all ${cfg.color} border border-transparent hover:border-current/30 shadow-sm`}
                            >
                                <option value="Processing">Processing</option>
                                <option value="Confirmed">Confirmed</option>
                                <option value="Shipped">Shipped</option>
                                <option value="Delivered">Delivered</option>
                                <option value="Cancelled">Cancelled</option>
                            </select>
                            <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-base" style={{ fontVariationSettings: "'FILL' 1" }}>arrow_drop_down</span>
                        </div>
                    ) : (
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold ${cfg.color}`}>
                            <span className={`material-symbols-outlined text-sm ${cfg.spin ? "animate-spin" : ""}`} style={{ fontVariationSettings: "'FILL' 1" }}>{cfg.icon}</span>
                            {order.status}
                        </span>
                    )}
                    <button
                        onClick={() => setExpanded(!expanded)}
                        className="w-9 h-9 rounded-full bg-surface-container-low flex items-center justify-center hover:bg-surface-container transition-all active:scale-90"
                    >
                        <span className={`material-symbols-outlined text-on-surface-variant text-lg transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}>
                            expand_more
                        </span>
                    </button>
                </div>
            </div>

            {/* Expandable Detail */}
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expanded ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="border-t border-surface-container-high px-6 py-5 space-y-4">
                    {/* Items List */}
                    <h4 className="text-xs font-black uppercase tracking-wider text-on-surface-variant">Order Items</h4>
                    <div className="space-y-3">
                        {order.items?.map((item, i) => (
                            <div key={i} className="flex items-center gap-4 bg-surface-container-lowest rounded-xl p-3">
                                <div className="w-14 h-14 rounded-lg overflow-hidden bg-surface-container-low flex-shrink-0">
                                    {item.src ? (
                                        <img src={item.src} alt={item.name} className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <span className="material-symbols-outlined text-on-surface-variant">inventory_2</span>
                                        </div>
                                    )}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="font-bold text-sm text-on-surface truncate">{item.name}</p>
                                    <p className="text-xs text-on-surface-variant">Qty: {item.qty}</p>
                                </div>
                                <p className="font-black text-sm text-primary flex-shrink-0">${(item.price * item.qty).toFixed(2)}</p>
                            </div>
                        ))}
                    </div>

                    {/* Order Summary */}
                    <div className="bg-surface-container-lowest rounded-xl p-4 space-y-2">
                        <div className="flex justify-between text-xs text-on-surface-variant">
                            <span>Subtotal</span>
                            <span className="font-bold">${(order.subtotal || 0).toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-xs text-on-surface-variant">
                            <span>Tax (8%)</span>
                            <span className="font-bold">${(order.tax || 0).toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between border-t border-surface-container-high pt-2 mt-2">
                            <span className="text-sm font-black text-on-surface">Total</span>
                            <span className="text-sm font-black text-primary">${(order.total || 0).toFixed(2)}</span>
                        </div>
                    </div>

                    {/* Shipping Info */}
                    {order.address && (
                        <div className="flex items-start gap-3 bg-surface-container-lowest rounded-xl p-4">
                            <span className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                            <div>
                                <p className="text-xs font-black uppercase tracking-wider text-on-surface-variant mb-1">Delivery Address</p>
                                <p className="text-sm font-bold text-on-surface">{order.address.name}</p>
                                <p className="text-xs text-on-surface-variant">{order.address.street}, {order.address.city}</p>
                            </div>
                        </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-1">
                        <Link
                            to="/CatalogProduct"
                            className="flex-1 text-center text-xs font-bold py-3 rounded-xl bg-surface-container text-on-surface-variant hover:bg-surface-container-high transition-all"
                        >
                            Shop Again
                        </Link>
                        {order.status === "Delivered" && !isAdmin && (
                            <button className="flex-1 text-xs font-bold py-3 rounded-xl bg-primary text-on-primary hover:opacity-90 transition-all">
                                Leave a Review
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function MyOrders() {
    const { orders, updateOrderStatus } = useOrder()
    const { user } = useAuth()
    const [filterStatus, setFilterStatus] = useState("All")

    const isAdmin = user?.role === "admin"

    const statuses = ["All", "Processing", "Confirmed", "Shipped", "Delivered", "Cancelled"]
    const filtered = filterStatus === "All" ? orders : orders.filter(o => o.status === filterStatus)

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-gradient-to-br from-surface-container-lowest via-surface to-surface-container-low pt-24 pb-16 px-4">
                <div className="max-w-3xl mx-auto">
                    {/* Header */}
                    <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                        <div>
                            <p className="text-primary font-bold text-xs tracking-[0.2em] uppercase mb-1">
                                {isAdmin ? "Administration" : "Account"}
                            </p>
                            <h1 className="text-4xl font-extrabold font-headline text-on-surface">
                                {isAdmin ? "Manage Orders" : "My Orders"}
                            </h1>
                            <p className="text-on-surface-variant text-sm mt-1">
                                {orders.length} order{orders.length !== 1 ? "s" : ""} total
                            </p>
                        </div>
                        {!isAdmin && (
                            <Link to="/CatalogProduct" className="flex items-center gap-2 bg-primary text-on-primary px-5 py-2.5 rounded-full font-bold text-sm hover:opacity-90 transition-all shadow-lg self-start sm:self-auto">
                                <span className="material-symbols-outlined text-base">add_shopping_cart</span>
                                Shop Now
                            </Link>
                        )}
                    </div>

                    {/* Status Filter Chips */}
                    <div className="flex gap-2 flex-wrap mb-6">
                        {statuses.map(s => (
                            <button
                                key={s}
                                onClick={() => setFilterStatus(s)}
                                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${filterStatus === s
                                    ? "bg-primary text-on-primary shadow-md scale-105"
                                    : "bg-white text-on-surface-variant border border-surface-container-high hover:border-primary/30 hover:text-primary"
                                }`}
                            >
                                {s}
                            </button>
                        ))}
                    </div>

                    {/* Orders List */}
                    {filtered.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-24 text-center">
                            <div className="w-24 h-24 bg-surface-container-low rounded-full flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined text-5xl text-on-surface-variant">receipt_long</span>
                            </div>
                            <h3 className="text-xl font-bold text-on-surface mb-2">No Orders Found</h3>
                            <p className="text-on-surface-variant text-sm mb-6">
                                {filterStatus === "All" ? "There are no orders yet." : `No orders with status "${filterStatus}".`}
                            </p>
                            {!isAdmin && (
                                <Link to="/CatalogProduct" className="bg-primary text-on-primary px-8 py-3.5 rounded-full font-bold hover:opacity-90 transition-all shadow-lg text-sm">
                                    Start Shopping
                                </Link>
                            )}
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {filtered.map(order => (
                                <OrderCard 
                                    key={order.id} 
                                    order={order} 
                                    isAdmin={isAdmin}
                                    onUpdateStatus={updateOrderStatus}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </>
    )
}
