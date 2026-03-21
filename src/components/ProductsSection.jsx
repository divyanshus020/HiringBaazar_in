"use client";

import {
  Users,
  GraduationCap,
  Check,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { motion } from "framer-motion";
import { useMemo } from "react";

export default function ProductsSection() {
  // ✅ memoized products (prevents re-creation)
  const products = useMemo(
    () => [
      {
        icon: Sparkles,
        title: "Hiring Bazaar AI",
        subtitle: "For HR and Companies",
        description:
          "Increase your HR productivity by up to 3x with AI-powered automation",
        features: [
          "AI candidate matching",
          "Automated workflows",
          "Single Platform for all Job boards",
          "Access to Our Special Networks",
        ],
        cta: "Explore Hiring Bazaar AI",
        link: "https://hirespark.hiringbazaar.in/hr/login",
      },
      {
        icon: Users,
        title: "Placement Agency",
        subtitle: "For Placement Agencies",
        description:
          "Increase your revenue, placements and productivity by up to 3x",
        features: [
          "Increase your placements",
          "Get new clients",
          "Transparent tracking",
          "Performance analytics",
        ],
        cta: "Join Our Agency Network",
        link: "https://partners.hiringbazaar.in/",
      },
      {
        icon: GraduationCap,
        title: "Campus Hiring",
        subtitle: "For Educational Institutions",
        description:
          "Revolutionize your college placement process with AI-powered job matching",
        features: [
          "Automated student-job matching",
          "Company profile verification",
          "Placement tracking & reporting",
          "Alumni network integration",
        ],
        cta: "Empower Your Placements",
        link: "https://campushb.hiringbazaar.in/",
      },
    ],
    [],
  );

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative py-20 md:py-20 overflow-hidden bg-[#F7F6F3]">
      {/* GRID + LASERS */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* emerald grid */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(#10b981 2px, transparent 2px), linear-gradient(90deg,#10b981 2px, transparent 2px)",
            backgroundSize: "90px 90px",
          }}
        />

        {/* horizontal laser */}
        <motion.div
          className="absolute h-[2px]"
          style={{
            width: "200px",
            top: "180px",
            background:
              "linear-gradient(90deg, transparent, #34d399, #10b981, #34d399, transparent)",
            boxShadow: "0 0 10px #10b981, 0 0 20px #10b981",
            willChange: "transform",
            transform: "translateZ(0)",
          }}
          animate={{ x: ["-200px", "110vw"] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* vertical laser */}
        <motion.div
          className="absolute w-[2px]"
          style={{
            height: "200px",
            left: "270px",
            background:
              "linear-gradient(180deg, transparent, #34d399, #10b981, #34d399, transparent)",
            boxShadow: "0 0 10px #10b981, 0 0 20px #10b981",
            willChange: "transform",
            transform: "translateZ(0)",
          }}
          animate={{ y: ["-200px", "110vh"] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }} // ✅ FIXED
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-[10px] font-black uppercase tracking-widest mb-6">
            Our Models
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-emerald-700 leading-tight">
            Solutions Tailored for Every Need
          </h2>

          <p className="text-xl md:text-2xl text-[#344D41] max-w-3xl mx-auto font-medium py-2">
            Choose the perfect plan to accelerate your{" "}
            <span className="text-emerald-600">hiring success.</span>
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }} // ✅ FIXED
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {products.map((product, i) => (
            <motion.div
              key={i}
              variants={card}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ duration: 0.35 }}
              style={{ willChange: "transform" }} // ✅ GPU hint
              className="h-full"
            >
              <CardSpotlight
                className="
                flex flex-col h-full
                shadow-[0_10px_30px_rgba(16,185,129,0.15)]
                hover:shadow-[0_20px_60px_rgba(16,185,129,0.35)]
                transition-shadow duration-500
                "
              >
                <product.icon className="w-8 h-8 text-emerald-400 mb-6" />

                <h3 className="text-2xl font-bold text-white mb-2">
                  {product.title}
                </h3>

                <p className="text-emerald-300 text-sm mb-4">
                  {product.subtitle}
                </p>

                <p className="text-neutral-300 mb-6">{product.description}</p>

                <div className="space-y-3 mb-8 flex-grow">
                  {product.features.map((f, j) => (
                    <div
                      key={j}
                      className="flex items-center gap-2 text-sm text-neutral-200"
                    >
                      <Check className="w-4 h-4 text-emerald-400" />
                      {f}
                    </div>
                  ))}
                </div>

                <Button
                  onClick={() => window.open(product.link)}
                  className="w-full bg-emerald-600 hover:bg-emerald-500 group"
                >
                  {product.cta}

                  <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </CardSpotlight>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
