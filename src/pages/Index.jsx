import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// ── Above the fold: eagerly imported (must paint immediately) ──────────────
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

// ── Below the fold: lazy loaded (browser fetches these AFTER first paint) ──
// Each becomes a separate JS chunk — only downloaded when needed
const WhyWeBuiltSection = lazy(() => import("@/components/WhyWeBuiltSection"));
const HowItWorksSection = lazy(() => import("@/components/HowItWorksSection"));
const ProductsSection = lazy(() => import("@/components/ProductsSection"));
const TrustSection = lazy(() => import("@/components/TrustSection"));
const ComparisonSection = lazy(() => import("@/components/ComparisonSection"));
const TestimonialsSection = lazy(
  () => import("@/components/TestimonialsSection"),
);
const CTASection = lazy(() => import("@/components/CTASection"));
const Footer = lazy(() => import("@/components/Footer"));

// Invisible fallback — sections already have their own enter animations,
// a spinner would flash and look broken
const Blank = () => <div aria-hidden="true" />;

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <motion.div
      className="min-h-screen bg-background"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <Header />

      <main>
        {/* ── Hero: no Suspense needed, eagerly loaded ── */}
        <section id="home">
          <HeroSection />
        </section>

        {/* ── Everything below: one Suspense boundary for the whole rest of page ── */}
        {/* They all load in parallel as one chunk group, not sequentially */}
        <Suspense fallback={<Blank />}>
          <WhyWeBuiltSection />
          <HowItWorksSection />
          <ProductsSection />
          <TrustSection />
          <ComparisonSection />
          <TestimonialsSection />
          <section id="contact">
            <CTASection />
          </section>
        </Suspense>
      </main>

      <Suspense fallback={<Blank />}>
        <section id="about">
          <Footer />
        </section>
      </Suspense>
    </motion.div>
  );
};

export default Index;
