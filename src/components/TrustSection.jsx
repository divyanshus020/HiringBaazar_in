import { Tv, Award, GraduationCap, Building2, Shield, TrendingUp, CheckCircle2, Star } from "lucide-react";

const credentials = [
  {
    icon: Tv,
    title: "Featured on ZeeTV",
    subtitle: "IdeaBaaz 2025",
    gradient: "from-blue-500 to-indigo-500",
    iconBg: "bg-gradient-to-br from-blue-100 to-indigo-100",
  },
  {
    icon: Award,
    title: "TIDES Incubated",
    subtitle: "IIT Roorkee",
    gradient: "from-emerald-500 to-teal-500",
    iconBg: "bg-gradient-to-br from-emerald-100 to-teal-100",
  },
  {
    icon: GraduationCap,
    title: "Founder Alumni",
    subtitle: "IIT Roorkee",
    gradient: "from-purple-500 to-pink-500",
    iconBg: "bg-gradient-to-br from-purple-100 to-pink-100",
  },
  {
    icon: Building2,
    title: "AI Technology",
    subtitle: "Verified & Tested",
    gradient: "from-amber-500 to-orange-500",
    iconBg: "bg-gradient-to-br from-amber-100 to-orange-100",
  },
];

const stats = [
  { value: "20+", label: "HR Trust", icon: TrendingUp, gradient: "from-emerald-500 to-teal-500" },
  { value: "98%", label: "Client Satisfaction", icon: Star, gradient: "from-purple-500 to-pink-500" },
];

const TrustSection = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-20 right-20 w-16 h-16 border-4 border-emerald-300/20 rounded-full animate-float" />
      <div className="absolute bottom-20 left-10 w-12 h-12 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-lg rotate-45 animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-10 w-8 h-8 bg-purple-400/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-sm border border-emerald-200/50 rounded-full shadow-lg mb-8">
            <Shield className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-semibold bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">
              TRUST & CREDIBILITY
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
            Backed by{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 bg-clip-text text-transparent">
                Innovation
              </span>
              <svg className="absolute -bottom-2 left-0 w-full h-4" viewBox="0 0 400 12" preserveAspectRatio="none">
                <path
                  d="M0,7 Q100,3 200,7 T400,7"
                  stroke="url(#gradient-trust)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="gradient-trust" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(152, 45%, 42%)" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="hsl(152, 45%, 42%)" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            {" "}&{" "}Trust
          </h2>

          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
            Recognized by{" "}
            <span className="text-emerald-700 font-semibold">industry leaders</span>{" "}
            and trusted by top organizations
          </p>
        </div>

        {/* Credentials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16 md:mb-20">
          {credentials.map((cred, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${cred.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

              {/* Card */}
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 text-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl ${cred.iconBg} flex items-center justify-center mx-auto mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <cred.icon className={`w-8 h-8 bg-gradient-to-r ${cred.gradient} bg-clip-text`} style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text' }} />
                </div>

                {/* Title */}
                <h3 className="font-bold text-base mb-1 text-gray-900">
                  {cred.title}
                </h3>

                {/* Subtitle */}
                <p className={`text-sm font-semibold bg-gradient-to-r ${cred.gradient} bg-clip-text text-transparent`}>
                  {cred.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="flex flex-col items-center">
          <div className="flex flex-col sm:flex-row gap-8 lg:gap-12 mb-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative"
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${stat.gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />

                {/* Stat Card */}
                <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl border border-gray-200 p-10 text-center min-w-[240px] shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${stat.gradient} flex items-center justify-center shadow-lg`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Value */}
                  <div className={`text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                    {stat.value}
                  </div>

                  {/* Label */}
                  <p className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* YC Startup Box */}
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500" />

            <div className="relative bg-white/90 backdrop-blur-xl border-2 border-emerald-200 rounded-2xl px-10 py-5 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <p className="text-base font-semibold text-gray-700">
                  Used by{" "}
                  <span className="bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent font-bold">
                    YC startups
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TrustSection;
