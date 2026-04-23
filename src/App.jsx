import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import CatalogProduct from "./pages/product/CatalogProduct";
import ProductDetail from "./pages/product/ProductDetail";
import AdminDashboard from "./pages/dashboard/AdminDashboard";
import ManageFood from "./pages/dashboard/ManageFood";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CatalogProduct" element={<CatalogProduct />} />
        <Route path="/ProductDetail" element={<ProductDetail />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/ManageFood" element={<ManageFood />} />
      </Routes>
    </>
  )
}
export default App
