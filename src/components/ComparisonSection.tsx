import { Check, X } from "lucide-react";

const comparisons = [
  { feature: "Time to Screen Candidates", traditional: "Days", bazaar: "Minutes" },
  { feature: "Hiring Cost per Role", traditional: "High", bazaar: "30% Lower" },
  { feature: "Quality Consistency", traditional: "Variable", bazaar: "AI-Standardized" },
  { feature: "Agency Transparency", traditional: "None", bazaar: "Full Visibility" },
  { feature: "Payment Security", traditional: "Risky", bazaar: "Escrow Protected" },
  { feature: "Analytics & Insights", traditional: "Manual Reports", bazaar: "Real-time Dashboard" },
];

const ComparisonSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-emerald-light text-primary text-sm font-medium mb-6">
            COMPARISON
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-medium mb-4">
            Why Choose <span className="italic text-primary">Hiring Bazaar</span>?
          </h2>
          <p className="text-muted-foreground">
            See how we stack up against traditional hiring methods
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto bg-card rounded-2xl border border-border overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-3 bg-secondary/50 border-b border-border">
            <div className="p-6 font-semibold">Feature</div>
            <div className="p-6 font-semibold text-center text-muted-foreground">Traditional Hiring</div>
            <div className="p-6 font-semibold text-center text-primary">Hiring Bazaar</div>
          </div>

          {/* Table Rows */}
          {comparisons.map((row, index) => (
            <div key={index} className="grid grid-cols-3 border-b border-border last:border-b-0">
              <div className="p-6 font-medium">{row.feature}</div>
              <div className="p-6 flex items-center justify-center gap-2 text-muted-foreground">
                <div className="w-6 h-6 rounded-full bg-rose-light flex items-center justify-center">
                  <X className="w-4 h-4 text-accent" />
                </div>
                <span>{row.traditional}</span>
              </div>
              <div className="p-6 flex items-center justify-center gap-2 text-primary">
                <div className="w-6 h-6 rounded-full bg-emerald-light flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span>{row.bazaar}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
