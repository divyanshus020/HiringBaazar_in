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
    <section className="relative min-h-screen pt-44 md:pt-56 pb-24 overflow-hidden">
      {/* Dynamic Gradient Mesh Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl animate-float" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '4s' }} />
        </div>
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(152, 45%, 42%) 1px, transparent 1px), linear-gradient(90deg, hsl(152, 45%, 42%) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border-4 border-emerald-300/30 rounded-full animate-float" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-lg rotate-12 animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-1/4 w-12 h-12 border-4 border-teal-300/30 rounded-lg rotate-45 animate-float" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/3 right-10 w-8 h-8 bg-emerald-400/30 rounded-full animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Trust Badge */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm border border-emerald-200/50 rounded-full shadow-lg">
            <Award className="w-5 h-5 text-emerald-600" />
            <span className="text-sm font-semibold bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">
              TIDES IIT Roorkee Backed Startup Trusted By Early-Stage & Scaling Teams
            </span>
            <Sparkles className="w-4 h-4 text-amber-500" />
          </div>
        </div>

        {/* Main Headline with Enhanced Typography */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-center text-gray-900 leading-[1.1] tracking-tight">
          Transform Hiring Chaos
          <br />
          <span className="relative inline-block mt-2">
            <span className="relative z-10 bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 bg-clip-text text-transparent animate-gradient">
              Into a Steady Pipeline
            </span>
            <svg className="absolute -bottom-2 left-0 w-full h-4" viewBox="0 0 400 12" preserveAspectRatio="none">
              <path
                d="M0,7 Q100,3 200,7 T400,7"
                stroke="url(#gradient)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(152, 45%, 42%)" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="hsl(152, 45%, 42%)" stopOpacity="0.3" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <br />
          <span className="relative inline-block mt-2">
            <span className="relative z-10 bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 bg-clip-text text-transparent">
              Of Desired Candidates
            </span>
          </span>
        </h1>

        {/* Enhanced Subheadline */}
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12 text-center leading-relaxed font-medium">
          HB connects your company with pre-vetted recruiters and job seekers to fill roles faster with lower cost per hire.
        </p>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="flex items-center gap-2 text-gray-700">
            <div className="flex items-center bg-emerald-100 rounded-full px-3 py-1">
              <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
              <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
              <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
              <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
              <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
            </div>
            <span className="font-semibold">5.0 Rating</span>
          </div>

          <div className="flex items-center gap-2 text-gray-700">
            <TrendingUp className="w-5 h-5 text-emerald-600" />
            <span className="font-semibold">90% Faster Hiring</span>
          </div>
        </div>

        {/* CTA Buttons with Enhanced Styling */}
        <div className="flex flex-col sm:flex-row justify-center gap-5 mb-16">
          <Button
            asChild
            size="lg"
            className="group relative bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 hover:from-emerald-700 hover:via-teal-700 hover:to-emerald-700 text-white rounded-2xl px-10 py-7 text-lg font-semibold shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            <a href="https://hirespark.hiringbazaar.in/hr/login">
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <span className="flex items-center relative z-10">
                Start Hiring Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={togglePlay}
            className="group border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 rounded-2xl px-10 py-7 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            {isPlaying ? (
              <>
                <Pause className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Pause Video
              </>
            ) : (
              <>
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </>
            )}
          </Button>
        </div>

        {/* Video Section with Glassmorphic Design */}
        <div id="demo-video" className="mt-20 max-w-4xl mx-auto relative scroll-mt-32">
          {/* Glow Effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />

          <div
            ref={containerRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-white/50 backdrop-blur-sm border border-white/60 transition-all duration-500 hover:shadow-emerald-500/30"
          >
            {/* Video Container */}
            <div className="relative">
              <video
                ref={videoRef}
                src={heroVideo}
                className="w-full h-[280px] md:h-[400px] lg:h-[480px] object-cover"
                loop
                autoPlay
                muted={isMuted}
                playsInline
              />

              {/* Gradient Overlay on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
            </div>

            {/* Enhanced Controls */}
            <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 flex gap-3">
              <button
                onClick={toggleMute}
                className="group bg-white/90 hover:bg-white backdrop-blur-md rounded-xl md:rounded-2xl p-3 md:p-4 shadow-xl border border-white/60 transition-all duration-300 hover:scale-110"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5 md:w-6 md:h-6 text-emerald-700 group-hover:scale-110 transition-transform" />
                ) : (
                  <Volume2 className="w-5 h-5 md:w-6 md:h-6 text-emerald-700 group-hover:scale-110 transition-transform" />
                )}
              </button>
            </div>

            {/* Enhanced Video Info Card */}
            <div className="hidden md:block absolute bottom-6 left-6 bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-2xl max-w-sm border border-white/60 transform transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <p className="text-xs text-emerald-700 font-bold uppercase tracking-wider">Live Demo</p>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                How HB Transforms Hiring
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                See how companies reduce time-to-hire by 60% and save thousands in recruitment costs
              </p>
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Pre-vetted talent</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>AI-powered matching</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
        <svg viewBox="0 0 1200 120" className="w-full h-24" preserveAspectRatio="none">
          <path
            d="M0,60 C300,100 500,20 800,60 L800,120 L0,120 Z"
            fill="white"
            opacity="0.8"
          />
          <path
            d="M0,80 C400,40 600,100 1200,60 L1200,120 L0,120 Z"
            fill="white"
          />
        </svg>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;