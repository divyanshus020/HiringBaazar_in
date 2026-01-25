import { Building2, Users, GraduationCap, Check, Sparkles, X, ArrowRight, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const products = [
  {
    icon: Sparkles,
    title: "Hiring Bazaar AI",
    subtitle: "For HR and Companies",
    description:
      "Increase your HR productivity by up to 3x with AI-powered automation",
    stats: [],
    features: [
      "AI candidate matching",
      "Automated workflows",
      "Single Platform for all Job boards",
      "Access to Our Special Networks"
    ],
    cta: "Explore Hiring Bazaar AI",
    gradient: "from-emerald-500 to-teal-500",
    iconBg: "bg-gradient-to-br from-emerald-100 to-teal-100",
    glowColor: "#10b981",
    borderGradient: "from-emerald-400 via-teal-400 to-emerald-400",
    popular: false,
    link: "https://hirespark.hiringbazaar.in/hr/login",
  },
  {
    icon: Users,
    title: "Placement Agency",
    subtitle: "For Placement Agencies",
    description:
      "Increase your revenue, placements and productivity by up to 3x",
    stats: [],
    features: [
      "AI powered faster hiring",
      "Special discount",
      "Transparent tracking",
      "Performance analytics",
    ],
    cta: "Join Our Agency Network",
    gradient: "from-rose-500 to-rose-600",
    iconBg: "bg-gradient-to-br from-rose-50 to-rose-100",
    glowColor: "#f43f5e",
    borderGradient: "from-rose-400 via-rose-500 to-rose-400",
    popular: true,
    link: "https://www.partnershb.in/",
  },

  {
    icon: GraduationCap,
    title: "Campus Hiring",
    subtitle: "For Educational Institutions",
    description:
      "Revolutionize your college placement process with AI-powered job matching",
    stats: [
      { value: "2x", label: "placement rate" },
      { value: "85%", label: "student satisfaction" },
      { value: "50+", label: "industry connections" },
    ],
    features: [
      "Automated student-job matching",
      "Company profile verification",
      "Placement tracking & reporting",
      "Alumni network integration",
    ],
    cta: "Empower Your Placements",
    gradient: "from-blue-500 to-cyan-500",
    iconBg: "bg-gradient-to-br from-blue-100 to-cyan-100",
    glowColor: "#3b82f6",
    borderGradient: "from-blue-400 via-cyan-400 to-blue-400",
    popular: false,
    link: "https://campushb.hiringbazaar.in/",
  },
];

const ProductsSection = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleContactClick = (productTitle) => {
    setToastMessage(`Let's get started with ${productTitle}!`);
    setShowToast(true);

    const ctaSection = document.querySelector("#cta");
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: "smooth" });
    }

    setTimeout(() => setShowToast(false), 4000);
  };

  return (
    <section ref={sectionRef} id="products" className="relative py-20 md:py-32 overflow-hidden">
      {/* Clean Light Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          {/* Badge */}
          <div className={`inline-flex items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
            <Zap className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-semibold bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">
              OUR PRODUCTS
            </span>
          </div>

          {/* Headline with Text Fill Animation */}
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
            <span className="text-gray-900">Solutions Tailored for </span>
            <span className="relative inline-block">
              <span className={`relative z-10 ${isVisible ? 'animate-text-fill' : ''
                }`} style={{
                  background: 'linear-gradient(to right, #059669, #14b8a6, #10b981)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundSize: isVisible ? '100% 100%' : '0% 100%',
                  backgroundRepeat: 'no-repeat'
                }}>
                Every Need
              </span>
              <svg className="absolute -bottom-2 left-0 w-full h-4" viewBox="0 0 400 12" preserveAspectRatio="none">
                <path
                  d="M0,7 Q100,3 200,7 T400,7"
                  stroke="url(#gradient-products)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  className={isVisible ? 'animate-draw-line' : ''}
                  strokeDasharray="1000"
                  strokeDashoffset={isVisible ? '0' : '1000'}
                  style={{
                    transition: 'stroke-dashoffset 1.5s ease-out 0.8s'
                  }}
                />
                <defs>
                  <linearGradient id="gradient-products" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#059669" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>

          <p className={`text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
            Choose the perfect solution for your{" "}
            <span className="text-emerald-700 font-semibold">hiring needs</span>
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div
              key={index}
              className={`group relative ${product.popular ? "lg:-mt-4" : ""} transition-all duration-700 flex flex-col h-full ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              style={{ transitionDelay: `${450 + index * 150}ms` }}
            >
              {/* Card Background Animation Blob */}
              <div className="absolute inset-0 overflow-hidden rounded-[3rem] -z-10">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.08, 0.15, 0.08],
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: index * 2 }}
                  className={`absolute -bottom-1/4 -right-1/4 w-[150%] h-[150%] bg-gradient-to-br ${product.gradient} blur-[120px] rounded-full opacity-10`}
                />
              </div>

              {product.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <div className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-rose-600 to-rose-700 text-white rounded-full text-sm font-bold shadow-xl">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Animated Border with Moving Color Strip */}
              <div className="absolute -inset-[2px] rounded-3xl overflow-hidden">
                <div
                  className={`absolute inset-0 animate-rotate-border`}
                  style={{
                    background: `conic-gradient(from 0deg, transparent 0deg, ${product.glowColor} 90deg, transparent 180deg, transparent 360deg)`,
                  }}
                />
              </div>

              {/* Card */}
              <div className={`relative bg-white backdrop-blur-xl rounded-3xl p-7 border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${product.popular ? 'lg:py-10' : ''} overflow-hidden flex flex-col h-full`}>

                {/* Moving Background Strip */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 5, 0],
                      opacity: [0.05, 0.1, 0.05],
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className={`absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br ${product.gradient} blur-[80px] rounded-full`}
                  />
                  <div
                    className={`absolute w-[200%] h-[200%] bg-gradient-to-br ${product.gradient} opacity-5 animate-slide-background`}
                  />
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl ${product.iconBg} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <product.icon className={`w-6 h-6 bg-gradient-to-r ${product.gradient}`} style={{
                      WebkitTextFillColor: 'transparent',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text'
                    }} />
                  </div>

                  {/* Title with Fill Animation */}
                  <div className="relative inline-block mb-1.5">
                    <h3 className="text-xl font-bold text-gray-900">
                      <span
                        className={isVisible ? 'animate-text-fill-card' : ''}
                        style={{
                          background: `linear-gradient(to right, ${product.gradient.includes('emerald') ? '#10b981, #14b8a6' : product.gradient.includes('rose') ? '#f43f5e, #fb7185' : '#3b82f6, #06b6d4'})`,
                          backgroundClip: 'text',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: isVisible ? 'transparent' : '#111827',
                          backgroundSize: isVisible ? '100% 100%' : '0% 100%',
                          backgroundRepeat: 'no-repeat',
                          transition: 'background-size 1.2s ease-out, -webkit-text-fill-color 1.2s ease-out',
                          transitionDelay: `${600 + index * 150}ms`
                        }}
                      >
                        {product.title}
                      </span>
                    </h3>
                    {/* Animated underline */}
                    <div
                      className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r ${product.gradient} transition-all duration-1000 ease-out`}
                      style={{
                        width: isVisible ? '100%' : '0%',
                        transitionDelay: `${800 + index * 150}ms`
                      }}
                    />
                  </div>
                  <p className={`text-sm mb-3 font-semibold bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`}>
                    {product.subtitle}
                  </p>
                  <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Stats */}
                  {product.stats.length > 0 && (
                    <div className="grid grid-cols-3 gap-3 pb-5 mb-5 border-b border-gray-100">
                      {product.stats.map((stat, i) => (
                        <div key={i} className="text-center">
                          <div className={`text-xl font-bold bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent mb-0.5`}>
                            {stat.value}
                          </div>
                          <div className="text-[10px] text-gray-500 uppercase tracking-tight font-bold">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Features - flex-grow to push button to bottom */}
                  <div className="space-y-2.5 mb-6 flex-grow">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className={`w-4.5 h-4.5 rounded-full bg-gradient-to-r ${product.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <Check className="w-2.5 h-2.5 text-white" />
                        </div>
                        <span className="text-sm text-gray-700 leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button - stays at bottom */}
                  <Button
                    onClick={() => {
                      if (product.link) {
                        window.open(product.link, '_blank');
                      } else {
                        handleContactClick(product.cta);
                      }
                    }}
                    className={`group/btn w-full bg-gradient-to-r ${product.gradient} hover:opacity-90 text-white rounded-xl px-4 py-4.5 text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden mt-auto`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
                    <span className="relative z-10 flex items-center justify-center">
                      {product.cta}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Toast */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-5 duration-300">
          <div className="relative bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-2xl shadow-2xl px-6 py-5 flex items-start gap-4 max-w-md">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="flex-1 pr-6">
              <p className="font-bold text-base mb-1">{toastMessage}</p>
              <p className="text-sm text-white/90">
                Scroll down to complete your request
              </p>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setShowToast(false)}
              className="absolute top-3 right-3 text-white/80 hover:text-white hover:bg-white/10 rounded-full p-1 transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(-20px) rotate(5deg); 
          }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-text-fill {
          background-size: 0% 100%;
          animation: text-fill 1.5s ease-out forwards;
          animation-delay: 0.3s;
        }

        @keyframes text-fill {
          from {
            background-size: 0% 100%;
          }
          to {
            background-size: 100% 100%;
          }
        }

        @keyframes rotate-border {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .animate-rotate-border {
          animation: rotate-border 4s linear infinite;
        }

        @keyframes slide-background {
          0%, 100% {
            transform: translate(-25%, -25%);
          }
          50% {
            transform: translate(0%, 0%);
          }
        }

        .animate-slide-background {
          animation: slide-background 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ProductsSection;