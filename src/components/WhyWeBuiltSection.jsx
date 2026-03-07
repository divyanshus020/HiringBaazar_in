import { Play, Shield, Volume2, VolumeX, Pause, X } from "lucide-react";
import founderVideo from "../assets/hero-video.mp4";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const WhyWeBuiltSection = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ margin: "-100px" }}
      variants={container}
      className="relative py-20 md:py-32 overflow-hidden bg-white"
    >
      {/* Background Accent */}
      <motion.div
        initial={{ x: 120, opacity: 0 }}
        whileInView={{ x: 80, opacity: 1 }}
        transition={{ duration: 1.4 }}
        className="absolute top-0 right-0 w-1/2 h-full bg-emerald-50/40 transform skew-x-[-6deg] translate-x-1/4 pointer-events-none"
      />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* VIDEO */}
          <motion.div
            variants={fadeUp}
            className="flex-1 w-full max-w-2xl relative"
          >
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="relative group"
            >
              {isVisible ? (
                <>
                  <motion.div className="absolute -inset-1 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-[2.5rem] blur opacity-80" />

                  <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-white shadow-2xl border border-emerald-100">
                    <video
                      ref={videoRef}
                      src={founderVideo}
                      autoPlay
                      muted={isMuted}
                      loop
                      playsInline
                      className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                    />

                    {/* CLOSE */}
                    <button
                      onClick={() => setIsVisible(false)}
                      className="absolute top-4 right-4 p-2 bg-black/40 backdrop-blur rounded-full text-white hover:bg-black/60"
                    >
                      <X className="w-5 h-5" />
                    </button>

                    {/* CONTROLS */}
                    <div className="absolute bottom-4 left-4 flex gap-3">
                      <button
                        onClick={toggleMute}
                        className="p-3 bg-white/20 backdrop-blur rounded-full border border-white/30 text-white hover:bg-white/40"
                      >
                        {isMuted ? (
                          <VolumeX className="w-5 h-5" />
                        ) : (
                          <Volume2 className="w-5 h-5" />
                        )}
                      </button>

                      <button
                        onClick={togglePlay}
                        className="p-3 bg-white/20 backdrop-blur rounded-full border border-white/30 text-white hover:bg-white/40"
                      >
                        {isPlaying ? (
                          <Pause className="w-5 h-5" />
                        ) : (
                          <Play className="w-5 h-5 fill-current" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* FLOATING ICON */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="absolute -top-5 -left-5 w-16 h-16 md:w-20 md:h-20 bg-white rounded-full shadow-xl flex items-center justify-center border border-emerald-100"
                  >
                    <Shield className="w-8 h-8 md:w-10 md:h-10 text-emerald-500" />
                  </motion.div>
                </>
              ) : (
                <motion.div
                  variants={fadeUp}
                  className="flex flex-col items-center gap-6 p-10 bg-emerald-50/60 rounded-[3rem] border border-emerald-200 border-dashed text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Play className="w-8 h-8 text-emerald-600 ml-1" />
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-emerald-900">
                      Want to see the vision?
                    </h4>
                    <p className="text-emerald-700/60">
                      Watch the founders story video
                    </p>
                  </div>

                  <Button
                    onClick={() => setIsVisible(true)}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl px-8"
                  >
                    Watch Story Video
                  </Button>
                </motion.div>
              )}
            </motion.div>
          </motion.div>

          {/* TEXT */}
          <motion.div variants={container} className="flex-1 w-full max-w-xl">
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 text-xs font-black uppercase tracking-[0.2em] mb-6"
            >
              The Mission
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-5xl xl:text-6xl font-bold mb-8 text-[#059669] font-serif leading-tight"
            >
              Why We Built
              <br />
              HiringBazaar?
            </motion.h2>

            <div className="space-y-6">
              {[
                {
                  title: "Fragmented Hiring Ecosystem",
                  text: "Hiring is scattered across multiple platforms and vendors, making the process inefficient.",
                },
                {
                  title: "Rising Cost Per Hire",
                  text: "Companies are overpaying for hiring due to middlemen and inefficient workflows.",
                },
                {
                  title: "Slow Hiring Process",
                  text: "Finding the right candidate takes weeks causing missed opportunities.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ x: 6 }}
                  className="flex gap-5 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 6 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white"
                  >
                    <span className="font-bold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </motion.div>

                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-[#344D41] mb-1">
                      {item.title}
                    </h3>

                    <p className="text-[#4A5D54] text-sm md:text-base leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .font-serif {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
    </motion.section>
  );
};

export default WhyWeBuiltSection;
