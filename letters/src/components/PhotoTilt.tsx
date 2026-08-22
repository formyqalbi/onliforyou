"use client";

import { useEffect } from "react";

const MAX_TILT = 9;
const RESET_TRANSFORM = "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)";

export default function PhotoTilt() {
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!mq.matches || reduceMotionQuery.matches) return;

    let current: HTMLElement | null = null;

    const release = (el: HTMLElement) => {
      el.style.transition = "transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)";
      el.style.transform = RESET_TRANSFORM;
    };

    const handleMove = (e: PointerEvent) => {
      const target = (e.target as HTMLElement).closest<HTMLElement>(".photo-tilt");

      if (target !== current) {
        if (current) release(current);
        current = target;
      }

      if (!target) return;

      const rect = target.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      const rotateY = (px - 0.5) * MAX_TILT * 2;
      const rotateX = (0.5 - py) * MAX_TILT * 2;

      target.style.transition = "transform 0.08s linear";
      target.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px) scale(1.02)`;
    };

    const handleLeaveWindow = () => {
      if (current) {
        release(current);
        current = null;
      }
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    window.addEventListener("pointerleave", handleLeaveWindow);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerleave", handleLeaveWindow);
      if (current) release(current);
    };
  }, []);

  return null;
}
