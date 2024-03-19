import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import PagenotFound from "./pages/PagenotFound"
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import { ToastContainer } from "react-toast";
import Dashboard from "./pages/user/Dashboard.js";
import PrivateRoute from "./components/Route/Private.js";
import ForgotPasssword from "./pages/auth/ForgotPassword.js";
import AdminDashboard from "./pages/Admin/AdminDashboard.js";
import AdminRoute from "./components/Route/AdminRoute.js";
import CreateCategory from "./pages/Admin/CreateCategory.js";
import CreateProduct from "./pages/Admin/CreateProduct.js";
import Users from "./pages/Admin/Users.js";
import Orders from "./pages/user/Profile.js";
import Profile from "./pages/user/Orders.js";
import ProductDeatail from "./pages/Admin/productDeatail.js";
import Search from "./pages/Search.js";
import ProductDetails from "./pages/Details.js";
import CartPage from "./pages/CartPage.js";
import FAQ from "./components/layout/FAQ.js";
import AdminOrders from "./pages/Admin/AdminOrders.js";
import LandingPage from "./components/layout/LandingPage.js";




function App() {
  return (
    <>
      <Routes>
      <Route path="/FAQ" element={<FAQ />} />
        <Route path="/landing" element={<HomePage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="landing/products/:id" element={<ProductDetails />} />
        <Route path="/search/products/:id" element={<ProductDetails />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Orders />} />
          <Route path="user/profile" element={<Profile />} />
        </Route>
          <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/products" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/product/:id" element={<ProductDeatail />} />
          <Route path="admin/users" element={<Users />} />
          <Route path="admin/orders" element={<AdminOrders />} />
       
          
        </Route>
        <Route path="/forgot-password" element={<ForgotPasssword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<PagenotFound />} />
      </Routes>
      
    </>
  );
}

export default App;