import { useNavigate } from "react-router-dom"
import Navbar from "../../components/Navbar"
import { useCart } from "../../context/useCart"

export default function Checkout() {
    const { cartItems, subtotal, tax, total, clearCart } = useCart()
    const navigate = useNavigate()

    const handleOrder = (e) => {
        e.preventDefault()
        clearCart()
        navigate("/")
        alert("🎉 Order placed successfully! Thank you for shopping at Pet Atelier.")
    }

    return (
        <>
            <Navbar />
            <main className="max-w-4xl mx-auto px-4 md:px-6 pt-24 pb-12">
                <h1 className="text-3xl font-extrabold font-headline mb-8">Checkout</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Form */}
                    <form className="space-y-6" onSubmit={handleOrder}>
                        <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm space-y-4">
                            <h2 className="font-bold text-lg font-headline">Shipping Information</h2>
                            <input className="w-full px-4 py-3 bg-surface-container-low border-none rounded-xl text-sm focus:ring-2 focus:ring-primary/20" placeholder="Full Name" required type="text" />
                            <input className="w-full px-4 py-3 bg-surface-container-low border-none rounded-xl text-sm focus:ring-2 focus:ring-primary/20" placeholder="Email Address" required type="email" />
                            <input className="w-full px-4 py-3 bg-surface-container-low border-none rounded-xl text-sm focus:ring-2 focus:ring-primary/20" placeholder="Phone Number" required type="tel" />
                            <input className="w-full px-4 py-3 bg-surface-container-low border-none rounded-xl text-sm focus:ring-2 focus:ring-primary/20" placeholder="Street Address" required type="text" />
                            <div className="grid grid-cols-2 gap-3">
                                <input className="px-4 py-3 bg-surface-container-low border-none rounded-xl text-sm focus:ring-2 focus:ring-primary/20" placeholder="City" required type="text" />
                                <input className="px-4 py-3 bg-surface-container-low border-none rounded-xl text-sm focus:ring-2 focus:ring-primary/20" placeholder="ZIP Code" required type="text" />
                            </div>
                        </div>

                        <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm space-y-4">
                            <h2 className="font-bold text-lg font-headline">Payment</h2>
                            <input className="w-full px-4 py-3 bg-surface-container-low border-none rounded-xl text-sm focus:ring-2 focus:ring-primary/20" placeholder="Card Number" required type="text" />
                            <div className="grid grid-cols-2 gap-3">
                                <input className="px-4 py-3 bg-surface-container-low border-none rounded-xl text-sm focus:ring-2 focus:ring-primary/20" placeholder="MM/YY" required type="text" />
                                <input className="px-4 py-3 bg-surface-container-low border-none rounded-xl text-sm focus:ring-2 focus:ring-primary/20" placeholder="CVV" required type="text" />
                            </div>
                        </div>

                        <button type="submit" className="w-full py-5 bg-gradient-to-r from-primary to-orange-400 text-on-primary rounded-full font-black text-lg shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                            Place Order — ${total.toFixed(2)}
                            <span className="material-symbols-outlined">check_circle</span>
                        </button>
                    </form>

                    {/* Order Summary */}
                    <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm space-y-4 h-fit sticky top-24">
                        <h2 className="font-bold text-lg font-headline">Order Summary</h2>
                        <div className="space-y-3">
                            {cartItems.map(item => (
                                <div key={item.id} className="flex items-center gap-3">
                                    <img src={item.src} alt={item.name} className="w-12 h-12 rounded-lg object-cover" />
                                    <div className="flex-1 min-w-0">
                                        <p className="font-bold text-sm truncate">{item.name}</p>
                                        <p className="text-xs text-on-surface-variant">Qty: {item.qty}</p>
                                    </div>
                                    <p className="font-bold text-primary text-sm">${(item.price * item.qty).toFixed(2)}</p>
                                </div>
                            ))}
                        </div>
                        <div className="h-px bg-surface-container-highest"></div>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between text-on-surface-variant">
                                <span>Subtotal</span><span className="font-bold text-on-surface">${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-on-surface-variant">
                                <span>Tax (8%)</span><span className="font-bold text-on-surface">${tax.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between font-black text-base pt-2 border-t border-surface-container-highest">
                                <span>Total</span><span className="text-primary">${total.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}