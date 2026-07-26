import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState('loading'); // 'loading' | 'transition' | 'done'

  useEffect(() => {
    const duration = 2200; // ms
    const interval = 25;
    const increment = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setStage('transition');
            setTimeout(() => {
              setStage('done');
              setTimeout(() => {
                onComplete?.();
              }, 400);
            }, 700);
          }, 300);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  // Preloader strip images
  const stripImages = Array(6).fill('https://images.ctfassets.net/tuohjudwxvzs/5GORaPm2QqtAJnsuZLFADa/da81b0786f9f1f6550bde9481af8184f/view-chair-with-textured-fur-fabric_4_arsbt5.jpg');

  return (
    <AnimatePresence style={{ pointerEvents: 'none' }}>
      {stage !== 'done' && (
        <>
          {/* Main Loading Screen */}
          {stage === 'loading' && (
            <motion.div
              key="preloader-main"
              initial={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
              style={{
                position: 'fixed',
                inset: 0,
                zIndex: 9999,
                backgroundColor: '#f4f0ea',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '1.6rem',
                  gap: '1.6rem'
                }}
              >
                {/* 6-Strip Image Box matching Studio Lumio */}
                <div
                  style={{
                    position: 'relative',
                    height: 'clamp(200px, 40rem, 400px)',
                    aspectRatio: '0.8337',
                    overflow: 'hidden',
                    display: 'flex'
                  }}
                >
                  {stripImages.map((imgUrl, i) => (
                    <motion.div
                      key={i}
                      style={{
                        position: 'relative',
                        flex: 1,
                        height: '100%',
                        overflow: 'hidden'
                      }}
                    >
                      <motion.img
                        src={imgUrl}
                        alt="Studio Lumio Preloader"
                        initial={{ x: '-101%' }}
                        animate={{ x: '0%' }}
                        transition={{
                          duration: 1.2,
                          delay: i * 0.08,
                          ease: [0.19, 1, 0.22, 1]
                        }}
                        style={{
                          width: '628px',
                          height: '100%',
                          maxWidth: 'none',
                          objectFit: 'cover',
                          marginLeft: `-${i * (100 / 6)}%`
                        }}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Counter & Staggered Letter Text */}
                <div
                  style={{
                    textAlign: 'center',
                    color: '#4d3d30',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <p
                    style={{
                      fontSize: 'clamp(40px, 12vw, 120px)',
                      fontWeight: 400,
                      lineHeight: 1,
                      letterSpacing: '-0.05em',
                      textTransform: 'uppercase'
                    }}
                  >
                    {Math.round(progress)}%
                  </p>

                  <div
                    style={{
                      fontSize: 'clamp(18px, 4vw, 36px)',
                      fontWeight: 400,
                      letterSpacing: '0.5em',
                      textTransform: 'uppercase',
                      display: 'flex',
                      justifyContent: 'center',
                      paddingLeft: '0.5em',
                      overflow: 'hidden'
                    }}
                  >
                    {['p', 'r', 'o', 'p', 's'].map((char, index) => (
                      <motion.span
                        key={index}
                        initial={{ y: '100%' }}
                        animate={{ y: '0%' }}
                        transition={{
                          duration: 0.6,
                          delay: 0.3 + index * 0.08,
                          ease: [0.19, 1, 0.22, 1]
                        }}
                        style={{ display: 'inline-block' }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Transition Curtain Wipe Screen */}
          {stage === 'transition' && (
            <motion.div
              key="preloader-transition"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ duration: 0.7, ease: [0.77, 0, 0.175, 1] }}
              style={{
                position: 'fixed',
                inset: 0,
                zIndex: 10000,
                backgroundColor: '#4d3d30',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <motion.p
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  fontSize: 'clamp(3rem, 8vw, 7rem)',
                  color: '#f4f0ea',
                  fontWeight: 500,
                  letterSpacing: '0.4em',
                  textTransform: 'uppercase'
                }}
              >
                PROPS
              </motion.p>
            </motion.div>
          )}
        </>
      )}
    </AnimatePresence>
  );
};
