import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import WhatWeDo from "./pages/WhatWeDo";
import WhoWeAre from "./pages/WhoWeAre";
import BeARebel from "./pages/BeARebel";
import Franchise from "./pages/Franchise";
import RebelSpirit from "./pages/RebelSpirit";
import About from "./pages/About";
import RebelTeam from "./pages/RebelTeam";
import WorkingAtRebel from "./pages/WorkingAtRebel";
import Careers from "./pages/Careers";
import News from "./pages/News";
import PressRelease from "./pages/PressRelease";
import Events from "./pages/Events";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";
import Launcher from "./pages/Launcher";
import MediumStories from "./pages/MediumStories";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/be-a-rebel" element={<BeARebel />} />
        <Route path="/join-our-team" element={<BeARebel />} />
        <Route path="/launcher" element={<Launcher />} />
        <Route path="/rebel-launcher" element={<Launcher />} />
        <Route path="/franchise" element={<Franchise />} />
        <Route path="/rebel-spirit" element={<RebelSpirit />} />
        <Route path="/blogs" element={<RebelSpirit />} />
        <Route path="/medium-stories" element={<MediumStories />} />
        <Route path="/about" element={<About />} />
        <Route path="/rebel-team" element={<RebelTeam />} />
        <Route path="/working-at-rebel" element={<WorkingAtRebel />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/news" element={<News />} />
        <Route path="/press-release" element={<PressRelease />} />
        <Route path="/events" element={<Events />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
