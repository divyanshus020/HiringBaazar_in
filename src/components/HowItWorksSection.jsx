import {
  Play,
  Search,
  UserPlus,
  Zap,
  Pause,
  Volume2,
  VolumeX,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState, useRef } from "react";
import { NeuralBackground } from "@/components/ui/boxes";
import { motion } from "framer-motion";
import demoVideo from "../assets/DEMOVIDEO.mp4";
import demoVideo2 from "../assets/DEMOVIDEO2.mp4";

const FLOAT_CSS = `
  @keyframes floatY {
    0%, 100% { transform: translateY(0px); }
    50%       { transform: translateY(-18px); }
  }
  .float-anim { animation: floatY 3s ease-in-out infinite; }
`;

const STEPS = [
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
];

const HowItWorksSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentVideo, setCurrentVideo] = useState(0);

  const videoRefs = useRef([]);

  const videos = [demoVideo, demoVideo2];

  const getActiveVideo = () => videoRefs.current[currentVideo];

  const pauseAllVideos = () => {
    videoRefs.current.forEach((video) => {
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    });
  };

  const toggleMute = () => {
    const v = getActiveVideo();
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted(v.muted);
  };

  const togglePlay = async () => {
    const v = getActiveVideo();
    if (!v) return;

    try {
      if (isPlaying) {
        v.pause();
        setIsPlaying(false);
      } else {
        await v.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error("Video play failed:", error);
    }
  };

  const goToSlide = (index) => {
    pauseAllVideos();
    setIsPlaying(false);
    setCurrentVideo(index);
  };

  const nextSlide = () => {
    const nextIndex = (currentVideo + 1) % videos.length;
    goToSlide(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = (currentVideo - 1 + videos.length) % videos.length;
    goToSlide(prevIndex);
  };

  return (
    <>
      <style>{FLOAT_CSS}</style>

      <section
        id="how-it-works"
        className="relative py-20 md:py-32 overflow-hidden bg-[#022c22]"
      >
        <NeuralBackground />

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          {/* HEADER */}
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
            {/* LEFT STEPS */}
            <div className="lg:col-span-4 space-y-10">
              {STEPS.map((step, idx) => (
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

            {/* VIDEO SLIDER */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-8 relative min-h-[300px] md:min-h-[400px] flex flex-col items-center justify-center"
            >
              <div className="float-anim w-full">
                <div className="relative rounded-[2rem] md:rounded-[3rem] p-3 md:p-4 bg-emerald-900/30 border border-emerald-800 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)]">
                  <div className="relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-emerald-950 border border-emerald-800 shadow-2xl group">
                    {/* Slider Track */}
                    <div
                      className="flex transition-transform duration-500 ease-in-out"
                      style={{ transform: `translateX(-${currentVideo * 100}%)` }}
                    >
                      {videos.map((video, index) => (
                        <div key={index} className="w-full flex-shrink-0 relative">
                          <video
                            ref={(el) => (videoRefs.current[index] = el)}
                            src={video}
                            preload="metadata"
                            className={`w-full h-auto object-cover transition-all duration-[2000ms] ${
                              currentVideo === index && isPlaying
                                ? "opacity-100"
                                : "opacity-40 group-hover:opacity-70"
                            }`}
                            playsInline
                            muted={isMuted}
                            onEnded={() => setIsPlaying(false)}
                          />
                        </div>
                      ))}
                    </div>

                    {/* Left Arrow */}
                    <button
                      onClick={prevSlide}
                      className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white hover:bg-white/40 transition"
                      aria-label="Previous video"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    {/* Right Arrow */}
                    <button
                      onClick={nextSlide}
                      className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white hover:bg-white/40 transition"
                      aria-label="Next video"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>

                    {/* Mute Button */}
                    <button
                      onClick={toggleMute}
                      className="absolute bottom-5 left-5 z-20 p-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white hover:bg-white/40 transition"
                      aria-label={isMuted ? "Unmute" : "Mute"}
                    >
                      {isMuted ? (
                        <VolumeX className="w-5 h-5" />
                      ) : (
                        <Volume2 className="w-5 h-5" />
                      )}
                    </button>

                    {/* Pause Button */}
                    {isPlaying && (
                      <button
                        onClick={togglePlay}
                        className="absolute top-5 right-5 z-20 p-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white hover:bg-white/40 transition"
                        aria-label="Pause"
                      >
                        <Pause className="w-5 h-5 fill-current" />
                      </button>
                    )}

                    {/* Play Overlay */}
                    {!isPlaying && (
                      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-emerald-950/20">
                        <button
                          onClick={togglePlay}
                          className="w-20 h-20 md:w-24 md:h-24 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(16,185,129,0.5)] transition hover:scale-110"
                          aria-label="Play"
                        >
                          <Play className="w-8 h-8 md:w-10 md:h-10 fill-current ml-1" />
                        </button>
                        <span className="mt-6 text-white text-xs uppercase tracking-[0.3em] opacity-40 font-bold">
                          Watch Demo
                        </span>
                      </div>
                    )}

                    {/* Dots */}
                    <div className="absolute bottom-5 right-5 z-20 flex gap-2">
                      {videos.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToSlide(index)}
                          className={`w-3 h-3 rounded-full transition ${
                            currentVideo === index ? "bg-white" : "bg-white/40"
                          }`}
                          aria-label={`Go to video ${index + 1}`}
                        />
                      ))}
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


// import {
//   Play,
//   Search,
//   UserPlus,
//   Zap,
//   Pause,
//   Volume2,
//   VolumeX,
// } from "lucide-react";
// import { useState, useRef } from "react";
// import { NeuralBackground } from "@/components/ui/boxes";
// import { motion } from "framer-motion";
// import demoVideo from "../assets/DEMOVIDEO.mp4";

// const FLOAT_CSS = `
//   @keyframes floatY {
//     0%, 100% { transform: translateY(0px); }
//     50%       { transform: translateY(-18px); }
//   }
//   .float-anim { animation: floatY 3s ease-in-out infinite; }
// `;

// const STEPS = [
//   {
//     icon: <Zap className="w-6 h-6" />,
//     title: "Post Once",
//     desc: "Add your job — no need to manage multiple platforms.",
//   },
//   {
//     icon: <Search className="w-6 h-6" />,
//     title: "Sourcing simplified",
//     desc: "AI and expert recruiters find the best candidates.",
//   },
//   {
//     icon: <UserPlus className="w-6 h-6" />,
//     title: "Hire Faster",
//     desc: "Get verified candidates ready for interviews.",
//   },
// ];

// const HowItWorksSection = () => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [isMuted, setIsMuted] = useState(true);
//   const videoRef = useRef(null);

//   const toggleMute = () => {
//     const v = videoRef.current;
//     if (!v) return;
//     v.muted = !v.muted;
//     setIsMuted(v.muted);
//   };

//   const togglePlay = () => {
//     const v = videoRef.current;
//     if (!v) return;
//     isPlaying ? v.pause() : v.play();
//     setIsPlaying((p) => !p);
//   };

//   return (
//     <>
//       <style>{FLOAT_CSS}</style>

//       <section
//         id="how-it-works"
//         className="relative py-20 md:py-32 overflow-hidden bg-[#022c22]"
//       >
//         <NeuralBackground />

//         {/*
//           ✅ FIX: removed pointer-events-none from this wrapper entirely.
//           The NeuralBackground already has pointer-events-none on itself,
//           so we don't need to suppress clicks on the whole content layer.
//         */}
//         <div className="max-w-[1400px] mx-auto px-6 relative z-10">
//           {/* HEADER */}
//           <motion.div
//             initial={{ opacity: 0, y: 60 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-16 md:mb-24"
//           >
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-900/40 border border-emerald-800 text-emerald-400 text-[10px] font-black uppercase tracking-widest mb-6">
//               The Process
//             </div>
//             <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-6 text-white font-serif leading-tight">
//               See How HiringBazaar Works
//             </h2>
//             <p className="text-lg md:text-xl text-emerald-100/60 max-w-3xl mx-auto font-medium">
//               See Hiring Bazaar in Action
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
//             {/* LEFT STEPS */}
//             <div className="lg:col-span-4 space-y-10">
//               {STEPS.map((step, idx) => (
//                 <motion.div
//                   key={idx}
//                   initial={{ opacity: 0, y: 80 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: idx * 0.2, duration: 0.8 }}
//                   viewport={{ once: true }}
//                   whileHover={{ x: 6 }}
//                   className="relative flex gap-6 group"
//                 >
//                   <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-emerald-900/50 border border-emerald-800 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500 shadow-lg">
//                     {step.icon}
//                   </div>
//                   <div className="flex-grow pt-1">
//                     <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
//                       {step.title}
//                     </h3>
//                     <p className="text-emerald-100/50 leading-relaxed text-sm md:text-base">
//                       {step.desc}
//                     </p>
//                   </div>
//                   {idx < 2 && (
//                     <div className="absolute top-20 left-7 w-px h-12 bg-gradient-to-b from-emerald-500/50 to-transparent" />
//                   )}
//                 </motion.div>
//               ))}
//             </div>

//             {/* VIDEO */}
//             <motion.div
//               initial={{ opacity: 0, y: 60 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.9, delay: 0.1 }}
//               viewport={{ once: true }}
//               className="lg:col-span-8 relative min-h-[300px] md:min-h-[400px] flex flex-col items-center justify-center"
//             >
//               <div className="float-anim w-full">
//                 <div className="relative rounded-[2rem] md:rounded-[3rem] p-3 md:p-4 bg-emerald-900/30 border border-emerald-800 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)]">
//                   <div className="relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-emerald-950 border border-emerald-800 shadow-2xl group">
//                     <video
//                       ref={videoRef}
//                       src={demoVideo}
//                       preload="metadata"
//                       className={`w-full h-auto object-cover transition-all duration-[2000ms] ${
//                         isPlaying
//                           ? "opacity-100"
//                           : "opacity-40 group-hover:opacity-70 group-hover:scale-105"
//                       }`}
//                       playsInline
//                       muted={isMuted}
//                       onEnded={() => setIsPlaying(false)}
//                     />

//                     {/*
//                       ✅ FIX: Mute button is always visible and always clickable.
//                       Was buried inside the play overlay which had pointer-events-none
//                       when playing. Now it sits at its own z-level independently.
//                     */}
//                     <button
//                       onClick={toggleMute}
//                       className="absolute bottom-5 left-5 z-20 p-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white hover:bg-white/40 transition"
//                       aria-label={isMuted ? "Unmute" : "Mute"}
//                     >
//                       {isMuted ? (
//                         <VolumeX className="w-5 h-5" />
//                       ) : (
//                         <Volume2 className="w-5 h-5" />
//                       )}
//                     </button>

//                     {/*
//                       ✅ FIX: Persistent pause button shown in corner while playing.
//                       Previously the only pause trigger was the overlay which turned
//                       opacity-0 + pointer-events-none while playing — so users had
//                       no way to pause after pressing play.
//                     */}
//                     {isPlaying && (
//                       <button
//                         onClick={togglePlay}
//                         className="absolute top-5 right-5 z-20 p-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white hover:bg-white/40 transition"
//                         aria-label="Pause"
//                       >
//                         <Pause className="w-5 h-5 fill-current" />
//                       </button>
//                     )}

//                     {/* PLAY OVERLAY — only shown when not playing */}
//                     {!isPlaying && (
//                       <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-emerald-950/20">
//                         <button
//                           onClick={togglePlay}
//                           className="w-20 h-20 md:w-24 md:h-24 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(16,185,129,0.5)] transition hover:scale-110"
//                           aria-label="Play"
//                         >
//                           <Play className="w-8 h-8 md:w-10 md:h-10 fill-current ml-1" />
//                         </button>
//                         <span className="mt-6 text-white text-xs uppercase tracking-[0.3em] opacity-40 font-bold">
//                           Watch Demo
//                         </span>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default HowItWorksSection;
