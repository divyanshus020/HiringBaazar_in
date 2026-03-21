import React from "react";
import { cn } from "@/lib/utils";

// Full original grid size — no visual changes.
// Optimization: replaced motion.div per cell with plain div + CSS custom property hover.
// This removes 9,600 Framer Motion listeners while keeping identical look and behavior.
const ROWS = 120;
const COLS = 80;

const COLORS = [
  "#10b981",
  "#059669",
  "#6ee7b7",
  "#374151",
  "#4b5563",
  "#9ca3af",
];

// Single CSS block injected once — browser handles all hover via style engine, zero JS.
const HOVER_STYLE = `
  .box-cell { transition: background-color 0ms; pointer-events: auto; }
  .box-cell:hover { background-color: var(--hover-color); }
`;

// Pre-assign a stable random color to every cell at module load time (not on render).
// Flat array avoids nested object overhead: index = row * COLS + col.
const CELL_COLORS = Array.from(
  { length: ROWS * COLS },
  () => COLORS[Math.floor(Math.random() * COLORS.length)],
);

export const BoxesCore = ({ className, ...rest }) => {
  return (
    <>
      <style>{HOVER_STYLE}</style>

      <div
        style={{
          transform:
            "translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675)",
          background: "#022c22",
          // layout+style gives reflow isolation without clipping overflow visuals.
          // "strict" (which includes "size") was cutting the grid to the component box.
          // "style" alone avoids selector recalc on hover without disrupting
          // layout geometry — safe for IntersectionObserver + Framer viewport detection.
          // "layout" containment was breaking Framer's element position measurements.
          contain: "style",
        }}
        className={cn(
          // pointer-events-none: boxes are purely decorative, must not intercept
          // scroll/hover events that Framer needs to detect viewport intersection.
          "absolute -top-1/4 left-1/4 z-0 flex h-full w-full -translate-x-1/2 -translate-y-1/2 p-4 opacity-40 pointer-events-none",
          className,
        )}
        {...rest}
      >
        {Array.from({ length: ROWS }, (_, i) => (
          <div
            key={i}
            className="relative h-8 w-16 border-l border-emerald-900/20"
          >
            {Array.from({ length: COLS }, (_, j) => (
              <div
                key={j}
                className="box-cell relative h-8 w-16 border-t border-r border-emerald-600/60 bg-emerald-900/10"
                // CSS custom property drives the :hover color — no JS on hover
                style={{ "--hover-color": CELL_COLORS[i * COLS + j] }}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export const Boxes = React.memo(BoxesCore);
