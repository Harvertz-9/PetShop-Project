import { useState, useEffect } from "react"
import { OrderContext } from "./useOrder"

export function OrderProvider({ children }) {
    const [orders, setOrders] = useState(() => {
        try {
            const saved = localStorage.getItem("petshop_orders")
            return saved ? JSON.parse(saved) : []
        } catch {
            return []
        }
    })

    useEffect(() => {
        localStorage.setItem("petshop_orders", JSON.stringify(orders))
    }, [orders])

    const addOrder = (orderData) => {
        const newOrder = {
            id: `ORD-${Date.now()}`,
            date: new Date().toISOString(),
            status: "Processing",
            ...orderData
        }
        setOrders(prev => [newOrder, ...prev])
        return newOrder
    }

    const updateOrderStatus = (orderId, status) => {
        setOrders(prev =>
            prev.map(o => o.id === orderId ? { ...o, status } : o)
        )
    }

    const clearOrders = () => setOrders([])

    return (
        <OrderContext.Provider value={{ orders, addOrder, updateOrderStatus, clearOrders }}>
            {children}
        </OrderContext.Provider>
    )
}
