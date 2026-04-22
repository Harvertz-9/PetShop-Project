import { useState } from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <nav className="fixed top-0 w-full z-50 bg-surface/60 dark:bg-slate-900/60 backdrop-blur-md shadow-[0_20px_40px_rgba(25,28,29,0.06)]">
            <div className="flex justify-between items-center px-4 md:px-8 py-4 max-w-7xl mx-auto">
                <div className="text-2xl font-bold tracking-tight text-orange-600 dark:text-orange-400 font-headline">Pet Atelier</div>
                <div className="hidden lg:flex gap-6 items-center">
                    <a className="text-orange-600 dark:text-orange-400 font-bold border-b-2 border-orange-500 pb-1 font-headline text-sm" href="#">Home</a>
                    <a className="text-slate-600 dark:text-slate-400 font-medium hover:text-orange-500 transition-colors font-headline text-sm" href="#">Services</a>
                    <Link to="/CatalogProduct" className="text-slate-600 dark:text-slate-400 font-medium hover:text-orange-500 transition-colors font-headline text-sm">Catalog</Link>
                    <a className="text-slate-600 dark:text-slate-400 font-medium hover:text-orange-500 transition-colors font-headline text-sm" href="#">About Us</a>
                    <a className="text-slate-600 dark:text-slate-400 font-medium hover:text-orange-500 transition-colors font-headline text-sm" href="#">Contact Us</a>
                </div>
                <div className="flex items-center gap-3 md:gap-4">
                    <button className="p-2 text-on-surface hover:bg-surface-container-low dark:hover:bg-slate-800 rounded-full transition-all duration-300 scale-95 active:scale-90">
                        <span className="material-symbols-outlined">shopping_cart</span>
                    </button>
                    <div className="hidden sm:flex items-center gap-2">
                        <Link to="/signin" className="text-slate-600 dark:text-slate-400 font-bold px-4 py-2 rounded-full hover:bg-surface-container-low dark:hover:bg-slate-800 transition-all duration-300 scale-95 active:scale-90 text-sm">
                            Sign In
                        </Link>
                        <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-5 py-2.5 rounded-full font-bold hover:opacity-90 transition-all duration-300 scale-95 active:scale-90 shadow-lg text-sm">
                            Sign Up
                        </button>
                    </div>

                    {/* Tombol hamburger — Alpine diganti onClick React */}
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

            {/* Mobile menu — x-show diganti conditional rendering React */}
            {mobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 shadow-2xl border-t border-surface-variant overflow-y-auto max-h-[calc(100vh-64px)]">
                    <div className="p-6 flex flex-col gap-4">
                        <a className="text-lg font-bold text-orange-600 py-3 border-b border-surface-container-low" href="#">Home</a>
                        <a className="text-lg font-medium text-slate-700 dark:text-slate-200 py-3 border-b border-surface-container-low" href="#">Services</a>
                        <a className="text-lg font-medium text-slate-700 dark:text-slate-200 py-3 border-b border-surface-container-low" href="#">Catalog</a>
                        <a className="text-lg font-medium text-slate-700 dark:text-slate-200 py-3 border-b border-surface-container-low" href="#">About Us</a>
                        <a className="text-lg font-medium text-slate-700 dark:text-slate-200 py-3 border-b border-surface-container-low" href="#">Contact Us</a>
                        <div className="flex items-center gap-4 py-4 border-b border-surface-container-low">
                            <span className="material-symbols-outlined text-primary">shopping_cart</span>
                            <span className="font-medium text-slate-700 dark:text-slate-200">My Cart</span>
                        </div>
                        <div className="flex flex-col gap-3 pt-4">
                            <Link to="/signin" className="w-full text-slate-700 dark:text-slate-200 font-bold py-4 rounded-xl border-2 border-surface-container hover:bg-surface-container-low transition-all">Sign In</Link>
                            <button className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold py-4 rounded-xl shadow-lg hover:opacity-90 transition-all">Sign Up</button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}