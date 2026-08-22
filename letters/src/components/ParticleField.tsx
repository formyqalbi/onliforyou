"use client";

import { useSyncExternalStore } from "react";

type Particle = {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  driftX: number;
  opacity: number;
};

function makeParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, id) => ({
    id,
    left: Math.random() * 100,
    size: 2 + Math.random() * 3,
    duration: 18 + Math.random() * 16,
    delay: -(Math.random() * 30),
    driftX: (Math.random() - 0.5) * 80,
    opacity: 0.25 + Math.random() * 0.35,
  }));
}

// Math.random() would produce different values during SSR vs. the client's
// first render, causing a hydration mismatch on every particle. Generating
// the (stable, one-time) client value through useSyncExternalStore — server
// snapshot empty, client snapshot computed once and cached — sidesteps that
// without an effect-driven setState.
const EMPTY: Particle[] = [];
let cached: Particle[] | null = null;

function subscribe() {
  return () => {};
}

function getSnapshot() {
  if (!cached) cached = makeParticles(22);
  return cached;
}

function getServerSnapshot() {
  return EMPTY;
}

export default function ParticleField() {
  const particles = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <div className="particleField" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="particle"
          style={
            {
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              "--drift-x": `${p.driftX}px`,
              "--particle-opacity": p.opacity,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
