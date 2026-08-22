"use client";

import { motion, useScroll, useSpring, useTransform, type MotionValue } from "framer-motion";

const DOT_COUNT = 14;

export default function ChapterRail() {
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 24, restDelta: 0.001 });
  const activeIndex = useTransform(smooth, (v) => Math.min(DOT_COUNT - 1, Math.floor(v * DOT_COUNT)));

  return (
    <div className="chapterRail" aria-hidden="true">
      {Array.from({ length: DOT_COUNT }, (_, i) => (
        <RailDot key={i} index={i} activeIndex={activeIndex} />
      ))}
    </div>
  );
}

function RailDot({
  index,
  activeIndex,
}: {
  index: number;
  activeIndex: MotionValue<number>;
}) {
  const isNear = useTransform(activeIndex, (v) => Math.abs(v - index) < 0.6);
  const scale = useTransform(isNear, (v) => (v ? 1.6 : 1));
  const opacity = useTransform(isNear, (v) => (v ? 1 : 0.32));

  return <motion.span className="railDot" style={{ scale, opacity }} />;
}
