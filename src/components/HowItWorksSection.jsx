import {
  Play,
  Search,
  UserPlus,
  Zap,
  Pause,
  Volume2,
  VolumeX,
} from "lucide-react";
import { useState, useRef, useMemo } from "react";
import { Boxes } from "@/components/ui/boxes";
import { motion } from "framer-motion";
import demoVideo from "../assets/DEMOVIDEO.mp4";

const FLOAT_CSS = `
  @keyframes floatY {
    0%, 100% { transform: translateY(0px); }
    50%       { transform: translateY(-18px); }
  }
  .float-anim { animation: floatY 3s ease-in-out infinite; }
`;

const HowItWorksSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const steps = useMemo(
    () => [
      {
        icon: <Zap className="w-6 h-6" />,
        title: "Post Once",
        desc: "Add your job — no need to manage multiple platforms.",
      },
      {
        icon: <Search className="w-6 h-6" />,
        title: "Sourcing simplified",
        desc: "AI and expert recruiters find the best candidates.",
      },
      {
        icon: <UserPlus className="w-6 h-6" />,
        title: "Hire Faster",
        desc: "Get verified candidates ready for interviews.",
      },
    ],
    [],
  );

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <style>{FLOAT_CSS}</style>

      <section
        id="how-it-works"
        className="relative py-20 md:py-32 overflow-hidden bg-[#022c22]"
      >
        <Boxes />

        <div className="max-w-[1400px] mx-auto px-6 relative z-10 pointer-events-none">
          {/* HEADER — own whileInView, same pattern as TrustSection */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-24"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-900/40 border border-emerald-800 text-emerald-400 text-[10px] font-black uppercase tracking-widest mb-6">
              The Process
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-6 text-white font-serif leading-tight">
              See How HiringBazaar Works
            </h2>
            <p className="text-lg md:text-xl text-emerald-100/60 max-w-3xl mx-auto font-medium">
              See Hiring Bazaar in Action
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* LEFT STEPS — each step has its own whileInView + delay */}
            <div className="lg:col-span-4 space-y-10 pointer-events-auto">
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 6 }}
                  className="relative flex gap-6 group"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-emerald-900/50 border border-emerald-800 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500 shadow-lg">
                    {step.icon}
                  </div>
                  <div className="flex-grow pt-1">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-emerald-100/50 leading-relaxed text-sm md:text-base">
                      {step.desc}
                    </p>
                  </div>
                  {idx < 2 && (
                    <div className="absolute top-20 left-7 w-px h-12 bg-gradient-to-b from-emerald-500/50 to-transparent" />
                  )}
                </motion.div>
              ))}
            </div>

            {/* VIDEO — own whileInView */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-8 relative min-h-[300px] md:min-h-[400px] flex flex-col items-center justify-center pointer-events-auto"
            >
              <div className="float-anim w-full">
                <div className="relative rounded-[2rem] md:rounded-[3rem] p-3 md:p-4 bg-emerald-900/30 border border-emerald-800 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)]">
                  <div className="relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-emerald-950 border border-emerald-800 shadow-2xl group">
                    <video
                      ref={videoRef}
                      src={demoVideo}
                      preload="metadata"
                      className={`w-full h-auto object-cover transition-all duration-[2000ms] ${
                        isPlaying
                          ? "opacity-100"
                          : "opacity-40 group-hover:opacity-70 group-hover:scale-105"
                      }`}
                      playsInline
                      muted={isMuted}
                      onEnded={() => setIsPlaying(false)}
                    />

                    {/* MUTE */}
                    <button
                      onClick={toggleMute}
                      className="absolute bottom-5 left-5 p-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white hover:bg-white/40 transition"
                    >
                      {isMuted ? (
                        <VolumeX className="w-5 h-5" />
                      ) : (
                        <Volume2 className="w-5 h-5" />
                      )}
                    </button>

                    {/* PLAY OVERLAY */}
                    <div
                      className={`absolute inset-0 flex flex-col items-center justify-center bg-emerald-950/20 transition ${
                        isPlaying
                          ? "opacity-0 pointer-events-none"
                          : "opacity-100"
                      }`}
                    >
                      <button
                        onClick={togglePlay}
                        className="w-20 h-20 md:w-24 md:h-24 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(16,185,129,0.5)] transition hover:scale-110"
                      >
                        {isPlaying ? (
                          <Pause className="w-8 h-8 md:w-10 md:h-10 fill-current" />
                        ) : (
                          <Play className="w-8 h-8 md:w-10 md:h-10 fill-current ml-1" />
                        )}
                      </button>
                      <span className="mt-6 text-white text-xs uppercase tracking-[0.3em] opacity-40 font-bold">
                        {isPlaying ? "Pause Demo" : "Watch Demo"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorksSection;
