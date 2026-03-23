import { useEffect, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";

// Colour constants — no object allocation inside the loop
const EM_R = 16,
  EM_G = 185,
  EM_B = 129; // emerald-500
const TL_R = 5,
  TL_G = 150,
  TL_B = 105; // emerald-600

// Max distance for drawing an edge (CSS px — scaled by dpr inside)
const CONN_DIST_PX = 160;

function buildNodes(W, H, dpr) {
  const area = (W / dpr) * (H / dpr);
  const count = Math.max(28, Math.min(Math.floor(area / 9000), 55));
  return Array.from({ length: count }, () => ({
    x: Math.random() * W,
    y: Math.random() * H,
    vx: (Math.random() - 0.5) * 0.25 * dpr,
    vy: (Math.random() - 0.5) * 0.25 * dpr,
    r: (2 + Math.random() * 3) * dpr,
    pulse: Math.random() * Math.PI * 2,
    pulseSpeed: 0.01 + Math.random() * 0.02,
    active: Math.random() > 0.6, // ~40 % nodes glow brighter
  }));
}

function drawFrame(ctx, W, H, nodes, dpr, ts) {
  ctx.clearRect(0, 0, W, H);

  const CONN = CONN_DIST_PX * dpr;

  // Move nodes
  for (const n of nodes) {
    n.x += n.vx;
    n.y += n.vy;
    n.pulse += n.pulseSpeed;
    if (n.x < 0 || n.x > W) n.vx *= -1;
    if (n.y < 0 || n.y > H) n.vy *= -1;
  }

  // Edges
  for (let i = 0; i < nodes.length; i++) {
    const a = nodes[i];
    for (let j = i + 1; j < nodes.length; j++) {
      const b = nodes[j];
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist > CONN) continue;

      const alpha = (1 - dist / CONN) * 0.35;
      const isActive = a.active || b.active;
      const r = isActive ? EM_R : TL_R;
      const g = isActive ? EM_G : TL_G;
      const bl = isActive ? EM_B : TL_B;

      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.strokeStyle = `rgba(${r},${g},${bl},${isActive ? alpha * 1.8 : alpha})`;
      ctx.lineWidth = isActive ? 1.2 * dpr : 0.6 * dpr;
      ctx.stroke();
    }
  }

  // Nodes
  for (const n of nodes) {
    const glow = (Math.sin(n.pulse) + 1) / 2;
    const baseR = n.r * (1 + glow * 0.4);
    const r = n.active ? EM_R : TL_R;
    const g = n.active ? EM_G : TL_G;
    const bl = n.active ? EM_B : TL_B;
    const alpha = n.active ? 0.9 : 0.45 + glow * 0.25;

    // Soft halo on active nodes
    if (n.active) {
      ctx.beginPath();
      ctx.arc(n.x, n.y, baseR * 2.5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${r},${g},${bl},${0.08 + glow * 0.08})`;
      ctx.fill();
    }

    ctx.beginPath();
    ctx.arc(n.x, n.y, baseR, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${r},${g},${bl},${alpha})`;
    ctx.fill();
  }

  // Travelling signal dots — give the "data flowing through a network" feel
  const t = ts * 0.0004;
  for (let i = 0; i < nodes.length; i += 3) {
    for (let j = i + 2; j < nodes.length; j += 5) {
      const a = nodes[i];
      const b = nodes[j];
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      if (Math.sqrt(dx * dx + dy * dy) > CONN) continue;
      const phase = (t + i * 0.37 + j * 0.19) % 1;
      ctx.beginPath();
      ctx.arc(
        a.x + (b.x - a.x) * phase,
        a.y + (b.y - a.y) * phase,
        2.5 * dpr,
        0,
        Math.PI * 2,
      );
      ctx.fillStyle = "rgba(110,231,183,0.85)";
      ctx.fill();
    }
  }
}

export const NeuralBackgroundCore = ({ className, ...rest }) => {
  const canvasRef = useRef(null);
  const stateRef = useRef({ nodes: [], raf: null, W: 0, H: 0, dpr: 1 });

  const setup = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2); // cap at 2× — no benefit beyond
    const rect = canvas.parentElement.getBoundingClientRect();
    const W = rect.width * dpr;
    const H = rect.height * dpr;

    canvas.width = W;
    canvas.height = H;
    canvas.style.width = rect.width + "px";
    canvas.style.height = rect.height + "px";

    stateRef.current.W = W;
    stateRef.current.H = H;
    stateRef.current.dpr = dpr;
    stateRef.current.nodes = buildNodes(W, H, dpr);
  }, []);

  useEffect(() => {
    setup();

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const s = stateRef.current;

    function loop(ts) {
      drawFrame(ctx, s.W, s.H, s.nodes, s.dpr, ts);
      s.raf = requestAnimationFrame(loop);
    }
    s.raf = requestAnimationFrame(loop);

    const ro = new ResizeObserver(() => {
      cancelAnimationFrame(s.raf);
      setup();
      s.raf = requestAnimationFrame((ts) => {
        drawFrame(ctx, s.W, s.H, s.nodes, s.dpr, ts);
        s.raf = requestAnimationFrame(loop);
      });
    });
    ro.observe(canvas.parentElement);

    return () => {
      cancelAnimationFrame(s.raf);
      ro.disconnect();
    };
  }, [setup]);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        // Promote to its own compositing layer — GPU handles the canvas,
        // the rest of the page is unaffected during animation.
        willChange: "transform",
        contain: "strict",
      }}
      className={cn("pointer-events-none z-0 opacity-50", className)}
      {...rest}
    >
      <canvas
        ref={canvasRef}
        style={{ display: "block", width: "100%", height: "100%" }}
      />
    </div>
  );
};

import React from "react";
export const NeuralBackground = React.memo(NeuralBackgroundCore);
