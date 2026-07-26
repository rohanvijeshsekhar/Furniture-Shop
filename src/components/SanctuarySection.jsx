import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const SanctuarySection = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const imgScale = useTransform(scrollYProgress, [0, 1], [1.12, 0.96]);
  const textY = useTransform(scrollYProgress, [0.1, 0.5], [40, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.45], [0, 1]);

  return (
    <section
      ref={containerRef}
      id="sanctuary"
      style={{
        padding: 'clamp(4rem, 8vw, 10rem) 0',
        backgroundColor: '#f4f0ea',
        overflow: 'hidden'
      }}
    >
      {/* Full Widescreen Edge-to-Edge Container */}
      <div
        style={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: 'clamp(3rem, 6vw, 8rem)',
          alignItems: 'center',
          paddingInline: 'clamp(1.6rem, 3vw, 4rem)'
        }}
      >
        {/* Left Side: Massive Edge-to-Edge Fullscreen Image Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
          viewport={{ once: true }}
          style={{
            position: 'relative',
            width: '100%',
            height: 'clamp(750px, 95vh, 1150px)', // Full-screen immersive hero height
            borderRadius: '8px',
            overflow: 'hidden',
            backgroundColor: '#e8e0d4',
            boxShadow: '0 35px 75px rgba(77, 61, 48, 0.16)'
          }}
        >
          <motion.img
            src="/assets/sanctuary_lookbook.png"
            alt="At Props Your Space Should Be Your Sanctuary"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              scale: imgScale,
              willChange: 'transform'
            }}
          />
        </motion.div>

        {/* Right Side: Quote Paragraph & LOOKBOOK Pill Button */}
        <motion.div
          style={{
            y: textY,
            opacity: textOpacity,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '2.5rem',
            maxWidth: '520px',
            paddingRight: 'clamp(1.6rem, 3vw, 4rem)'
          }}
        >
          <p
            style={{
              fontSize: 'clamp(1.8rem, 2.8vw, 3rem)',
              fontWeight: 400,
              lineHeight: 1.42,
              color: '#1b1816',
              letterSpacing: '-0.02em'
            }}
          >
            At Props, we believe that your space should be your sanctuary. We are committed to creating furniture that transcends being just props and actively contributes to that.
          </p>

          <a href="#story" className="btn">
            <span className="btn_link">
              <span className="btn_link_inner" data-txt="LOOKBOOK">
                <span>LOOKBOOK</span>
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
