import { Check, X, Zap, TrendingDown, TrendingUp } from "lucide-react";

const comparisons = [
  { feature: "Time to Screen Candidates", traditional: "Days", bazaar: "Minutes", icon: Zap },
  { feature: "Hiring Cost per Role", traditional: "High", bazaar: "30% Lower", icon: TrendingDown },
  { feature: "Quality Consistency", traditional: "Variable", bazaar: "AI-Standardized", icon: TrendingUp },
  { feature: "Agency Transparency", traditional: "None", bazaar: "Full Visibility", icon: Check },
  { feature: "Payment Security", traditional: "Risky", bazaar: "Escrow Protected", icon: Check },
  { feature: "Analytics & Insights", traditional: "Manual Reports", bazaar: "Real-time Dashboard", icon: Zap },
];

const ComparisonSection = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Dynamic Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl animate-float" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-20 left-20 w-16 h-16 border-4 border-emerald-300/30 rounded-full animate-float" />
      <div className="absolute bottom-20 right-10 w-12 h-12 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-lg rotate-45 animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-10 w-8 h-8 bg-teal-400/30 rounded-full animate-float" style={{ animationDelay: '3s' }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-sm border border-emerald-200/50 rounded-full shadow-lg mb-8">
            <Zap className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-semibold bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">
              COMPARISON
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
            Why Choose{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 bg-clip-text text-transparent">
                Hiring Bazaar
              </span>
              <svg className="absolute -bottom-2 left-0 w-full h-4" viewBox="0 0 400 12" preserveAspectRatio="none">
                <path
                  d="M0,7 Q100,3 200,7 T400,7"
                  stroke="url(#gradient-comparison)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="gradient-comparison" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(152, 45%, 42%)" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="hsl(152, 45%, 42%)" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            ?
          </h2>

          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
            See how we stack up against{" "}
            <span className="text-emerald-700 font-semibold">traditional hiring methods</span>
          </p>
        </div>

        {/* Comparison Table - Desktop */}
        <div className="hidden md:block max-w-5xl mx-auto relative">
          {/* Glow Effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-[3rem] blur-2xl opacity-20" />

          <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl border border-gray-200 overflow-hidden shadow-2xl">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-gradient-to-r from-emerald-50 to-teal-50 border-b-2 border-emerald-200">
              <div className="p-6 font-bold text-gray-900 text-lg">Feature</div>
              <div className="p-6 font-bold text-gray-600 text-lg md:pl-20 xl:pl-28">
                Traditional Hiring
              </div>
              <div className="p-6 font-bold bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent text-lg md:pl-20 xl:pl-28">
                Hiring Bazaar
              </div>
            </div>

            {/* Table Rows */}
            {comparisons.map((row, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 border-b border-gray-200 last:border-b-0 hover:bg-emerald-50/50 transition-colors duration-300 ${index % 2 === 0 ? 'bg-white/50' : 'bg-gray-50/50'}`}
              >
                <div className="p-6 font-semibold text-gray-900 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center shadow-md">
                    <row.icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  {row.feature}
                </div>

                <div className="p-6 flex items-center justify-start md:pl-20 xl:pl-28 gap-4 text-gray-600">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-rose-500 to-red-500 flex items-center justify-center shadow-md flex-shrink-0">
                    <X className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium">{row.traditional}</span>
                </div>

                <div className="p-6 flex items-center justify-start md:pl-20 xl:pl-28 gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center shadow-md flex-shrink-0">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-semibold bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">{row.bazaar}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Cards - Mobile */}
        <div className="md:hidden space-y-6">
          {comparisons.map((row, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 p-6 space-y-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center shadow-md">
                    <row.icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <h3 className="font-bold text-base text-gray-900">{row.feature}</h3>
                </div>

                <div className="space-y-3 pl-13">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-r from-rose-500 to-red-500 flex items-center justify-center shadow-md flex-shrink-0">
                      <X className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm text-gray-600">
                      Traditional: <span className="font-semibold text-gray-900">{row.traditional}</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center shadow-md flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm">
                      Hiring Bazaar: <span className="font-semibold bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">{row.bazaar}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
