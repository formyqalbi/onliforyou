"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import styles from "./GalleryGrid.module.css";

export type GalleryPhoto = {
  src: string;
  category: string;
  alt: string;
};

type Category = { category: string; label: string };

const EASE: [number, number, number, number] = [0.16, 0.9, 0.2, 1];

export default function GalleryGrid({
  photos,
  categories,
}: {
  photos: GalleryPhoto[];
  categories: Category[];
}) {
  const [filter, setFilter] = useState<string>("all");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (filter === "all" ? photos : photos.filter((p) => p.category === filter)),
    [photos, filter]
  );

  const close = useCallback(() => setActiveIndex(null), []);
  const next = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i + 1) % filtered.length));
  }, [filtered.length]);
  const prev = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
  }, [filtered.length]);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex, close, next, prev]);

  const active = activeIndex !== null ? filtered[activeIndex] : null;

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/" className={styles.back}>
          ← back to the letter
        </Link>
        <h1 className={styles.title}>Our Memories</h1>
        <p className={styles.count}>{photos.length} photos, every one of them</p>

        <div className={styles.filters}>
          <button
            type="button"
            className={`${styles.filterBtn} ${filter === "all" ? styles.filterActive : ""}`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          {categories.map((c) => (
            <button
              key={c.category}
              type="button"
              className={`${styles.filterBtn} ${filter === c.category ? styles.filterActive : ""}`}
              onClick={() => setFilter(c.category)}
            >
              {c.label}
            </button>
          ))}
        </div>
      </header>

      <div className={styles.masonry}>
        {filtered.map((p, i) => (
          <motion.button
            key={p.src}
            type="button"
            className={`${styles.tile} photo-tilt`}
            onClick={() => setActiveIndex(i)}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: (i % 12) * 0.035, ease: EASE }}
          >
            <img src={p.src} alt={p.alt} loading="lazy" decoding="async" />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={close}
          >
            <button type="button" className={styles.lightboxClose} onClick={close} aria-label="Close">
              ✕
            </button>
            <button
              type="button"
              className={`${styles.lightboxNav} ${styles.navPrev}`}
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous photo"
            >
              ‹
            </button>

            <motion.img
              key={active.src}
              src={active.src}
              alt={active.alt}
              className={styles.lightboxImg}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: EASE }}
              onClick={(e) => e.stopPropagation()}
            />

            <button
              type="button"
              className={`${styles.lightboxNav} ${styles.navNext}`}
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next photo"
            >
              ›
            </button>

            {activeIndex !== null && (
              <span className={styles.lightboxCount}>
                {activeIndex + 1} / {filtered.length}
              </span>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
