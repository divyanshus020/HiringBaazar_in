import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { TrendingUp } from "lucide-react";
import heroImage from "../assets/HEROSECTION.jpeg";

export default function ScrollShowcase() {
  const ref = useRef(null);

  const isInView = useInView(ref, { margin: "-100px", once: true });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.65]);
  const x = useTransform(scrollYProgress, [0, 0.5], [0, 320]);

  const textOpacity = useTransform(scrollYProgress, [0.25, 0.5], [0, 1]);
  const textX = useTransform(scrollYProgress, [0.25, 0.5], [-80, 0]);

  return (
    <>
      {/* ================= MOBILE + TABLET ================= */}
      <section className="lg:hidden py-16">
        <div className="container mx-auto px-6">
          {/* IMAGE FIRST */}
          <div className="max-w-4xl mx-auto relative mb-12">
            <div className="p-3 bg-white rounded-[2rem] shadow-[0_50px_120px_-20px_rgba(0,0,0,0.2)]">
              <div className="rounded-[1.5rem] overflow-hidden border border-emerald-50">
                <img
                  src={heroImage}
                  alt="HiringBazaar Platform"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="absolute -top-5 right-8 w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-emerald-500" />
            </div>
          </div>

          {/* TEXT BELOW */}
          <div className="max-w-xl mx-auto">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-emerald-100/50 border border-emerald-200 text-[#059669] text-xs font-black uppercase tracking-[0.25em] mb-6">
              AI Hiring Intelligence
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#059669] font-serif leading-[1.1]">
              AI Powered
              <br />
              Talent Engine
            </h2>

            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <span className="font-bold">01</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#344D41] mb-2">
                    Smart Candidate Matching
                  </h3>
                  <p className="text-[#4A5D54]">
                    AI automatically finds the best candidates from your
                    database.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <span className="font-bold">02</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#344D41] mb-2">
                    Automated Screening
                  </h3>
                  <p className="text-[#4A5D54]">
                    Instantly evaluate applicants and reduce hiring time.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <span className="font-bold">03</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#344D41] mb-2">
                    Revenue From Talent Pool
                  </h3>
                  <p className="text-[#4A5D54]">
                    Turn your candidate database into a revenue engine.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DESKTOP ANIMATION ================= */}
      <section ref={ref} className="hidden lg:block relative h-[220vh]">
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <div className="container mx-auto px-6 relative">
            {/* TEXT */}
            <motion.div
              style={{
                opacity: textOpacity,
                x: textX,
                willChange: "transform, opacity",
              }}
              className="
              mt-12
              max-w-xl
              mx-auto
              lg:absolute
              lg:left-20
              lg:top-[12%]
              lg:mt-0
            "
            >
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-emerald-100/50 border border-emerald-200 text-[#059669] text-xs font-black uppercase tracking-[0.25em] mb-6">
                AI Hiring Intelligence
              </div>

              <h2 className="text-3xl md:text-5xl xl:text-6xl font-bold mb-10 text-[#059669] font-serif leading-[1.1]">
                AI Powered
                <br />
                Talent Engine
              </h2>

              <div className="space-y-6">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                    <span className="font-bold">01</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#344D41] mb-2">
                      Smart Candidate Matching
                    </h3>
                    <p className="text-[#4A5D54]">
                      AI automatically finds the best candidates from your
                      database.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                    <span className="font-bold">02</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#344D41] mb-2">
                      Automated Screening
                    </h3>
                    <p className="text-[#4A5D54]">
                      Instantly evaluate applicants and reduce hiring time.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                    <span className="font-bold">03</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#344D41] mb-2">
                      Revenue From Talent Pool
                    </h3>
                    <p className="text-[#4A5D54]">
                      Turn your candidate database into a revenue engine.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              style={{
                scale,
                x,
                willChange: "transform",
              }}
              className="max-w-4xl mx-auto relative"
            >
              <div className="p-3 bg-white rounded-[2rem] shadow-[0_50px_120px_-20px_rgba(0,0,0,0.2)]">
                <div className="rounded-[1.5rem] overflow-hidden border border-emerald-50">
                  <img
                    src={heroImage}
                    alt="HiringBazaar Platform"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="absolute -top-5 right-8 w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-emerald-500" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
