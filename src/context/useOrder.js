import { useContext } from "react"
import { createContext } from "react"

export const OrderContext = createContext(null)

export function useOrder() {
    const context = useContext(OrderContext)
    if (!context) {
        throw new Error("useOrder must be used within an OrderProvider")
    }
    return context
}
