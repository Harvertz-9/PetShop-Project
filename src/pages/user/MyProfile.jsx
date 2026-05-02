import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../context/useAuth"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

export default function MyProfile() {
    const { user, updateProfile, signOut } = useAuth()
    const navigate = useNavigate()
    const [name, setName] = useState(user?.name || "")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [saving, setSaving] = useState(false)
    const [saved, setSaved] = useState(false)
    const [error, setError] = useState("")

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

    if (!user) {
        navigate("/SignIn")
        return null
    }

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-gradient-to-br from-surface-container-lowest via-surface to-surface-container-low pt-24 pb-16 px-4">
                <div className="max-w-2xl mx-auto">
                    {/* Header */}
                    <div className="mb-8">
                        <p className="text-primary font-bold text-xs tracking-[0.2em] uppercase mb-1">Account</p>
                        <h1 className="text-4xl font-extrabold font-headline text-on-surface">My Profile</h1>
                    </div>

                    {/* Profile Card */}
                    <div className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(25,28,29,0.08)] overflow-hidden">
                        {/* Avatar Section */}
                        <div className="relative bg-gradient-to-br from-primary/10 to-primary-container/20 px-8 pt-10 pb-6 flex flex-col items-center text-center">
                            <div className="relative group mb-4">
                                <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-xl">
                                    {user.avatar ? (
                                        <img className="w-full h-full object-cover" src={user.avatar} alt={user.name} />
                                    ) : (
                                        <div className="w-full h-full bg-gradient-to-br from-primary to-primary-container text-white flex items-center justify-center text-5xl font-black">
                                            {user.name?.charAt(0).toUpperCase() || "U"}
                                        </div>
                                    )}
                                </div>
                                <button className="absolute -bottom-1 -right-1 w-9 h-9 bg-primary text-on-primary rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform">
                                    <span className="material-symbols-outlined text-sm">edit</span>
                                </button>
                            </div>
                            <h2 className="text-2xl font-black text-on-surface">{user.name}</h2>
                            <p className="text-on-surface-variant text-sm mt-0.5">{user.email}</p>
                            <span className={`inline-block mt-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${user.role === "admin" ? "bg-orange-100 text-orange-700" : "bg-surface-container-high text-on-surface-variant"}`}>
                                {user.role}
                            </span>
                        </div>

                        {/* Stats Row */}
                        <div className="grid grid-cols-3 divide-x divide-surface-container-high border-b border-surface-container-high">
                            <div className="flex flex-col items-center py-5 gap-1">
                                <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>shopping_bag</span>
                                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Orders</p>
                                <p className="text-xl font-black text-on-surface">—</p>
                            </div>
                            <div className="flex flex-col items-center py-5 gap-1">
                                <span className="material-symbols-outlined text-secondary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Wishlist</p>
                                <p className="text-xl font-black text-on-surface">—</p>
                            </div>
                            <div className="flex flex-col items-center py-5 gap-1">
                                <span className="material-symbols-outlined text-tertiary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Reviews</p>
                                <p className="text-xl font-black text-on-surface">—</p>
                            </div>
                        </div>

                        {/* Form Section */}
                        <form onSubmit={handleSave} className="p-8 space-y-6">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="material-symbols-outlined text-primary">settings</span>
                                <h3 className="text-lg font-bold text-on-surface">Account Settings</h3>
                            </div>

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

                            {/* Email (read-only) */}
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
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="flex items-center gap-3">
                                <div className="flex-1 h-px bg-surface-container-high"></div>
                                <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Change Password</span>
                                <div className="flex-1 h-px bg-surface-container-high"></div>
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
                                        className="w-full bg-surface-container-low rounded-2xl pl-12 pr-5 py-4 font-medium text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                                        placeholder="Confirm new password"
                                    />
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
                                <div className="flex items-center gap-2 bg-green-50 text-green-700 rounded-2xl px-4 py-3">
                                    <span className="material-symbols-outlined text-base">check_circle</span>
                                    <p className="text-sm font-bold">Profile updated successfully!</p>
                                </div>
                            )}

                            {/* Actions */}
                            <div className="flex flex-col sm:flex-row gap-3 pt-2">
                                <button
                                    type="submit"
                                    disabled={saving}
                                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary-container text-on-primary py-4 rounded-2xl font-black shadow-lg hover:shadow-xl hover:opacity-95 active:scale-[0.98] transition-all disabled:opacity-60"
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
                                <button
                                    type="button"
                                    onClick={handleSignOut}
                                    className="flex items-center justify-center gap-2 border-2 border-error/20 text-error py-4 px-6 rounded-2xl font-bold hover:bg-error/5 active:scale-[0.98] transition-all"
                                >
                                    <span className="material-symbols-outlined text-base">logout</span>
                                    Sign Out
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
