import { BrowserRouter, Route, Routes } from "react-router-dom";
import SiteLayout from "./layout/SiteLayout";
import Home from "../pages/Home";
import ProductsIndex from "../pages/Products/ProductsIndex";
import ChandaNest from "../pages/Products/ChandaNest";
import AshIntegrity from "../pages/Products/AshIntegrity";
import Services from "../pages/Services";
import CaseStudies from "../pages/CaseStudies";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Insights from "../pages/Insights";
import Privacy from "../pages/Legal/Privacy";
import Terms from "../pages/Legal/Terms";
import NotFound from "../pages/NotFound";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SiteLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<ProductsIndex />} />
          <Route path="products/chandanest" element={<ChandaNest />} />
          <Route path="products/ash-integrity" element={<AshIntegrity />} />
          <Route path="services" element={<Services />} />
          <Route path="case-studies" element={<CaseStudies />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="insights" element={<Insights />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
