"use client";

import { useMotionValue, motion, useMotionTemplate } from "motion/react";
import { useEffect, useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

export const CardSpotlight = ({
  children,
  radius = 320,
  className,
  ...props
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const pixelsRef = useRef([]); // pixels live outside React state — no re-renders
  const isHoveredRef = useRef(false); // ref instead of state so RAF closure sees it instantly

  const [hover, setHover] = useState(false);

  const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
    const rect = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - rect.left);
    mouseY.set(clientY - rect.top);
  };

  const mask = useMotionTemplate`
    radial-gradient(${radius}px circle at ${mouseX}px ${mouseY}px, white, transparent 75%)
  `;

  // ── Draw loop — only runs while hovered ──────────────────────────────────
  const draw = useCallback(() => {
    if (!isHoveredRef.current) return; // stop loop when mouse leaves

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    pixelsRef.current.forEach((p) => {
      p.alpha += (Math.random() - 0.5) * 0.1;
      p.alpha = Math.max(0.2, Math.min(1, p.alpha));
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x, p.y, 2, 2);
    });

    animationRef.current = requestAnimationFrame(draw);
  }, []);

  // ── Setup: pixels + resize only, no draw loop yet ────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const colors = ["#10b981", "#059669", "#34d399", "#6b7280", "#9ca3af"];

    const generatePixels = () => {
      pixelsRef.current = [];
      for (let x = 0; x < canvas.width; x += 4) {
        for (let y = 0; y < canvas.height; y += 4) {
          if (Math.random() > 0.65) {
            pixelsRef.current.push({
              x,
              y,
              color: colors[Math.floor(Math.random() * colors.length)],
              alpha: Math.random(),
            });
          }
        }
      }
    };

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      generatePixels(); // regenerate on resize
    };

    resize();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  // ── Hover handlers — start/stop the RAF loop ─────────────────────────────
  const handleMouseEnter = () => {
    isHoveredRef.current = true;
    setHover(true);
    // Kick off the loop only if it's not already running
    cancelAnimationFrame(animationRef.current);
    animationRef.current = requestAnimationFrame(draw);
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;
    setHover(false);
    // Loop will self-terminate on next frame via the guard at top of draw()
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group relative p-8 rounded-[2.5rem] border border-emerald-900 bg-emerald-950 overflow-hidden",
        className,
      )}
      {...props}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          WebkitMaskImage: mask,
          maskImage: mask,
        }}
      >
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      </motion.div>

      <div className="relative z-10">{children}</div>
    </div>
  );
};
