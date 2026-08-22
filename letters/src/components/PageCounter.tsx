"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePageTracker } from "./pageTracker";

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export default function PageCounter({ total }: { total: number }) {
  const { current } = usePageTracker();

  return (
    <div className="pageCounter" aria-hidden="true">
      <AnimatePresence mode="wait">
        <motion.span
          key={current}
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 6 }}
          transition={{ duration: 0.35 }}
        >
          {pad(current)}
        </motion.span>
      </AnimatePresence>
      <span className="pageCounterDivider" />
      <span className="pageCounterTotal">{pad(total)}</span>
    </div>
  );
}
