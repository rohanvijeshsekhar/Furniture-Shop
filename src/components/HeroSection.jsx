import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const HeroSection = () => {
  const containerRef = useRef(null);

  // Responsive tight 140vh scroll track so all elements arrive immediately as PROPS reaches top
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  // 1. Background Image Zoom-Out camera effect
  const bgScale = useTransform(scrollYProgress, [0, 0.65], [1.45, 0.95]);
  const bgY = useTransform(scrollYProgress, [0, 0.65], ['0%', '6%']);

  // 2. Layer 1: Giant "PROPS" Watermark translates up to top immediately matching Image 2
  const propsScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.72]);
  const propsY = useTransform(scrollYProgress, [0, 0.3], ['0%', '-42%']);
  const propsOpacity = useTransform(scrollYProgress, [0, 0.28], [1, 0.25]);

  // 3. Layer 2: Main Headline "WHERE STYLE ENDURES..." arrives early as PROPS moves top
  const headlineScale = useTransform(scrollYProgress, [0.04, 0.25], [0.85, 1]);
  const headlineY = useTransform(scrollYProgress, [0.04, 0.25], [50, 0]);
  const headlineOpacity = useTransform(scrollYProgress, [0.04, 0.2, 0.35, 0.45], [0, 1, 1, 0]);

  // 4. Layer 3: Center Product Card (Wooden Quad-Shelf $900.00) arrives early as requested
  const cardY = useTransform(scrollYProgress, [0.15, 0.4], [140, 0]);
  const cardScale = useTransform(scrollYProgress, [0.15, 0.4], [0.85, 1]);
  const cardOpacity = useTransform(scrollYProgress, [0.15, 0.38], [0, 1]);

  // 5. Layer 4: Giant "PRODUCT OF THE DAY" Watermark Text arrives early matching Image 3
  const potdOpacity = useTransform(scrollYProgress, [0.18, 0.42], [0, 1]);
  const potdScale = useTransform(scrollYProgress, [0.18, 0.42], [0.88, 1]);
  const potdY = useTransform(scrollYProgress, [0.18, 0.42], [50, 0]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        height: '140vh', // Tight responsive scroll track for early arrival
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

        {/* Top-Left Box: Tagline + EXPLORE COLLECTION pill button matching Image 2 */}
        <div
          style={{
            position: 'absolute',
            top: 'clamp(90px, 13vh, 135px)',
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

        {/* Layer 1: Giant "PROPS" Watermark translates up matching Image 2 */}
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

        {/* Layer 2: Main Headline "WHERE STYLE ENDURES: TIMELESS FURNITURE FOR YOUR STORY" */}
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

        {/* Layer 3: Center Product Card (Wooden Quad-Shelf $900.00) arrives early matching Image 3 */}
        <motion.div
          style={{
            position: 'absolute',
            bottom: 'clamp(70px, 10vh, 120px)',
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

        {/* Layer 4: Giant "PRODUCT OF THE DAY" Watermark Text arrives early matching Image 3 */}
        <motion.div
          style={{
            position: 'absolute',
            bottom: '0.8rem',
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
