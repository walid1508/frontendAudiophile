import { BrowserRouter, Route, Routes } from "react-router-dom";
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


function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<VisitorLayout />} >
                  <Route index element={<Home />} />
                    <Route path="earphones" element={<Earphones />} />
                    <Route path="headphones" element={<Headphones />} />
                    <Route path="speakers" element={<Speakers />} />
                    <Route path="catalog" element={<Catalog />} />
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
  );
}

export default App;
