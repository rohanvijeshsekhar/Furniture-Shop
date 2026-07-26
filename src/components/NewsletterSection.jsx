import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

export const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => {
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <section
      id="newsletter"
      style={{
        padding: 'clamp(6rem, 12vw, 14rem) 1.6rem',
        backgroundColor: '#f4f0ea',
        textAlign: 'center',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* Giant Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            fontSize: 'clamp(3.5rem, 9vw, 10rem)',
            textTransform: 'uppercase',
            color: '#4d3d30',
            lineHeight: 1.05,
            letterSpacing: '-0.04em',
            fontWeight: 400,
            marginBottom: '3rem'
          }}
        >
          JOIN OUR NEWSLETTER
        </motion.h2>

        {/* Subscription Form */}
        <form
          onSubmit={handleSubmit}
          style={{
            position: 'relative',
            maxWidth: '360px',
            margin: '0 auto'
          }}
        >
          <div
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: '100%',
                height: '4.5rem',
                backgroundColor: 'transparent',
                border: '1px solid #8e7867',
                borderRadius: '50px',
                paddingLeft: '1.8rem',
                paddingRight: '4.5rem',
                fontSize: '1.3rem',
                color: '#4d3d30',
                outline: 'none',
                fontFamily: 'inherit'
              }}
            />

            <button
              type="submit"
              className="btn_svg"
              style={{
                position: 'absolute',
                right: '6px',
                top: '50%',
                transform: 'translateY(-50%)',
                cursor: 'pointer'
              }}
              title="Subscribe"
            >
              {subscribed ? (
                <Check size={14} color="white" />
              ) : (
                <>
                  <ArrowRight size={14} color="white" />
                  <ArrowRight size={14} color="white" />
                </>
              )}
            </button>
          </div>

          {subscribed && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                marginTop: '1rem',
                fontSize: '1.2rem',
                color: '#4d3d30',
                fontWeight: 600
              }}
            >
              Thank you for subscribing to Studio Lumio Props!
            </motion.p>
          )}
        </form>
      </div>
    </section>
  );
};
