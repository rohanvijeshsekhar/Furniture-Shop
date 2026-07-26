import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const BriefingSection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section
      id="briefing"
      style={{
        padding: 'clamp(6rem, 10vw, 12rem) clamp(1.6rem, 4vw, 4rem)',
        backgroundColor: '#f4f0ea',
        color: '#4d3d30',
        overflow: 'hidden'
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'clamp(4rem, 8vw, 9rem)',
          alignItems: 'center'
        }}
      >
        {/* Left Side: Classy Elegant Wooden Furniture Dual Flying Cards */}
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '520px',
            margin: '0 auto',
            cursor: 'pointer'
          }}
        >
          {/* Main Background Card — Classy Wooden Armchair */}
          <motion.div
            initial={{ opacity: 0, x: -140, y: -80, rotate: -8, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
            animate={{
              x: mousePos.x * 15,
              y: mousePos.y * 15
            }}
            transition={{
              whileInView: { duration: 1.1, ease: [0.19, 1, 0.22, 1] },
              animate: { type: 'spring', stiffness: 150, damping: 15 }
            }}
            viewport={{ once: true, margin: '-50px' }}
            style={{
              width: '85%',
              aspectRatio: '0.85',
              overflow: 'hidden',
              borderRadius: '8px',
              backgroundColor: '#e8e0d4',
              boxShadow: '0 25px 50px rgba(77, 61, 48, 0.16)'
            }}
          >
            <img
              src="https://images.ctfassets.net/tuohjudwxvzs/9Ff7V1JqJwu0cfYEJ4kWt/ef7b0e440769d005afdc9466fae600a0/chairs_nemcam.png"
              alt="Classy Elegant Wooden Chair"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </motion.div>

          {/* Overlapping Foreground Card — Classy Wooden End Table */}
          <motion.div
            initial={{ opacity: 0, x: 140, y: 120, rotate: 12, scale: 0.7 }}
            whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
            animate={{
              x: -mousePos.x * 25,
              y: -mousePos.y * 25
            }}
            transition={{
              whileInView: { duration: 1.2, delay: 0.25, ease: [0.19, 1, 0.22, 1] },
              animate: { type: 'spring', stiffness: 120, damping: 12 }
            }}
            viewport={{ once: true, margin: '-50px' }}
            style={{
              position: 'absolute',
              bottom: '-14%',
              right: 0,
              width: '58%',
              aspectRatio: '0.92',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 30px 60px rgba(77, 61, 48, 0.25)',
              border: '4px solid #ffffff',
              zIndex: 3
            }}
          >
            <img
              src="https://images.ctfassets.net/tuohjudwxvzs/6L5rxJi0JyWPr41ZbaoBbu/14ca5dda93736787b1f004c4da9ae3cd/chairs-mb_haymwf.png"
              alt="Classy Elegant Wooden Side Table"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </motion.div>
        </div>

        {/* Right Side: Headline & Pill Button */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
          viewport={{ once: true }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '2rem'
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 5.2rem)',
              fontWeight: 400,
              color: '#4d3d30',
              lineHeight: 1.12,
              letterSpacing: '-0.03em',
              textTransform: 'uppercase'
            }}
          >
            WELCOME TO OUR FURNITURE SHOP, WHERE TIMELESS AND STYLISH DESIGNS MEET STORYTELLING.
          </h2>

          <p
            style={{
              fontSize: 'clamp(1.2rem, 1.6vw, 1.5rem)',
              fontWeight: 400,
              lineHeight: 1.5,
              color: '#1b1816',
              maxWidth: '520px'
            }}
          >
            Every piece of furniture in our collection tells a personal story. Custom-designed and personalized to enhance your home's aesthetics.
          </p>

          <a href="#featured" className="btn">
            <span className="btn_link">
              <span className="btn_link_inner" data-txt="ABOUT US">
                <span>ABOUT US</span>
              </span>
            </span>
            <span className="btn_svg">
              <ArrowRight size={14} color="white" />
              <ArrowRight size={14} color="white" />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
