"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import React from "react";

const COLORS = ["#FF6FA0", "#E8779C", "#F4EBDD", "#FFB6D2"];

type Confetto = {
  id: number;
  angle: number;
  distance: number;
  size: number;
  color: string;
  rotate: number;
  duration: number;
  delay: number;
  shape: "circle" | "rect";
};

function makeConfetti(count: number): Confetto[] {
  return Array.from({ length: count }, (_, id) => {
    const angle = Math.random() * Math.PI * 2;
    return {
      id,
      angle,
      distance: 90 + Math.random() * 160,
      size: 4 + Math.random() * 6,
      color: COLORS[id % COLORS.length],
      rotate: (Math.random() - 0.5) * 540,
      duration: 1.4 + Math.random() * 1,
      delay: Math.random() * 0.25,
      shape: Math.random() > 0.5 ? "circle" : "rect",
    };
  });
}

export default function BirthdayBurst({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px -15% 0px" });
  const reduceMotion = useReducedMotion();
  const [fired, setFired] = useState(false);
  const confetti = useMemo(() => makeConfetti(48), []);

  if (inView && !fired && !reduceMotion) {
    setFired(true);
  }

  return (
    <div ref={ref} style={{ position: "relative" }}>
      {children}
      {fired && (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 0,
            height: 0,
            pointerEvents: "none",
          }}
        >
          {confetti.map((c) => {
            const targetX = Math.cos(c.angle) * c.distance;
            const targetY = Math.sin(c.angle) * c.distance * 0.6 + 60;
            return (
              <motion.span
                key={c.id}
                initial={{ x: 0, y: 0, opacity: 1, rotate: 0, scale: 0.6 }}
                animate={{
                  x: targetX,
                  y: targetY,
                  opacity: 0,
                  rotate: c.rotate,
                  scale: 1,
                }}
                transition={{
                  duration: c.duration,
                  delay: c.delay,
                  ease: [0.16, 0.8, 0.3, 1],
                }}
                style={{
                  position: "absolute",
                  width: c.size,
                  height: c.shape === "circle" ? c.size : c.size * 2.2,
                  borderRadius: c.shape === "circle" ? "50%" : "1px",
                  background: c.color,
                  boxShadow: `0 0 6px ${c.color}66`,
                }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
