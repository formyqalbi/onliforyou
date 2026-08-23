"use client";

import { useEffect, useRef } from "react";
import { usePageTracker } from "./pageTracker";
import styles from "./Page.module.css";

type Theme = "dark" | "warm" | "dark-to-warm" | "warm-to-dark" | "black";

interface PageProps {
  index: number;
  total: number;
  theme?: Theme;
  children: React.ReactNode;
  className?: string;
  ornament?: boolean;
}

export default function Page({
  index,
  total,
  theme = "dark",
  children,
  className = "",
  ornament = true,
}: PageProps) {
  const ref = useRef<HTMLElement>(null);
  const { setCurrent } = usePageTracker();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // A thin band at viewport-center, rather than an area-ratio threshold,
    // so this works correctly for pages far taller than the viewport too.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setCurrent(index);
      },
      { threshold: 0, rootMargin: "-45% 0px -45% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index, setCurrent]);

  return (
    <section
      ref={ref}
      className={`${styles.page} ${styles[theme]} ${className}`}
      aria-label={`Page ${index} of ${total}`}
    >
      {ornament && (
        <span className={styles.watermark} aria-hidden="true">
          {"❤︎"}
        </span>
      )}
      <div className={styles.pageInner}>{children}</div>
      {ornament && (
        <span className={styles.flourish} aria-hidden="true">
          ❦
        </span>
      )}
    </section>
  );
}
