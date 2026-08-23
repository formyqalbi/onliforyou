"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Envelope from "@/components/Envelope";
import CinematicText from "@/components/CinematicText";
import VideoCallMemory from "@/components/VideoCallMemory";
import ScrollProgress from "@/components/ScrollProgress";
import PageCounter from "@/components/PageCounter";
import { PageTrackerProvider } from "@/components/pageTracker";
import TextPage from "@/components/TextPage";
import PortraitPage from "@/components/PortraitPage";
import CorkboardPage from "@/components/CorkboardPage";
import VideoCallPage from "@/components/VideoCallPage";
import ListPage, { ListRow } from "@/components/ListPage";
import ClimaxPage from "@/components/ClimaxPage";
import BirthdayBurst from "@/components/BirthdayBurst";
import styles from "./page.module.css";
import txt from "@/components/TextPage.module.css";

const TOTAL_PAGES = 18;

const LITTLE_THINGS = [
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
  "everything about you",
];

const imgFallback = (e: React.SyntheticEvent<HTMLImageElement>, url: string) => {
  e.currentTarget.src = url;
};

export default function Home() {
  const [opened, setOpened] = useState(false);

  if (!opened) {
    return <Envelope onOpen={() => setOpened(true)} />;
  }

  return (
    <main className={styles.main}>
      <PageTrackerProvider>
        <ScrollProgress />
        <PageCounter total={TOTAL_PAGES} />
        <AnimatePresence>
          {opened && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className={styles.storyContent}
            >
              {/* PAGE 1 — WHY I MADE THIS */}
              <TextPage index={1} total={TOTAL_PAGES} theme="dark">
                <CinematicText delay={0.5}>
                  <p className={txt.body}>
                    I dont know what I am going to write,<br />
                    but there is something I made for you by my heart only.
                  </p>
                </CinematicText>
                <CinematicText delay={2}>
                  <p className={txt.body}>I kept my brain aside.</p>
                </CinematicText>
                <CinematicText delay={4}>
                  <h2 className="font-script text-gold" style={{ fontSize: '2.6rem', marginTop: '2rem' }}>
                    Just my love.
                  </h2>
                </CinematicText>
              </TextPage>

              {/* PAGE 2 — RANI, THE WOMAN I LOVE */}
              <PortraitPage index={2} total={TOTAL_PAGES} theme="warm" src="/rani/rani-01.jpeg" alt="Rani" imgRotate={-90} imgScale={4 / 3}>
                <CinematicText delay={0.5}>
                  <p className={txt.body}>Rani, My Qalbi...❤️🌙</p>
                </CinematicText>
                <CinematicText delay={1}>
                  <p className={txt.body}>
                    You are the best part of my life and I want it to be the last best part of my life.
                  </p>
                </CinematicText>
                <CinematicText delay={1.5}>
                  <p className={txt.body}>
                    I dreamt a lot of things for <span className="text-gold font-serif" style={{ fontSize: '1.4rem' }}>my wife</span> and I want it to be you only.
                  </p>
                </CinematicText>
                <CinematicText delay={2}>
                  <p className={txt.body}>
                    I have been living every moment for my wife,<br />
                    I keep thinking about wife <span className="font-serif text-gold" style={{ fontSize: '1.4rem' }}>and I want ki wo aap ho.</span>
                  </p>
                </CinematicText>
                <CinematicText delay={2.5}>
                  <p className={txt.body}>My imagination ends when it comes to imagine you are not there with me.</p>
                </CinematicText>
              </PortraitPage>

              {/* PAGE 3 — OUR LOVE THROUGH A SCREEN */}
              <VideoCallPage index={3} total={TOTAL_PAGES} theme="dark">
                <CinematicText>
                  <h2 className={`${txt.lead} font-serif text-warm`} style={{ marginBottom: '2rem' }}>
                    So much of us happened through a screen.
                  </h2>
                </CinematicText>

                <VideoCallMemory src="/video-calls/call-smile-01.jpeg" caption="this smile" timestamp="21:43" />

                <CinematicText>
                  <p className={txt.body} style={{ marginTop: '1rem' }}>
                    We spent so much time looking at each other through a screen...
                  </p>
                </CinematicText>

                <VideoCallMemory src="/video-calls/best-video-call.jpeg" caption="my love for you is never ending..." delay={0.5} />

                <CinematicText delay={0.5}>
                  <p className={txt.body} style={{ fontStyle: 'italic', fontSize: '1.4rem' }}>
                    ...and somehow, even a screen never felt like distance when it was you.
                  </p>
                </CinematicText>

                <VideoCallMemory src="/video-calls/call-random-01.jpeg" caption="this face I kept looking at" delay={0.5} timestamp="02:15" />
              </VideoCallPage>

              {/* PAGE 4 — THE SLEEPING MOMENTS */}
              <VideoCallPage index={4} total={TOTAL_PAGES} theme="warm">
                <CinematicText>
                  <h2 className={`${txt.lead} font-serif text-gold`} style={{ marginBottom: '2rem' }}>
                    Even your quietest moments became my favorite moments.
                  </h2>
                </CinematicText>

                <VideoCallMemory src="/video-calls/call-sleeping-02.jpeg" timestamp="04:20" delay={0.5} />

                <CinematicText delay={1}>
                  <p className={txt.body} style={{ marginTop: '1.5rem' }}>
                    sometimes you were sleeping,<br />
                    and I was still there...
                  </p>
                </CinematicText>
                <CinematicText delay={2}>
                  <p className={txt.body}>
                    just looking at you,<br />
                    feeling lucky that this person is going to be my wife.
                  </p>
                </CinematicText>
              </VideoCallPage>

              {/* PAGE 5 — THE LITTLE THINGS I LOVE ABOUT YOU */}
              <ListPage index={5} total={TOTAL_PAGES}>
                {LITTLE_THINGS.map((item, i) => (
                  <CinematicText key={i} yOffset={14}>
                    <ListRow>{item}</ListRow>
                  </CinematicText>
                ))}
              </ListPage>

              {/* PAGE 6 — THE MOON */}
              <PortraitPage index={6} total={TOTAL_PAGES} theme="warm" variant="circle" src="/rani/rani-02.jpeg" alt="Moon" imgRotate={-90}>
                <CinematicText delay={0.5}>
                  <p className={`${txt.lead} font-serif`} style={{ textAlign: 'center', fontSize: '1.5rem' }}>
                    zara kabhi meri nazar se khudko dekh bhi
                  </p>
                  <p className={`${txt.lead} font-serif`} style={{ textAlign: 'center', fontSize: '1.5rem' }}>
                    hai chaaand m bhi daaag par na tujhme ek bhi
                  </p>
                </CinematicText>
                <CinematicText delay={1.5}>
                  <p className="text-gold" style={{ textAlign: 'center', fontStyle: 'italic', fontSize: '1.2rem' }}>
                    I mean it.
                  </p>
                </CinematicText>
              </PortraitPage>

              {/* PAGE 7 — MERI SUBHA */}
              <TextPage index={7} total={TOTAL_PAGES} theme="dark-to-warm">
                <CinematicText>
                  <p className={txt.body}>
                    Jab duniya m subha hoti h<br />
                    or m uthta hu office jaata hu...
                  </p>
                </CinematicText>
                <CinematicText delay={1}>
                  <p className={txt.body}>
                    I feel I am doing formalities<br />
                    and I am not awake...
                  </p>
                </CinematicText>
                <CinematicText delay={2}>
                  <div className={txt.highlight}>
                    <p className="font-serif text-gold" style={{ fontSize: '1.3rem', margin: 0 }}>
                      jab aapka msg aata h<br />
                      uss moment I feel meri subha hui h<br />
                      or energy bdh jaati h.
                    </p>
                  </div>
                </CinematicText>
                <CinematicText delay={3}>
                  <p className={`${txt.lead} font-serif`}>You completes me in every aspect.</p>
                </CinematicText>
              </TextPage>

              {/* PAGE 8 — I MISS YOU / HELD YOUR HAND */}
              <CorkboardPage
                index={8}
                total={TOTAL_PAGES}
                theme="warm"
                photos={[
                  { src: "/rani/rani-03.jpeg", alt: "Rani", rotate: -4 },
                  { src: "/me/me-smile-01.jpeg", alt: "Me", rotate: 3 },
                  { src: "/us/us-01.jpeg", alt: "Us", rotate: -2 },
                ]}
              >
                <CinematicText>
                  <p className={txt.body} style={{ fontSize: '1.6rem' }}>
                    I miss you...<br />
                    I miss being around you...
                  </p>
                </CinematicText>
                <CinematicText delay={1}>
                  <p className={txt.body}>Every cell of my body get affected when we dont talk.</p>
                </CinematicText>
                <CinematicText delay={2}>
                  <p className={txt.body}>
                    I remember the day I hold your hand<br />
                    upar vaale room m while watching movie,
                  </p>
                </CinematicText>
                <CinematicText delay={3}>
                  <p className="font-serif text-gold" style={{ fontSize: '1.4rem' }}>I still feel that...</p>
                </CinematicText>
                <CinematicText delay={4}>
                  <p className={txt.body}>I miss being around you.</p>
                </CinematicText>
              </CorkboardPage>

              {/* PAGE 9 — OUR FEW MOMENTS TOGETHER */}
              <CorkboardPage
                index={9}
                total={TOTAL_PAGES}
                theme="dark"
                photos={[
                  { src: "/us/us-07.jpeg", alt: "Us together", rotate: -5 },
                  { src: "/us/us-08.jpeg", alt: "Us together", rotate: 3 },
                  { src: "/us/us-09.jpeg", alt: "Us together", rotate: -3 },
                  { src: "/us/us-10.jpeg", alt: "Us together", rotate: 5 },
                ]}
              >
                <CinematicText>
                  <h2 className={`${txt.lead} font-serif`} style={{ marginBottom: '1rem' }}>
                    The moments I got to have you beside me.
                  </h2>
                </CinematicText>
                <CinematicText delay={0.5}>
                  <p className="text-warm font-serif" style={{ fontStyle: 'italic' }}>These moments stayed with me.</p>
                </CinematicText>
              </CorkboardPage>

              {/* PAGE 10 — YOU ARE MY UNIVERSE */}
              <VideoCallPage index={10} total={TOTAL_PAGES} theme="warm">
                <VideoCallMemory src="/video-calls/call-01.jpeg" caption="even through a screen..." />
                <CinematicText delay={1}>
                  <p className={txt.body} style={{ marginTop: '1rem' }}>
                    You are not my world tbh,<br />
                    coz you are my universe,
                  </p>
                </CinematicText>
                <CinematicText delay={2}>
                  <p className={txt.body}>
                    you are my comfort,<br />
                    you are my flex,
                  </p>
                </CinematicText>
                <CinematicText delay={3}>
                  <p className={txt.body}>
                    I am blessed Alhamdulillah,<br />
                    I will be greatful forever.
                  </p>
                </CinematicText>
                <CinematicText delay={4}>
                  <p className="font-serif text-gold" style={{ fontSize: '1.6rem' }}>
                    I am yours onli...<br />
                    completely yours,
                  </p>
                </CinematicText>
                <CinematicText delay={5}>
                  <p className="font-serif" style={{ fontSize: '1.4rem' }}>my every breath belongs to you.</p>
                </CinematicText>
              </VideoCallPage>

              {/* PAGE 11 — WHEN WE DON'T TALK / DEAD CELLS */}
              <TextPage index={11} total={TOTAL_PAGES} theme="dark">
                <CinematicText>
                  <p className={txt.body}>
                    Not my heart,<br />
                    not my brain,<br />
                    not peace<br />
                    but every cell of my body get affected when we dont talk.
                  </p>
                </CinematicText>
                <CinematicText delay={1.5}>
                  <p className={txt.body}>My survival does not exist without you.</p>
                </CinematicText>
                <CinematicText delay={2.5}>
                  <div className={styles.smallPhoto} style={{ maxWidth: '360px', opacity: 0.75 }}>
                    <img
                      src="/us/us-11.jpeg"
                      alt="Quiet moment"
                      onError={(e) => imgFallback(e, 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800')}
                    />
                  </div>
                </CinematicText>
                <CinematicText delay={3.5}>
                  <p className={txt.body}>
                    I sometimes feel unlucky jab mere paas words nhi hote<br />
                    to express my love for you<br />
                    and my tears come out.
                  </p>
                </CinematicText>
                <CinematicText delay={5}>
                  <motion.p
                    className="font-serif text-warm"
                    style={{ fontSize: '1.4rem', marginTop: '2rem', fontStyle: 'italic' }}
                    animate={{ y: [0, -10, 0], opacity: [0.8, 1, 0.8] }}
                    transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                  >
                    When I talk to you<br />
                    even my dead cells become alive and start dancing.....
                  </motion.p>
                </CinematicText>
              </TextPage>

              {/* PAGE 12 — FLOWERS */}
              <TextPage index={12} total={TOTAL_PAGES} theme="warm" align="center">
                <CinematicText>
                  <p className={txt.body}>
                    Jab bhi m kisi flowers ki shop ko dekhta hu<br />
                    I smile and think you<br />
                    <span className="text-gold">(those flowers)</span> are nothing in front of my Rani !!!
                  </p>
                </CinematicText>
              </TextPage>

              {/* PAGE 13 — THE HOME I DREAM OF */}
              <PortraitPage index={13} total={TOTAL_PAGES} theme="warm-to-dark" src="/rani/rani-smile-07.jpeg" alt="Beautiful Rani">
                <CinematicText>
                  <h2 className={`${txt.lead} font-serif`} style={{ marginBottom: '0.5rem' }}>The home I dream of.</h2>
                </CinematicText>
                <CinematicText delay={1}>
                  <p className={txt.body}>
                    I dream of home<br />
                    jise aap apni ronak se khoobsoorat bnaa denge,<br />
                    apni mohabbat se usme sukoon le aayenge,
                  </p>
                </CinematicText>
                <CinematicText delay={2}>
                  <p className={txt.body}>your presence is enough to make a dead place into a home</p>
                </CinematicText>
                <CinematicText delay={3}>
                  <p className={txt.body}>
                    Our kids will be so grateful and proud of me<br />
                    that you are their mother,
                  </p>
                </CinematicText>
                <CinematicText delay={4}>
                  <p className={txt.body}>
                    I feel lil jealous<br />
                    that they will love you more.
                  </p>
                </CinematicText>
                <CinematicText delay={5}>
                  <p className="font-serif text-gold" style={{ fontSize: '1.8rem', fontStyle: 'italic' }}>
                    Our kids will call you<br />
                    babbyyy mmy.
                  </p>
                </CinematicText>
              </PortraitPage>

              {/* PAGE 14 — DUA FOR OUR FUTURE & AKHIRAT */}
              <TextPage index={14} total={TOTAL_PAGES} theme="dark">
                <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, rgba(255,111,160,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
                <CinematicText>
                  <p className={txt.body} style={{ lineHeight: 2.2 }}>
                    Allah hm dono ke beeech beintehaan sukooon nawaaze,<br /><br />
                    ek doosre ka sukoon bnaaye,<br /><br />
                    Or bhi bahoooooooot saari mohabbat<br />
                    aapke dil me mere liye<br />
                    and mere dil m aapke liye<br />
                    peda karde.....
                  </p>
                </CinematicText>
                <CinematicText delay={1.5}>
                  <p className={txt.body} style={{ lineHeight: 2 }}>
                    May Allah grant us with a lot of sukooon,<br />
                    comfort of heart,<br />
                    beintehaan mohabbat,<br />
                    barkat<br />
                    and make it easier to for us to follow the path that leads to Jannat....
                  </p>
                </CinematicText>
                <CinematicText delay={3}>
                  <p className={txt.body}>
                    I dont want to live you here in this duniya..<br />
                    but I want to live with you hereafter also...<br />
                    for always...<br />
                    never ending akhirat...
                  </p>
                </CinematicText>
                <CinematicText delay={4.5}>
                  <h2 className="font-serif text-gold" style={{ fontSize: '2rem', letterSpacing: '2px' }}>
                    YOU ARE MY DREAM GIRL.
                  </h2>
                </CinematicText>
              </TextPage>

              {/* PAGE 15 — WORDS RUN OUT */}
              <TextPage index={15} total={TOTAL_PAGES} theme="warm">
                <CinematicText>
                  <p className={txt.body}>
                    I am out of words again<br />
                    and tears helping me.
                  </p>
                </CinematicText>
                <CinematicText delay={1}>
                  <p className={txt.body}>You are the most beautiful girl I have ever imagined....</p>
                </CinematicText>
                <CinematicText delay={2}>
                  <p className={txt.body}>
                    aapke chehre ki ronak iss tarah meri aankho m iss tarah basi hui h<br />
                    ki I am blind for the world...
                  </p>
                </CinematicText>
                <CinematicText delay={3}>
                  <p className={txt.body} style={{ filter: 'blur(1px)' }}>
                    everything blurry...<br /><br />
                    cant see anything...
                  </p>
                </CinematicText>
                <CinematicText delay={4}>
                  <p className="font-serif text-gold" style={{ fontSize: '1.5rem' }}>
                    dont want to see anything<br />
                    but you !!!
                  </p>
                </CinematicText>
                <CinematicText delay={5}>
                  <p className={txt.body}>
                    If I keep writing for you..<br />
                    duniyaaa ki saari qalm khatam hojaayengi...
                  </p>
                </CinematicText>
                <CinematicText delay={6}>
                  <p className={txt.body}>May Allah help me to express my love for you.</p>
                </CinematicText>
              </TextPage>

              {/* PAGE 16 — FINAL PROMISE */}
              <PortraitPage index={16} total={TOTAL_PAGES} theme="warm" src="/rani/rani-smile-05.jpeg" alt="My love">
                <CinematicText>
                  <p className={txt.body} style={{ fontFamily: 'var(--font-serif)' }}>Raani my love..</p>
                </CinematicText>
                <CinematicText delay={1}>
                  <p className={txt.body}>
                    I will try every possible thing to make you happy,<br />
                    my life is for you.<br /><br />
                    If you happy me happy.
                  </p>
                </CinematicText>
                <CinematicText delay={2}>
                  <p className={txt.body}>
                    Your pain is my pain<br />
                    and my pain is my pain,<br /><br />
                    your happiness is yours<br />
                    and my happiness is yours onli.
                  </p>
                </CinematicText>
                <CinematicText delay={3}>
                  <p className={txt.body}>
                    I will die for you,<br />
                    I will live for you,<br />
                    I will do everything for you...
                  </p>
                </CinematicText>
                <CinematicText delay={4}>
                  <p className="font-serif text-gold" style={{ fontSize: '1.5rem' }}>
                    you are my heart...<br />
                    my eyes...<br />
                    my soul..<br />
                    breath...<br />
                    everything.
                  </p>
                </CinematicText>
                <CinematicText delay={5}>
                  <p className="font-serif" style={{ fontSize: '1.3rem', fontStyle: 'italic' }}>
                    Every cell of my body crave for you onli.
                  </p>
                </CinematicText>
              </PortraitPage>

              {/* PAGE 17 — FINAL REALIZATION */}
              <PortraitPage index={17} total={TOTAL_PAGES} theme="dark" variant="bleed" src="/us/us-03.jpeg" alt="Real life">
                <CinematicText delay={1}>
                  <p className={txt.body}>
                    So much of our story happened through screens.<br /><br />
                    Through calls.<br />
                    Through screenshots.<br />
                    Through smiles on a little screen.<br />
                    Through missing each other.<br />
                    Through waiting for the next call.
                  </p>
                </CinematicText>
                <CinematicText delay={3}>
                  <p className="font-serif text-warm" style={{ fontSize: '1.5rem' }}>And still...</p>
                </CinematicText>
                <CinematicText delay={4.5}>
                  <p className={txt.body} style={{ fontSize: '1.3rem' }}>you became my home before you even became my wife.</p>
                </CinematicText>
                <CinematicText delay={6}>
                  <p className="font-serif text-gold" style={{ fontSize: '1.8rem' }}>And now...</p>
                </CinematicText>
                <CinematicText delay={7.5}>
                  <p className="font-serif" style={{ fontSize: '2rem' }}>I get to call you my wife.</p>
                </CinematicText>
              </PortraitPage>

              {/* PAGE 18 — FINAL LINE */}
              <ClimaxPage index={18} total={TOTAL_PAGES}>
                <CinematicText delay={1} duration={2}>
                  <p style={{ fontSize: '1.5rem', color: 'rgba(255,255,255,0.5)' }}>I loved you.</p>
                </CinematicText>
                <CinematicText delay={4} duration={2}>
                  <p style={{ fontSize: '1.5rem', color: 'rgba(255,255,255,0.7)' }}>I do love you.</p>
                </CinematicText>
                <CinematicText delay={7} duration={2}>
                  <p className="font-serif text-warm" style={{ fontSize: '1.8rem' }}>I will keep loving you InshaAllah.</p>
                </CinematicText>

                <BirthdayBurst>
                  <CinematicText delay={10} duration={3}>
                    <p className="font-serif text-gold birthdayGlow" style={{ fontSize: '2.5rem', letterSpacing: '1px' }}>
                      Happy Birthday, my Love, my Jaan, My queen, My Biwi, My everything, My Raani... ❤️
                    </p>
                  </CinematicText>
                </BirthdayBurst>

                <CinematicText delay={13} duration={2}>
                  <p className="font-script" style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.8rem' }}>Your husband-to-be.</p>
                </CinematicText>

                <CinematicText delay={16} duration={2}>
                  <Link href="/gallery" className={styles.galleryLink}>
                    walk through every photo of us →
                  </Link>
                </CinematicText>
              </ClimaxPage>
            </motion.div>
          )}
        </AnimatePresence>
      </PageTrackerProvider>
    </main>
  );
}
