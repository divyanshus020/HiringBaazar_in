import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play, TrendingUp } from "lucide-react";
import heroImage from "../assets/HEROSECTION.jpeg";

const HeroSection = () => {
  const containerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen pt-40 pb-24 overflow-hidden bg-[#F7F6F3]">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-emerald-100/50 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-emerald-50/60 rounded-full blur-[100px]" />
        <div className="absolute -bottom-[10%] left-[20%] w-[25%] h-[25%] bg-white/40 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 xl:gap-24">

          {/* Left Content Column */}
          <div className="flex-1 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-bold mb-8 animate-fade-in shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              TIDES IIT Roorkee Backed • Featured on Zee TV Ideabaaz • Trusted by Growing Teams
              Automate Hiring. Monetize Talent. Hire Faster.
            </div>

            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold mb-8 text-[#059669] leading-[1.05] tracking-tight font-serif">
              Into a Steady Pipeline
              <br className="hidden md:block" />
              <span className="text-[#344D41]">Of Desired Candidates</span>
            </h1>

            <p className="text-xl md:text-2xl text-[#4A5D54]/90 mb-12 leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">
              AI-powered hiring platform that automates recruitment
              <span className="text-emerald-700 font-bold mx-1">turns your candidate database into a revenue engine,</span>
              and helps you source high-quality talent through exclusive networks.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-[#10b981] hover:bg-[#059669] text-white rounded-2xl px-12 py-8 text-xl font-bold transition-all duration-300 hover:scale-105 shadow-[0_20px_40px_-15px_rgba(16,185,129,0.3)] hover:shadow-[0_25px_50px_-12px_rgba(16,185,129,0.4)]"
              >
                <a href="https://hirespark.hiringbazaar.in/hr/login">
                  Start Hiring Now »
                </a>
              </Button>

              <div className="flex flex-col items-center gap-2 group">
                <Button
                  asChild
                  variant="link"
                  className="text-[#059669] text-lg font-bold hover:no-underline px-0"
                >
                  <a href="#how-it-works" className="flex items-center gap-2">
                    <span className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                      <Play className="w-4 h-4 fill-emerald-600 text-emerald-600 ml-0.5" />
                    </span>
                    See Hiring Flow in Action
                  </a>
                </Button>
                <span className="text-[10px] font-black tracking-widest uppercase text-emerald-800/40">3-min walkthrough</span>
              </div>
            </div>

            {/* Micro Stats */}
            <div className="mt-16 flex items-center gap-10 justify-center lg:justify-start grayscale opacity-50 contrast-125">
              <div className="flex flex-col">
                <span className="text-2xl font-bold font-serif text-[#344D41]">98%</span>
                <span className="text-[10px] uppercase tracking-tighter font-bold">Client Success</span>
              </div>
              <div className="w-px h-10 bg-[#344D41]/10" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold font-serif text-[#344D41]">3.5x</span>
                <span className="text-[10px] uppercase tracking-tighter font-bold">Faster Hiring</span>
              </div>
            </div>
          </div>

          {/* Right Visual Column */}
          <div className="flex-1 relative w-full max-w-xl xl:max-w-2xl group">
            {/* Background Decorative Blobs */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-200/40 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-1000" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-100/50 rounded-full blur-3xl" />

            {/* Main Product Showcase Card */}
            <div
              ref={containerRef}
              className={`relative z-10 transition-all duration-1000 transform ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
            >
              <div className="relative p-3 bg-white rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] md:shadow-[0_80px_150px_-30px_rgba(5,150,105,0.1)] border border-emerald-50">
                <div className="relative rounded-[2rem] overflow-hidden border-4 border-emerald-50 animate-reveal">
                  <img
                    src={heroImage}
                    alt="HiringBazaar Platform"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]"
                  />

                  {/* Floating Glass Badges */}
                  <div className="absolute top-6 left-6 right-6 flex justify-between items-start pointer-events-none">
                    <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-emerald-100/50 scale-90 md:scale-100 origin-left">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                        <span className="text-[10px] font-black text-emerald-900 tracking-wider uppercase">Live Activity</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Insight Card */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-[#059669]/90 backdrop-blur-xl p-5 md:p-7 rounded-[1.5rem] shadow-2xl border border-white/20 text-white transform group-hover:translate-y-[-5px] transition-transform duration-500">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="flex -space-x-2">
                          {[1, 2, 3].map(i => (
                            <div key={i} className="w-8 h-8 rounded-full border-2 border-[#059669] bg-emerald-100" />
                          ))}
                        </div>
                        <span className="text-[10px] font-bold tracking-widest uppercase text-emerald-100">User Network</span>
                      </div>
                      <p className="text-base md:text-xl font-bold leading-tight">
                        Companies hire <span className="text-emerald-300">40+</span> candidates
                        <br />
                        per year <span className="font-medium text-emerald-100/80">effortlessly.</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Floating Element */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-white rounded-2xl shadow-xl border border-emerald-50 flex items-center justify-center animate-bounce duration-3000 hover:rotate-12 transition-transform">
                <TrendingUp className="w-8 h-8 text-emerald-500" />
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .font-serif {
          font-family: 'Playfair Display', serif;
        }
        @keyframes reveal {
          from { clip-path: inset(0 100% 0 0); }
          to { clip-path: inset(0 0 0 0); }
        }
        .animate-reveal {
          animation: reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) forwards;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;