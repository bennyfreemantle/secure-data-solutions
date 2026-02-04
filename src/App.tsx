import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";

const HomePage = lazy(() => import("./pages/HomePage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const PricingPage = lazy(() => import("./pages/PricingPage"));
const HowItWorksPage = lazy(() => import("./pages/HowItWorksPage"));
const StartRecoveryPage = lazy(() => import("./pages/StartRecoveryPage"));
const FAQPage = lazy(() => import("./pages/FAQPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage"));
const TermsPage = lazy(() => import("./pages/TermsPage"));
const CookiesPage = lazy(() => import("./pages/CookiesPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Suspense
            fallback={
              <div className="container-wide py-12 text-muted-foreground">
                Loading...
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/how-it-works" element={<HowItWorksPage />} />
              <Route path="/start-recovery" element={<StartRecoveryPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/cookies" element={<CookiesPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
