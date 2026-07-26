import React, { useState } from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { Preloader } from './components/Preloader';
import { Header } from './components/Header';
import { NavigationOverlay } from './components/NavigationOverlay';
import { CartDrawer } from './components/CartDrawer';
import { HeroSection } from './components/HeroSection';
import { BriefingSection } from './components/BriefingSection';
import { FeaturedShowcase } from './components/FeaturedShowcase';
import { StorySection } from './components/StorySection';
import { LatestArrivals } from './components/LatestArrivals';
import { NewsletterSection } from './components/NewsletterSection';
import { Footer } from './components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

const MainContent = () => {
  const { toastMessage } = useCart();

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: '#f4f0ea' }}>
      <Header />
      <NavigationOverlay />
      <CartDrawer />

      <main style={{ paddingTop: '50px' }}>
        <HeroSection />
        <BriefingSection />
        <FeaturedShowcase />
        <StorySection />
        <LatestArrivals />
        <NewsletterSection />
      </main>

      <Footer />

      {/* Floating Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            style={{
              position: 'fixed',
              bottom: '2rem',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 200,
              backgroundColor: '#4d3d30',
              color: '#f4f0ea',
              padding: '0.8rem 1.8rem',
              borderRadius: '30px',
              fontWeight: 600,
              fontSize: '1.2rem',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
              letterSpacing: '-0.02em',
              pointerEvents: 'none'
            }}
          >
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <CartProvider>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <MainContent />
    </CartProvider>
  );
}
