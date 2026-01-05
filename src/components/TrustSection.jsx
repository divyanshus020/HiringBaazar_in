import { Tv, Award, GraduationCap, Building2 } from "lucide-react";

const credentials = [
  {
    icon: Tv,
    title: "Featured on ZeeTV",
    subtitle: "IdeaBaaz 2025",
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
  { value: "20+", label: "HR Trust" },
  { value: "98%", label: "Client Satisfaction" },
];

const TrustSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">

        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-rose-light text-accent text-xs md:text-sm font-medium mb-4 md:mb-6">
            TRUST & CREDIBILITY
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-medium">
            Backed by{" "}
            <span className="italic text-primary">Innovation</span> & Trust
          </h2>
        </div>

        {/* Credentials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {credentials.map((cred, index) => (
            <div
              key={index}
              className="bg-card rounded-xl md:rounded-2xl p-4 md:p-6 border border-border text-center card-hover"
            >
              <div className="w-12 md:w-16 h-12 md:h-16 rounded-lg md:rounded-xl bg-emerald-light flex items-center justify-center mx-auto mb-3 md:mb-4">
                <cred.icon className="w-6 md:w-8 h-6 md:h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-sm md:text-base mb-1">
                {cred.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                {cred.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="flex flex-col items-center">
          <div className="flex flex-col sm:flex-row gap-6 md:gap-10">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-card rounded-xl md:rounded-2xl border border-border p-6 md:p-10 text-center min-w-[220px]"
              >
                <div className="text-2xl md:text-4xl lg:text-5xl font-serif text-primary font-medium mb-2">
                  {stat.value}
                </div>
                <p className="text-xs md:text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* YC Startup Box */}
          <div className="mt-10 md:mt-12">
            <div className="bg-card/70 backdrop-blur-sm border border-border rounded-xl px-6 md:px-10 py-4 md:py-5 text-center shadow-sm">
              <p className="text-xs md:text-sm text-muted-foreground tracking-wide">
                Used by <span className="text-primary font-medium">YC startups</span>
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TrustSection;
