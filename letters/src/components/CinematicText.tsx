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

export default function CinematicText({
  children,
  delay = 0,
  duration = 1.5,
  className = "",
  yOffset = 30,
}: CinematicTextProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset, scale: 0.94, filter: "blur(14px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: duration * 1.1, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
