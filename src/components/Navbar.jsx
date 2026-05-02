import { useState, useRef, useEffect } from "react"
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/useAuth'
import { useCart } from '../context/useCart'

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [profileOpen, setProfileOpen] = useState(false)
    const { user, signOut } = useAuth()
    const { totalItems } = useCart()
    const navigate = useNavigate()
    const dropdownRef = useRef(null)
    const location = useLocation()
    const { pathname } = location

    const isActive = (path) => {
        if (path === '/') {
            return pathname === '/';
        }
        return pathname.startsWith(path);
    }

    const getDesktopClass = (path) => {
        return isActive(path)
            ? "text-orange-600 dark:text-orange-400 font-bold border-b-2 border-orange-500 pb-1 font-headline text-sm"
            : "text-slate-600 dark:text-slate-400 font-medium hover:text-orange-500 transition-colors font-headline text-sm"
    }

    const getMobileClass = (path) => {
        return isActive(path)
            ? "block text-lg font-bold text-orange-600 py-3 border-b border-surface-container-low"
            : "block text-lg font-medium text-slate-700 py-3 border-b border-surface-container-low"
    }

    // Tutup dropdown kalau klik di luar
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setProfileOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    const handleSignOut = () => {
        signOut()
        setProfileOpen(false)
        navigate("/")
    }

    return (
        <nav className="fixed top-0 w-full z-50 bg-surface/60 dark:bg-slate-900/60 backdrop-blur-md shadow-[0_20px_40px_rgba(25,28,29,0.06)]">
            <div className="flex justify-between items-center px-4 md:px-8 py-4 max-w-7xl mx-auto">
                <div className="text-2xl font-bold tracking-tight text-orange-600 dark:text-orange-400 font-headline">Pet Atelier</div>
                <div className="hidden lg:flex gap-6 items-center">
                    <Link to='/' className={getDesktopClass('/')}>Home</Link>
                    <Link to='/HomeServices' className={getDesktopClass('/HomeServices')}>Services</Link>
                    <Link to='/CatalogProduct' className={getDesktopClass('/CatalogProduct')}>Catalog</Link>
                    <Link to='/HomeAboutUs' className={getDesktopClass('/HomeAboutUs')}>About Us</Link>
                    <Link to='/HomeContactUs' className={getDesktopClass('/HomeContactUs')}>Contact Us</Link>
                </div>

                <div className="flex items-center gap-3 md:gap-4">
                    <Link to="/cart" className="relative p-2 text-on-surface hover:bg-surface-container-low rounded-full transition-all duration-300">
                        <span className="material-symbols-outlined">shopping_cart</span>
                        {totalItems > 0 && (
                            <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-on-primary text-[10px] font-black rounded-full flex items-center justify-center">
                                {totalItems > 9 ? "9+" : totalItems}
                            </span>
                        )}
                    </Link>

                    {user ? (
                        /* ── Sudah login: tampilkan profile ── */
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={() => setProfileOpen(!profileOpen)}
                                className="flex items-center gap-2 hover:bg-surface-container-low rounded-full px-2 py-1 transition-all"
                            >
                                {user.avatar ? (
                                    <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full object-cover ring-2 ring-orange-200" />
                                ) : (
                                    <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center text-sm font-bold">
                                        {user.name.charAt(0).toUpperCase()}
                                    </div>
                                )}
                                <span className="hidden sm:block text-sm font-bold text-slate-700 max-w-[100px] truncate">{user.name}</span>
                                <span className="material-symbols-outlined text-slate-400 text-sm">expand_more</span>
                            </button>

                            {/* Dropdown */}
                            {profileOpen && (
                                <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-2xl shadow-xl border border-surface-container-high overflow-hidden z-50">
                                    <div className="px-4 py-3 border-b border-surface-container-high">
                                        <p className="font-bold text-sm text-on-surface">{user.name}</p>
                                        <p className="text-xs text-on-surface-variant truncate">{user.email}</p>
                                        <span className={`inline-block mt-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${user.role === "admin" ? "bg-orange-100 text-orange-700" : "bg-surface-container text-on-surface-variant"}`}>
                                            {user.role}
                                        </span>
                                    </div>
                                    <div className="py-2">
                                        {user.role === "admin" && (
                                            <Link
                                                to="/AdminDashboard"
                                                onClick={() => setProfileOpen(false)}
                                                className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-on-surface hover:bg-surface-container-low transition-colors"
                                            >
                                                <span className="material-symbols-outlined text-lg text-primary">dashboard</span>
                                                Admin Dashboard
                                            </Link>
                                        )}
                                        <Link
                                            to={user.role === "admin" ? "/ProfileDashboard" : "/my-profile"}
                                            onClick={() => setProfileOpen(false)}
                                            className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-on-surface hover:bg-surface-container-low transition-colors"
                                        >
                                            <span className="material-symbols-outlined text-lg text-slate-400">person</span>
                                            My Profile
                                        </Link>
                                        {user.role !== "admin" && (
                                            <Link
                                                to="/my-orders"
                                                onClick={() => setProfileOpen(false)}
                                                className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-on-surface hover:bg-surface-container-low transition-colors"
                                            >
                                                <span className="material-symbols-outlined text-lg text-slate-400">receipt_long</span>
                                                My Orders
                                            </Link>
                                        )}
                                        <div className="border-t border-surface-container-high mt-1 pt-1">
                                            <button
                                                onClick={handleSignOut}
                                                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-error hover:bg-error/5 transition-colors"
                                            >
                                                <span className="material-symbols-outlined text-lg">logout</span>
                                                Sign Out
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        /* ── Belum login: tampilkan Sign In & Sign Up ── */
                        <div className="hidden sm:flex items-center gap-2">
                            <Link
                                to="/signin"
                                className="text-slate-600 font-bold px-4 py-2 rounded-full hover:bg-surface-container-low transition-all text-sm"
                            >
                                Sign In
                            </Link>
                            <Link
                                to="/signup"
                                className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-5 py-2.5 rounded-full font-bold hover:opacity-90 transition-all shadow-lg text-sm"
                            >
                                Sign Up
                            </Link>
                        </div>
                    )}

                    <button
                        className="lg:hidden text-on-surface p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <span className="material-symbols-outlined">
                            {mobileMenuOpen ? "close" : "menu"}
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-surface-variant overflow-y-auto max-h-[calc(100vh-64px)]">
                    <div className="p-6 flex flex-col gap-4">
                        <Link to='/' onClick={() => setMobileMenuOpen(false)} className={getMobileClass('/')}>Home</Link>
                        <Link to='/HomeServices' onClick={() => setMobileMenuOpen(false)} className={getMobileClass('/HomeServices')}>Services</Link>
                        <Link to='/CatalogProduct' onClick={() => setMobileMenuOpen(false)} className={getMobileClass('/CatalogProduct')}>Catalog</Link>
                        <Link to='/HomeAboutUs' onClick={() => setMobileMenuOpen(false)} className={getMobileClass('/HomeAboutUs')}>About Us</Link>
                        <Link to='/HomeContactUs' onClick={() => setMobileMenuOpen(false)} className={getMobileClass('/HomeContactUs')}>Contact Us</Link>

                        {user ? (
                            <div className="flex flex-col gap-3 pt-2">
                                <div className="flex items-center gap-3 py-2">
                                    {user.avatar ? (
                                        <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full object-cover" />
                                    ) : (
                                        <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold">
                                            {user.name.charAt(0)}
                                        </div>
                                    )}
                                    <div>
                                        <p className="font-bold text-sm">{user.name}</p>
                                        <p className="text-xs text-on-surface-variant">{user.email}</p>
                                    </div>
                                </div>
                                {user.role === "admin" && (
                                    <Link to="/admin" onClick={() => setMobileMenuOpen(false)} className="w-full text-center bg-surface-container font-bold py-3 rounded-xl text-sm">
                                        Admin Dashboard
                                    </Link>
                                )}
                                <button onClick={handleSignOut} className="w-full text-error font-bold py-3 rounded-xl border border-error/20 text-sm">
                                    Sign Out
                                </button>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-3 pt-4">
                                <Link to="/signin" onClick={() => setMobileMenuOpen(false)} className="w-full text-center text-slate-700 font-bold py-4 rounded-xl border-2 border-surface-container hover:bg-surface-container-low transition-all block">Sign In</Link>
                                <Link to="/signup" onClick={() => setMobileMenuOpen(false)} className="w-full text-center bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold py-4 rounded-xl shadow-lg hover:opacity-90 transition-all block">Sign Up</Link>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </nav>
    )
}