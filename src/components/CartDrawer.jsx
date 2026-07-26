import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { X, Plus, Minus, Trash2, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export const CartDrawer = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    cartTotal,
    updateQuantity,
    removeFromCart,
    clearCart
  } = useCart();

  const handleCheckout = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
    alert('Thank you for testing the Studio Lumio Props checkout demonstration!');
    clearCart();
    setIsCartOpen(false);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Overlay backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 110,
              backgroundColor: 'rgba(27, 24, 22, 0.5)',
              backdropFilter: 'blur(4px)',
              WebkitBackdropFilter: 'blur(4px)'
            }}
          />

          {/* Cart Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: 'clamp(320px, 90vw, 480px)',
              height: '100vh',
              zIndex: 120,
              backgroundColor: '#f4f0ea',
              color: '#4d3d30',
              boxShadow: '-10px 0 30px rgba(0, 0, 0, 0.15)',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {/* Cart Header */}
            <div
              style={{
                padding: '1.6rem 2rem',
                borderBottom: '1px solid rgba(77, 61, 48, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <h2
                style={{
                  fontSize: '1.4rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '-0.03em'
                }}
              >
                YOUR CART ({cart.length})
              </h2>

              <button
                onClick={() => setIsCartOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '1.2rem',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  cursor: 'pointer'
                }}
              >
                <X size={18} />
                <span>CLOSE</span>
              </button>
            </div>

            {/* Cart Items or Empty State */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '2rem' }}>
              {cart.length === 0 ? (
                <div
                  style={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    gap: '2rem'
                  }}
                >
                  <p
                    style={{
                      fontSize: '1.4rem',
                      lineHeight: 1.4,
                      color: '#4d3d30',
                      maxWidth: '260px'
                    }}
                  >
                    Your cart is empty at the moment. We have awesome furnitures crafted for you.
                  </p>

                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="btn"
                  >
                    <span className="btn_link">
                      <span className="btn_link_inner" data-txt="Continue Shopping">
                        <span>Continue Shopping</span>
                      </span>
                    </span>
                    <span className="btn_svg">
                      <ArrowRight size={14} color="white" />
                      <ArrowRight size={14} color="white" />
                    </span>
                  </button>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      style={{
                        display: 'flex',
                        gap: '1.2rem',
                        paddingBottom: '1.5rem',
                        borderBottom: '1px solid rgba(77, 61, 48, 0.1)'
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{
                          width: '80px',
                          height: '90px',
                          objectFit: 'cover',
                          borderRadius: '4px',
                          backgroundColor: '#e8e0d4'
                        }}
                      />

                      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div>
                          <span
                            style={{
                              fontSize: '0.9rem',
                              color: '#9f9689',
                              textTransform: 'uppercase',
                              letterSpacing: '0.05em'
                            }}
                          >
                            {item.category}
                          </span>
                          <h4
                            style={{
                              fontSize: '1.2rem',
                              fontWeight: 600,
                              margin: '0.2rem 0',
                              color: '#1b1816'
                            }}
                          >
                            {item.title}
                          </h4>
                          <span style={{ fontSize: '1.2rem', fontWeight: 600, color: '#4d3d30' }}>
                            ${item.price}
                          </span>
                        </div>

                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginTop: '0.8rem'
                          }}
                        >
                          {/* Quantity Counter */}
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              border: '1px solid rgba(77, 61, 48, 0.3)',
                              borderRadius: '20px',
                              padding: '0.2rem 0.6rem',
                              gap: '0.8rem'
                            }}
                          >
                            <button onClick={() => updateQuantity(item.id, -1)}>
                              <Minus size={14} />
                            </button>
                            <span style={{ fontSize: '1.1rem', fontWeight: 600 }}>{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, 1)}>
                              <Plus size={14} />
                            </button>
                          </div>

                          {/* Remove button */}
                          <button
                            onClick={() => removeFromCart(item.id)}
                            style={{ opacity: 0.6, cursor: 'pointer' }}
                            title="Remove item"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Cart Footer Total */}
            {cart.length > 0 && (
              <div
                style={{
                  padding: '1.6rem 2rem',
                  borderTop: '1px solid rgba(77, 61, 48, 0.15)',
                  backgroundColor: '#e8e0d4',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.2rem'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '1.4rem',
                    fontWeight: 600
                  }}
                >
                  <span>SUBTOTAL</span>
                  <span>${cartTotal.toLocaleString()}</span>
                </div>

                <button
                  onClick={handleCheckout}
                  className="btn"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <span className="btn_link">
                    <span className="btn_link_inner" data-txt="Proceed to Checkout">
                      <span>Proceed to Checkout</span>
                    </span>
                  </span>
                  <span className="btn_svg">
                    <ArrowRight size={14} color="white" />
                    <ArrowRight size={14} color="white" />
                  </span>
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
