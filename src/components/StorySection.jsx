import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const StorySection = () => {
  const containerRef = useRef(null);

  // Track scroll progress within the story section for camera zoom-out effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  // Background Image Camera Zoom-Out Effect: starts zoomed in at 1.45x and pulls back to 0.95x as you scroll
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.45, 0.95]);
  const bgY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  // Center Beige Card Framer Motion Scroll Entrance & Scale
  const cardScale = useTransform(scrollYProgress, [0.15, 0.5], [0.88, 1]);
  const cardOpacity = useTransform(scrollYProgress, [0.15, 0.45], [0.3, 1]);
  const cardY = useTransform(scrollYProgress, [0.15, 0.5], [40, 0]);

  return (
    <section
      ref={containerRef}
      id="story"
      style={{
        height: '95rem',
        minHeight: '600px',
        backgroundColor: '#4d3d30',
        margin: 'max(10px, 1.6rem)',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderRadius: '6px'
      }}
    >
      {/* Background Image Container with Camera Zoom-Out Camera Scroll Effect */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          scale: bgScale,
          y: bgY,
          willChange: 'transform'
        }}
      >
        <img
          src="https://images.ctfassets.net/tuohjudwxvzs/5GORaPm2QqtAJnsuZLFADa/da81b0786f9f1f6550bde9481af8184f/view-chair-with-textured-fur-fabric_4_arsbt5.jpg"
          alt="Studio Lumio Textured Fur Chair"
          style={{
            aspectRatio: '1.555',
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            opacity: 0.88
          }}
        />
        {/* Subtle Dark Ambient Vignette Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at center, rgba(0,0,0,0) 20%, rgba(27,24,22,0.35) 100%)'
          }}
        />
      </motion.div>

      {/* Center Beige Box matching Studio Lumio Screenshot with Framer Motion */}
      <motion.div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          paddingBlock: 'max(5.5rem, 30px)',
          paddingInline: 'max(13rem, 50px)',
          backgroundColor: '#f4f0ea',
          maxWidth: '620px',
          scale: cardScale,
          opacity: cardOpacity,
          y: cardY,
          boxShadow: '0 30px 60px rgba(0, 0, 0, 0.25)',
          willChange: 'transform, opacity'
        }}
      >
        <motion.small
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          style={{
            fontSize: 'max(14px, 1.6rem)',
            fontWeight: 400,
            display: 'block',
            marginBottom: '1rem',
            color: '#1b1816'
          }}
        >
          Since
        </motion.small>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
          viewport={{ once: true }}
          style={{
            fontSize: 'max(60px, 12.8rem)',
            fontWeight: 400,
            marginBottom: 'max(10px, 1.6rem)',
            color: '#4d3d30',
            lineHeight: 1,
            letterSpacing: '-0.05em'
          }}
        >
          1985
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          style={{
            fontSize: 'max(14px, 1.6rem)',
            width: 'max(30rem, 250px)',
            fontWeight: 400,
            lineHeight: 1.395,
            marginBottom: 'calc(1.5rem + max(10px, 1.6rem))',
            color: '#1b1816'
          }}
        >
          We create furniture masterpieces that tell stories and store memories that don’t fade with trends.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a href="#latest" className="btn">
            <span className="btn_link">
              <span className="btn_link_inner" data-txt="Explore collection">
                <span>Explore collection</span>
              </span>
            </span>
            <span className="btn_svg">
              <ArrowRight size={14} color="white" />
              <ArrowRight size={14} color="white" />
            </span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};
