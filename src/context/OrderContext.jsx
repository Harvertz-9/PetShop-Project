import { useState, useEffect } from "react"
import { OrderContext } from "./useOrder"

const DEMO_ORDERS = [
    {
        id: "ORD-DEMO-001",
        date: new Date(Date.now() - 86400000 * 2).toISOString(),
        status: "Delivered",
        items: [
            { name: "Cognac Leather Heirloom Collar", price: 85, qty: 1, src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjUnC4mOdPixnlThKWLXMQPxBdfRuKohYfITSS01si8h1wdvajKJJHmD9tdoc33Kuqiv_7OlTbVrSi1wPELxPBqTmW_CjyLBojWRY04MZnyOXY8Z1iE61lZ6Nq-lARprIr_aHFz9pga4R4jTSi606OQJ2ExN_EcY_H6oOihLuvQZxIi0cV832qPJdiKebNUx8pRDHcYFXAGAJSm1fOvA9vXy7TwOeZHsEFalurG-o5418JzhGn9i2WhdIvinGMZc-FmWTadzCXmiOo" },
            { name: "Sustainable Rubber Trio", price: 42, qty: 2, src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDf_JhvEKmR4GXO0fAHF1iEJTdDNejO_QwHpbz8B9dmCMorRKRfy8jYBYqEhixKHB8Tm8mc_vLF86eYv4bUYfUouHY8r78pAOif9yIkjBaZl4utjicdOhsGC0Ds_4sqPzAtSOQt95ghpL6qkNOFnCOA0MeuprEIx90urkdJv3N1bh7LJ1F9Fx6bdb6W0TR1zP2kXaJu8ByicNpKpdGtUp-mgTYymRJu0CzHAcp5DC-m-BFmhselhjKo62jSMi35wvEckU_b0ECt7_2j" }
        ],
        subtotal: 169, tax: 13.52, total: 182.52,
        address: { name: "John Doe", street: "123 Maple St", city: "New York, NY 10001" }
    },
    {
        id: "ORD-DEMO-002",
        date: new Date(Date.now() - 3600000 * 5).toISOString(),
        status: "Shipped",
        items: [
            { name: "Velvet Cloud Orthopedic Bed", price: 189, qty: 1, src: "https://lh3.googleusercontent.com/aida-public/AB6AXuArppzGznrIypbSSi88vlnY91DmaBFKQKTsUJznZjrnETnDhQ6jB3WTx1R1ZdT1Wi9l2anmZYKlUoZui_W1FG6SdtnsHsK4xZEAAv7q2bwILOQmfGhQbSmtmMXRfVQBa_UxK5ZYAuJyqd1fnuX-DNSnDwf0KQqdbOZLtlkHl_bn5_Jov8-WR8e2yUVrTOvODKTraujKVWYqoAsk94MrJT5QKte-OkPaD2KOk9ZsiO-slZx2lUSekrrebxLiK2oSJgbQUaz9Xx31mlxg" }
        ],
        subtotal: 189, tax: 15.12, total: 204.12,
        address: { name: "Jane Smith", street: "456 Oak Ave", city: "Los Angeles, CA 90001" }
    },
    {
        id: "ORD-DEMO-003",
        date: new Date().toISOString(),
        status: "Processing",
        items: [
            { name: "Wild-Caught Salmon & Pea", price: 64, qty: 1, src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDasYj_2XclPu1SqHS8_rQxWjl08tMp68M2LXO30nMLTmU8ZKy3s8k4YVKVWh5B9LVk0lMdcxBIUa5Iw7IxPlugRLKh49GUxcbX3yqat4sVyVFs-EeCDxs08DlQ2s6GkNQ_DTkBQ_in1W0-zj_oYDtrdUWD5VbtLcd9UiiovCZOTvqjLLdTlCYryZ7prcHNIp_FSBc3lJTrvvd16kZio_r7FEJEfjAK31-7LA09LP9q23aa0ZLErXT0G1blNMLCr9yFS-s1LCUbVAsp" }
        ],
        subtotal: 64, tax: 5.12, total: 69.12,
        address: { name: "Pet Owner", street: "789 Pine Rd", city: "Chicago, IL 60601" }
    }
]

export function OrderProvider({ children }) {
    const [orders, setOrders] = useState(() => {
        try {
            const saved = localStorage.getItem("petshop_orders")
            if (saved) {
                const parsed = JSON.parse(saved)
                return parsed.length > 0 ? parsed : DEMO_ORDERS
            }
            return DEMO_ORDERS
        } catch {
            return DEMO_ORDERS
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
