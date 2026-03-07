import { useEffect, useRef } from "react";
import { createNoise2D } from "simplex-noise";

export const WavyBackground = ({ children, className = "" }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const noise2D = createNoise2D();

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let time = 0;
    const waves = 4;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < waves; i++) {
        ctx.beginPath();

        for (let x = 0; x < width; x++) {
          const y = height / 1.3 + noise2D(x * 0.002, time + i) * 50 + i * 30;

          ctx.lineTo(x, y);
        }

        const gradient = ctx.createLinearGradient(0, 0, width, 0);

        gradient.addColorStop(0, "rgba(16,185,129,0.15)");
        gradient.addColorStop(0.5, "rgba(5,150,105,0.25)");
        gradient.addColorStop(1, "rgba(6,95,70,0.15)");

        ctx.strokeStyle = gradient;

        ctx.lineWidth = 28;
        ctx.lineCap = "round";

        ctx.shadowColor = "rgba(16,185,129,0.3)";
        ctx.shadowBlur = 40;

        ctx.stroke();
      }

      time += 0.0018;
      requestAnimationFrame(draw);
    };

    draw();

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
