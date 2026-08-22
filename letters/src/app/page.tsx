"use client";

import { useState } from "react";
import Envelope from "@/components/Envelope";
import CinematicText from "@/components/CinematicText";
import VideoCallMemory from "@/components/VideoCallMemory";
import ScrollProgress from "@/components/ScrollProgress";
import ChapterRail from "@/components/ChapterRail";
import BirthdayBurst from "@/components/BirthdayBurst";
import styles from "./page.module.css";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [opened, setOpened] = useState(false);

  if (!opened) {
    return <Envelope onOpen={() => setOpened(true)} />;
  }

  return (
    <main className={styles.main}>
      <ScrollProgress />
      <ChapterRail />
      <AnimatePresence>
        {opened && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className={styles.storyContent}
          >
            {/* 5. WHY I MADE THIS */}
            <section className={`${styles.section} ${styles.darkSection}`}>
              <CinematicText delay={0.5}>
                <p className={styles.textBlock}>
                  I dont know what I am going to write,<br />
                  but there is something I made for you by my heart only.
                </p>
              </CinematicText>

              <CinematicText delay={2}>
                <p className={styles.textBlock}>
                  I kept my brain aside.
                </p>
              </CinematicText>

              <CinematicText delay={4}>
                <h2 className={`${styles.textLarge} font-serif text-gold`} style={{ marginTop: '2rem' }}>
                  Just my love.
                </h2>
              </CinematicText>
            </section>

            {/* 6. RANI — THE WOMAN I LOVE */}
            <section className={`${styles.section} ${styles.warmSection}`}>
              <CinematicText>
                <div className={`${styles.photoFull} photo-tilt`}>
                  <img src="/rani/rani-01.jpeg" alt="Rani" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800'; }} />
                </div>
              </CinematicText>

              <CinematicText delay={0.5}>
                <p className={styles.textBlock}>
                  Rani, you will never know since when I love you.
                </p>
              </CinematicText>

              <CinematicText delay={1}>
                <p className={styles.textBlock}>
                  You are the best part of my life and I want it to be the last best part of my life.
                </p>
              </CinematicText>

              <CinematicText delay={1.5}>
                <p className={styles.textBlock}>
                  I dreamt a lot of things for <span className="text-gold font-serif" style={{ fontSize: '1.4rem' }}>my wife</span> and I want it to be you only.
                </p>
              </CinematicText>

              <CinematicText delay={2}>
                <p className={styles.textBlock}>
                  I have been living every moment for my wife,<br />
                  I keep thinking about wife <span className="font-serif text-gold" style={{ fontSize: '1.4rem' }}>and I want ki wo aap ho.</span>
                </p>
              </CinematicText>

              <CinematicText delay={2.5}>
                <p className={styles.textBlock}>
                  My imagination ends when it comes to imagine you are not there with me.
                </p>
              </CinematicText>
            </section>

            {/* 7. OUR LOVE THROUGH A SCREEN */}
            <section className={`${styles.section} ${styles.darkSection}`}>
              <CinematicText>
                <h2 className={`${styles.textLarge} font-serif text-warm`} style={{ marginBottom: '4rem' }}>
                  So much of us happened through a screen.
                </h2>
              </CinematicText>

              <VideoCallMemory
                src="/video-calls/call-smile-01.jpeg"
                caption="this smile"
                timestamp="21:43"
              />

              <CinematicText>
                <p className={styles.textBlock} style={{ marginTop: '2rem' }}>
                  We spent so much time looking at each other through a screen...
                </p>
              </CinematicText>

              <VideoCallMemory
                src="/video-calls/best-video-call.jpeg"
                caption="my love for you is never ending..."
                delay={0.5}
              />

              <CinematicText delay={0.5}>
                <p className={styles.textBlock} style={{ fontStyle: 'italic', fontSize: '1.4rem', marginTop: '2rem' }}>
                  ...and somehow, even a screen never felt like distance when it was you.
                </p>
              </CinematicText>

              <VideoCallMemory
                src="/video-calls/call-random-01.jpeg"
                caption="this face I kept looking at"
                delay={0.5}
                timestamp="02:15"
              />
            </section>

            {/* 9. THE SLEEPING MOMENTS */}
            <section className={`${styles.section} ${styles.warmSection}`}>
              <CinematicText>
                <h2 className={`${styles.textLarge} font-serif text-gold`} style={{ textAlign: 'center', marginBottom: '3rem' }}>
                  Even your quietest moments became my favorite moments.
                </h2>
              </CinematicText>

              <VideoCallMemory
                src="/video-calls/call-sleeping-02.jpeg"
                timestamp="04:20"
                delay={0.5}
              />

              <CinematicText delay={1}>
                <p className={styles.textBlock} style={{ marginTop: '3rem' }}>
                  sometimes you were sleeping,<br />
                  and I was still there...
                </p>
              </CinematicText>

              <CinematicText delay={2}>
                <p className={styles.textBlock}>
                  just looking at you,<br />
                  feeling lucky that this person is going to be my wife.
                </p>
              </CinematicText>
            </section>

            {/* 10. THE LITTLE THINGS I LOVE ABOUT YOU */}
            <section className={`${styles.section} ${styles.darkSection} ${styles.sectionTall}`}>
              <CinematicText>
                <div className={`${styles.photoFull} photo-tilt`} style={{ position: 'sticky', top: '20vh', opacity: 0.5 }}>
                  <img src="/rani/rani-smile-04.jpeg" alt="Rani smiling" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800'; }} />
                </div>
              </CinematicText>

              <div className={styles.listOverlay} style={{ zIndex: 10, marginTop: '-50vh' }}>
                {[
                  "I love when you smile,",
                  "I love when you look at me,",
                  "I love when you express your love for me,",
                  "I love your eyes,",
                  "I love your nose,",
                  "I love your tooth,",
                  "your lips,",
                  "your hair,",
                  "your hand,",
                  "your eye brow,",
                  "your mouth,",
                  "your ears,",
                  "your chicks,",
                  "your color,",
                  "your smell,",
                  "your khoobsoorti,",
                  "your love for me,",
                  "your decency,",
                  "your modesty,",
                  "aapke haath ka khaana,",
                  "aapke haath se khaaya hua khana,",
                  "aapke haath se diya gya paani,",
                  "aapke haath ki chai,",
                  "aapke haath ki bina cheeni vaali chai,",
                  "aapki cuteness,",
                  "everything about you"
                ].map((item, index) => (
                  <CinematicText key={index} yOffset={20}>
                    <p className={styles.listItem}>{item}</p>
                  </CinematicText>
                ))}
              </div>
            </section>

            {/* 11. THE MOON */}
            <section className={`${styles.section} ${styles.warmSection}`} style={{ minHeight: '80vh' }}>
              <CinematicText>
                <div className={`${styles.photoFull} photo-tilt`} style={{ borderRadius: '50%', width: '300px', height: '300px', margin: '0 auto 3rem auto' }}>
                  <img src="/rani/rani-02.jpeg" alt="Moon" style={{ objectFit: 'cover', height: '100%' }} onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800'; }} />
                </div>
              </CinematicText>

              <CinematicText delay={0.5}>
                <p className={`${styles.textLarge} font-serif`} style={{ textAlign: 'center' }}>
                  zara kabhi meri nazar se khudko dekh bhi
                </p>
                <p className={`${styles.textLarge} font-serif`} style={{ textAlign: 'center' }}>
                  hai chaaand m bhi daaag par na tujhme ek bhi
                </p>

              </CinematicText>

              <CinematicText delay={1.5}>
                <p className="text-gold" style={{ marginTop: '2rem', fontStyle: 'italic', fontSize: '1.2rem' }}>
                  I mean it.
                </p>
              </CinematicText>
            </section>

            {/* 12. MERI SUBHA */}
            <section className={`${styles.section} ${styles.darkSection}`} style={{ transition: 'background-color 3s ease', backgroundImage: 'linear-gradient(to bottom, var(--bg-dark), var(--bg-warm))' }}>
              <CinematicText>
                <p className={styles.textBlock}>
                  Jab duniya m subha hoti h<br />
                  or m utha hu office jaata hu...
                </p>
              </CinematicText>

              <CinematicText delay={1}>
                <p className={styles.textBlock}>
                  I feel I am doing formalities<br />
                  and I am not awake...
                </p>
              </CinematicText>

              <CinematicText delay={2}>
                <div style={{ padding: '15px 25px', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', margin: '3rem 0', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 0 30px rgba(201,162,112,0.1)' }}>
                  <p className="font-serif text-gold" style={{ fontSize: '1.3rem' }}>
                    jab aapka msg aata h<br />
                    uss moment I feel meri subha hui h<br />
                    or energy bdh jaati h.
                  </p>
                </div>
              </CinematicText>

              <CinematicText delay={3}>
                <p className={`${styles.textLarge} font-serif`}>
                  You completes me in every aspect.
                </p>
              </CinematicText>
            </section>

            {/* 13 & 14. I MISS YOU -> HELD YOUR HAND */}
            <section className={`${styles.section} ${styles.warmSection}`}>
              <div className={styles.photoGrid}>
                <CinematicText yOffset={0}>
                  <div className={`${styles.photoFull} photo-tilt`} style={{ margin: 0 }}><img src="/rani/rani-03.jpeg" alt="Rani" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800'; }} /></div>
                </CinematicText>
                <CinematicText delay={0.3} yOffset={0}>
                  <div className={`${styles.photoFull} photo-tilt`} style={{ margin: 0 }}><img src="/me/me-smile-01.jpeg" alt="Me" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800'; }} /></div>
                </CinematicText>
              </div>

              <CinematicText>
                <p className={styles.textBlock} style={{ fontSize: '1.6rem' }}>
                  I miss you...<br />
                  I miss being around you...
                </p>
              </CinematicText>

              <CinematicText delay={1}>
                <p className={styles.textBlock}>
                  Every cell of my body get affected when we dont talk.
                </p>
              </CinematicText>

              <CinematicText delay={2}>
                <div className={`${styles.photoFull} photo-tilt`} style={{ marginTop: '5rem' }}>
                  <img src="/us/us-01.jpeg" alt="Us" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&q=80&w=800'; }} />
                </div>
              </CinematicText>

              <CinematicText delay={2.5}>
                <p className={styles.textBlock}>
                  I remember the day I hold your hand<br />
                  upar vaale room m while watching movie,
                </p>
              </CinematicText>

              <CinematicText delay={3.5}>
                <p className="font-serif text-gold" style={{ fontSize: '1.4rem', margin: '2rem 0' }}>
                  I still feel that...
                </p>
              </CinematicText>

              <CinematicText delay={4.5}>
                <p className={styles.textBlock}>
                  I miss being around you.
                </p>
              </CinematicText>
            </section>

            {/* 15. OUR FEW MOMENTS TOGETHER */}
            <section className={`${styles.section} ${styles.darkSection}`}>
              <CinematicText>
                <h2 className={`${styles.textLarge} font-serif`} style={{ marginBottom: '4rem' }}>
                  The moments I got to have you beside me.
                </h2>
              </CinematicText>

              <div className={styles.photoGrid}>
                <CinematicText yOffset={0}>
                  <div className={`${styles.photoFull} photo-tilt`} style={{ margin: 0 }}>
                    <img src="/us/us-07.jpeg" alt="Us Together" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&q=80&w=800'; }} />
                  </div>
                </CinematicText>
                <CinematicText delay={0.3} yOffset={0}>
                  <div className={`${styles.photoFull} photo-tilt`} style={{ margin: 0 }}>
                    <img src="/us/us-08.jpeg" alt="Us Together" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&q=80&w=800'; }} />
                  </div>
                </CinematicText>
                <CinematicText delay={0.6} yOffset={0}>
                  <div className={`${styles.photoFull} photo-tilt`} style={{ margin: 0 }}>
                    <img src="/us/us-09.jpeg" alt="Us Together" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&q=80&w=800'; }} />
                  </div>
                </CinematicText>
                <CinematicText delay={0.9} yOffset={0}>
                  <div className={`${styles.photoFull} photo-tilt`} style={{ margin: 0 }}>
                    <img src="/us/us-10.jpeg" alt="Us Together" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&q=80&w=800'; }} />
                  </div>
                </CinematicText>
              </div>

              <CinematicText delay={0.5}>
                <p className="text-warm font-serif" style={{ fontStyle: 'italic', marginTop: '1rem', marginBottom: '3rem' }}>
                  These moments stayed with me.
                </p>
              </CinematicText>
            </section>

            {/* 16. YOU ARE MY UNIVERSE */}
            <section className={`${styles.section} ${styles.warmSection}`}>
              <VideoCallMemory
                src="/video-calls/call-01.jpeg"
                caption="even through a screen..."
              />

              <CinematicText delay={1}>
                <p className={styles.textBlock} style={{ marginTop: '3rem' }}>
                  You are not my world tbh,<br />
                  coz you are my universe,
                </p>
              </CinematicText>

              <CinematicText delay={2}>
                <p className={styles.textBlock}>
                  you are my comfort,<br />
                  you are my flex,
                </p>
              </CinematicText>

              <CinematicText delay={3}>
                <p className={styles.textBlock}>
                  I am blessed Alhamdulillah,<br />
                  I will be greatful forever.
                </p>
              </CinematicText>

              <CinematicText delay={4}>
                <p className="font-serif text-gold" style={{ fontSize: '1.6rem', marginTop: '3rem' }}>
                  I am yours only...<br />
                  completely yours,
                </p>
              </CinematicText>

              <CinematicText delay={5}>
                <p className="font-serif" style={{ fontSize: '1.4rem', marginTop: '2rem' }}>
                  my every breath belongs to you.
                </p>
              </CinematicText>
            </section>

            {/* 17. WHEN WE DON'T TALK & 18. DEAD CELLS */}
            <section className={`${styles.section} ${styles.darkSection}`}>
              <CinematicText>
                <p className={styles.textBlock}>
                  Not my heart,<br />
                  not my brain,<br />
                  not peace<br />
                  but every cell of my body get affected when we dont talk.
                </p>
              </CinematicText>

              <CinematicText delay={1.5}>
                <p className={styles.textBlock}>
                  My survival does not exist without you.
                </p>
              </CinematicText>

              <CinematicText delay={3}>
                <div className={`${styles.photoFull} photo-tilt`} style={{ maxWidth: '400px', opacity: 0.6 }}>
                  <img src="/us/us-11.jpeg" alt="Quiet moment" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800'; }} />
                </div>
              </CinematicText>

              <CinematicText delay={4}>
                <p className={styles.textBlock}>
                  I sometimes feel unlucky jab mere paas words nhi hote<br />
                  to express my love for you<br />
                  and my tears come out.
                </p>
              </CinematicText>

              <CinematicText delay={6}>
                <motion.p
                  className="font-serif text-warm"
                  style={{ fontSize: '1.4rem', marginTop: '5rem', fontStyle: 'italic' }}
                  animate={{ y: [0, -10, 0], opacity: [0.8, 1, 0.8] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                >
                  When I talk to you<br />
                  even my dead cells become alive and start dancing.....
                </motion.p>
              </CinematicText>
            </section>

            {/* 19. FLOWERS & 20. HOME */}
            <section className={`${styles.section} ${styles.warmSection}`} style={{ backgroundImage: 'linear-gradient(to bottom, var(--bg-dark), var(--bg-warm))' }}>
              <CinematicText>
                <p className={styles.textBlock}>
                  Jab bhi m kisi flowers ki shop ko dekhta hu<br />
                  I smile and think you<br />
                  <span className="text-gold">(those flowers)</span> are nothing in front of my Rani !!!
                </p>
              </CinematicText>

              <CinematicText delay={1}>
                <div className={`${styles.photoFull} photo-tilt`} style={{ borderRadius: '50px 50px 8px 8px' }}>
                  <img src="/rani/rani-smile-07.jpeg" alt="Beautiful Rani" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800'; }} />
                </div>
              </CinematicText>

              <CinematicText delay={2}>
                <h2 className={`${styles.textLarge} font-serif`} style={{ marginTop: '5rem', marginBottom: '3rem' }}>
                  The home I dream of.
                </h2>
              </CinematicText>

              <CinematicText delay={3}>
                <p className={styles.textBlock}>
                  I dream of home<br />
                  jise aap apni ronak se khoobsoorat bnaa denge,<br />
                  apni mohabbat se usme sukoon le aayenge,
                </p>
              </CinematicText>

              <CinematicText delay={4}>
                <p className={styles.textBlock}>
                  your presence is enough to make a dead place into a home
                </p>
              </CinematicText>

              <CinematicText delay={5}>
                <p className={styles.textBlock} style={{ marginTop: '2rem' }}>
                  Our kids will be so grateful and proud of me<br />
                  that you are their mother,
                </p>
              </CinematicText>

              <CinematicText delay={6}>
                <p className={styles.textBlock}>
                  I feel lil jealous<br />
                  that they will love you more.
                </p>
              </CinematicText>

              <CinematicText delay={7}>
                <p className="font-serif text-gold" style={{ fontSize: '1.8rem', marginTop: '3rem', fontStyle: 'italic' }}>
                  Our kids will call you<br />
                  babbyyy mmy.
                </p>
              </CinematicText>
            </section>

            {/* 21 & 22. DUA FOR OUR FUTURE & AKHIRAT */}
            <section className={`${styles.section} ${styles.darkSection}`} style={{ position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at center, rgba(201,162,112,0.05) 0%, transparent 70%)', pointerEvents: 'none' }}></div>

              <CinematicText>
                <p className={styles.textBlock} style={{ lineHeight: 2.2 }}>
                  Allah hm dono ke beeech beintehaan sukooon nawaaze,<br /><br />
                  ek doosre ka sukoon bnaaye,<br /><br />
                  Or bhi bahoooooooot saari mohabbat<br />
                  aapke dil me mere liye<br />
                  and mere dil m aapke liye<br />
                  peda karde.....
                </p>
              </CinematicText>

              <CinematicText delay={1.5}>
                <p className={styles.textBlock} style={{ lineHeight: 2 }}>
                  May Allah grant us with a lot of sukooon,<br />
                  comfort of heart,<br />
                  beintehaan mohabbat,<br />
                  barkat<br />
                  and make it easier to for us to follow the path that leads to Jannat....
                </p>
              </CinematicText>

              <CinematicText delay={3}>
                <p className={styles.textBlock} style={{ marginTop: '4rem' }}>
                  I dont want to live you here in this duniya..<br />
                  but I want to live with you hereafter also...<br />
                  for always...<br />
                  never ending akhirat...
                </p>
              </CinematicText>

              <CinematicText delay={4.5}>
                <h2 className="font-serif text-gold" style={{ fontSize: '2rem', marginTop: '4rem', letterSpacing: '2px' }}>
                  YOU ARE MY DREAM GIRL.
                </h2>
              </CinematicText>
            </section>

            {/* 23 & 24. WORDS RUN OUT & FINAL PROMISE */}
            <section className={`${styles.section} ${styles.warmSection}`}>
              <CinematicText>
                <p className={styles.textBlock}>
                  I am out of words again<br />
                  and tears helping me.
                </p>
              </CinematicText>

              <CinematicText delay={1}>
                <p className={styles.textBlock}>
                  You are the most beautiful girl I have ever imagined....
                </p>
              </CinematicText>

              <CinematicText delay={2}>
                <p className={styles.textBlock}>
                  aapke chehre ki ronak iss tarah meri aankho m iss tarah basi hui h<br />
                  ki I am blind for the world...
                </p>
              </CinematicText>

              <CinematicText delay={3}>
                <p className={styles.textBlock} style={{ filter: 'blur(1px)' }}>
                  everything blurry...<br /><br />
                  cant see anything...
                </p>
              </CinematicText>

              <CinematicText delay={4}>
                <p className="font-serif text-gold" style={{ fontSize: '1.5rem', margin: '2rem 0' }}>
                  dont want to see anything<br />
                  but you !!!
                </p>
              </CinematicText>

              <CinematicText delay={5}>
                <p className={styles.textBlock}>
                  If I keep writing for you..<br />
                  duniyaaa ki saari qalm khatam hojaayengi...
                </p>
              </CinematicText>

              <CinematicText delay={6}>
                <p className={styles.textBlock}>
                  May Allah help me to express my love for you.
                </p>
              </CinematicText>

              <CinematicText delay={7}>
                <div className={`${styles.photoFull} photo-tilt`} style={{ marginTop: '6rem' }}>
                  <img src="/rani/rani-smile-05.jpeg" alt="My Love" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800'; }} />
                </div>
              </CinematicText>

              <CinematicText delay={8}>
                <p className={styles.textBlock} style={{ fontFamily: 'var(--font-serif)' }}>
                  Raani my love..
                </p>
              </CinematicText>

              <CinematicText delay={9}>
                <p className={styles.textBlock}>
                  I will try every possible thing to make you happy,<br />
                  my life is for you.<br /><br />
                  If you happy me happy.
                </p>
              </CinematicText>

              <CinematicText delay={10}>
                <p className={styles.textBlock}>
                  Your pain is my pain<br />
                  and my pain is my pain,<br /><br />
                  your happiness is yours<br />
                  and my happiness is yours onli.
                </p>
              </CinematicText>

              <CinematicText delay={11}>
                <p className={styles.textBlock}>
                  I will die for you,<br />
                  I will live for you,<br />
                  I will do everything for you...
                </p>
              </CinematicText>

              <CinematicText delay={12}>
                <p className="font-serif text-gold" style={{ fontSize: '1.5rem', marginTop: '2rem' }}>
                  you are my heart...<br />
                  my eyes...<br />
                  my soul..<br />
                  breath...<br />
                  everything.
                </p>
              </CinematicText>

              <CinematicText delay={13}>
                <p className="font-serif" style={{ fontSize: '1.3rem', marginTop: '3rem', fontStyle: 'italic' }}>
                  Every cell of my body crave for you onli.
                </p>
              </CinematicText>
            </section>

            {/* 25. FINAL REALIZATION */}
            <section className={`${styles.section} ${styles.darkSection}`}>
              <CinematicText>
                <div className={`${styles.photoFull} photo-tilt`} style={{ opacity: 0.8, filter: 'grayscale(30%)' }}>
                  <img src="/us/us-03.jpeg" alt="Real life" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&q=80&w=800'; }} />
                </div>
              </CinematicText>

              <CinematicText delay={1}>
                <p className={styles.textBlock} style={{ marginTop: '2rem' }}>
                  So much of our story happened through screens.<br /><br />
                  Through calls.<br />
                  Through screenshots.<br />
                  Through smiles on a little screen.<br />
                  Through missing each other.<br />
                  Through waiting for the next call.
                </p>
              </CinematicText>

              <CinematicText delay={3}>
                <p className="font-serif text-warm" style={{ fontSize: '1.5rem', marginTop: '3rem' }}>
                  And still...
                </p>
              </CinematicText>

              <CinematicText delay={4.5}>
                <p className={styles.textBlock} style={{ fontSize: '1.3rem' }}>
                  you became my home before you even became my wife.
                </p>
              </CinematicText>

              <CinematicText delay={6}>
                <p className="font-serif text-gold" style={{ fontSize: '1.8rem', marginTop: '4rem' }}>
                  And now...
                </p>
              </CinematicText>

              <CinematicText delay={7.5}>
                <p className="font-serif" style={{ fontSize: '2rem', marginTop: '1rem' }}>
                  I get to call you my wife.
                </p>
              </CinematicText>
            </section>

            {/* 26. FINAL LINE */}
            <section className={styles.finalScreen}>
              <CinematicText delay={1} duration={2}>
                <p style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'rgba(255,255,255,0.5)' }}>
                  I loved you.
                </p>
              </CinematicText>

              <CinematicText delay={4} duration={2}>
                <p style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'rgba(255,255,255,0.7)' }}>
                  I do love you.
                </p>
              </CinematicText>

              <CinematicText delay={7} duration={2}>
                <p className="font-serif text-warm" style={{ fontSize: '1.8rem', marginBottom: '4rem' }}>
                  I will love you InshaAllah.
                </p>
              </CinematicText>

              <BirthdayBurst>
                <CinematicText delay={10} duration={3}>
                  <p className={`font-serif text-gold ${styles.birthdayGlow}`} style={{ fontSize: '2.5rem', letterSpacing: '1px' }}>
                    Happy Birthday, meri Rani. ❤️
                  </p>
                </CinematicText>
              </BirthdayBurst>

              <CinematicText delay={13} duration={2}>
                <p style={{ marginTop: '2rem', color: 'rgba(255,255,255,0.5)', fontStyle: 'italic' }}>
                  Your husband-to-be.
                </p>
              </CinematicText>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
