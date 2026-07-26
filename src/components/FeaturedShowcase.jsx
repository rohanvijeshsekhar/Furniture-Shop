import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { ArrowRight, Plus } from 'lucide-react';

/* ==========================================================================
   SECTION 1: FEATURED PRODUCTS ISOLATED GRID (ISOLATED CARDS ROW)
   ========================================================================== */
const IsolatedProductCard = ({ title, price, image, onAdd }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: [0.19, 1, 0.22, 1] }}
      style={{
        width: 'clamp(280px, 26vw, 400px)',
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '1.4rem',
        userSelect: 'none'
      }}
    >
      {/* Tall Rectangular Cream Container */}
      <div
        style={{
          width: '100%',
          aspectRatio: '0.85',
          backgroundColor: '#e8e2d8',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '3rem 2rem 4rem 2rem',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <img
          src={image}
          alt={title}
          style={{
            width: '88%',
            height: '88%',
            objectFit: 'contain',
            filter: 'drop-shadow(0 14px 22px rgba(77, 61, 48, 0.14))'
          }}
        />

        <button
          onClick={onAdd}
          style={{
            position: 'absolute',
            bottom: '1.4rem',
            right: '1.4rem',
            backgroundColor: '#4d3d30',
            color: '#f4f0ea',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            border: 'none',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
          }}
          title="Add to Cart"
        >
          <Plus size={18} />
        </button>
      </div>

      {/* Product Label & Price */}
      <div style={{ paddingLeft: '0.2rem' }}>
        <span
          style={{
            fontSize: '1.2rem',
            color: '#4d3d30',
            textTransform: 'uppercase',
            letterSpacing: '0.02em',
            fontWeight: 500
          }}
        >
          {title} —
        </span>
        <div
          style={{
            fontSize: '2.6rem',
            fontWeight: 400,
            color: '#1b1816',
            marginTop: '0.4rem',
            letterSpacing: '-0.03em'
          }}
        >
          ${price}.00
        </div>
      </div>
    </motion.div>
  );
};

