import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Pause, Volume2, VolumeX, Star, Users, TrendingUp, Award, CheckCircle2, Sparkles } from "lucide-react";
import heroVideo from "../assets/hero-video.mp4";

const HeroSection = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const [isMuted, setIsMuted] = useState(true);
  const [isInView, setIsInView] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted(v.muted);
  };

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;

    if (isPlaying) {
      v.pause();
      setIsPlaying(false);
    } else {
      v.play().catch(() => { });
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    v.addEventListener('play', handlePlay);
    v.addEventListener('pause', handlePause);

    v.play().catch(() => {
      setIsPlaying(false);
    });

    return () => {
      v.removeEventListener('play', handlePlay);
      v.removeEventListener('pause', handlePause);
    };
  }, []);

  // Mouse move effect for gradient
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-[90vh] md:min-h-screen pt-32 md:pt-44 pb-20 overflow-hidden bg-[#F7F6F3]">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Content */}
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-[#2D4A3E] leading-[1.1] tracking-tight font-serif">
              Into a Steady Pipeline
              <br />
              Of Desired Candidates
            </h1>

            <p className="text-lg md:text-xl text-[#4A5D54] mb-12 leading-relaxed font-medium">
              HB connects your company with pre-vetted recruiters and job seekers to fill roles faster at lower cost per hire.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-[#2D4A3E] hover:bg-[#233B31] text-white rounded-xl px-8 py-7 text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                <a href="https://hirespark.hiringbazaar.in/hr/login">
                  <span className="flex items-center">
                    Start Hiring Now »
                  </span>
                </a>
              </Button>

              <div className="flex flex-col items-center gap-1 w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  onClick={togglePlay}
                  className="w-full sm:w-auto border-2 border-[#2D4A3E] text-[#2D4A3E] hover:bg-[#2D4A3E]/10 rounded-xl px-8 py-7 text-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  <span className="flex items-center">
                    See <span className="text-[#3E8E62] mx-1">Hiring Flow</span> in Action →
                  </span>
                </Button>
                <span className="text-xs text-[#6B7C75]">3-minute product walkthrough</span>
              </div>
            </div>
          </div>

          {/* Right Column: Video/Image */}
          <div className="relative group">
            {/* Soft Shadow behind the video */}
            <div className="absolute -inset-4 bg-[#2D4A3E]/5 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-70 transition-opacity" />

            <div
              ref={containerRef}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-white transition-all duration-500 hover:shadow-emerald-500/10"
            >
              {/* Video Thumbnail Area */}
              <div className="relative aspect-video bg-gray-200">
                <video
                  ref={videoRef}
                  src={heroVideo}
                  className="w-full h-full object-cover"
                  loop
                  autoPlay
                  muted={isMuted}
                  playsInline
                />

                {/* Overlay Elements from Design */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/5">
                  {/* Top Badge */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full shadow-md text-[10px] font-bold text-gray-500 uppercase tracking-widest border border-gray-100">
                    See How It Works
                  </div>

                  {/* Centered Play Button */}
                  <button
                    onClick={togglePlay}
                    className="w-16 h-16 bg-[#2D4A3E] hover:bg-[#233B31] rounded-full flex items-center justify-center text-white shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 z-20"
                  >
                    {isPlaying ? <Pause className="w-8 h-8 fill-current" /> : <Play className="w-8 h-8 fill-current ml-1" />}
                  </button>

                  {/* Bottom Caption Box */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-xl rounded-xl p-4 shadow-xl border border-white/60 text-center">
                    <p className="text-sm font-bold text-gray-900">
                      How companies hire <span className="text-[#2D4A3E]">30-40</span>
                      <br />
                      candidates/year <span className="font-normal text-gray-500">using HiringBazaar</span>
                    </p>
                  </div>
                </div>

                {/* Mute Control */}
                <button
                  onClick={toggleMute}
                  className="absolute bottom-6 right-6 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full p-2 text-white transition-all z-30"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .font-serif {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;