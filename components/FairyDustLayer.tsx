"use client";

import { useEffect, useState } from "react";

type Particle = {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
};

let particleId = 0;

export default function FairyDustLayer() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    function handleMove(e: MouseEvent) {
      const x = e.clientX;
      const y = e.clientY;

      const newParticle: Particle = {
        id: particleId++,
        x,
        y,
        size: 6 + Math.random() * 6,
        duration: 600 + Math.random() * 500,
      };

      setParticles((prev) => [...prev.slice(-18), newParticle]); // cap count
      // auto-remove after duration
      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
      }, newParticle.duration + 50);
    }

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="fairy-dust-layer" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="fairy-dust-particle"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            // @ts-ignore custom CSS var
            "--dust-duration": `${p.duration}ms`,
          }}
        />
      ))}
    </div>
  );
}
