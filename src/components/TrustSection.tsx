import { Tv, Award, GraduationCap, Building2 } from "lucide-react";

const credentials = [
  {
    icon: Tv,
    title: "Featured on ZeeTV",
    subtitle: "IdeaBaaz 2024",
  },
  {
    icon: Award,
    title: "TIDES Incubated",
    subtitle: "IIT Roorkee",
  },
  {
    icon: GraduationCap,
    title: "Founder Alumni",
    subtitle: "IIT Roorkee",
  },
  {
    icon: Building2,
    title: "AI Technology",
    subtitle: "Verified & Tested",
  },
];

const stats = [
  { value: "100+", label: "Companies Trust Us" },
  { value: "500+", label: "Partner Agencies" },
  { value: "10,000+", label: "Candidates Placed" },
  { value: "98%", label: "Client Satisfaction" },
];

const TrustSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-rose-light text-accent text-sm font-medium mb-6">
            TRUST & CREDIBILITY
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-medium">
            Backed by <span className="italic text-primary">Innovation</span> & Trust
          </h2>
        </div>

        {/* Credentials */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {credentials.map((cred, index) => (
            <div key={index} className="bg-card rounded-2xl p-8 border border-border text-center">
              <div className="w-16 h-16 rounded-xl bg-emerald-light flex items-center justify-center mx-auto mb-4">
                <cred.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-1">{cred.title}</h3>
              <p className="text-sm text-muted-foreground">{cred.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-card rounded-2xl border border-border">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-border">
            {stats.map((stat, index) => (
              <div key={index} className="p-8 text-center">
                <div className="text-4xl md:text-5xl font-serif text-primary font-medium mb-2">{stat.value}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
