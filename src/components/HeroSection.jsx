import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const HeroSection = () => {
  const containerRef = useRef(null);

  // Track scroll progress within the 220vh sticky hero container for precise scroll keyframing
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  // 1. Background Image Zoom-Out camera effect
  const bgScale = useTransform(scrollYProgress, [0, 0.85], [1.45, 0.95]);
  const bgY = useTransform(scrollYProgress, [0, 0.85], ['0%', '6%']);

  // 2. Layer 1: Giant "PROPS" Watermark (Phase 1: [0, 0.28])
  const propsScale = useTransform(scrollYProgress, [0, 0.28], [1, 0.75]);
  const propsY = useTransform(scrollYProgress, [0, 0.28], ['0%', '-45%']);
  const propsOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  // 3. Layer 2: Main Headline "WHERE STYLE ENDURES..." (Phase 2: enters [0.08, 0.25], holds, then fades out [0.38, 0.48] to avoid collision)
  const headlineScale = useTransform(scrollYProgress, [0.08, 0.28, 0.48], [0.85, 1, 1.05]);
  const headlineY = useTransform(scrollYProgress, [0.08, 0.28, 0.48], [60, 0, -40]);
  const headlineOpacity = useTransform(scrollYProgress, [0.08, 0.22, 0.38, 0.46], [0, 1, 1, 0]);

  // 4. Layer 3: Center Product Card (Phase 3: enters AFTER headline fades out: [0.48, 0.75])
  const cardY = useTransform(scrollYProgress, [0.48, 0.75], [120, 0]);
  const cardScale = useTransform(scrollYProgress, [0.48, 0.75], [0.85, 1]);
  const cardOpacity = useTransform(scrollYProgress, [0.48, 0.68], [0, 1]);

  // 5. Layer 4: Giant "PRODUCT OF THE DAY" Watermark (Phase 4: enters with card: [0.52, 0.82])
  const potdOpacity = useTransform(scrollYProgress, [0.52, 0.78], [0, 1]);
  const potdScale = useTransform(scrollYProgress, [0.52, 0.78], [0.88, 1]);
  const potdY = useTransform(scrollYProgress, [0.52, 0.78], [40, 0]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        height: '220vh', // Extended scroll track for aligned non-overlapping keyframe sequence
        backgroundColor: '#4d3d30'
      }}
    >
      {/* Sticky Viewport Container */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#4d3d30'
        }}
      >
        {/* Background Rattan Chair Image with Camera Zoom-Out Effect */}
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            scale: bgScale,
            y: bgY,
            willChange: 'transform'
          }}
        >
          <img
            src="https://images.ctfassets.net/tuohjudwxvzs/7DaJNUyolNUytcb3uPpTmb/b6be2f3ea327190e1bff4881cc96536f/home_nwku2r.png"
            alt="Studio Lumio Woven Rattan Chair"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 45%'
            }}
          />
          {/* Ambient Dark Overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(27, 24, 22, 0.18)'
            }}
          />
        </motion.div>

        {/* Top-Left Box: Tagline + EXPLORE COLLECTION pill button matching Studio Lumio */}
        <div
          style={{
            position: 'absolute',
            top: 'clamp(95px, 14vh, 140px)',
            left: 'clamp(1.6rem, 4vw, 4rem)',
            zIndex: 5,
            maxWidth: '320px',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.4rem'
          }}
        >
          <p
            style={{
              fontSize: 'max(12px, 1.35rem)',
              fontWeight: 500,
              lineHeight: 1.35,
              color: '#f4f0ea',
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              textShadow: '0 4px 12px rgba(0, 0, 0, 0.35)'
            }}
          >
            ADD ELEGANCE AND CHARM TO YOUR SPACE WITH FURNITURE THAT EXPRESSES YOUR INDIVIDUALITY
          </p>

          <a href="#briefing" className="btn btn-light">
            <span className="btn_link">
              <span className="btn_link_inner" data-txt="EXPLORE COLLECTION">
                <span>EXPLORE COLLECTION</span>
              </span>
            </span>
            <span className="btn_svg">
              <ArrowRight size={14} color="#4D3D30" />
              <ArrowRight size={14} color="#4D3D30" />
            </span>
          </a>
        </div>

        {/* Layer 1: Giant "PROPS" Watermark */}
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
            scale: propsScale,
            y: propsY,
            opacity: propsOpacity,
            zIndex: 2,
            willChange: 'transform, opacity'
          }}
        >
          <h1
            style={{
              fontSize: 'clamp(110px, 27vw, 380px)',
              fontWeight: 400,
              color: 'rgba(244, 240, 234, 0.95)',
              letterSpacing: '-0.05em',
              lineHeight: 0.85,
              textTransform: 'uppercase',
              textAlign: 'center',
              userSelect: 'none',
              fontFamily: 'inherit',
              width: '100vw'
            }}
          >
            PROPS
          </h1>
        </motion.div>

        {/* Layer 2: Main Headline "WHERE STYLE ENDURES: TIMELESS FURNITURE FOR YOUR STORY" (Fades out cleanly before card enters) */}
        <motion.div
          style={{
            position: 'relative',
            zIndex: 3,
            maxWidth: '920px',
            paddingInline: '2rem',
            textAlign: 'center',
            scale: headlineScale,
            y: headlineY,
            opacity: headlineOpacity,
            willChange: 'transform, opacity',
            pointerEvents: 'none'
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(2.8rem, 6vw, 6.8rem)',
              fontWeight: 400,
              color: '#ffffff',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              textTransform: 'uppercase',
              textShadow: '0 8px 24px rgba(0, 0, 0, 0.35)'
            }}
          >
            WHERE STYLE<br />
            ENDURES: TIMELESS<br />
            FURNITURE FOR<br />
            YOUR STORY
          </h2>
        </motion.div>

        {/* Layer 3: Center Product Card (Wooden Quad-Shelf $900.00) (Enters cleanly after headline fades out) */}
        <motion.div
          style={{
            position: 'absolute',
            bottom: 'clamp(80px, 12vh, 140px)',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 4,
            width: 'clamp(260px, 28vw, 360px)',
            height: 'clamp(240px, 26vh, 320px)',
            backgroundColor: '#f4f0ea',
            borderRadius: '6px',
            overflow: 'hidden',
            boxShadow: '0 20px 45px rgba(0, 0, 0, 0.25)',
            y: cardY,
            scale: cardScale,
            opacity: cardOpacity,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem'
          }}
        >
          <img
            src="https://images.ctfassets.net/tuohjudwxvzs/5KTiBZ1fkTZx9H1ofXUrXA/4c5369d037c7058909e0594f4dee8859/shelves_qy9agg.webp"
            alt="Wooden Quad-Shelf $900.00"
            style={{
              width: '92%',
              height: '92%',
              objectFit: 'contain'
            }}
          />
        </motion.div>

        {/* Layer 4: Giant "PRODUCT OF THE DAY" Watermark Text */}
        <motion.div
          style={{
            position: 'absolute',
            bottom: '1rem',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 3,
            opacity: potdOpacity,
            scale: potdScale,
            y: potdY,
            pointerEvents: 'none',
            whiteSpace: 'nowrap'
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(50px, 12vw, 170px)',
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.95)',
              letterSpacing: '-0.03em',
              lineHeight: 0.9,
              textTransform: 'uppercase',
              textAlign: 'center',
              userSelect: 'none',
              fontFamily: 'inherit',
              textShadow: '0 8px 24px rgba(0, 0, 0, 0.4)'
            }}
          >
            PRODUCT OF THE DAY
          </h2>
        </motion.div>
      </div>
    </div>
  );
};
