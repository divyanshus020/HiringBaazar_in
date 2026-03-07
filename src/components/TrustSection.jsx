import {
  Tv,
  Award,
  GraduationCap,
  Building2,
  Shield,
  TrendingUp,
  CheckCircle2,
  Star,
} from "lucide-react";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const credentials = [
  {
    icon: Tv,
    title: "Featured on ZeeTV",
    subtitle: "IdeaBaaz 2025",
    gradient: "from-blue-500 to-indigo-500",
    iconColor: "text-blue-600",
  },
  {
    icon: Award,
    title: "TIDES Incubated",
    subtitle: "IIT Roorkee",
    gradient: "from-emerald-500 to-teal-500",
    iconColor: "text-teal-600",
  },
  {
    icon: GraduationCap,
    title: "Founder Alumni",
    subtitle: "IIT Roorkee",
    gradient: "from-purple-500 to-pink-500",
    iconColor: "text-pink-600",
  },
  {
    icon: Building2,
    title: "AI Technology",
    subtitle: "Verified & Tested",
    gradient: "from-amber-500 to-orange-500",
    iconColor: "text-amber-600",
  },
];

const stats = [
  {
    value: 50,
    suffix: "+",
    label: "HR Trust",
    icon: TrendingUp,
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
    icon: Star,
    gradient: "from-purple-500 to-pink-500",
  },
];

/* Counter */

const Counter = ({ value, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1600;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= value) {
        start = value;
        clearInterval(timer);
      }

      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
};

const TrustSection = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-6 relative z-10">
        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ amount: 0.3 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-emerald-200 rounded-full shadow mb-6">
            <Shield className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-semibold text-emerald-700">
              TRUST & CREDIBILITY
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Backed by{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Innovation
            </span>{" "}
            & Trust
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Recognized by industry leaders and trusted by organizations
            worldwide
          </p>
        </motion.div>

        {/* CREDENTIALS */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {credentials.map((cred, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.25,
                duration: 1.1,
              }}
              viewport={{ amount: 0.25 }}
              whileHover={{
                y: -10,
                transition: { duration: 0.4 },
              }}
              className="relative group"
            >
              {/* Glow */}

              <div
                className={`absolute -inset-1 bg-gradient-to-r ${cred.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition duration-700`}
              />

              {/* Card */}

              <div
                className={`relative rounded-2xl p-6 border text-center shadow-lg transition-all duration-700 bg-gradient-to-br ${cred.gradient} text-white`}
              >
                {/* Icon */}

                <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center mx-auto mb-4 border-2 border-white/40">
                  <cred.icon className={`w-7 h-7 ${cred.iconColor}`} />
                </div>

                <h3 className="font-bold text-base mb-1">{cred.title}</h3>

                <p className="text-sm opacity-90">{cred.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* STATS */}

        <div className="flex flex-col items-center">
          <div className="flex flex-col sm:flex-row gap-8 lg:gap-12 mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: index * 0.25,
                  duration: 1,
                }}
                viewport={{ amount: 0.25 }}
                whileHover={{ y: -6 }}
                className="relative group"
              >
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${stat.gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition`}
                />

                <div className="relative bg-white rounded-3xl border border-gray-200 p-10 text-center min-w-[220px] shadow-lg">
                  <div className="flex justify-center mb-4">
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-r ${stat.gradient} flex items-center justify-center`}
                    >
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <div
                    className={`text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}
                  >
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>

                  <p className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* YC BOX */}

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ amount: 0.3 }}
            whileHover={{ scale: 1.05 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition" />

            <div className="relative bg-white border-2 border-emerald-200 rounded-2xl px-10 py-5 text-center shadow-lg">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
