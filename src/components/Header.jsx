import React from 'react';
import { useCart } from '../context/CartContext';
import { ShoppingBag } from 'lucide-react';

export const Header = () => {
  const { isMenuOpen, setIsMenuOpen, isCartOpen, setIsCartOpen, cartCount } = useCart();

  return (
    <>
      <header
        id="header"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 100,
          backgroundColor: '#f4f0ea',
          borderBottom: '1px solid rgba(77, 61, 48, 0.2)',
          padding: '1.2rem 1.6rem',
          color: '#4d3d30',
          transition: 'background-color 0.3s ease'
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'relative'
          }}
        >
          {/* Left: Menu Toggle Button */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem',
                fontWeight: 500,
                fontSize: '1.3rem',
                letterSpacing: '-0.03em',
                textTransform: 'uppercase',
                cursor: 'pointer'
              }}
            >
              <div
                style={{
                  width: '20px',
                  height: '8px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative'
                }}
              >
                <span
                  style={{
                    height: '1px',
                    width: '100%',
                    backgroundColor: '#4d3d30',
                    display: 'block',
                    transition: 'transform 0.4s ease, top 0.4s ease',
                    transform: isMenuOpen ? 'rotate(-45deg) translateY(3.5px)' : 'none'
                  }}
                />
                <span
                  style={{
                    height: '1px',
                    width: '100%',
                    backgroundColor: '#4d3d30',
                    display: 'block',
                    transition: 'transform 0.4s ease, top 0.4s ease',
                    transform: isMenuOpen ? 'rotate(45deg) translateY(-3.5px)' : 'none'
                  }}
                />
              </div>
              <span>{isMenuOpen ? 'CLOSE' : 'MENU'}</span>
            </button>
          </div>

          {/* Center: Brand Title */}
          <div
            style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              fontWeight: 700,
              fontSize: '1.6rem',
              letterSpacing: '-0.04em',
              textTransform: 'uppercase'
            }}
          >
            <a href="#">PROPS</a>
          </div>

          {/* Right: Shop Link & Cart Button */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2.5rem',
              fontWeight: 500,
              fontSize: '1.3rem',
              letterSpacing: '-0.03em',
              textTransform: 'uppercase'
            }}
          >
            <a href="#featured" style={{ display: 'none' }} className="desktop-only-link">
              SHOP
            </a>

            <button
              onClick={() => setIsCartOpen(!isCartOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                cursor: 'pointer'
              }}
            >
              <ShoppingBag size={18} strokeWidth={1.5} color="#4D3D30" />
              <span>CART ({cartCount})</span>
            </button>
          </div>
        </div>
      </header>

      {/* Floating Awwwards Ribbon Badge matching Studio Lumio */}
      <div
        id="awwwards"
        style={{
          position: 'fixed',
          zIndex: 99,
          transform: 'translateY(-50%)',
          top: '50%',
          right: 0
        }}
      >
        <a
          href="https://www.awwwards.com/sites/props-furniture"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Check out Props on awwwards.com"
        >
          <svg width="53.08" height="171.358" viewBox="0 0 53.08 171.358">
            <path fill="#E73C37" d="M0 0h53.08v171.358H0z"></path>
            <g fill="#fff">
              <path d="M30.016 151.575a3.599 3.599 0 0 1-2.484 1.878l-.965-1.535c.623-.155 1.126-.401 1.506-.737.38-.337.57-.768.57-1.293 0-.4-.101-.722-.301-.966-.199-.242-.504-.365-.912-.365-.254 0-.478.083-.674.249a2.423 2.423 0 0 0-.511.62c-.146.249-.331.603-.556 1.061l-.204.424c-.293.584-.66 1.052-1.104 1.403-.443.351-1.011.525-1.703.525-.516 0-.983-.119-1.402-.357-.42-.239-.748-.575-.986-1.009s-.357-.929-.357-1.483c0-1.413.619-2.378 1.855-2.895l.979 1.535c-.721.253-1.082.706-1.082 1.359 0 .282.09.526.271.73.182.205.402.308.665.308s.495-.091.694-.271a2.51 2.51 0 0 0 .512-.657c.141-.258.324-.631.548-1.118.224-.478.454-.879.687-1.206a2.76 2.76 0 0 1 .914-.803c.375-.211.83-.315 1.367-.315.613 0 1.152.139 1.614.417.463.278.819.665 1.067 1.162s.373 1.062.373 1.695a3.545 3.545 0 0 1-.381 1.644M21.627 145.02a1.13 1.13 0 0 1-.833.336c-.332 0-.61-.111-.834-.336s-.336-.502-.336-.833c0-.332.112-.608.336-.833s.502-.337.834-.337c.331 0 .608.112.833.337s.336.501.336.833c0 .331-.111.608-.336.833m1.285-1.74h7.367v1.812h-7.367v-1.812zM29.709 140.226c-.458.479-1.135.716-2.031.716h-3.216v1.141h-1.55v-1.141H21.07l-1.139-1.812h2.98v-1.945h1.55v1.945h3.187c.438 0 .748-.081.928-.242.181-.16.27-.402.27-.723 0-.244-.057-.479-.175-.702l1.462-.424c.176.38.264.779.264 1.198-.001.849-.23 1.511-.688 1.989M29.833 134.72a3.333 3.333 0 0 1-1.433 1.169c-.579.249-1.182.373-1.805.373s-1.225-.124-1.805-.373a3.347 3.347 0 0 1-1.434-1.169c-.375-.531-.563-1.196-.563-1.995 0-.77.184-1.413.549-1.93a3.282 3.282 0 0 1 1.381-1.14 4.239 4.239 0 0 1 1.711-.365h.746v5.072a1.796 1.796 0 0 0 1.168-.49c.332-.307.496-.724.496-1.249 0-.41-.092-.753-.277-1.031-.185-.277-.473-.528-.862-.753l.542-1.462c.691.303 1.223.724 1.592 1.265.371.541.557 1.235.557 2.083 0 .798-.188 1.463-.563 1.995m-4.085-3.574c-.41.088-.746.261-1.009.519s-.394.611-.394 1.06c0 .429.135.784.408 1.067s.604.458.994.526v-3.172zM35.481 17.006l-4.782 14.969h-3.266l-2.584-9.682-2.584 9.682h-3.267l-4.783-14.969h3.713l2.674 10.275 2.525-10.275h3.444l2.525 10.275 2.674-10.275z"></path>
            </g>
          </svg>
        </a>
      </div>
    </>
  );
};
