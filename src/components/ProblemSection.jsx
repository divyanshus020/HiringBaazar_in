import { Clock, Scale, Eye, AlertCircle, TrendingDown, PlayCircle } from "lucide-react";

const problems = [
  {
    icon: Clock,
    stat: "40%",
    title: "Time Wasted on Manual Screening",
    description:
      "HR teams spend nearly half their working hours sorting through resumes and scheduling calls manually.",
    gradient: "from-rose-500 to-pink-500",
    bgGradient: "from-rose-50 to-pink-50",
    iconBg: "bg-gradient-to-br from-rose-100 to-pink-100",
    percentage: 40,
  },
  {
    icon: Scale,
    stat: "3x",
    title: "Inconsistent Hiring Quality",
    description:
      "Different interviewers, different standards. Your hiring quality varies wildly across teams and roles.",
    gradient: "from-amber-500 to-orange-500",
    bgGradient: "from-amber-50 to-orange-50",
    iconBg: "bg-gradient-to-br from-amber-100 to-orange-100",
    percentage: 75,
  },
  {
    icon: Eye,
    stat: "0%",
    title: "Agency Partnership Transparency",
    description:
      "Working with agencies? Good luck tracking progress. No visibility, no accountability, endless delays.",
    gradient: "from-red-500 to-rose-500",
    bgGradient: "from-red-50 to-rose-50",
    iconBg: "bg-gradient-to-br from-red-100 to-rose-100",
    percentage: 0,
  },
];

const ProblemSection = () => {
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
      <div className="absolute top-20 left-10 w-16 h-16 border-4 border-rose-300/20 rounded-full animate-float" />
      <div className="absolute bottom-20 right-20 w-12 h-12 bg-gradient-to-br from-rose-400/10 to-pink-400/10 rounded-lg rotate-45 animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-10 w-8 h-8 bg-amber-400/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-rose-50 to-pink-50 border border-rose-200/50 rounded-full shadow-lg mb-8">
            <AlertCircle className="w-4 h-4 text-rose-600" />
            <span className="text-sm font-semibold bg-gradient-to-r from-rose-700 to-pink-700 bg-clip-text text-transparent">
              THE PROBLEM
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
            Hiring Shouldn't Be This{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-rose-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
                Painful
              </span>
              <svg className="absolute -bottom-2 left-0 w-full h-4" viewBox="0 0 400 12" preserveAspectRatio="none">
                <path
                  d="M0,7 Q100,3 200,7 T400,7"
                  stroke="url(#gradient-problem)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="gradient-problem" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(0, 70%, 60%)" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="hsl(0, 70%, 60%)" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
            Every day, HR professionals battle through{" "}
            <span className="text-rose-700 font-semibold">outdated processes</span>{" "}
            that drain productivity and hurt candidate experience.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${problem.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

              {/* Card */}
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Icon and Stat */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 rounded-2xl ${problem.iconBg} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <problem.icon className={`w-8 h-8 bg-gradient-to-r ${problem.gradient} bg-clip-text text-transparent`} style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text' }} />
                  </div>
                  <div className="text-right">
                    <span className={`text-4xl font-bold bg-gradient-to-r ${problem.gradient} bg-clip-text text-transparent`}>
                      {problem.stat}
                    </span>
                    <div className="flex items-center gap-1 justify-end mt-1">
                      <TrendingDown className="w-4 h-4 text-rose-500" />
                      <span className="text-xs text-gray-500 font-medium">Impact</span>
                    </div>
                  </div>
                </div>

                {/* Animated Progress Bar */}
                <div className="relative h-2 bg-gray-100 rounded-full mb-6 overflow-hidden">
                  <div
                    className={`absolute top-0 left-0 h-full bg-gradient-to-r ${problem.gradient} rounded-full transition-all duration-1000 ease-out`}
                    style={{
                      width: `${problem.percentage}%`,
                      animation: 'slideIn 1s ease-out'
                    }}
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-gray-700 transition-colors">
                  {problem.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Link */}
        <div className="text-center">
          <a
            href="#"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-rose-50 to-pink-50 hover:from-rose-100 hover:to-pink-100 border-2 border-rose-200 hover:border-rose-300 rounded-2xl text-base font-semibold text-gray-900 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <PlayCircle className="w-5 h-5 text-rose-600 group-hover:scale-110 transition-transform" />
            Watch: A Day in the Life of an Overwhelmed HR Manager
            <span className="text-rose-600 group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from { width: 0%; }
        }
      `}</style>
    </section>
  );
};

export default ProblemSection;
