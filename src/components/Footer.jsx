import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#4d3d30',
        color: '#f4f0ea',
        padding: '4rem 2rem 2rem 2rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '3rem 2rem',
            paddingBottom: '3rem',
            borderBottom: '1px solid rgba(244, 240, 234, 0.15)',
            fontSize: '1.2rem',
            textTransform: 'uppercase',
            letterSpacing: '-0.02em'
          }}
        >
          <div>
            <h5 style={{ color: '#9f9689', marginBottom: '1rem', fontWeight: 500 }}>
              DESIGN CREDITS
            </h5>
            <p style={{ fontWeight: 600 }}>STUDIO LUMIO CONCEPT</p>
            <p style={{ fontSize: '1rem', color: '#9f9689', marginTop: '0.4rem' }}>
              Props Furniture Showcase Demo
            </p>
          </div>

          <div>
            <h5 style={{ color: '#9f9689', marginBottom: '1rem', fontWeight: 500 }}>
              TYPOGRAPHY
            </h5>
            <a
              href="https://fonts.google.com/specimen/Manrope"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: 'underline' }}
            >
              MANROPE (GOOGLE FONTS)
            </a>
          </div>

          <div>
            <h5 style={{ color: '#9f9689', marginBottom: '1rem', fontWeight: 500 }}>
              RESOURCES
            </h5>
            <p>FREEPIK, ENVATO & UNSPLASH</p>
          </div>

          <div>
            <h5 style={{ color: '#9f9689', marginBottom: '1rem', fontWeight: 500 }}>
              LEGAL & NAVIGATION
            </h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a href="#" style={{ textDecoration: 'none' }}>
                PRIVACY POLICY
              </a>
              <a href="#" style={{ textDecoration: 'none' }}>
                TERMS & CONDITIONS
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '2rem',
            fontSize: '1.1rem',
            letterSpacing: '-0.02em'
          }}
        >
          <span>© {new Date().getFullYear()} PROPS BY STUDIO LUMIO CLONE. ALL RIGHTS RESERVED.</span>

          <button
            onClick={scrollToTop}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: '#f4f0ea',
              cursor: 'pointer',
              textTransform: 'uppercase',
              fontWeight: 600
            }}
          >
            <span>TOP</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};
