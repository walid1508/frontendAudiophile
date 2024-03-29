import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import {Toaster} from "react-hot-toast";
import {UserContextProvider} from "./context/userContext";
import VisitorLayout from "./visitor/VisitorLayout";
import Home from "./visitor/pages/Home";
import NotFound from "./visitor/NotFound";
import AdminLayout from "./admin/AdminLayout";
import Dashboard from "./admin/dashboard/Dashboard";
import Sales from "./admin/sales/Sales";
import Clients from "./admin/clients/Clients";
import Products from "./admin/products/Products";
import Categories from "./admin/categories/Categories";
import Settings from "./admin/settings/Settings";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import Catalog from "./visitor/pages/Catalog";
import Speakers from "./visitor/pages/Speakers";
import Headphones from "./visitor/pages/Headphones";
import Earphones from "./visitor/pages/Earphones";
import Profile from "./visitor/pages/Profile";

//Axios' configuration for the auth routes
axios.defaults.baseURL = 'http://localhost:4000/auth';
axios.defaults.withCredentials = true;

function App() {
  return (
      <UserContextProvider>
          <Toaster position='bottom-right' toastOptions={{duration: 5000}} />
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<VisitorLayout />} >
                      <Route index element={<Home />} />
                      <Route path="earphones" element={<Earphones />} />
                      <Route path="headphones" element={<Headphones />} />
                      <Route path="speakers" element={<Speakers />} />
                      <Route path="catalog" element={<Catalog />} />
                      <Route path="profile" element={<Profile />} />
                  </Route>


                  <Route path="/admin" element={<AdminLayout />} >
                      <Route index element={<Dashboard />} />
                      <Route path="sales" element={<Sales />} />
                      <Route path="clients" element={<Clients />} />
                      <Route path="products" element={<Products />} />
                      <Route path="categories" element={<Categories />} />
                      <Route path="settings" element={<Settings />} />
                  </Route>

                  <Route path="*" element={<NotFound />} />
                  <Route path="signin" element={<SignIn />} />
                  <Route path="signup" element={<SignUp />} />
              </Routes>
          </BrowserRouter>
      </UserContextProvider>
  );
}

export default App;
