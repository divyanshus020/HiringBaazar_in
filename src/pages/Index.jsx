import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyWeBuiltSection from "@/components/WhyWeBuiltSection";
import ProductsSection from "@/components/ProductsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TrustSection from "@/components/TrustSection";
import ComparisonSection from "@/components/ComparisonSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ScrollShowcase from "@/components/ScrollShowcase";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation (e.g., /#about, /#contact)
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
        <section id="home">
          <HeroSection />
          <ScrollShowcase />
        </section>
        <WhyWeBuiltSection />
        <HowItWorksSection />
        <ProductsSection />
        <TrustSection />
        <ComparisonSection />
        <TestimonialsSection />
        <section id="contact">
          <CTASection />
        </section>
      </main>
      <section id="about">
        <Footer />
      </section>
    </motion.div>
  );
};

export default Index;
