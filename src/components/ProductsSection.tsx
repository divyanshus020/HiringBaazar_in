import { Building2, Users, GraduationCap, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    icon: Building2,
    title: "AI Hiring Assistant",
    subtitle: "For Internal HR Teams",
    description: "Agentic AI that automates your entire hiring workflow",
    stats: [
      { value: "30%", label: "cost reduction" },
      { value: "40%", label: "faster time-to-hire" },
      { value: "95%", label: "consistent screening" },
    ],
    features: [
      "Automated candidate screening and ranking",
      "Intelligent interview scheduling",
      "Real-time hiring analytics dashboard",
    ],
    cta: "Automate Your Hiring",
    ctaColor: "bg-primary",
    popular: false,
  },
  {
    icon: Users,
    title: "Agency Network",
    subtitle: "For Placement Agencies",
    description: "Vetted pool of AI-equipped placement agencies. Commission-based. Transparent.",
    stats: [
      { value: "100+", label: "verified companies" },
      { value: "0%", label: "upfront fees" },
      { value: "24h", label: "payment processing" },
    ],
    features: [
      "Dashboard for job opportunities",
      "Candidate matching powered by AI",
      "Transparent escrow payment system",
      "Performance analytics",
    ],
    cta: "Join Our Agency Network",
    ctaColor: "bg-accent",
    popular: true,
  },
  {
    icon: GraduationCap,
    title: "Campus Hiring",
    subtitle: "For Educational Institutions",
    description: "Revolutionize your college placement process with AI-powered job matching",
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
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-emerald-light text-primary text-sm font-medium mb-6">
            OUR PRODUCTS
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-medium">
            Solutions Tailored for <span className="italic text-primary">Every Need</span>
          </h2>
        </div>

        {/* Product Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="relative bg-card rounded-2xl border border-border overflow-hidden">
              {product.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="p-8 pt-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-emerald-light flex items-center justify-center mb-6">
                  <product.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold mb-1">{product.title}</h3>
                <p className="text-primary text-sm mb-4">{product.subtitle}</p>
                <p className="text-muted-foreground mb-6">{product.description}</p>

                {/* Stats */}
                <div className="flex items-center gap-4 pb-6 border-b border-border">
                  {product.stats.map((stat, i) => (
                    <div key={i} className="text-center flex-1">
                      <div className="text-xl font-serif text-primary font-medium">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className="py-6 space-y-3">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button className={`w-full ${product.ctaColor} text-primary-foreground py-6`}>
                  {product.cta}
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-3">90 sec demo</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
