import { useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"
import { useCart } from "../context/useCart"

export default function CartLayout() {
    const { cartItems, updateQty, removeFromCart, subtotal, tax, total } = useCart()
    const navigate = useNavigate()

    return (
        <>
            <Navbar />
            <main className="max-w-7xl mx-auto px-4 md:px-6 pt-24 pb-12">

                {/* Page Title */}
                <div className="mb-8">
                    <h1 className="text-3xl font-extrabold font-headline text-on-surface">My Cart</h1>
                    <p className="text-on-surface-variant mt-1">{cartItems.length} item{cartItems.length !== 1 ? "s" : ""} in your cart</p>
                </div>

                {cartItems.length === 0 ? (
                    /* Empty State */
                    <div className="text-center py-32">
                        <span className="material-symbols-outlined text-8xl text-surface-container-highest block mb-6">shopping_cart</span>
                        <h2 className="text-2xl font-bold font-headline mb-2">Your cart is empty</h2>
                        <p className="text-on-surface-variant mb-8">Looks like you haven't added anything yet.</p>
                        <button
                            onClick={() => navigate("/CatalogProduct")}
                            className="bg-primary text-on-primary px-8 py-4 rounded-full font-bold hover:opacity-90 transition-all"
                        >
                            Browse Products
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">

                        {/* Cart Items */}
                        <div className="lg:col-span-8 space-y-4 md:space-y-6">
                            {cartItems.map(item => (
                                <div key={item.id} className="bg-white shadow-sm border border-surface-container-high p-4 md:p-6 rounded-2xl flex gap-4 md:gap-8 items-start md:items-center">
                                    <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 overflow-hidden rounded-xl bg-surface-container">
                                        <img alt={item.name} className="w-full h-full object-cover" src={item.src} />
                                    </div>
                                    <div className="flex-1 min-w-0 flex flex-col justify-between self-stretch">
                                        <div className="flex justify-between items-start gap-2">
                                            <div className="truncate">
                                                <h3 className="text-base md:text-xl font-bold font-headline truncate">{item.name}</h3>
                                                <p className="text-on-surface-variant text-xs md:text-sm">{item.desc}</p>
                                            </div>
                                            <span className="text-base md:text-xl font-bold text-primary shrink-0">
                                                ${(item.price * item.qty).toFixed(2)}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between mt-4 md:mt-6">
                                            <div className="flex items-center bg-white rounded-full p-1 shadow-sm border border-surface-container-high">
                                                <button
                                                    onClick={() => updateQty(item.id, -1)}
                                                    className="w-9 h-9 md:w-8 md:h-8 flex items-center justify-center text-primary hover:bg-primary/10 rounded-full transition-colors"
                                                >
                                                    <span className="material-symbols-outlined text-sm">remove</span>
                                                </button>
                                                <span className="px-4 font-black text-sm md:text-base">{item.qty}</span>
                                                <button
                                                    onClick={() => updateQty(item.id, 1)}
                                                    className="w-9 h-9 md:w-8 md:h-8 flex items-center justify-center text-primary hover:bg-primary/10 rounded-full transition-colors"
                                                >
                                                    <span className="material-symbols-outlined text-sm">add</span>
                                                </button>
                                            </div>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-error flex items-center gap-1.5 text-xs md:text-sm font-bold hover:bg-error/5 p-2 rounded-lg transition-colors"
                                            >
                                                <span className="material-symbols-outlined text-lg">delete</span>
                                                <span className="hidden sm:inline">Remove</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-4">
                            <div className="sticky top-28 space-y-6">
                                <div className="bg-surface-container-lowest p-6 md:p-8 rounded-2xl shadow-[0_20px_40px_rgba(25,28,29,0.06)] space-y-6">
                                    <h2 className="text-xl md:text-2xl font-black font-headline tracking-tight">Order Summary</h2>
                                    <div className="space-y-3 md:space-y-4">
                                        <div className="flex justify-between text-on-surface-variant text-sm">
                                            <span>Subtotal ({cartItems.reduce((s, i) => s + i.qty, 0)} items)</span>
                                            <span className="font-bold text-on-surface">${subtotal.toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between text-on-surface-variant text-sm">
                                            <span className="flex items-center gap-1">
                                                Shipping
                                                <span className="material-symbols-outlined text-xs">info</span>
                                            </span>
                                            <span className="font-bold text-on-surface">Calculated at checkout</span>
                                        </div>
                                        <div className="flex justify-between text-on-surface-variant text-sm">
                                            <span>Estimated Tax (8%)</span>
                                            <span className="font-bold text-on-surface">${tax.toFixed(2)}</span>
                                        </div>
                                    </div>
                                    <div className="h-px bg-surface-container-highest"></div>
                                    <div className="flex justify-between items-end">
                                        <span className="text-base md:text-lg font-bold font-headline">Total</span>
                                        <span className="text-2xl md:text-3xl font-black text-primary">${total.toFixed(2)}</span>
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-on-surface-variant">Promo Code</label>
                                        <div className="flex gap-2">
                                            <input
                                                className="flex-1 bg-surface-container border border-surface-container-highest rounded-full px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none"
                                                placeholder="Enter code"
                                                type="text"
                                            />
                                            <button className="bg-surface-container-highest text-on-surface px-5 rounded-full text-sm font-bold hover:bg-primary hover:text-white transition-all">Apply</button>
                                        </div>
                                    </div>
                                    <div className="pt-2 space-y-3">
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-center text-slate-400">Accepted Payments</p>
                                        <div className="flex justify-center gap-4 text-slate-400">
                                            <span className="material-symbols-outlined text-xl">credit_card</span>
                                            <span className="material-symbols-outlined text-xl">payments</span>
                                            <span className="material-symbols-outlined text-xl">account_balance_wallet</span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => navigate("/checkout")}
                                        className="flex w-full py-5 bg-gradient-to-r from-primary to-orange-400 text-on-primary rounded-full font-black text-lg shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all items-center justify-center gap-2"
                                    >
                                        Secure Checkout
                                        <span className="material-symbols-outlined">arrow_forward</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </>
    )
}