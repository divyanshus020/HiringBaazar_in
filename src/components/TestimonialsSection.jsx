import { Star, Quote, MessageCircle, Sparkles, UserCheck, ShieldCheck, Zap } from "lucide-react";

const testimonials = [
  {
    quote: "Hiring Bazaar reduced our time-to-hire by 45%. The AI screening is incredibly accurate and has helped us find better candidates faster than ever before.",
    name: "Kritcure Pharmaceuticals",
    role: "Healthcare Industry",
    initials: "KP",
    color: "emerald",
    delay: "0s"
  },
  {
    quote: "The agency network feature is a game-changer. We now have complete visibility into our recruitment partners' progress and performance.",
    name: "Changepay",
    role: "Partner Network",
    initials: "CP",
    color: "purple",
    delay: "0.2s"
  },
  {
    quote: "Campus hiring became very much easier for us. The platform streamlined our entire recruitment process and improved candidate quality significantly.",
    name: "Oqlous AI",
    role: "Technology Sector",
    initials: "OA",
    color: "blue",
    delay: "0.4s"
  },
];

const TestimonialsSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-white">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-emerald-100/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-teal-100/30 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Modern Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 mb-6 group hover:scale-105 transition-transform duration-300">
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span className="text-xs font-bold tracking-wider text-emerald-700">TESTIMONIALS</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Trusted by the world's most <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              Innovative Companies
            </span>
          </h2>

          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
              <span>Verified Partners</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
              <UserCheck className="w-5 h-5 text-emerald-500" />
              <span>500+ Happy Users</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
              <Zap className="w-5 h-5 text-emerald-500" />
              <span>90% Faster Hiring</span>
            </div>
          </div>
        </div>

        {/* Floating Capsule Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`group relative p-1 rounded-[2.5rem] transition-all duration-500 hover:-translate-y-3 ${i === 1 ? 'md:mt-12' : '' // Staggered Effect
                }`}
              style={{ animationDelay: t.delay }}
            >
              {/* Outer Capsule Glow */}
              <div className={`absolute inset-0 bg-gradient-to-b opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10 ${t.color === 'emerald' ? 'from-emerald-200/50 to-transparent' :
                t.color === 'purple' ? 'from-purple-200/50 to-transparent' :
                  'from-blue-200/50 to-transparent'
                }`} />

              {/* Main Card */}
              <div className="bg-white border border-gray-100 rounded-[2.2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] group-hover:shadow-[0_20px_50px_rgba(16,185,129,0.1)] transition-all duration-500 h-full flex flex-col justify-between">
                <div>
                  {/* Rating & Quote Icon */}
                  <div className="flex justify-between items-center mb-8">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, starI) => (
                        <Star key={starI} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <div className={`p-3 rounded-2xl ${t.color === 'emerald' ? 'bg-emerald-50 text-emerald-600' :
                      t.color === 'purple' ? 'bg-purple-50 text-purple-600' :
                        'bg-blue-50 text-blue-600'
                      }`}>
                      <Quote className="w-5 h-5 opacity-50" />
                    </div>
                  </div>

                  {/* Quote Text */}
                  <blockquote className="text-gray-700 text-lg leading-relaxed font-medium mb-10 italic">
                    "{t.quote}"
                  </blockquote>
                </div>

                {/* Author Info Capsule */}
                <div className="flex items-center gap-4 bg-gray-50/50 p-4 rounded-3xl border border-gray-100/50">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-sm shadow-lg transform transition-transform group-hover:rotate-6 bg-gradient-to-br ${t.color === 'emerald' ? 'from-emerald-500 to-teal-500' :
                    t.color === 'purple' ? 'from-purple-500 to-pink-500' :
                      'from-blue-500 to-cyan-500'
                    }`}>
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{t.name}</h4>
                    <p className="text-xs text-gray-500 font-medium">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Social Proof Footer */}

      </div>
    </section>
  );
};

export default TestimonialsSection;
