import{
  BrowserRouter as Router,
  Routes,
  Route,
}
from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from"./pages/register/Register";
import About from "./pages/about/About";
import Navbar from "./components/navbar/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Admindashboard from "./pages/admin/admindashboard/Admindashboard";
import AdminProductedit from "./pages/admin/adminproductedit/Adminproductedit";
import ProductDetails from "./pages/productDetails/ProductDetails";
import Cart from "./pages/cart/Cart";
import Order from "./pages/order/Order";
import AdminOrders from "./pages/admin/AdminOrders/AdminOrders";
import Search from "./pages/search/Search";
import Profile from "./pages/profile/Profile";
import ForgotPassword from "./pages/forgot_password/ForgotPassword";


import AdminRoute from "./protected/AdminRoute";
import UserRoute from "./protected/UserRoute";

function App() {
  return (<>
   <Router>
    <Navbar/>
    <ToastContainer />
    <Routes>
      <Route path="/" element={<Homepage/>}/ >
      <Route path="/product/details/:id"  element={<ProductDetails/>}/>

      <Route path="/login" element={<Login/>}/ >
      <Route path="/register" element={<Register/>}/ >
      <Route path="/about" element={<About/>}/ >

      
        <Route path ="/search/:query" element={<Search/>}/>
        <Route path="/forgot_password" element={<ForgotPassword/>}/>

{/* for admin */}
        <Route element={<AdminRoute/>}>
        <Route path="/admindashboard" element={<Admindashboard/>}/>
        <Route path="/admin/product/edit/:id" element={<AdminProductedit/>}/>
        <Route path ="/admin/orders" element={<AdminOrders/>}/>
        </Route>

{/* for user */}
        <Route element={<UserRoute/>}>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/order" element={<Order/>}/>
        <Route path="/profile" element={<Profile/>}/>
        </Route>



    </Routes>
   </Router>
   </>
  );
}

export default App;
