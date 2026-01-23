import { Building2, Users, GraduationCap, Check, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const products = [
  {
    icon: Sparkles,
    title: "Hiring Bazaar Ai",
    subtitle: "For HR and Companies",
    description:
      "Increase your HR productivity by upto 3times",
    stats: [],
    features: [
      "AI candidate matching",
      "Automated workflows",
      "Single Platform for all Job boards",
      "Access to Our Special Networks"
    ],
    cta: "Explore Hiring Bazaar Ai",
    ctaColor: "bg-primary",
    popular: false,
    link: "https://Hiring Bazaar Ai.hiringbazaar.in/",
  },
  {
    icon: Users,
    title: "Placement agency",
    subtitle: "For placement agencies",
    description:
      "Increase your revenue, placements and productivity by upto 3times",
    stats: [],
    features: [
      "Ai powered faster hiring",
      "Special discount",
      "Transparent",
      "Performance analytics",
    ],
    cta: "Join Our Agency Network",
    ctaColor: "bg-accent",
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
    ctaColor: "bg-primary",
    popular: false,
    link: "https://campushb.hiringbazaar.in/",
  },
];

const ProductsSection = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

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
    <section id="products" className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-emerald-light text-primary text-xs md:text-sm font-medium mb-4 md:mb-6">
            OUR PRODUCTS
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-medium">
            Solutions Tailored for{" "}
            <span className="italic text-primary">Every Need</span>
          </h2>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-2xl border border-border overflow-visible card-hover ${product.popular ? "mt-6" : ""
                }`}
            >
              {product.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium shadow-lg">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-5 md:p-8">
                <div className="w-10 md:w-14 h-10 md:h-14 rounded-lg md:rounded-xl bg-emerald-light flex items-center justify-center mb-4 md:mb-6">
                  <product.icon className="w-5 md:w-7 h-5 md:h-7 text-primary" />
                </div>

                <h3 className="text-lg md:text-2xl font-semibold mb-1">
                  {product.title}
                </h3>
                <p className="text-primary text-xs md:text-sm mb-3 md:mb-4">
                  {product.subtitle}
                </p>
                <p className="text-xs md:text-sm text-muted-foreground mb-4 md:mb-6">
                  {product.description}
                </p>

                {product.stats.length > 0 && (
                  <div className="flex items-center gap-2 md:gap-4 pb-4 md:pb-6 border-b border-border">
                    {product.stats.map((stat, i) => (
                      <div key={i} className="text-center flex-1">
                        <div className="text-base md:text-xl font-serif text-primary font-medium">
                          {stat.value}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="py-4 md:py-6 space-y-2 md:space-y-3">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2 md:gap-3">
                      <Check className="w-4 md:w-5 h-4 md:h-5 text-primary mt-0.5" />
                      <span className="text-xs md:text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={() => {
                    if (product.link) {
                      window.open(product.link, '_blank');
                    } else {
                      handleContactClick(product.cta);
                    }
                  }}
                  className={`w-full ${product.ctaColor} text-primary-foreground text-xs md:text-sm py-4 md:py-6`}
                >
                  {product.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Toast with ❌ Close */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-40 animate-in fade-in slide-in-from-bottom-5 duration-300">
          <div className="relative bg-gradient-to-r from-primary to-accent text-white rounded-xl shadow-2xl px-6 py-4 flex items-start gap-3">
            <div className="flex-1">
              <p className="font-semibold text-sm md:text-base">{toastMessage}</p>
              <p className="text-xs text-white/80 mt-1">
                Scroll down to complete your request
              </p>
            </div>

            {/* ❌ Close Button */}
            <button
              onClick={() => setShowToast(false)}
              className="absolute top-2 right-2 text-white/80 hover:text-white"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductsSection;
