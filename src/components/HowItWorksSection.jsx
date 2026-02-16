import { Play, ArrowRight, CheckCircle, Search, UserPlus, Zap, Pause, X, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
import demoVideo from "../assets/DEMOVIDEO.mp4";

const HowItWorksSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

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

  return (
    <section id="how-it-works" className="relative py-24 md:py-40 overflow-hidden bg-emerald-950">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-emerald-400/5 rounded-full blur-[120px]" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="text-center mb-20 md:mb-32">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-900/40 border border-emerald-800 text-emerald-400 text-[10px] font-black uppercase tracking-widest mb-6">
            The Process
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 text-white font-serif leading-tight">
            See How HiringBazaar Works
          </h2>
          <p className="text-xl md:text-2xl text-emerald-100/60 max-w-3xl mx-auto font-medium leading-relaxed">
            See Hiring Bazaar in Action
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left: Step Indicators */}
          <div className="lg:col-span-4 space-y-12">
            {[
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Post Once",
                desc: "Add your job — no need to manage multiple platforms."
              },
              {
                icon: <Search className="w-6 h-6" />,
                title: "Sourcing simplified ",
                desc: "AI and expert recruiters find the best candidates for your role."
              },
              {
                icon: <UserPlus className="w-6 h-6" />,
                title: "Hire Faster",
                desc: "Get verified candidates ready for interviews — in days, not weeks."
              }
            ].map((step, idx) => (
              <div key={idx} className="relative flex gap-6 group cursor-default">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-emerald-900/50 border border-emerald-800 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500 shadow-lg">
                  {step.icon}
                </div>
                <div className="flex-grow pt-1">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">{step.title}</h3>
                  <p className="text-emerald-100/40 leading-relaxed text-sm group-hover:text-emerald-100/60 transition-colors">
                    {step.desc}
                  </p>
                </div>
                {idx < 2 && (
                  <div className="absolute top-20 left-7 w-px h-12 bg-gradient-to-b from-emerald-500/50 to-transparent" />
                )}
              </div>
            ))}
          </div>

          {/* Right: Interactive Showcase */}
          {/* Right: Interactive Showcase */}
          <div className="lg:col-span-8 relative group min-h-[400px] flex flex-col items-center justify-center">
            {isVisible ? (
              <div className="w-full">
                <div className="relative rounded-[3rem] p-4 bg-emerald-900/30 border border-emerald-800 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
                  <div className="relative rounded-[2.5rem] overflow-hidden bg-emerald-950 border border-emerald-800 shadow-2xl">
                    <video
                      ref={videoRef}
                      src={demoVideo}
                      className={`w-full h-auto object-cover transition-all duration-[2000ms] ${isPlaying ? 'opacity-100' : 'opacity-40 group-hover:opacity-60 group-hover:scale-105'}`}
                      playsInline
                      muted={isMuted}
                      onEnded={() => setIsPlaying(false)}
                    />

                    {/* Audio Toggle Button */}
                    <button
                      onClick={toggleMute}
                      className="absolute bottom-6 left-6 p-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white hover:bg-white/40 transition-all z-20 group/audio"
                      title={isMuted ? "Unmute" : "Mute"}
                    >
                      {isMuted ? (
                        <VolumeX className="w-5 h-5" />
                      ) : (
                        <Volume2 className="w-5 h-5" />
                      )}
                    </button>

                    {/* Close Button */}
                    <button
                      onClick={() => {
                        setIsVisible(false);
                        setIsPlaying(false);
                        if (videoRef.current) videoRef.current.pause();
                      }}
                      className="absolute top-6 right-6 p-2 bg-black/40 backdrop-blur-md rounded-full text-white hover:bg-black/60 transition-all z-30"
                      title="Turn Off Video"
                    >
                      <X className="w-5 h-5" />
                    </button>

                    {/* Overlay Interactive Elements */}
                    <div className={`absolute inset-0 flex flex-col items-center justify-center bg-emerald-950/20 transition-opacity duration-500 ${isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                      <button
                        onClick={togglePlay}
                        className="w-24 h-24 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(16,185,129,0.5)] transition-all duration-500 hover:scale-110 active:scale-95 group/btn"
                      >
                        {isPlaying ? (
                          <Pause className="w-10 h-10 fill-current group-hover/btn:scale-110 transition-transform" />
                        ) : (
                          <Play className="w-10 h-10 fill-current ml-1 group-hover/btn:scale-110 transition-transform" />
                        )}
                      </button>
                      <span className="mt-8 text-white font-black text-xs uppercase tracking-[0.3em] opacity-40 group-hover:opacity-100 transition-opacity">
                        {isPlaying ? 'Pause Demo' : 'Watch Demo'}
                      </span>
                    </div>

                    {/* Floating UI Bits */}
                    <div className="absolute top-10 right-10 p-4 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl animate-float">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-emerald-400" />
                        </div>
                        <div>
                          <p className="text-[10px] font-black text-emerald-400 uppercase">Verification</p>
                          <p className="text-[11px] text-white font-bold">Candidate Verified ✓</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom CTA Card */}
                <div className="mt-12 flex flex-col items-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-emerald-500 hover:bg-emerald-400 text-[#064e3b] rounded-2xl px-16 py-10 text-2xl font-black transition-all duration-300 hover:scale-105 shadow-[0_20px_40px_-10px_rgba(16,185,129,0.3)]"
                  >
                    <a href="https://hirespark.hiringbazaar.in/hr/login">
                      Start Hiring for Your Role »
                    </a>
                  </Button>
                  <div className="mt-8 flex items-center gap-8 grayscale opacity-50">
                    <span className="text-[10px] font-black text-emerald-100 uppercase tracking-widest">No Credit Card</span>
                    <div className="w-1 h-1 bg-emerald-800 rounded-full" />
                    <span className="text-[10px] font-black text-emerald-100 uppercase tracking-widest">Free Role Posting</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-10 p-12 bg-emerald-900/20 rounded-[3.5rem] border border-emerald-800 border-dashed animate-fade-in w-full text-center">
                <div className="w-24 h-24 rounded-full bg-emerald-900/50 flex items-center justify-center border border-emerald-800">
                  <Play className="w-10 h-10 text-emerald-400 ml-1" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-3">Watch the demo to see HB in action</h4>
                  <p className="text-emerald-100/40 font-medium">Click below to restore the interactive demo</p>
                </div>
                <Button
                  onClick={() => setIsVisible(true)}
                  className="bg-emerald-500 hover:bg-emerald-400 text-emerald-950 rounded-2xl px-12 py-6 text-lg font-black"
                >
                  Reload Demo Video
                </Button>

                <div className="pt-8 w-full flex justify-center border-t border-emerald-800/50">
                  <a href="https://hirespark.hiringbazaar.in/hr/login" className="text-emerald-400 font-bold hover:text-emerald-300 flex items-center gap-2">
                    Skip video and start hiring <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>

      <style>{`
        .font-serif {
          font-family: 'Playfair Display', serif;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section >
  );
};

export default HowItWorksSection;