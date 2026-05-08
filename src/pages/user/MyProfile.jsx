import { useState, useMemo, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"
import { useAuth } from "../../context/useAuth"
import { useOrder } from "../../context/useOrder"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

const STATUS_CONFIG = {
    "Processing": { color: "bg-blue-100 text-blue-700", icon: "progress_activity" },
    "Confirmed": { color: "bg-amber-100 text-amber-700", icon: "check_circle" },
    "Shipped": { color: "bg-purple-100 text-purple-700", icon: "local_shipping" },
    "Delivered": { color: "bg-green-100 text-green-700", icon: "package_2" },
    "Cancelled": { color: "bg-red-100 text-red-700", icon: "cancel" }
}

export default function MyProfile() {
    const { user, updateProfile, signOut } = useAuth()
    const { orders } = useOrder()
    const navigate = useNavigate()
    const [name, setName] = useState(user?.name || "")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [saving, setSaving] = useState(false)
    const [saved, setSaved] = useState(false)
    const [error, setError] = useState("")

    // Real user stats
    const stats = useMemo(() => {
        const userOrders = orders.filter(o => o.userId === user?.id)
        const totalOrders = userOrders.length
        const delivered = userOrders.filter(o => o.status === "Delivered").length
        const totalSpent = userOrders
            .filter(o => o.status !== "Cancelled")
            .reduce((sum, o) => sum + (o.total || 0), 0)
        const activeOrders = userOrders.filter(o => o.status === "Processing" || o.status === "Confirmed" || o.status === "Shipped").length

        // Get last order
        const sorted = [...userOrders].sort((a, b) => new Date(b.date) - new Date(a.date))
        const lastOrder = sorted[0] || null

        return { totalOrders, delivered, totalSpent, activeOrders, lastOrder }
    }, [orders, user])

    const handleSave = (e) => {
        e.preventDefault()
        setError("")
        if (password && password !== confirmPassword) {
            setError("Passwords do not match.")
            return
        }
        if (password && password.length < 6) {
            setError("Password must be at least 6 characters.")
            return
        }
        setSaving(true)
        setTimeout(() => {
            updateProfile({ name, password: password || undefined })
            setSaving(false)
            setSaved(true)
            setPassword("")
            setConfirmPassword("")
            setTimeout(() => setSaved(false), 3000)
        }, 800)
    }

    const handleSignOut = () => {
        signOut()
        navigate("/")
    }

    useEffect(() => {
        if (!user) navigate("/SignIn")
    }, [user, navigate])

    if (!user) return null

    const joinedDate = new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-gradient-to-br from-surface-container-lowest via-surface to-surface-container-low pt-24 pb-16 px-4">
                <div className="max-w-2xl mx-auto space-y-6">

                    {/* Profile Hero Card */}
                    <div className="bg-white border border-gray-300 rounded-3xl shadow-[0_20px_60px_rgba(25,28,29,0.08)] overflow-hidden">
                        {/* Banner */}
                        
                        {/* Avatar + Info */}
                        <div className="px-8 pb-6 mt-12 flex items-end gap-4">
                            <div className="relative">
                                <div className="w-20 h-20 rounded-2xl overflow-hidden border-4 border-white shadow-xl">
                                    {user.avatar ? (
                                        <img className="w-full h-full object-cover" src={user.avatar} alt={user.name} />
                                    ) : (
                                        <div className="w-full h-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center text-3xl font-black">
                                            {user.name?.charAt(0).toUpperCase() || "U"}
                                        </div>
                                    )}
                                </div>
                                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-white" />
                            </div>
                            <div className="flex-1 pb-1">
                                <div className="flex items-center gap-2 flex-wrap">
                                    <h2 className="text-xl font-black text-on-surface">{user.name}</h2>
                                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${user.role === "admin" ? "bg-orange-100 text-orange-700" : "bg-primary/10 text-primary"}`}>
                                        {user.role}
                                    </span>
                                </div>
                                <p className="text-on-surface-variant text-sm">{user.email}</p>
                                <p className="text-[11px] text-on-surface-variant/70 flex items-center gap-1 mt-0.5">
                                    <span className="material-symbols-outlined text-[12px]">calendar_month</span>
                                    Member since {joinedDate}
                                </p>
                            </div>
                            <button
                                type="button"
                                onClick={handleSignOut}
                                className="flex items-center justify-center gap-2 border-2 border-error/20 text-error py-4 px-6 rounded-2xl font-bold hover:bg-error/5 active:scale-[0.98] transition-all"
                            >
                                <span className="material-symbols-outlined text-base">logout</span>
                                Sign Out
                            </button>
                        </div>

                        {/* Stats Row */}
                        <div className="grid grid-cols-3 border-t border-surface-container-high">
                            <div className="flex flex-col items-center py-5 gap-1 border-r border-surface-container-high">
                                <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>receipt_long</span>
                                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Orders</p>
                                <p className="text-xl font-black text-on-surface">{stats.totalOrders}</p>
                            </div>
                            <div className="flex flex-col items-center py-5 gap-1 border-r border-surface-container-high">
                                <span className="material-symbols-outlined text-emerald-600 text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>package_2</span>
                                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Delivered</p>
                                <p className="text-xl font-black text-on-surface">{stats.delivered}</p>
                            </div>
                            <div className="flex flex-col items-center py-5 gap-1">
                                <span className="material-symbols-outlined text-secondary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>payments</span>
                                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Total Spent</p>
                                <p className="text-xl font-black text-on-surface">${stats.totalSpent.toFixed(0)}</p>
                            </div>
                        </div>
                    </div>

                    {/* Active Orders Highlight */}
                    {stats.activeOrders > 0 && (
                        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-4 flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                                    <span className="material-symbols-outlined text-primary animate-pulse" style={{ fontVariationSettings: "'FILL' 1" }}>local_shipping</span>
                                </div>
                                <div>
                                    <p className="text-sm font-black text-on-surface">
                                        {stats.activeOrders} Active Order{stats.activeOrders > 1 ? "s" : ""}
                                    </p>
                                    <p className="text-xs text-on-surface-variant">Your orders are being processed</p>
                                </div>
                            </div>
                            <Link to="/MyOrders" className="text-xs font-bold text-primary flex items-center gap-1 hover:underline">
                                Track
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </Link>
                        </div>
                    )}

                    {/* Last Order Preview */}
                    {stats.lastOrder && (
                        <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(25,28,29,0.06)] p-5">
                            <div className="flex items-center justify-between mb-3">
                                <h3 className="text-sm font-black text-on-surface">Last Order</h3>
                                <Link to="/MyOrders" className="text-xs font-bold text-primary flex items-center gap-1 hover:underline">
                                    View All
                                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </Link>
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-black text-on-surface">{stats.lastOrder.id}</p>
                                    <p className="text-[10px] text-on-surface-variant mt-0.5">
                                        {new Date(stats.lastOrder.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                                        {" · "}{stats.lastOrder.items?.length || 0} item(s)
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm font-black text-primary">${(stats.lastOrder.total || 0).toFixed(2)}</p>
                                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${STATUS_CONFIG[stats.lastOrder.status]?.color || "bg-surface-container text-on-surface-variant"}`}>
                                        {stats.lastOrder.status}
                                    </span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Account Settings */}
                    <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgba(25,28,29,0.06)] overflow-hidden">
                        <div className="px-8 py-5 border-b border-surface-container-high flex items-center gap-3">
                            <div className="w-9 h-9 bg-primary/10 rounded-xl flex items-center justify-center">
                                <span className="material-symbols-outlined text-primary text-lg">settings</span>
                            </div>
                            <div>
                                <h3 className="text-base font-black text-on-surface">Account Settings</h3>
                                <p className="text-[11px] text-on-surface-variant">Update your profile information</p>
                            </div>
                        </div>

                        <form onSubmit={handleSave} className="p-8 space-y-5">
                            {/* Name */}
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase text-on-surface-variant tracking-wider ml-1">Display Name</label>
                                <div className="relative">
                                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">person</span>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        className="w-full bg-surface-container-low rounded-2xl pl-12 pr-5 py-4 font-medium text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                                        placeholder="Your display name"
                                    />
                                </div>
                            </div>

                            {/* Email read-only */}
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase text-on-surface-variant tracking-wider ml-1">Email Address</label>
                                <div className="relative">
                                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">mail</span>
                                    <input
                                        type="email"
                                        value={user.email}
                                        readOnly
                                        className="w-full bg-surface-container-low/50 rounded-2xl pl-12 pr-20 py-4 font-medium text-on-surface-variant cursor-not-allowed opacity-70"
                                    />
                                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-bold text-on-surface-variant bg-surface-container px-2 py-0.5 rounded-full">Read-only</span>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="flex items-center gap-3 py-1">
                                <div className="flex-1 h-px bg-surface-container-high" />
                                <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Change Password</span>
                                <div className="flex-1 h-px bg-surface-container-high" />
                            </div>

                            {/* New Password */}
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase text-on-surface-variant tracking-wider ml-1">New Password</label>
                                <div className="relative">
                                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">lock</span>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        className="w-full bg-surface-container-low rounded-2xl pl-12 pr-12 py-4 font-medium text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                                        placeholder="Leave blank to keep current"
                                    />
                                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined text-lg">{showPassword ? "visibility_off" : "visibility"}</span>
                                    </button>
                                </div>
                            </div>

                            {/* Confirm Password */}
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase text-on-surface-variant tracking-wider ml-1">Confirm Password</label>
                                <div className="relative">
                                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">lock_reset</span>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        value={confirmPassword}
                                        onChange={e => setConfirmPassword(e.target.value)}
                                        className={`w-full bg-surface-container-low rounded-2xl pl-12 pr-5 py-4 font-medium text-on-surface focus:outline-none focus:ring-2 transition-all ${
                                            confirmPassword && confirmPassword !== password
                                                ? "focus:ring-error/30 ring-2 ring-error/20"
                                                : "focus:ring-primary/30"
                                        }`}
                                        placeholder="Confirm new password"
                                    />
                                    {confirmPassword && confirmPassword === password && password.length >= 6 && (
                                        <span className="absolute right-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-emerald-500 text-lg">check_circle</span>
                                    )}
                                </div>
                            </div>

                            {/* Error */}
                            {error && (
                                <div className="flex items-center gap-2 bg-error/10 text-error rounded-2xl px-4 py-3">
                                    <span className="material-symbols-outlined text-base">error</span>
                                    <p className="text-sm font-bold">{error}</p>
                                </div>
                            )}

                            {/* Success */}
                            {saved && (
                                <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 rounded-2xl px-4 py-3">
                                    <span className="material-symbols-outlined text-base">check_circle</span>
                                    <p className="text-sm font-bold">Profile updated successfully!</p>
                                </div>
                            )}

                            {/* Actions */}
                            <div className="flex flex-col sm:flex-row gap-3 pt-1">
                                <button
                                    type="submit"
                                    disabled={saving}
                                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-white py-4 rounded-2xl font-black shadow-lg hover:shadow-xl hover:opacity-95 active:scale-[0.98] transition-all disabled:opacity-60"
                                >
                                    {saving ? (
                                        <>
                                            <span className="material-symbols-outlined text-base animate-spin">progress_activity</span>
                                            Saving...
                                        </>
                                    ) : (
                                        <>
                                            <span className="material-symbols-outlined text-base">save</span>
                                            Save Changes
                                        </>
                                    )}
                                </button>
                                
                            </div>
                        </form>
                    </div>

                </div>
            </main>
            <Footer />
        </>
    )
}
