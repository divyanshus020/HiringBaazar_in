import { Play, Sparkles, Shield, Zap, Volume2, VolumeX, Pause } from "lucide-react";
import heroSectionImg from "../assets/HEROSECTION.jpeg";
import founderVideo from "../assets/hero-video.mp4";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const WhyWeBuiltSection = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
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
    <section className="relative py-24 md:py-40 overflow-hidden bg-white">
      {/* Background Stylings */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-50/30 transform skew-x-[-6deg] translate-x-1/4 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 xl:gap-24">

          {/* Left: Interactive Visual */}
          <div className="flex-1 relative order-1 lg:order-1 w-full max-w-2xl group min-h-[400px] flex items-center justify-center">
            {isVisible ? (
              <>
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-[3rem] blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />

                <div className="relative w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden bg-white shadow-2xl border border-emerald-50">
                  <video
                    ref={videoRef}
                    src={founderVideo}
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1"
                    autoPlay
                    muted={isMuted}
                    loop
                    playsInline
                  />

                  {/* Close Button */}
                  <button
                    onClick={() => setIsVisible(false)}
                    className="absolute top-6 right-6 p-2 bg-black/40 backdrop-blur-md rounded-full text-white hover:bg-black/60 transition-all z-30"
                    title="Close Video"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  {/* Audio & Play Controls */}
                  <div className="absolute bottom-6 left-6 flex items-center gap-3 z-20">
                    <button
                      onClick={toggleMute}
                      className="p-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white hover:bg-white/40 transition-all group/audio"
                      title={isMuted ? "Unmute" : "Mute"}
                    >
                      {isMuted ? (
                        <VolumeX className="w-5 h-5" />
                      ) : (
                        <Volume2 className="w-5 h-5" />
                      )}
                    </button>

                    <button
                      onClick={togglePlay}
                      className="p-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white hover:bg-white/40 transition-all group/play"
                      title={isPlaying ? "Pause" : "Play"}
                    >
                      {isPlaying ? (
                        <Pause className="w-5 h-5" />
                      ) : (
                        <Play className="w-5 h-5 fill-current" />
                      )}
                    </button>
                  </div>


                </div>

                {/* Floaties */}
                <div className="absolute -top-6 -left-6 w-20 h-20 bg-white rounded-full shadow-2xl flex items-center justify-center border border-emerald-50 animate-pulse">
                  <Shield className="w-10 h-10 text-emerald-500" />
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center gap-6 p-12 bg-emerald-50/50 rounded-[3.5rem] border border-emerald-100 border-dashed animate-fade-in w-full h-full">
                <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Play className="w-10 h-10 text-emerald-600 ml-1" />
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-bold text-emerald-900 mb-2">Want to see the vision?</h4>
                  <p className="text-emerald-700/60 font-medium">Watch the founders story video</p>
                </div>
                <Button
                  onClick={() => setIsVisible(true)}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl px-8"
                >
                  Watch Story Video
                </Button>
              </div>
            )}
          </div>

          {/* Right: Storytelling Content */}
          <div className="flex-1 order-2 lg:order-2">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-emerald-100/50 border border-emerald-200 text-[#059669] text-xs font-black uppercase tracking-[0.2em] mb-8">
              The Mission
            </div>

            <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-10 text-[#059669] font-serif leading-[1.1]">
              Why We Built
              <br />
              HiringBazaar?
            </h2>

            <div className="space-y-8 max-w-xl">
              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  <span className="text-xl font-bold">01</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#344D41] mb-2">Fragmented Hiring Ecosystem</h3>
                  <p className="text-[#4A5D54] leading-relaxed font-medium">
                    Hiring is scattered across multiple platforms, vendors, and spreadsheets — making it chaotic and inefficient.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  <span className="text-xl font-bold">02</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#344D41] mb-2">Rising Cost Per Hire</h3>
                  <p className="text-[#4A5D54] leading-relaxed font-medium">
                    Companies are overpaying for hiring due to multiple middlemen, job portals, and inefficient processes.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  <span className="text-xl font-bold">03</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#344D41] mb-2">Slow Hiring Process</h3>
                  <p className="text-[#4A5D54] leading-relaxed font-medium">
                    Finding the right candidate takes weeks, causing missed opportunities and business delays.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .font-serif {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
    </section>
  );
};

export default WhyWeBuiltSection;
