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


function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<VisitorLayout />} >
                  <Route index element={<Home />} />
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

          </Routes>
      </BrowserRouter>
  );
}

export default App;
