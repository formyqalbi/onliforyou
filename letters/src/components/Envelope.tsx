"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useState } from "react";
import MagneticButton from "./MagneticButton";
import styles from "./Envelope.module.css";

const SEAL_BURST = Array.from({ length: 14 }, (_, i) => {
  const angle = (i / 14) * Math.PI * 2 + (Math.random() - 0.5) * 0.4;
  return {
    id: i,
    angle,
    distance: 60 + Math.random() * 70,
    size: 10 + Math.random() * 12,
    delay: Math.random() * 0.15,
  };
});

type Stage = "envelope" | "breaking" | "opening" | "invitation";

const fallbackPortrait =
  "data:image/svg+xml;charset=UTF-8," +
  encodeURIComponent(
    `<svg width='500' height='650' xmlns='http://www.w3.org/2000/svg'>
      <rect width='100%' height='100%' fill='#1E0F17'/>
      <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#FF6FA0' font-family='serif' font-size='22'>Rani</text>
    </svg>`
  );

const SCATTERED_PHOTOS = [
  { src: "/rani/rani-kiss-01.jpeg", alt: "", top: "2%", left: "58%", rotate: 7, width: "34%" },
  { src: "/me/me-smile-01.jpeg", alt: "", top: "4%", left: "8%", rotate: -8, width: "30%" },
  { src: "/us/us-06.jpeg", alt: "", top: "60%", left: "2%", rotate: -6, width: "32%" },
  { src: "/video-calls/call-smile-01.jpeg", alt: "", top: "66%", left: "62%", rotate: 9, width: "34%" },
  { src: "/rani/rani-sleeping-01.jpeg", alt: "", top: "34%", left: "78%", rotate: 5, width: "26%" },
];

export default function Envelope({ onOpen }: { onOpen: () => void }) {
  const [stage, setStage] = useState<Stage>("envelope");
  const reduceMotion = useReducedMotion();

  const handleSealClick = () => {
    if (stage !== "envelope") return;

    if (reduceMotion) {
      setStage("invitation");
      return;
    }

    setStage("breaking");
    window.setTimeout(() => setStage("opening"), 550);
    window.setTimeout(() => setStage("invitation"), 1550);
  };

  const envelopeVisible = stage !== "invitation";

  const showBurst = stage === "breaking" || stage === "opening";

  return (
    <div className={styles.container}>
      <div className={styles.ambientGlow} aria-hidden="true" />

      <AnimatePresence mode="wait">
        {envelopeVisible ? (
          <motion.div
            key="envelope-scene"
            className={styles.envelopeScene}
            exit={{ opacity: 0, scale: 0.94, filter: "blur(6px)" }}
            transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <div
              className={`${styles.envelope} ${stage === "breaking" || stage === "opening" ? styles.sealBreaking : ""
                } ${stage === "opening" ? styles.flapOpen : ""}`}
            >
              <div className={styles.envelopeBody}>
                <div className={`${styles.sideFlap} ${styles.sideFlapLeft}`} />
                <div className={`${styles.sideFlap} ${styles.sideFlapRight}`} />
                <div className={styles.letterPeek} />
                <div className={styles.envelopeShading} />
              </div>

              <div className={styles.envelopeFlap} />

              <button
                type="button"
                className={styles.seal}
                onClick={handleSealClick}
                aria-label="Break the seal to open the letter"
                disabled={stage !== "envelope"}
              >
                <span className={`${styles.sealHalf} ${styles.sealLeft}`} />
                <span className={`${styles.sealHalf} ${styles.sealRight}`} />
                <span className={styles.sealHeart}>♥</span>
              </button>

              {stage === "breaking" && <div className={styles.sealFlash} aria-hidden="true" />}

              {showBurst && (
                <div className={styles.sealBurst} aria-hidden="true">
                  {SEAL_BURST.map((h) => (
                    <motion.span
                      key={h.id}
                      className={styles.burstHeart}
                      style={{ fontSize: h.size }}
                      initial={{ x: 0, y: 0, opacity: 1, scale: 0.4 }}
                      animate={{
                        x: Math.cos(h.angle) * h.distance,
                        y: Math.sin(h.angle) * h.distance - 20,
                        opacity: 0,
                        scale: 1,
                      }}
                      transition={{ duration: 0.9, delay: h.delay, ease: [0.16, 0.8, 0.3, 1] }}
                    >
                      ♥
                    </motion.span>
                  ))}
                </div>
              )}
            </div>

            <motion.p
              className={styles.hint}
              initial={{ opacity: 0 }}
              animate={{ opacity: stage === "envelope" ? 1 : 0 }}
              transition={{ duration: 0.6 }}
            >
              tap the heart
            </motion.p>
          </motion.div>
        ) : (
          <motion.div
            key="invitation-scene"
            className={styles.hero}
            initial={{ opacity: 0, scale: 0.97, filter: "blur(6px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <div className={styles.textSection}>
              <motion.h2
                className={styles.headline}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Tears in my eyes...
              </motion.h2>
              <motion.p
                className={styles.body}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                dont know how to express in words,
                <br />
                everything you gonna read is very little that I feel about you...
              </motion.p>
              <motion.p
                className={styles.body}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                I request you to please open it
                <br />
                and let me tell you how much you are to me.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.85 }}
              >
                <MagneticButton
                  className={styles.openBtn}
                  whileHover={{ scale: 1.04, boxShadow: "0 14px 32px rgba(255,111,160,0.4)" }}
                  whileTap={{ scale: 0.97 }}
                  onClick={onOpen}
                >
                  OPEN MY HEART ♡
                </MagneticButton>
              </motion.div>
            </div>

            <motion.div
              className={styles.photoSection}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <div className={styles.photoStack}>
                {SCATTERED_PHOTOS.map((p, i) => (
                  <img
                    key={i}
                    src={p.src}
                    alt={p.alt}
                    aria-hidden="true"
                    className={`${styles.scatteredPhoto} photo-tilt`}
                    style={
                      {
                        top: p.top,
                        left: p.left,
                        width: p.width,
                        "--rotate": `${p.rotate}deg`,
                      } as React.CSSProperties
                    }
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                ))}
                <div className={`${styles.photoCard} photo-tilt`}>
                  <img
                    src="/rani/rani-smile-01.jpeg"
                    alt="Rani"
                    className={styles.heroPhoto}
                    onError={(e) => {
                      e.currentTarget.src = fallbackPortrait;
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
