import { Check, X, Zap, TrendingDown, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const comparisons = [
  {
    feature: "Time to Screen Candidates",
    traditional: "Days",
    bazaar: "Minutes",
    icon: Zap,
  },
  {
    feature: "Hiring Cost per Role",
    traditional: "High",
    bazaar: "30% Lower",
    icon: TrendingDown,
  },
  {
    feature: "Quality Consistency",
    traditional: "Variable",
    bazaar: "AI-Standardized",
    icon: TrendingUp,
  },
  {
    feature: "Agency Transparency",
    traditional: "None",
    bazaar: "Full Visibility",
    icon: Check,
  },
  {
    feature: "Revenue engine",
    traditional: "",
    bazaar: "Special Feature",
    icon: Check,
  },
  {
    feature: "Analytics & Insights",
    traditional: "Manual Reports",
    bazaar: "Real-time Dashboard",
    icon: Zap,
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const ComparisonSection = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-400 rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-teal-300 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          />
        </div>
      </div>

      <div className="container mx-auto px-5 md:px-6 relative z-10">
        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ amount: 0.3 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-sm border border-emerald-200/50 rounded-full shadow-lg mb-8">
            <Zap className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-semibold bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">
              COMPARISON
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Hiring Bazaar
            </span>
            ?
          </h2>

          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            See how we stack up against traditional hiring methods
          </p>
        </motion.div>

        {/* DESKTOP TABLE */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.2 }}
          className="hidden md:block max-w-5xl mx-auto relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-[3rem] blur-2xl opacity-20" />

          <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl border border-gray-200 overflow-hidden shadow-2xl">
            {/* Header */}

            <div className="grid grid-cols-3 bg-gradient-to-r from-emerald-50 to-teal-50 border-b-2 border-emerald-200">
              <div className="p-6 font-bold text-gray-900 text-lg">Feature</div>
              <div className="p-6 font-bold text-gray-600 text-lg">
                Traditional Hiring
              </div>
              <div className="p-6 font-bold text-emerald-700 text-lg">
                Hiring Bazaar
              </div>
            </div>

            {/* Rows */}

            {comparisons.map((row, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ backgroundColor: "rgba(16,185,129,0.08)" }}
                className={`grid grid-cols-3 border-b border-gray-200 last:border-b-0 ${
                  index % 2 === 0 ? "bg-white/50" : "bg-gray-50/50"
                }`}
              >
                {/* Feature */}

                <div className="p-6 font-semibold text-gray-900 flex items-center gap-3">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center shadow-md"
                  >
                    <row.icon className="w-5 h-5 text-emerald-600" />
                  </motion.div>
                  {row.feature}
                </div>

                {/* Traditional */}

                <div className="p-6 flex items-center gap-4 text-gray-600">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-rose-500 to-red-500 flex items-center justify-center shadow-md">
                    <X className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium">{row.traditional}</span>
                </div>

                {/* Bazaar */}

                <div className="p-6 flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center shadow-md">
                    <Check className="w-5 h-5 text-white" />
                  </div>

                  <span className="font-semibold bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">
                    {row.bazaar}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* MOBILE CARDS */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.2 }}
          className="md:hidden space-y-6"
        >
          {comparisons.map((row, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -6 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 p-6 space-y-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center shadow-md">
                    <row.icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <h3 className="font-bold text-base text-gray-900">
                    {row.feature}
                  </h3>
                </div>

                <div className="space-y-3 pl-13">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-r from-rose-500 to-red-500 flex items-center justify-center shadow-md">
                      <X className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm text-gray-600">
                      Traditional:{" "}
                      <span className="font-semibold text-gray-900">
                        {row.traditional}
                      </span>
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center shadow-md">
                      <Check className="w-4 h-4 text-white" />
                    </div>

                    <span className="text-sm">
                      Hiring Bazaar:{" "}
                      <span className="font-semibold bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">
                        {row.bazaar}
                      </span>
                    </span>
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

export default ComparisonSection;
