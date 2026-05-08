import { useState, useMemo, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Sidebar from "../../components/Sidebar"
import AdminHeader from "../../components/AdminHeader"
import { useAuth } from "../../context/useAuth"
import { useOrder } from "../../context/useOrder"
import { useProduct } from "../../context/useProduct"

export default function ProfileDashboard() {
    const { user, users, updateProfile, signOut } = useAuth()
    const { orders } = useOrder()
    const { products } = useProduct()
    const navigate = useNavigate()
    const [name, setName] = useState(user?.name || "")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [saving, setSaving] = useState(false)
    const [saved, setSaved] = useState(false)
    const [error, setError] = useState("")
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    // Real stats for admin
    const stats = useMemo(() => {
        const totalProducts = products.length
        const totalOrders = orders.length
        const totalUsers = users.filter(u => u.role === "user").length
        const totalRevenue = orders
            .filter(o => o.status !== "Cancelled")
            .reduce((sum, o) => sum + (o.total || 0), 0)
        return { totalProducts, totalOrders, totalUsers, totalRevenue }
    }, [products, orders, users])

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
        <div className="flex flex-col md:flex-row bg-surface-container-lowest min-h-screen">
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
            <div className="flex-1 flex flex-col min-w-0">
                <AdminHeader onMenuClick={() => setIsSidebarOpen(true)} title="My Profile" />
                <main className="flex-1 overflow-y-auto pt-6 md:pt-10 pb-16 px-4 md:px-8">
                    <div className="max-w-3xl mx-auto space-y-6">

                        {/* Profile Hero Card */}
                        <div className="border border-gray-300 rounded-3xl shadow-[0_20px_60px_rgba(25,28,29,0.08)] overflow-hidden">
                            {/* Avatar + Info */}
                            <div className="px-8 pb-6 mt-14 flex flex-col sm:flex-row sm:items-end gap-4">
                                <div className="relative">
                                    <div className="w-24 h-24 rounded-2xl overflow-hidden border-4 border-white shadow-xl">
                                        {user.avatar ? (
                                            <img className="w-full h-full object-cover" src={user.avatar} alt={user.name} />
                                        ) : (
                                            <div className="w-full h-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center text-4xl font-black">
                                                {user.name?.charAt(0).toUpperCase() || "A"}
                                            </div>
                                        )}
                                    </div>
                                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center">
                                        <div className="w-2 h-2 bg-white rounded-full" />
                                    </div>
                                </div>
                                <div className="flex-1 pb-1">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <h2 className="text-2xl font-black text-on-surface">{user.name}</h2>
                                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-gradient-to-r from-primary to-secondary text-white shadow-sm">
                                            {user.role}
                                        </span>
                                    </div>
                                    <p className="text-on-surface-variant text-sm mt-0.5">{user.email}</p>
                                    <p className="text-[11px] text-on-surface-variant/70 mt-0.5 flex items-center gap-1">
                                        <span className="material-symbols-outlined text-[13px]">calendar_month</span>
                                        Member since {joinedDate}
                                    </p>
                                </div>
                                <button
                                    onClick={handleSignOut}
                                    className="flex items-center gap-2 border border-error/30 text-error text-sm px-4 py-2 rounded-full font-bold hover:bg-error/5 transition-all self-start sm:self-auto"
                                >
                                    <span className="material-symbols-outlined text-base">logout</span>
                                    Sign Out
                                </button>
                            </div>

                            {/* Live Stats */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 border-t border-surface-container-high">
                                {[
                                    { icon: "inventory_2", color: "text-primary", label: "Products", value: stats.totalProducts },
                                    { icon: "receipt_long", color: "text-secondary", label: "Orders", value: stats.totalOrders },
                                    { icon: "group", color: "text-tertiary", label: "Users", value: stats.totalUsers },
                                    { icon: "payments", color: "text-emerald-600", label: "Revenue", value: `$${stats.totalRevenue.toFixed(0)}` },
                                ].map((s, i) => (
                                    <div key={i} className="flex flex-col items-center py-5 gap-1 border-r last:border-r-0 border-surface-container-high">
                                        <span className={`material-symbols-outlined text-2xl ${s.color}`} style={{ fontVariationSettings: "'FILL' 1" }}>{s.icon}</span>
                                        <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">{s.label}</p>
                                        <p className="text-xl font-black text-on-surface">{s.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Account Settings Card */}
                        <div className="bg-white border border-gray-300 rounded-3xl shadow-[0_8px_30px_rgba(25,28,29,0.06)] overflow-hidden">
                            
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
                                            className="w-full bg-surface-container-low/50 rounded-2xl pl-12 pr-5 py-4 font-medium text-on-surface-variant cursor-not-allowed opacity-70"
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
                                    <div className="flex items-center gap-2 bg-error/10 text-error rounded-2xl px-4 py-3 animate-pulse">
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

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={saving}
                                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-white py-4 rounded-2xl font-black shadow-lg hover:shadow-xl hover:opacity-95 active:scale-[0.98] transition-all disabled:opacity-60"
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
                            </form>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}