import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { ArrowRight, Plus, Check } from 'lucide-react';

const LatestArrivalCard = ({ title, price, image, onAdd }) => {
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
      {/* Tall Rectangular Cream Container matching Reference Screenshot */}
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

      {/* Product Label & Price matching Reference Screenshot */}
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
          ${price.toLocaleString()}.00
        </div>
      </div>
    </motion.div>
  );
};

export const LatestArrivals = () => {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const latestItems = [
    {
      id: 'plush-white-chair',
      title: 'PLUSH WHITE CHAIR',
      price: 980,
      image: '/assets/plush_white_chair.png',
      category: 'CHAIRS'
    },
    {
      id: 'paxous-chair',
      title: 'PAXOUS CHAIR',
      price: 875,
      image: '/assets/paxous_wooden_chair.png',
      category: 'CHAIRS'
    },
    {
      id: 'comfy-cushion-chair',
      title: 'COMFY CUSHION CHAIR',
      price: 1350,
      image: '/assets/comfy_cushion_blue_chair.png',
      category: 'CHAIRS'
    },
    {
      id: 'coffee-table-latest',
      title: 'COFFEE TABLE',
      price: 940,
      image: 'https://images.ctfassets.net/tuohjudwxvzs/3l4UZJUfxYdqFZnPT4qQ5f/10a77a6ca201d02798df92cc48cc250a/tables_gokhgz.png',
      category: 'TABLES'
    },
    {
      id: 'tripod-table-lamp-latest',
      title: 'TRIPOD TABLE LAMP',
      price: 320,
      image: 'https://images.ctfassets.net/tuohjudwxvzs/4mnTMMdY2Om1Fi61u6hF7O/795d642216b2551c90e946756d4a8386/lamps_v27n9t.png',
      category: 'LAMPS'
    }
  ];

  const loopItems = [...latestItems, ...latestItems];

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <section
      id="latest"
      style={{
        padding: 'clamp(5rem, 8vw, 10rem) 0',
        backgroundColor: '#f4f0ea',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Header matching Reference Image */}
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
          LATEST ARRIVALS
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
          width: '100%',
          marginBottom: '5rem'
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

        {/* Automatic Continuous Motion to the Left */}
        <motion.div
          animate={{
            x: ['0%', '-50%']
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
            <LatestArrivalCard
              key={`${item.id}-${index}`}
              title={item.title}
              price={item.price}
              image={item.image}
              onAdd={() => addToCart(item)}
            />
          ))}
        </motion.div>
      </div>

      {/* Footer Action Button matching Studio Lumio */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <a href="#newsletter" className="btn">
          <span className="btn_link">
            <span className="btn_link_inner" data-txt="Shop latest arrivals">
              <span>Shop latest arrivals</span>
            </span>
          </span>
          <span className="btn_svg">
            <ArrowRight size={14} color="white" />
            <ArrowRight size={14} color="white" />
          </span>
        </a>
      </div>
    </section>
  );
};
