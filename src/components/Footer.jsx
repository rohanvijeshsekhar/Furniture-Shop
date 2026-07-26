import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Footer = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end']
  });

  const bgScale = useTransform(scrollYProgress, [0, 1], [1.15, 1.0]);

  return (
    <footer
      ref={containerRef}
      style={{
        position: 'relative',
        height: 'clamp(620px, 85vh, 880px)',
        margin: 'max(10px, 1.6rem)',
        borderRadius: '6px',
        overflow: 'hidden',
        color: '#f4f0ea',
        backgroundColor: '#1b1816'
      }}
    >
      {/* Generated Premium Armchair + Amber Fur Background Image with Parallax Scale */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          scale: bgScale,
          willChange: 'transform'
        }}
      >
        <img
          src="/assets/footer_bg.png"
          alt="Studio Lumio Armchair & Fur"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 60%'
          }}
        />
        {/* Subtle Dark Vignette & Ambient Gradient Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(27,24,22,0.65) 0%, rgba(27,24,22,0.2) 50%, rgba(27,24,22,0.75) 100%)'
          }}
        />
      </motion.div>

      {/* Footer Content Overlay */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 'clamp(2rem, 4vw, 4rem)'
        }}
      >
        {/* Top Navigation Grid matching Reference Screenshot */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '3rem'
          }}
        >
          {/* Left Column Group */}
          <div style={{ display: 'flex', gap: 'clamp(2rem, 5vw, 6rem)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <a href="#" style={linkStyle}>HOME</a>
              <a href="#featured" style={linkStyle}>SHOP</a>
              <a href="#briefing" style={linkStyle}>ABOUT US</a>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <a href="#featured" style={linkStyle}>TABLES</a>
              <a href="#featured" style={linkStyle}>CHAIRS</a>
              <a href="#featured" style={linkStyle}>LAMPS</a>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <a href="#latest" style={linkStyle}>SHOP ALL</a>
              <a href="#story" style={linkStyle}>LOOKBOOK</a>
              <a href="#featured" style={linkStyle}>FEATURED</a>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <a href="#newsletter" style={linkStyle}>CONTACT</a>
              <a href="#" style={linkStyle}>PRIVACY POLICY</a>
              <a href="#" style={linkStyle}>TERMS & CONDITIONS</a>
            </div>
          </div>

          {/* Right Social Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', textAlign: 'right' }}>
            <a href="https://www.awwwards.com" target="_blank" rel="noreferrer" style={linkStyle}>AWWWARDS</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" style={linkStyle}>TWITTER</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" style={linkStyle}>INSTAGRAM</a>
          </div>
        </div>

        {/* Center Giant PROPS Watermark matching Reference Screenshot */}
        <div style={{ textAlign: 'center', pointerEvents: 'none', marginBlock: 'auto' }}>
          <h2
            style={{
              fontSize: 'clamp(90px, 22vw, 320px)',
              fontWeight: 400,
              color: 'rgba(244, 240, 234, 0.95)',
              letterSpacing: '-0.05em',
              lineHeight: 0.85,
              textTransform: 'uppercase',
              userSelect: 'none',
              fontFamily: 'inherit',
              textShadow: '0 10px 30px rgba(0,0,0,0.3)'
            }}
          >
            PROPS
          </h2>
        </div>

        {/* Bottom Bar matching Reference Screenshot */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '1.2rem',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            fontWeight: 500,
            opacity: 0.9
          }}
        >
          <span>©2026</span>
          <span>MADE BY: STUDIO LUMIO</span>
        </div>
      </div>
    </footer>
  );
};

const linkStyle = {
  fontSize: '1.2rem',
  fontWeight: 500,
  color: '#f4f0ea',
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
  textDecoration: 'none',
  transition: 'opacity 0.3s ease',
  opacity: 0.85
};
