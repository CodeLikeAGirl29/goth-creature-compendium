"use client";

import { useEffect, useState, useRef } from "react";

type Particle = {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
};

export default function FairyDustLayer() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const particleIdRef = useRef(0); // Use a Ref for IDs to avoid collision

  useEffect(() => {
    function handleMove(e: MouseEvent) {
      const x = e.clientX;
      const y = e.clientY;

      const id = particleIdRef.current++;
      const duration = 600 + Math.random() * 500;

      const newParticle: Particle = {
        id,
        x,
        y,
        size: 6 + Math.random() * 6,
        duration,
      };

      // 1. Add the new particle, keeping only the last 20 to prevent lag
      setParticles((prev) => {
        // Ensure prev is always an array before filtering
        const safePrev = Array.isArray(prev) ? prev : [];
        return [...safePrev.slice(-20), newParticle];
      });

      // 2. Remove this specific particle after its duration
      setTimeout(() => {
        setParticles((currentParticles) => {
          // Double check currentParticles is an array
          if (!Array.isArray(currentParticles)) return [];
          return currentParticles.filter((p) => p.id !== id);
        });
      }, duration);
    }

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  // Safety check: if particles is somehow not an array, don't render
  if (!Array.isArray(particles)) return null;

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
            // @ts-ignore
            "--dust-duration": `${p.duration}ms`,
          }}
        />
      ))}
    </div>
  );
}