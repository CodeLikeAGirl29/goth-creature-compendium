// components/GothSparkles.tsx
"use client";

import type { CSSProperties } from "react";

export default function GothSparkles() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-visible"
    >
      {/* Soft aura behind the title */}
      <div className="goth-sparkle-aura" />

      {/* Sparkle dots – tweak positions / durations as you like */}
      <span
        className="goth-sparkle-dot"
        style={{ top: "18%", left: "12%", ["--sparkle-duration" as any]: "2.8s" } as CSSProperties}
      />
      <span
        className="goth-sparkle-dot"
        style={{ top: "35%", left: "55%", ["--sparkle-duration" as any]: "3.4s" } as CSSProperties}
      />
      <span
        className="goth-sparkle-dot"
        style={{ top: "70%", left: "20%", ["--sparkle-duration" as any]: "3s" } as CSSProperties}
      />
      <span
        className="goth-sparkle-dot"
        style={{ top: "65%", left: "78%", ["--sparkle-duration" as any]: "2.2s" } as CSSProperties}
      />
      <span
        className="goth-sparkle-dot"
        style={{ top: "40%", left: "90%", ["--sparkle-duration" as any]: "3.1s" } as CSSProperties}
      />
    </div>
  );
}
