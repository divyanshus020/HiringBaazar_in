import {
  Star,
  Quote,
  MessageCircle,
  UserCheck,
  ShieldCheck,
  Zap,
} from "lucide-react";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Hiring Bazaar reduced our time-to-hire by 45%. The AI screening is incredibly accurate and has helped us find better candidates faster than ever before.",
    name: "Kritcure Pharmaceuticals",
    role: "Healthcare Industry",
    initials: "KP",
    color: "emerald",
  },
  {
    quote:
      "The agency network feature is a game-changer. We now have complete visibility into our recruitment partners' progress and performance.",
    name: "Changepay",
    role: "Partner Network",
    initials: "CP",
    color: "purple",
  },
  {
    quote:
      "Campus hiring became very much easier for us. The platform streamlined our entire recruitment process and improved candidate quality significantly.",
    name: "Oqlous AI",
    role: "Technology Sector",
    initials: "OA",
    color: "blue",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 80 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const TestimonialsSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-white">
      {/* Background Glow */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-emerald-100/30 rounded-full blur-[120px] animate-pulse" />
        <div
          className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-teal-100/30 rounded-full blur-[120px] animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-5 md:px-6 relative z-10">
        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ amount: 0.4 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 mb-6">
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span className="text-xs font-bold tracking-wider text-emerald-700">
              TESTIMONIALS
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Trusted by the world's most
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              Innovative Companies
            </span>
          </h2>

          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
              Verified Partners
            </div>

            <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
              <UserCheck className="w-5 h-5 text-emerald-500" />
              500+ Happy Users
            </div>

            <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
              <Zap className="w-5 h-5 text-emerald-500" />
              90% Faster Hiring
            </div>
          </div>
        </motion.div>

        {/* TESTIMONIAL CARDS */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={card}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 200 }}
              className={`group relative p-1 rounded-[2.5rem] ${i === 1 ? "md:mt-12" : ""}`}
            >
              {/* Glow */}

              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10 ${
                  t.color === "emerald"
                    ? "bg-emerald-200/40"
                    : t.color === "purple"
                      ? "bg-purple-200/40"
                      : "bg-blue-200/40"
                }`}
              />

              {/* Card */}

              <div className="bg-white border border-gray-100 rounded-[2.2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] group-hover:shadow-[0_20px_50px_rgba(16,185,129,0.1)] transition-all duration-500 h-full flex flex-col justify-between">
                <div>
                  {/* Rating */}

                  <div className="flex justify-between items-center mb-8">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, starI) => (
                        <motion.div key={starI} whileHover={{ scale: 1.2 }}>
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        </motion.div>
                      ))}
                    </div>

                    <motion.div
                      whileHover={{ rotate: 12 }}
                      className={`p-3 rounded-2xl ${
                        t.color === "emerald"
                          ? "bg-emerald-50 text-emerald-600"
                          : t.color === "purple"
                            ? "bg-purple-50 text-purple-600"
                            : "bg-blue-50 text-blue-600"
                      }`}
                    >
                      <Quote className="w-5 h-5 opacity-60" />
                    </motion.div>
                  </div>

                  {/* Quote */}

                  <blockquote className="text-gray-700 text-lg leading-relaxed font-medium mb-10 italic">
                    "{t.quote}"
                  </blockquote>
                </div>

                {/* Author */}

                <div className="flex items-center gap-4 bg-gray-50/50 p-4 rounded-3xl border border-gray-100">
                  <motion.div
                    whileHover={{ rotate: 6, scale: 1.05 }}
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-sm shadow-lg bg-gradient-to-br ${
                      t.color === "emerald"
                        ? "from-emerald-500 to-teal-500"
                        : t.color === "purple"
                          ? "from-purple-500 to-pink-500"
                          : "from-blue-500 to-cyan-500"
                    }`}
                  >
                    {t.initials}
                  </motion.div>

                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">
                      {t.name}
                    </h4>
                    <p className="text-xs text-gray-500 font-medium">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
