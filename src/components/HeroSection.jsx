import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Pause, Volume, VolumeX, Star, Users } from "lucide-react";

const HeroSection = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const [isMuted, setIsMuted] = useState(true);
  const [isInView, setIsInView] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true); // Changed to true for autoplay

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

  // Autoplay video on mount and sync play/pause state
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // Event listeners to sync state with actual video playback
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    v.addEventListener('play', handlePlay);
    v.addEventListener('pause', handlePause);

    // Autoplay
    v.play().catch(() => {
      // If autoplay fails, set isPlaying to false
      setIsPlaying(false);
    });

    return () => {
      v.removeEventListener('play', handlePlay);
      v.removeEventListener('pause', handlePause);
    };
  }, []);

  return (
    <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-b from-[#f5f3ed] to-white">
      {/* Decorative curved line - inspired by FoodHub */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
        <svg viewBox="0 0 1200 200" className="w-full h-32 md:h-48" preserveAspectRatio="none">
          <path
            d="M0,100 Q300,20 600,100 T1200,100 L1200,200 L0,200 Z"
            fill="#d4f14e"
            opacity="0.15"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Main Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center text-gray-900 leading-tight">
          Turn hiring chaos <br />
          <span className="relative inline-block">
            <span className="relative z-10">into a steady pipeline</span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-[#d4f14e] -z-0" />
          </span>
          {" "}of <br className="md:hidden" />
          <span className="relative inline-block">
            <span className="relative z-10">desired candidates</span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-[#d4f14e] -z-0" />
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-10 text-center leading-relaxed">
          HB connects your company with pre-vetted recruiters and job seekers to
          fill roles faster with lower cost per hire.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <Button
            size="lg"
            className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-8 py-6 text-base font-medium shadow-lg hover:shadow-xl transition-all"
          >
            Explore Opportunities <ArrowRight className="ml-2 w-5 h-5" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={togglePlay}
            className="border-2 border-gray-900 text-gray-900 hover:bg-gray-50 rounded-full px-8 py-6 text-base font-medium transition-all"
          >
            {isPlaying ? (
              <>
                <Pause className="mr-2 w-5 h-5" />
                Pause Video
              </>
            ) : (
              <>
                <Play className="mr-2 w-5 h-5" />
                Watch Introduction
              </>
            )}
          </Button>
        </div>

        {/* YC Badge */}
        <p className="text-sm text-gray-500 text-center font-medium">
          YC-backed startup trusted by early-stage & scaling teams
        </p>

        {/* Video Section - Always Visible */}
        <div className="mt-16 max-w-5xl mx-auto relative">
          <div
            ref={containerRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative rounded-3xl overflow-hidden shadow-2xl bg-white border-4 border-white"
          >
            <video
              ref={videoRef}
              src="/videos/videoplayback.mp4"
              className="w-full h-[300px] md:h-[500px] lg:h-[600px] object-cover"
              loop
              autoPlay
              muted={isMuted}
              playsInline
            />

            {/* Mute Toggle Button */}
            <button
              onClick={toggleMute}
              className="absolute bottom-6 right-6 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg border border-gray-200 transition-all"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5 text-gray-700" />
              ) : (
                <Volume className="w-5 h-5 text-gray-700" />
              )}
            </button>

            {/* Video Info Overlay Card - inspired by FoodHub's recipe card */}
            <div className="absolute bottom-6 left-6 bg-white rounded-2xl p-4 shadow-lg max-w-xs">
              <p className="text-xs text-gray-500 mb-1 font-medium">Featured</p>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                How HB Transforms Hiring
              </h3>
              <p className="text-sm text-gray-600">
                See how companies reduce time-to-hire by 60%
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;