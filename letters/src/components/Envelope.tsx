"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useState } from "react";
import styles from "./Envelope.module.css";

// Animation variants for staggered entrance
const container = {
  hidden: { opacity: 0 },
  visible: (custom = 0) => ({
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: custom },
  }),
};

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay } },
});

export default function Envelope({ onOpen }: { onOpen: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const reduceMotion = useReducedMotion();
  // Random images from each folder
  const raniImages = [
    '/rani/rani-01.jpeg', '/rani/rani-02.jpeg', '/rani/rani-03.jpeg', '/rani/rani-04.jpeg',
    '/rani/rani-kiss-01.jpeg', '/rani/rani-kiss-02.jpeg', '/rani/rani-kiss-03.jpeg',
    '/rani/rani-sleeping-01.jpeg', '/rani/rani-sleeping-02.jpeg', '/rani/rani-smile-01.jpeg',
    '/rani/rani-smile-02.jpeg', '/rani/rani-smile-03.jpeg'
  ];
  const meImages = [
    '/me/me-kiss-01.jpeg', '/me/me-kiss-02.jpeg', '/me/me-smile-01.jpeg', '/me/me-smile-02.jpeg'
  ];
  const videoCallImages = [
    '/video-calls/best-video-call.jpeg', '/video-calls/call-01.jpeg', '/video-calls/call-random-01.jpeg',
    '/video-calls/call-random-02.jpeg', '/video-calls/call-random-03.jpeg', '/video-calls/call-random-04.jpeg',
    '/video-calls/call-sleeping-01.jpeg', '/video-calls/call-sleeping-02.jpeg',
    '/video-calls/call-smile-01.jpeg', '/video-calls/call-smile-02.jpeg', '/video-calls/call-smile-03.jpeg'
  ];
  // Selected high‑quality photos from each folder (10 total)
  const selectedImages = [
    // Rani – best portrait
    { src: '/rani/best-01 (1).jpeg', top: '5%',  left: '5%',  rotate: '-5deg' },
    // Rani – kiss
    { src: '/rani/rani-kiss-01.jpeg', top: '10%', left: '70%', rotate: '8deg' },
    // Rani – smile
    { src: '/rani/rani-smile-01.jpeg', top: '60%', left: '10%', rotate: '-10deg' },
    // Me – kiss
    { src: '/me/me-kiss-01.jpeg', top: '30%', left: '30%', rotate: '3deg' },
    // Me – smile
    { src: '/me/me-smile-01.jpeg', top: '70%', left: '40%', rotate: '-7deg' },
    // Video call – best shot
    { src: '/video-calls/best-video-call.jpeg', top: '15%', left: '45%', rotate: '0deg' },
    // Video call – smile
    { src: '/video-calls/call-smile-01.jpeg', top: '55%', left: '75%', rotate: '6deg' },
    // Video call – sleeping
    { src: '/video-calls/call-sleeping-01.jpeg', top: '80%', left: '20%', rotate: '-12deg' },
    // Us – couple photo 1
    { src: '/us/us-01.jpeg', top: '35%', left: '55%', rotate: '4deg' },
    // Us – couple photo 2
    { src: '/us/us-02.jpeg', top: '45%', left: '15%', rotate: '-6deg' },
  ];


  const handleOpen = () => {
    setIsAnimating(true);
    // Start envelope opening animation then call onOpen
    setTimeout(() => {
      setIsOpen(true);
      setTimeout(() => {
        onOpen();
      }, 1500); // wait for animation to finish
    }, 500); // button fade out delay
  };

  // If user prefers reduced motion, skip staggered entrance
  const motionProps = reduceMotion
    ? { initial: "visible", animate: "visible", variants: {} }
    : {
        initial: "hidden",
        animate: "visible",
        variants: container,
      };

  return (
    <motion.div
      className={styles.container}
      {...motionProps}
    >
      {/* Background already set in globals.css */}

      <div className={styles.hero}>
        {/* Left Text Section */}
        <motion.div className={styles.textSection} variants={fadeIn(0.6)}>
          
          <h2 className={styles.headline}>Tears in my eyes...</h2>
          <p className={styles.body}>
            dont know how to express in words,<br />
            everything you gonna read is very little that I feel about you...
          </p>
          <p className={styles.body}>
            I request you to please open it<br />
            and let me tell you how much you are to me.
          </p>
          <button
            className={styles.openBtn}
            onClick={handleOpen}
            aria-label="Open the love letter"
            disabled={isAnimating}
          >
            OPEN MY HEART ♡
          </button>
        </motion.div>

        {/* Right Photo Section */}
        <motion.div className={styles.photoSection} variants={fadeIn(0.8)}>
          <div className={styles.photoWrapper}>
            <div className={styles.photoCard}>
              <img
                src="/rani/best-01%20(1).jpeg"
                alt="Rani – the love of my life (hero photo)"
                onError={(e) => {
                  // fallback to a placeholder with label
                  e.currentTarget.src = "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(`
                    <svg width='400' height='600' xmlns='http://www.w3.org/2000/svg'>
                      <rect width='100%' height='100%' fill='%23f5e6d3'/>
                      <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%23666' font-family='sans-serif' font-size='24'>Rani's photo</text>
                    </svg>`);
                }}
                className={styles.heroPhoto}
              />
            </div>
            {/* Remove parchment overlay */}
          </div>
            {/* New gallery of selected images */}
            <div className={styles.usGallery}>
              {selectedImages.map((img, idx) => (
                <img
                  key={idx}
                  src={img.src}
                  alt="Gallery"
                  className={styles.usImage}
                  style={{ top: img.top, left: img.left, transform: `rotate(${img.rotate})` }}
                />
              ))}
            </div>
        </motion.div>
      </div>

      {/* Envelope opening overlay */}
      <AnimatePresence>
        {isAnimating && !isOpen && (
          <motion.div
            className={styles.envelopeOverlay}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0, transition: { duration: 0.5 } }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
