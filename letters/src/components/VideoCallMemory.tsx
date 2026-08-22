import styles from "./VideoCallMemory.module.css";
import { motion } from "framer-motion";

interface VideoCallMemoryProps {
  src: string;
  caption?: string;
  timestamp?: string;
  delay?: number;
}

export default function VideoCallMemory({ src, caption, timestamp, delay = 0 }: VideoCallMemoryProps) {
  return (
    <motion.div 
      className={styles.container}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, delay, ease: "easeOut" }}
    >
      <div className={`${styles.screenWrapper} photo-tilt`}>
        <div className={styles.screenContent}>
          <img src={src} alt="Memory" className={styles.image} />
          
          <div className={styles.overlay}>
            <div className={styles.topBar}>
              <div className={styles.dotGroup}>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
              </div>
              {timestamp && <div className={styles.timestamp}>{timestamp}</div>}
            </div>
            
            <div className={styles.bottomControls}>
              <div className={styles.controlIcon}></div>
              <div className={styles.controlIcon}></div>
              <div className={styles.controlIcon + " " + styles.active}></div>
              <div className={styles.controlIcon}></div>
            </div>
          </div>
          
          <div className={styles.glassReflection}></div>
        </div>
      </div>
      
      {caption && (
        <div className={styles.caption}>
          {caption}
        </div>
      )}
    </motion.div>
  );
}
