"use client";

import { motion } from "framer-motion";
import React from "react";

interface CinematicTextProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  yOffset?: number;
}

export default function CinematicText({ 
  children, 
  delay = 0, 
  duration = 1.5,
  className = "",
  yOffset = 30
}: CinematicTextProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