export const FeaturedProductsGridSection = () => {
  const { addToCart, products } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const featuredItems = [
    {
      title: 'STACK SHELVES',
      price: 750,
      image: 'https://images.ctfassets.net/tuohjudwxvzs/1sGOK3xQvFTpDjkAAUtKY1/34680bc73428b1a991e939b7d300e86a/shelve_wi8ipx_u6na85.webp',
      product: products[3]
    },
    {
      title: 'WOODEN QUAD-SHELF',
      price: 900,
      image: 'https://images.ctfassets.net/tuohjudwxvzs/5KTiBZ1fkTZx9H1ofXUrXA/4c5369d037c7058909e0594f4dee8859/shelves_qy9agg.webp',
      product: products[3]
    },
    {
      title: 'COFFEE TABLE',
      price: 940,
      image: 'https://images.ctfassets.net/tuohjudwxvzs/3l4UZJUfxYdqFZnPT4qQ5f/10a77a6ca201d02798df92cc48cc250a/tables_gokhgz.png',
      product: products[1]
    },
    {
      title: 'POT TABLE LAMP',
      price: 200,
      image: 'https://images.ctfassets.net/tuohjudwxvzs/4mnTMMdY2Om1Fi61u6hF7O/795d642216b2551c90e946756d4a8386/lamps_v27n9t.png',
      product: products[2]
    },
    {
      title: 'SITOUS CHAIR',
      price: 350,
      image: 'https://images.ctfassets.net/tuohjudwxvzs/9Ff7V1JqJwu0cfYEJ4kWt/ef7b0e440769d005afdc9466fae600a0/chairs_nemcam.png',
      product: products[0]
    }
  ];

  const loopItems = [...featuredItems, ...featuredItems];

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <section
      style={{
        padding: 'clamp(5rem, 8vw, 9rem) 0',
        backgroundColor: '#f4f0ea',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Header */}
      <div style={{ paddingLeft: 'clamp(1.6rem, 4vw, 4rem)', marginBottom: '3.5rem' }}>
        <h2
          style={{
            fontSize: 'clamp(2.5rem, 5.5vw, 5.5rem)',
            textTransform: 'uppercase',
            color: '#4d3d30',
            letterSpacing: '-0.02em',
            fontWeight: 400,
            lineHeight: 1
          }}
        >
          FEATURED PRODUCTS
        </h2>
      </div>

      {/* Auto-Scrolling Marquee Track Container */}
      <div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          position: 'relative',
          cursor: 'grab',
          overflow: 'hidden',
          width: '100%'
        }}
      >
        {/* Floating "DRAG" Cursor Badge */}
        {isHovered && (
          <motion.div
            animate={{
              x: cursorPos.x - 30,
              y: cursorPos.y - 30
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: '#f4f0ea',
              border: '1px solid #4d3d30',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              color: '#4d3d30',
              pointerEvents: 'none',
              zIndex: 10,
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.14)'
            }}
          >
            DRAG
          </motion.div>
        )}

        {/* Automatic Continuous Motion to the Right */}
        <motion.div
          animate={{
            x: ['-50%', '0%']
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 18,
              ease: 'linear'
            }
          }}
          style={{
            display: 'flex',
            gap: '2.5rem',
            paddingLeft: 'clamp(1.6rem, 4vw, 4rem)',
            width: 'max-content'
          }}
        >
          {loopItems.map((item, index) => (
            <IsolatedProductCard
              key={`${item.title}-${index}`}
              title={item.title}
              price={item.price}
              image={item.image}
              onAdd={() => addToCart(item.product)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};


/* ==========================================================================
   SECTION 2: CATEGORIES SHOWCASE WITH CENTER-RIGHT 50vw INITIAL STARTING OFFSET (MATCHING REFERENCE IMAGE)
   - Starts at 50vw (center-right of screen)
   - Translates left as user scrolls page down vertically
   ========================================================================== */
export const CategoryShowcaseHorizontal = () => {
  const { products, addToCart } = useCart();
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end']
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 18 });

  // Starts from 0px (with 50vw paddingLeft placing CHAIRS at center-right) and translates to -75%
  const x = useTransform(smoothProgress, [0, 1], ['0%', '-75%']);

  const categoryItems = [
    {
      category: 'CHAIRS',
      product: products.find((p) => p.category === 'CHAIRS') || products[0],
      mainImage: 'https://images.ctfassets.net/tuohjudwxvzs/9Ff7V1JqJwu0cfYEJ4kWt/ef7b0e440769d005afdc9466fae600a0/chairs_nemcam.png',
      badgeImage: 'https://images.ctfassets.net/tuohjudwxvzs/6L5rxJi0JyWPr41ZbaoBbu/14ca5dda93736787b1f004c4da9ae3cd/chairs-mb_haymwf.png'
    },
    {
      category: 'TABLES',
      product: products.find((p) => p.category === 'TABLES') || products[1],
      mainImage: 'https://images.ctfassets.net/tuohjudwxvzs/3l4UZJUfxYdqFZnPT4qQ5f/10a77a6ca201d02798df92cc48cc250a/tables_gokhgz.png',
      badgeImage: 'https://images.ctfassets.net/tuohjudwxvzs/fO4HVOlQv4IKCfYs6cVay/74888751796597c8ee93425cfb9fc014/tables-mb_ljzlgt.png'
    },
    {
      category: 'LAMPS',
      product: products.find((p) => p.category === 'LAMPS') || products[2],
      mainImage: 'https://images.ctfassets.net/tuohjudwxvzs/4mnTMMdY2Om1Fi61u6hF7O/795d642216b2551c90e946756d4a8386/lamps_v27n9t.png',
      badgeImage: 'https://images.ctfassets.net/tuohjudwxvzs/7MJGYGfL2FnbkB3s6lRtqG/52e59a170fca6aa3b5085e64c911fc3c/lamps-mb_wtugjk.png'
    },
    {
      category: 'SHELVES',
      product: products.find((p) => p.category === 'SHELVES') || products[3],
      mainImage: 'https://images.ctfassets.net/tuohjudwxvzs/1sGOK3xQvFTpDjkAAUtKY1/34680bc73428b1a991e939b7d300e86a/shelve_wi8ipx_u6na85.webp',
      badgeImage: 'https://images.ctfassets.net/tuohjudwxvzs/5KTiBZ1fkTZx9H1ofXUrXA/4c5369d037c7058909e0594f4dee8859/shelves_qy9agg.webp'
    }
  ];

  return (
    <section
      ref={targetRef}
      style={{
        position: 'relative',
        height: '350vh',
        backgroundColor: '#f4f0ea'
      }}
    >
      {/* Sticky Fullscreen Viewport Container */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#f4f0ea'
        }}
      >
        {/* Horizontal Track with 50vw Padding-Left placing CHAIRS at Center-Right initially matching reference screenshot */}
        <motion.div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'clamp(6rem, 15vw, 25rem)',
            paddingLeft: '50vw', // Center-Right initial starting offset matching Studio Lumio
            paddingRight: '10rem',
            x,
            willChange: 'transform',
            width: 'max-content'
          }}
        >
          {categoryItems.map((item) => (
            <div
              key={item.category}
              style={{
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                gap: 'clamp(2.5rem, 5vw, 6rem)',
                userSelect: 'none'
              }}
            >
              {/* Image Frame */}
              <div
                style={{
                  position: 'relative',
                  width: 'clamp(260px, 32vw, 420px)',
                  aspectRatio: '1.075'
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                    borderRadius: '4px'
                  }}
                >
                  <img
                    src={item.mainImage}
                    alt={item.category}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>

                <figure
                  style={{
                    width: 'clamp(110px, 13vw, 170px)',
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    transform: 'translate(60%, -70%)',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    boxShadow: '0 18px 36px rgba(77, 61, 48, 0.22)',
                    border: '3px solid #f4f0ea',
                    zIndex: 3
                  }}
                >
                  <img
                    src={item.badgeImage}
                    alt={`${item.category} thumbnail`}
                    style={{
                      width: '100%',
                      height: 'auto',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                </figure>
              </div>

              {/* Title & Action Pill Button */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  paddingLeft: '2rem'
                }}
              >
                <p
                  style={{
                    fontSize: 'clamp(3.5rem, 8vw, 9.6rem)',
                    lineHeight: 1.13,
                    letterSpacing: '-0.04em',
                    textTransform: 'uppercase',
                    color: '#4d3d30',
                    marginBottom: '1rem',
                    fontWeight: 400
                  }}
                >
                  {item.category}
                </p>

                <button
                  onClick={() => addToCart(item.product)}
                  className="btn"
                >
                  <span className="btn_link">
                    <span className="btn_link_inner" data-txt={`shop ${item.category}`}>
                      <span>shop {item.category}</span>
                    </span>
                  </span>
                  <span className="btn_svg">
                    <ArrowRight size={14} color="white" />
                    <ArrowRight size={14} color="white" />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export const FeaturedShowcase = () => {
  return (
    <>
      <FeaturedProductsGridSection />
      <CategoryShowcaseHorizontal />
    </>
  );
};
