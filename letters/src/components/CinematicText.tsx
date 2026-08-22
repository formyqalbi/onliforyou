"use client";

import { motion, useReducedMotion } from "framer-motion";
import React from "react";

interface CinematicTextProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  yOffset?: number;
}

const EASE: [number, number, number, number] = [0.16, 0.9, 0.2, 1];

// Delay props across the letter were authored for a slow continuous scroll
// (values up to 13s). Pages now snap into view as discrete screens, so those
// waits are compressed here (scaled, not capped, to keep each page's
// relative stagger order intact) to feel quick and smooth instead of laggy.
const DELAY_SCALE = 0.3;

export default function CinematicText({
  children,
  delay = 0,
  duration = 0.9,
  className = "",
  yOffset = 18,
}: CinematicTextProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset, scale: 0.97, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay: delay * DELAY_SCALE, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
