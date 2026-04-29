import { useState } from "react"
import { CartContext } from "./useCart"

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([])

    const addToCart = (product, quantity = 1) => {
        setCartItems(prev => {
            const exists = prev.find(item => item.id === product.id)
            if (exists) {
                return prev.map(item =>
                    item.id === product.id
                        ? { ...item, qty: item.qty + quantity }
                        : item
                )
            }
            return [...prev, { ...product, qty: quantity }]
        })
    }

    const removeFromCart = (id) => {
        setCartItems(prev => prev.filter(item => item.id !== id))
    }

    const updateQty = (id, delta) => {
        setCartItems(prev =>
            prev.map(item =>
                item.id === id
                    ? { ...item, qty: Math.max(1, item.qty + delta) }
                    : item
            )
        )
    }

    const clearCart = () => setCartItems([])

    const totalItems = cartItems.reduce((sum, item) => sum + item.qty, 0)
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)
    const tax = subtotal * 0.08
    const total = subtotal + tax

    return (
        <CartContext.Provider value={{
            cartItems, addToCart, removeFromCart,
            updateQty, clearCart,
            totalItems, subtotal, tax, total
        }}>
            {children}
        </CartContext.Provider>
    )
}
