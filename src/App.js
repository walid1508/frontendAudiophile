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
import Speakers from "./visitor/pages/Speakers";
import Headphones from "./visitor/pages/Headphones";
import Earphones from "./visitor/pages/Earphones";
import Profile from "./visitor/pages/Profile";
import React, {useEffect, useState} from "react";
import RequiredAuth from "./auth/RequiredAuth";
import ProductDetail from "./visitor/pages/ProductDetail";
import Cart from "./visitor/pages/Cart";
import {CartProvider} from "./context/cart";
import Catalogue from "./visitor/pages/Catalogue";
import Confirmation from "./visitor/pages/Confirmation";
import PageTest from "./visitor/pages/PageTest";



//Axios' configuration for the auth routes
axios.defaults.baseURL = 'http://localhost:4000/auth';
axios.defaults.withCredentials = true;



function App() {
  
    const [products, setProducts] = useState([]);

    const fetchProducts = () => {
        axios.get('http://localhost:4000/products')
            .then(res => {
                setProducts(res.data);
            })
            .catch(error => console.error('Error: ', error));

    }

    useEffect(() => {
      
        fetchProducts();

    }, []);


  return (
      <UserContextProvider>
          <CartProvider>
              <Toaster position='bottom-right' toastOptions={{duration: 5000}} />
              <BrowserRouter>
                  <Routes>
                      <Route path="/" element={<VisitorLayout />} >
                          <Route index element={<Home />} />
                          <Route path="catalogue" element={<Catalogue products = {products} />} />
                          <Route path="earphones" element={<Earphones products = {products}/>} />
                          <Route path="headphones" element={<Headphones products = {products}/>} />
                          <Route path="speakers" element={<Speakers products = {products} />} />
                          <Route path="product/:id" element={<ProductDetail  />} />
                          <Route path="cart" element={<Cart />} />



                          <Route element={<RequiredAuth allowedRoles={[2001]} />}>
                              <Route path="profile" element={<Profile  />} />
                              <Route path="confirmation" element={<Confirmation />} />
                          </Route>
                      </Route>


                      <Route path="/admin" element={<AdminLayout />} >
                          <Route element={<RequiredAuth allowedRoles={[5505,  ]} />}>
                              <Route index element={<Dashboard />} />
                              <Route path="sales" element={<Sales />} />
                              <Route path="clients" element={<Clients />} />
                              <Route path="products" element={<Products />} />
                              <Route path="categories" element={<Categories />} />
                              <Route path="settings" element={<Settings />} />
                          </Route>
                      </Route>

                      <Route path="*" element={<NotFound />} />
                      <Route path="signin" element={<SignIn />} />
                      <Route path="signup" element={<SignUp />} />
                  </Routes>
              </BrowserRouter>
          </CartProvider>
      </UserContextProvider>
  );
}

export default App;
