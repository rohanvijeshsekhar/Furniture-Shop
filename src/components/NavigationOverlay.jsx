import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';

const InteractiveCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.clientWidth || 300);
    let height = (canvas.height = canvas.parentElement.clientHeight || 300);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particles system matching Studio Lumio WebGL mesh
    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2.5 + 1,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      opacity: Math.random() * 0.5 + 0.3
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw background ambient color
      ctx.fillStyle = '#e8e0d4';
      ctx.fillRect(0, 0, width, height);

      // Draw particle mesh
      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(77, 61, 48, ${p.opacity})`;
        ctx.fill();

        // Connect nearby particles
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 90) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(77, 61, 48, ${0.15 * (1 - dist / 90)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        borderRadius: '6px',
        overflow: 'hidden'
      }}
    >
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />
    </div>
  );
};

export const NavigationOverlay = () => {
  const { isMenuOpen, setIsMenuOpen } = useCart();

  const links = [
    { name: 'HOME', href: '#', active: true },
    { name: 'SHOP', href: '#featured', active: false },
    { name: 'ABOUT US', href: '#story', active: false },
    { name: 'LOOKBOOK', href: '#latest', active: false },
    { name: 'CONTACT', href: '#newsletter', active: false }
  ];

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <>
          {/* Blurred backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMenuOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 90,
              backgroundColor: 'rgba(27, 24, 22, 0.6)',
              backdropFilter: 'blur(4.5px)',
              WebkitBackdropFilter: 'blur(4.5px)'
            }}
          />

          {/* Slide-down menu drawer */}
          <motion.nav
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.65, ease: [0.19, 1, 0.22, 1] }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              zIndex: 95,
              backgroundColor: '#f4f0ea',
              color: '#4d3d30',
              padding: '6rem 2rem 3rem 2rem',
              borderBottom: '1px solid rgba(77, 61, 48, 0.2)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)'
            }}
          >
            <div
              style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                gap: '4rem',
                alignItems: 'center'
              }}
            >
              <div>
                {/* Main Links */}
                <ul
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '1.5rem 3rem',
                    margin: '2rem 0 4rem 0',
                    padding: 0
                  }}
                >
                  {links.map((link, idx) => (
                    <motion.li
                      key={link.name}
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 + idx * 0.08, duration: 0.5 }}
                    >
                      <a
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        style={{
                          fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
                          fontWeight: link.active ? 400 : 600,
                          fontStyle: link.active ? 'italic' : 'normal',
                          textTransform: 'uppercase',
                          letterSpacing: '-0.04em',
                          color: '#4d3d30',
                          display: 'inline-block',
                          transition: 'opacity 0.2s ease'
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.6')}
                        onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>

                {/* Sub-footer inside menu */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                    gap: '2rem',
                    paddingTop: '2rem',
                    borderTop: '1px solid rgba(77, 61, 48, 0.15)',
                    fontSize: '1.1rem',
                    textTransform: 'uppercase',
                    letterSpacing: '-0.02em'
                  }}
                >
                  <div>
                    <span style={{ color: '#9f9689' }}>MADE BY: </span>
                    <a
                      href="https://www.studiolumio.com/?utm_source=props"
                      target="_blank"
                      rel="noreferrer"
                      style={{ textDecoration: 'underline' }}
                    >
                      STUDIO LUMIO
                    </a>
                  </div>
                  <div>
                    <span style={{ color: '#9f9689' }}>TYPOGRAPHY: </span>
                    <a
                      href="https://fonts.google.com/specimen/Manrope"
                      target="_blank"
                      rel="noreferrer"
                      style={{ textDecoration: 'underline' }}
                    >
                      GOOGLE FONTS
                    </a>
                  </div>
                  <div>
                    <span style={{ color: '#9f9689' }}>IMAGES: </span>
                    <span>FREEPIK, ENVATO</span>
                  </div>
                  <div>
                    <a href="#" style={{ display: 'block', marginBottom: '0.4rem' }}>
                      PRIVACY POLICY
                    </a>
                    <a href="#">TERMS & CONDITIONS</a>
                  </div>
                </div>
              </div>

              {/* 3D WebGL Canvas Box matching Studio Lumio menu */}
              <div
                style={{
                  width: '260px',
                  height: '280px',
                  display: 'none',
                  flexShrink: 0
                }}
                className="desktop-aside-canvas"
              >
                <InteractiveCanvas />
              </div>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
};
