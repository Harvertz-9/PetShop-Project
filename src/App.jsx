import { Routes, Route } from "react-router-dom";
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
        <Route path="/ManageToys" element={<ManageToys />} />
        <Route path="/ManageFood" element={<ManageFood />} />
        <Route path="/ManageCollars" element={<ManageCollars />} />
        <Route path="/ProfileDashboard" element={<ProfileDashboard />} />
      </Routes>
    </>
  )
}
export default App
