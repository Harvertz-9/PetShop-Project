import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { CartProvider } from './context/CartContext'
import { ProductProvider } from './context/ProductContext'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <ProductProvider>
                    <CartProvider>
                        <App />
                    </CartProvider>
                </ProductProvider>
            </AuthProvider>
        </BrowserRouter>
    </StrictMode>,
)