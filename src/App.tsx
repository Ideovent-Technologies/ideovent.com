import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import ServicesPage from "./pages/ServicesPage";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import AdminBlog from "./pages/BlogAdmin";
import QRCodeList from "./pages/QRCodeList";

import BlogDetail from "./pages/BlogDetail";
import CertificateVerify from "./pages/CertificateVerify";
import InternshipPage from "./pages/InternshipPage";
const queryClient = new QueryClient();

import SoftwareDevelopment from "./pages/services/SoftwareDevelopment";
// import WebsiteDevelopment from "./pages/services/WebsiteDevelopment";
// import MobileAppDevelopment from "./pages/services/MobileAppDevelopment";
// import DigitalMarketing from "./pages/services/DigitalMarketing";
// import GraphicsDesign from "./pages/services/GraphicsDesign";
// import DomainHosting from "./pages/services/DomainHosting";
// import ErpCrmDevelopment from "./pages/services/ErpCrmDevelopment";
// import MaintenanceServices from "./pages/services/MaintenanceServices";
// import ExploreMoreServices from "./pages/services/ExploreMoreServices";


const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
          <Route path="/projects" element={<Portfolio />} />
          <Route path="/admin" element={<AdminBlog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/verify/:certId" element={<CertificateVerify />} />
          <Route path="/admin/qrcodes" element={<QRCodeList />} />

          <Route path="/services/software-development" element={<SoftwareDevelopment />} />
{/* <Route path="/services/website-development" element={<WebsiteDevelopment />} />
<Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} />
<Route path="/services/digital-marketing" element={<DigitalMarketing />} />
<Route path="/services/graphics-design" element={<GraphicsDesign />} />
<Route path="/services/domain-hosting" element={<DomainHosting />} />
<Route path="/services/erp-crm-development" element={<ErpCrmDevelopment />} />
<Route path="/services/maintenance-services" element={<MaintenanceServices />} />
<Route path="/services/explore-more" element={<ExploreMoreServices />} /> */}

        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
