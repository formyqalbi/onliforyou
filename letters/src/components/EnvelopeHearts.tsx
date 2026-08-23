"use client";

import { useSyncExternalStore } from "react";
import styles from "./Envelope.module.css";

type Heart = {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  driftX: number;
  rotate: number;
  opacity: number;
  glyph: string;
};

function makeHearts(count: number): Heart[] {
  return Array.from({ length: count }, (_, id) => ({
    id,
    left: Math.random() * 100,
    size: 16 + Math.random() * 24,
    duration: 10 + Math.random() * 10,
    delay: -(Math.random() * 14),
    driftX: (Math.random() - 0.5) * 60,
    rotate: (Math.random() - 0.5) * 30,
    opacity: 0.3 + Math.random() * 0.35,
    glyph: "♥",
  }));
}

// Same SSR/hydration-safe pattern as ParticleField: server snapshot is
// empty, client snapshot is computed once and cached.
const EMPTY: Heart[] = [];
let cached: Heart[] | null = null;

function subscribe() {
  return () => {};
}

function getSnapshot() {
  if (!cached) cached = makeHearts(14);
  return cached;
}

function getServerSnapshot() {
  return EMPTY;
}

export default function EnvelopeHearts() {
  const hearts = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <div className={styles.floatingHearts} aria-hidden="true">
      {hearts.map((h) => (
        <span
          key={h.id}
          className={styles.floatHeart}
          style={
            {
              left: `${h.left}%`,
              fontSize: `${h.size}px`,
              color: h.id % 2 === 0 ? "var(--accent-rose)" : "var(--accent-gold)",
              animationDuration: `${h.duration}s`,
              animationDelay: `${h.delay}s`,
              "--drift-x": `${h.driftX}px`,
              "--heart-rotate": `${h.rotate}deg`,
              "--heart-opacity": h.opacity,
            } as React.CSSProperties
          }
        >
          {h.glyph}
        </span>
      ))}
    </div>
  );
}
