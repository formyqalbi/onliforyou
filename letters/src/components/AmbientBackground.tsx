"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function AmbientBackground() {
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 40, damping: 20, restDelta: 0.001 });
  const rotate = useTransform(smooth, [0, 1], [0, 220]);
  const drift = useTransform(smooth, [0, 1], ["-8%", "8%"]);

  return (
    <motion.div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: "-30%",
        zIndex: 1,
        pointerEvents: "none",
        mixBlendMode: "soft-light",
        opacity: 0.9,
        rotate,
        x: drift,
        background:
          "conic-gradient(from 0deg at 50% 32%, #e8779c 0deg, #ff6fa0 70deg, transparent 140deg, transparent 220deg, #7A2A50 280deg, #e8779c 360deg)",
      }}
    />
  );
}
