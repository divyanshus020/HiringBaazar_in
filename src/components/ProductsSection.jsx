import { Building2, Users, GraduationCap, Check, Sparkles, X, ArrowRight, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const products = [
    {
        icon: Sparkles,
        title: "Hiring Bazaar AI",
        subtitle: "For HR and Companies",
        description: "Increase your HR productivity by up to 3x with AI-powered automation",
        features: [
            "AI candidate matching",
            "Automated workflows",
            "Single Platform for all Job boards",
            "Access to Our Special Networks"
        ],
        cta: "Explore Hiring Bazaar AI",
        gradient: "from-emerald-500 to-teal-500",
        iconBg: "bg-emerald-50",
        glowColor: "#10b981",
        popular: true,
        link: "https://hirespark.hiringbazaar.in/hr/login",
    },
    {
        icon: Users,
        title: "Placement Agency",
        subtitle: "For Placement Agencies",
        description: "Increase your revenue, placements and productivity by up to 3x",
        features: [
            "Increase your placements",
            "Get new clients",
            "Transparent tracking",
            "Performance analytics",
        ],
        cta: "Join Our Agency Network",
        gradient: "from-emerald-600 to-emerald-700",
        iconBg: "bg-emerald-50",
        glowColor: "#059669",
        popular: false,
        link: "https://www.partnershb.in/",
    },
    {
        icon: GraduationCap,
        title: "Campus Hiring",
        subtitle: "For Educational Institutions",
        description: "Revolutionize your college placement process with AI-powered job matching",
        features: [
            "Automated student-job matching",
            "Company profile verification",
            "Placement tracking & reporting",
            "Alumni network integration",
        ],
        cta: "Empower Your Placements",
        gradient: "from-[#344D41] to-[#1A2E24]",
        iconBg: "bg-emerald-50",
        glowColor: "#344D41",
        popular: false,
        link: "https://campushb.hiringbazaar.in/",
    },
];

const ProductsSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} id="products" className="relative py-24 md:py-40 overflow-hidden bg-[#F7F6F3]">
            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-[10px] font-black uppercase tracking-widest mb-6">
                        Our Models
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-[#059669] font-serif leading-tight">
                        Solutions Tailored for Every Need
                    </h2>
                    <p className="text-xl md:text-2xl text-[#344D41] max-w-3xl mx-auto font-medium">
                        Choose the perfect plan to accelerate your <span className="text-emerald-600">hiring success.</span>
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className={`group relative transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                            style={{ transitionDelay: `${index * 200}ms` }}
                        >
                            <div className={`relative h-full bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl border border-emerald-50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col ${product.popular ? 'border-emerald-200 ring-4 ring-emerald-50' : ''}`}>

                                {product.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#10b981] text-white px-6 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                                        Most Popular
                                    </div>
                                )}

                                <div className="mb-8">
                                    <div className={`w-14 h-14 rounded-2xl ${product.iconBg} flex items-center justify-center mb-6`}>
                                        <product.icon className="w-7 h-7 text-emerald-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#344D41] mb-2">{product.title}</h3>
                                    <p className="text-xs font-black text-emerald-600 uppercase tracking-widest mb-4">{product.subtitle}</p>
                                    <p className="text-sm text-[#4A5D54] leading-relaxed mb-6 font-medium">
                                        {product.description}
                                    </p>
                                </div>

                                <div className="space-y-4 mb-10 flex-grow">
                                    {product.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center">
                                                <Check className="w-3 h-3 text-emerald-600" />
                                            </div>
                                            <span className="text-sm text-[#344D41] font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <Button
                                    onClick={() => window.open(product.link, '_blank')}
                                    className={`w-full py-7 rounded-2xl text-base font-bold transition-all duration-300 ${product.popular ? 'bg-[#10b981] hover:bg-[#059669] text-white shadow-[0_15px_30px_-10px_rgba(16,185,129,0.3)]' : 'bg-[#344D41] hover:bg-[#1A2E24] text-white'}`}
                                >
                                    {product.cta}
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .font-serif {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
        </section>
    );
};

export default ProductsSection;
