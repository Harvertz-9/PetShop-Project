import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import Navbar from "../../components/Navbar"
import { useCart } from "../../context/useCart"
import { useAuth } from "../../context/useAuth"
import { useOrder } from "../../context/useOrder"

// ── Secret Promo Codes ────────────────────────────────────────────────────────
const PROMO_CODES = {
    "PETLOVE10":  { discount: 0.10, label: "10% Off — Pet Love Special" },
    "ATELIER20":  { discount: 0.20, label: "20% Off — Atelier Member" },
    "PAWS50":     { discount: 0.50, label: "50% Off — VIP Exclusive 🎉" },
    "WELCOME15":  { discount: 0.15, label: "15% Off — Welcome Gift" },
    "FURRY25":    { discount: 0.25, label: "25% Off — Furry Friends Club" },
}

// ── Success Modal ─────────────────────────────────────────────────────────────
function SuccessModal({ isOpen, order, onClose }) {
    if (!isOpen || !order) return null

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-4">
            {/* Confetti dots */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <div key={i}
                        className="absolute w-2 h-2 rounded-full animate-bounce"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 60}%`,
                            backgroundColor: ["#F99A3F","#4CAF50","#2196F3","#E91E63","#9C27B0"][i % 5],
                            animationDelay: `${Math.random() * 1}s`,
                            animationDuration: `${0.8 + Math.random() * 0.8}s`
                        }}
                    />
                ))}
            </div>

            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md text-center p-10 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/5 rounded-full" />

                {/* Check icon */}
                <div className="relative z-10">
                    <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-green-200">
                        <span className="material-symbols-outlined text-white text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    </div>
                    <h2 className="text-3xl font-black text-on-surface mb-2">Order Placed! 🎉</h2>
                    <p className="text-on-surface-variant text-sm mb-6">Thank you for shopping at Pet Atelier. Your furry friend will love it!</p>

                    {/* Order Details */}
                    <div className="bg-surface-container-low rounded-2xl p-5 text-left space-y-3 mb-6">
                        <div className="flex justify-between items-center">
                            <span className="text-xs font-black uppercase tracking-wider text-on-surface-variant">Order ID</span>
                            <span className="text-sm font-black text-primary">{order.id}</span>
                        </div>
                        <div className="flex justify-between items-center border-t border-surface-container-high pt-3">
                            <span className="text-xs font-black uppercase tracking-wider text-on-surface-variant">Payment</span>
                            <span className={`text-sm font-bold px-3 py-1 rounded-full ${
                                order.paymentMethod === "cash"
                                    ? "bg-green-100 text-green-700"
                                    : "bg-blue-100 text-blue-700"
                            }`}>
                                {order.paymentMethod === "cash" ? "💵 Cash on Delivery" : "🏦 Bank Transfer"}
                            </span>
                        </div>
                        <div className="flex justify-between items-center border-t border-surface-container-high pt-3">
                            <span className="text-xs font-black uppercase tracking-wider text-on-surface-variant">Total Paid</span>
                            <span className="text-xl font-black text-primary">${order.total.toFixed(2)}</span>
                        </div>
                        {order.paymentMethod === "transfer" && (
                            <div className="border-t border-surface-container-high pt-3 text-xs text-on-surface-variant space-y-1">
                                <p className="font-bold text-on-surface">Transfer to:</p>
                                <p>🏦 Bank BCA · <strong>1234 5678 90</strong></p>
                                <p>Account Name: <strong>Pet Atelier Store</strong></p>
                                <p className="text-amber-600 font-bold">⚠️ Please transfer within 24 hours</p>
                            </div>
                        )}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col gap-3">
                        <Link to="/my-orders" onClick={onClose}
                            className="w-full py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-2xl font-black hover:opacity-90 active:scale-[0.98] transition-all text-sm flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined text-base">receipt_long</span>
                            View My Orders
                        </Link>
                        <Link to="/" onClick={onClose}
                            className="w-full py-3.5 bg-surface-container-low text-on-surface-variant rounded-2xl font-bold hover:bg-surface-container transition-all text-sm">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

// ── Main Checkout ─────────────────────────────────────────────────────────────
export default function Checkout() {
    const { cartItems, subtotal, tax, total, clearCart } = useCart()
    const { user } = useAuth()
    const { addOrder } = useOrder()
    const navigate = useNavigate()

    // Form state
    const [form, setForm] = useState({
        fullName: user?.name || "",
        email: user?.email || "",
        phone: "",
        street: "",
        city: "",
    })

    // Payment
    const [paymentMethod, setPaymentMethod] = useState("cash") // "cash" | "transfer"

    // Promo
    const [promoInput, setPromoInput] = useState("")
    const [appliedPromo, setAppliedPromo] = useState(null) // { code, discount, label }
    const [promoError, setPromoError] = useState("")
    const [promoSuccess, setPromoSuccess] = useState("")

    // Success modal
    const [successOrder, setSuccessOrder] = useState(null)
    const [showSuccess, setShowSuccess] = useState(false)

    // Computed totals
    const discountAmt = appliedPromo ? subtotal * appliedPromo.discount : 0
    const finalTotal = total - discountAmt

    const handlePromoApply = () => {
        const code = promoInput.trim().toUpperCase()
        if (!code) return
        const promo = PROMO_CODES[code]
        if (promo) {
            setAppliedPromo({ code, ...promo })
            setPromoSuccess(`✅ Promo "${code}" applied! ${promo.label}`)
            setPromoError("")
        } else {
            setPromoError("❌ Invalid promo code. Try again.")
            setPromoSuccess("")
            setAppliedPromo(null)
        }
    }

    const handleRemovePromo = () => {
        setAppliedPromo(null)
        setPromoInput("")
        setPromoSuccess("")
        setPromoError("")
    }

    const handleOrder = (e) => {
        e.preventDefault()
        if (cartItems.length === 0) return

        const newOrder = addOrder({
            items: cartItems,
            subtotal,
            tax,
            discount: discountAmt,
            total: finalTotal,
            paymentMethod,
            promoCode: appliedPromo?.code || null,
            address: {
                name: form.fullName,
                street: form.street,
                city: form.city,
            }
        })

        clearCart()
        setSuccessOrder(newOrder)
        setShowSuccess(true)
    }

    const handleCloseSuccess = () => {
        setShowSuccess(false)
        navigate("/")
    }

    return (
        <>
            <Navbar />
            <main className="max-w-5xl mx-auto px-4 md:px-6 pt-24 pb-16">
                {/* Header */}
                <div className="mb-8">
                    <p className="text-primary font-bold text-xs tracking-[0.2em] uppercase mb-1">Pet Atelier</p>
                    <h1 className="text-4xl font-extrabold font-headline text-on-surface">Checkout</h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8">
                    {/* ── LEFT: Form ── */}
                    <form onSubmit={handleOrder} className="space-y-6" id="checkout-form">

                        {/* Shipping Info */}
                        <div className="bg-white rounded-3xl shadow-[0_4px_24px_rgba(25,28,29,0.06)] p-7 space-y-5">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="material-symbols-outlined text-primary">local_shipping</span>
                                <h2 className="font-black text-lg text-on-surface">Shipping Information</h2>
                            </div>

                            {/* Full Name — auto-filled, editable */}
                            <div className="space-y-1.5">
                                <label className="text-xs font-black uppercase text-on-surface-variant tracking-wider">Full Name *</label>
                                <div className="relative">
                                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">person</span>
                                    <input
                                        type="text"
                                        required
                                        value={form.fullName}
                                        onChange={e => setForm(f => ({ ...f, fullName: e.target.value }))}
                                        className="w-full bg-surface-container-low rounded-2xl pl-12 pr-4 py-3.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                                        placeholder="Your full name"
                                    />
                                    {user?.name && (
                                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">Auto-filled</span>
                                    )}
                                </div>
                            </div>

                            {/* Email — read-only from account */}
                            <div className="space-y-1.5">
                                <label className="text-xs font-black uppercase text-on-surface-variant tracking-wider">Email Address *</label>
                                <div className="relative">
                                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">mail</span>
                                    <input
                                        type="email"
                                        required
                                        value={form.email}
                                        readOnly={!!user?.email}
                                        onChange={e => !user?.email && setForm(f => ({ ...f, email: e.target.value }))}
                                        className={`w-full rounded-2xl pl-12 pr-4 py-3.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all ${user?.email ? "bg-surface-container-low/60 cursor-not-allowed text-on-surface-variant" : "bg-surface-container-low"}`}
                                    />
                                    {user?.email && (
                                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded-full">Verified</span>
                                    )}
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="space-y-1.5">
                                <label className="text-xs font-black uppercase text-on-surface-variant tracking-wider">Phone Number *</label>
                                <div className="relative">
                                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">phone</span>
                                    <input
                                        type="tel"
                                        required
                                        value={form.phone}
                                        onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                                        className="w-full bg-surface-container-low rounded-2xl pl-12 pr-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                                        placeholder="+62 812 3456 7890"
                                    />
                                </div>
                            </div>

                            {/* Street Address */}
                            <div className="space-y-1.5">
                                <label className="text-xs font-black uppercase text-on-surface-variant tracking-wider">Street Address *</label>
                                <div className="relative">
                                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">location_on</span>
                                    <input
                                        type="text"
                                        required
                                        value={form.street}
                                        onChange={e => setForm(f => ({ ...f, street: e.target.value }))}
                                        className="w-full bg-surface-container-low rounded-2xl pl-12 pr-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                                        placeholder="Jl. Sudirman No. 123"
                                    />
                                </div>
                            </div>

                            {/* City */}
                            <div className="space-y-1.5">
                                <label className="text-xs font-black uppercase text-on-surface-variant tracking-wider">City *</label>
                                <div className="relative">
                                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">apartment</span>
                                    <input
                                        type="text"
                                        required
                                        value={form.city}
                                        onChange={e => setForm(f => ({ ...f, city: e.target.value }))}
                                        className="w-full bg-surface-container-low rounded-2xl pl-12 pr-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                                        placeholder="Jakarta"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Payment */}
                        <div className="bg-white rounded-3xl shadow-[0_4px_24px_rgba(25,28,29,0.06)] p-7 space-y-5">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="material-symbols-outlined text-primary">payments</span>
                                <h2 className="font-black text-lg text-on-surface">Payment Method</h2>
                            </div>

                            {/* Payment Options */}
                            <div className="grid grid-cols-2 gap-4">
                                {/* Cash on Delivery */}
                                <button
                                    type="button"
                                    onClick={() => setPaymentMethod("cash")}
                                    className={`flex flex-col items-center gap-3 p-5 rounded-2xl border-2 transition-all ${
                                        paymentMethod === "cash"
                                            ? "border-primary bg-primary/5 shadow-md"
                                            : "border-surface-container-high hover:border-primary/30"
                                    }`}
                                >
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${paymentMethod === "cash" ? "bg-primary text-on-primary" : "bg-surface-container-low text-on-surface-variant"}`}>
                                        💵
                                    </div>
                                    <div className="text-center">
                                        <p className={`text-sm font-black ${paymentMethod === "cash" ? "text-primary" : "text-on-surface"}`}>Cash on Delivery</p>
                                        <p className="text-[11px] text-on-surface-variant mt-0.5">Pay when you receive</p>
                                    </div>
                                    {paymentMethod === "cash" && (
                                        <span className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                                            <span className="material-symbols-outlined text-white text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                                        </span>
                                    )}
                                </button>

                                {/* Bank Transfer */}
                                <button
                                    type="button"
                                    onClick={() => setPaymentMethod("transfer")}
                                    className={`flex flex-col items-center gap-3 p-5 rounded-2xl border-2 transition-all ${
                                        paymentMethod === "transfer"
                                            ? "border-primary bg-primary/5 shadow-md"
                                            : "border-surface-container-high hover:border-primary/30"
                                    }`}
                                >
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${paymentMethod === "transfer" ? "bg-primary text-on-primary" : "bg-surface-container-low text-on-surface-variant"}`}>
                                        🏦
                                    </div>
                                    <div className="text-center">
                                        <p className={`text-sm font-black ${paymentMethod === "transfer" ? "text-primary" : "text-on-surface"}`}>Bank Transfer</p>
                                        <p className="text-[11px] text-on-surface-variant mt-0.5">BCA · 1234 5678 90</p>
                                    </div>
                                    {paymentMethod === "transfer" && (
                                        <span className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                                            <span className="material-symbols-outlined text-white text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                                        </span>
                                    )}
                                </button>
                            </div>

                            {/* Transfer details */}
                            {paymentMethod === "transfer" && (
                                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 space-y-1">
                                    <p className="text-xs font-black text-blue-700 uppercase tracking-wider">Transfer Details</p>
                                    <p className="text-sm text-blue-800">🏦 <strong>Bank BCA</strong></p>
                                    <p className="text-sm text-blue-800">No. Rekening: <strong>1234 5678 90</strong></p>
                                    <p className="text-sm text-blue-800">Atas Nama: <strong>Pet Atelier Store</strong></p>
                                    <p className="text-xs text-amber-600 font-bold mt-2">⚠️ Harap transfer dalam 24 jam setelah order.</p>
                                </div>
                            )}
                        </div>

                        {/* Promo Code */}
                        <div className="bg-white rounded-3xl shadow-[0_4px_24px_rgba(25,28,29,0.06)] p-7 space-y-4">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">local_offer</span>
                                <h2 className="font-black text-lg text-on-surface">Promo Code</h2>
                            </div>

                            {appliedPromo ? (
                                <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-2xl px-4 py-3">
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-green-600 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                                        <div>
                                            <p className="text-sm font-black text-green-700">{appliedPromo.code}</p>
                                            <p className="text-xs text-green-600">{appliedPromo.label}</p>
                                        </div>
                                    </div>
                                    <button type="button" onClick={handleRemovePromo} className="text-xs font-bold text-red-500 hover:text-red-700 transition-colors">Remove</button>
                                </div>
                            ) : (
                                <>
                                    <div className="flex gap-2">
                                        <input
                                            type="text"
                                            value={promoInput}
                                            onChange={e => setPromoInput(e.target.value.toUpperCase())}
                                            onKeyDown={e => e.key === "Enter" && (e.preventDefault(), handlePromoApply())}
                                            placeholder="Enter promo code (e.g. PETLOVE10)"
                                            className="flex-1 bg-surface-container-low rounded-2xl px-4 py-3.5 text-sm font-bold tracking-wider focus:outline-none focus:ring-2 focus:ring-primary/30"
                                        />
                                        <button
                                            type="button"
                                            onClick={handlePromoApply}
                                            className="px-6 bg-primary text-on-primary rounded-2xl font-black text-sm hover:opacity-90 active:scale-95 transition-all"
                                        >
                                            Apply
                                        </button>
                                    </div>
                                    {promoError && <p className="text-xs font-bold text-error">{promoError}</p>}
                                    {promoSuccess && <p className="text-xs font-bold text-green-600">{promoSuccess}</p>}
                                </>
                            )}

                            {/* Hint */}
                            <p className="text-[11px] text-on-surface-variant">🤫 Have a secret code? Enter it above to unlock your discount!</p>
                        </div>

                        {/* Submit Button (mobile) */}
                        <button
                            type="submit"
                            form="checkout-form"
                            disabled={cartItems.length === 0}
                            className="lg:hidden w-full py-5 bg-gradient-to-r from-primary to-orange-400 text-on-primary rounded-full font-black text-lg shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                        >
                            Place Order — ${finalTotal.toFixed(2)}
                            <span className="material-symbols-outlined">check_circle</span>
                        </button>
                    </form>

                    {/* ── RIGHT: Order Summary ── */}
                    <div className="space-y-4 h-fit sticky top-24">
                        <div className="bg-white rounded-3xl shadow-[0_4px_24px_rgba(25,28,29,0.06)] p-7 space-y-5">
                            <h2 className="font-black text-lg text-on-surface">Order Summary</h2>

                            {/* Items */}
                            <div className="space-y-3 max-h-64 overflow-y-auto">
                                {cartItems.length === 0 ? (
                                    <p className="text-sm text-on-surface-variant text-center py-6">Your cart is empty.</p>
                                ) : cartItems.map(item => (
                                    <div key={item.id} className="flex items-center gap-3">
                                        <div className="w-14 h-14 rounded-xl overflow-hidden bg-surface-container-low flex-shrink-0">
                                            <img src={item.src} alt={item.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="font-bold text-sm truncate text-on-surface">{item.name}</p>
                                            <p className="text-[10px] text-primary uppercase font-bold tracking-wider">{item.category}</p>
                                            <p className="text-xs text-on-surface-variant mt-0.5">Qty: {item.qty}</p>
                                        </div>
                                        <p className="font-black text-primary text-sm">${(item.price * item.qty).toFixed(2)}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Divider */}
                            <div className="h-px bg-surface-container-high" />

                            {/* Price breakdown */}
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between text-on-surface-variant">
                                    <span>Subtotal</span>
                                    <span className="font-bold text-on-surface">${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-on-surface-variant">
                                    <span>Tax (8%)</span>
                                    <span className="font-bold text-on-surface">${tax.toFixed(2)}</span>
                                </div>
                                {appliedPromo && (
                                    <div className="flex justify-between text-green-600">
                                        <span>Promo ({appliedPromo.code})</span>
                                        <span className="font-black">-${discountAmt.toFixed(2)}</span>
                                    </div>
                                )}
                                <div className="flex justify-between font-black text-base pt-3 border-t border-surface-container-high">
                                    <span>Total</span>
                                    <span className="text-primary text-xl">${finalTotal.toFixed(2)}</span>
                                </div>
                            </div>

                            {/* Submit Button (desktop) */}
                            <button
                                type="submit"
                                form="checkout-form"
                                disabled={cartItems.length === 0}
                                className="hidden lg:flex w-full py-5 bg-gradient-to-r from-primary to-orange-400 text-on-primary rounded-2xl font-black text-base shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.98] transition-all items-center justify-center gap-2 disabled:opacity-50"
                            >
                                <span className="material-symbols-outlined text-xl">shopping_bag</span>
                                Place Order — ${finalTotal.toFixed(2)}
                            </button>

                            {/* Security Note */}
                            <div className="flex items-center justify-center gap-2 text-[11px] text-on-surface-variant">
                                <span className="material-symbols-outlined text-base text-green-600">verified_user</span>
                                Secure & encrypted checkout
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Success Modal */}
            <SuccessModal isOpen={showSuccess} order={successOrder} onClose={handleCloseSuccess} />
        </>
    )
}