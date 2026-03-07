import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { WavyBackground } from "./WavyBackground";
import { motion } from "framer-motion";

const HeroSection = () => {
  const containerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.2 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <WavyBackground>
      <section className="relative pt-24 md:pt-28 pb-8 md:pb-12 overflow-hidden backdrop-blur-[10px]">
        {/* background blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-[10%] -left-[10%] w-[50%] md:w-[35%] h-[35%] bg-emerald-100/40 rounded-full blur-[110px]" />
          <div className="absolute top-[20%] -right-[5%] w-[40%] md:w-[25%] h-[25%] bg-emerald-50/40 rounded-full blur-[90px]" />
        </div>

        <div className="container mx-auto px-5 md:px-6 relative z-10 py-10">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-3xl mx-auto text-center"
          >
            {/* badge */}
            <motion.div
              variants={item}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs md:text-sm font-semibold mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              TIDES IIT Roorkee Backed • Featured on Zee TV Ideabaaz
            </motion.div>

            {/* heading */}
            <motion.h1
              variants={item}
              className="text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-bold mb-6 text-[#059669] leading-tight font-serif"
            >
              Into a Steady Pipeline
              <br />
              <span className="text-[#344D41]">Of Desired Candidates</span>
            </motion.h1>

            {/* paragraph */}
            <motion.p
              variants={item}
              className="text-base sm:text-lg md:text-xl text-[#4A5D54]/90 mb-10 leading-relaxed max-w-xl md:max-w-2xl mx-auto"
            >
              AI-powered hiring platform that automates recruitment,
              <span className="text-emerald-700 font-semibold">
                {" "}
                turns your candidate database into a revenue engine,
              </span>
              and helps you source high-quality talent through exclusive
              networks.
            </motion.p>

            {/* buttons */}
            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-10"
            >
              <Button
                asChild
                className="bg-[#10b981] hover:bg-[#059669] text-white rounded-xl px-7 py-5 md:px-8 md:py-6 text-base md:text-lg font-semibold shadow-lg w-full sm:w-auto"
              >
                <a href="https://hirespark.hiringbazaar.in/hr/login">
                  Start Hiring Now »
                </a>
              </Button>

              <div className="flex items-center gap-3 group cursor-pointer">
                <span className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-200 transition">
                  <Play className="w-4 h-4 fill-emerald-600 text-emerald-600 ml-[2px]" />
                </span>

                <div className="text-left">
                  <p className="font-semibold text-[#059669] text-sm md:text-base">
                    See Hiring Flow
                  </p>
                  <p className="text-[9px] md:text-[10px] tracking-widest text-emerald-800/40">
                    3-MIN WALKTHROUGH
                  </p>
                </div>
              </div>
            </motion.div>

            {/* stats */}
            <motion.div
              variants={item}
              className="flex flex-wrap justify-center items-center gap-6 md:gap-8 opacity-70"
            >
              <div className="text-center">
                <p className="text-lg md:text-xl font-bold text-[#344D41]">
                  98%
                </p>
                <p className="text-[9px] md:text-[10px] uppercase tracking-wider">
                  Client Success
                </p>
              </div>

              <div className="hidden sm:block w-px h-8 bg-[#344D41]/10" />

              <div className="text-center">
                <p className="text-lg md:text-xl font-bold text-[#344D41]">
                  3.5x
                </p>
                <p className="text-[9px] md:text-[10px] uppercase tracking-wider">
                  Faster Hiring
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <style>{`
          .font-serif {
            font-family: 'Playfair Display', serif;
          }
        `}</style>
      </section>
    </WavyBackground>
  );
};

export default HeroSection;
