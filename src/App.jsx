import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/useAuth"
import Home from "./pages/home";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import CatalogProduct from "./pages/product/CatalogProduct";
import ProductDetail from "./pages/product/ProductDetail";
import AdminDashboard from "./pages/dashboard/AdminDashboard";
import ManageFood from "./pages/dashboard/ManageFood";
import ManageToys from "./pages/dashboard/ManageToys";
import ManageCollars from "./pages/dashboard/ManageCollars";
import ProfileDashboard from "./pages/dashboard/ProfileDashboard";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/Checkout";
import HomeServices from "./pages/landing/HomeServices";
import HomeAboutUs from "./pages/landing/HomeAboutUs";
import HomeContactUs from "./pages/landing/HomeContactUs";

// Guard: hanya admin yang bisa akses
function AdminRoute({ children }) {
  const { user } = useAuth()
  if (!user) return <Navigate to="/SignIn" replace />
  if (user.role !== "admin") return <Navigate to="/" replace />
  return children
}

// Guard: hanya user login yang bisa akses
function PrivateRoute({ children }) {
  const { user } = useAuth()
  if (!user) return <Navigate to="/SignIn" replace />
  return children
}

// Guard: kalau sudah login tidak perlu ke signin/signup lagi
function GuestRoute({ children }) {
  const { user } = useAuth()
  if (user) return <Navigate to={user.role === "admin" ? "/AdminDashboard" : "/"} replace />
  return children
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/HomeServices" element={<HomeServices />} />
        <Route path="/HomeAboutUs" element={<HomeAboutUs />} />
        <Route path="/HomeContactUs" element={<HomeContactUs />} />
        <Route path="/Cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
        <Route path="/checkout" element={<PrivateRoute><Checkout /></PrivateRoute>} />
        <Route path="/CatalogProduct" element={<CatalogProduct />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/SignIn" element={<GuestRoute><SignIn /></GuestRoute>} />
        <Route path="/SignUp" element={<GuestRoute><SignUp /></GuestRoute>} />
        <Route path="/AdminDashboard" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
        <Route path="/ManageToys" element={<ManageToys />} />
        <Route path="/ManageFood" element={<ManageFood />} />
        <Route path="/ManageCollars" element={<ManageCollars />} />
        <Route path="/ProfileDashboard" element={<ProfileDashboard />} />
      </Routes>
    </>
  )
}
export default App
