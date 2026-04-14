'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('saffron-cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleChoice = (choice) => {
    localStorage.setItem('saffron-cookie-consent', choice);
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-[60] p-4 sm:p-6"
        >
          <div className="max-w-4xl mx-auto bg-surface/95 backdrop-blur-md border border-gold/20 rounded-lg p-6 shadow-2xl shadow-black/40">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex-1">
                <h4 className="font-cormorant text-lg text-gold mb-1">This website uses cookies</h4>
                <p className="text-warm-muted text-sm font-inter leading-relaxed">
                  We use cookies to analyze website traffic and optimize your experience.
                  By accepting, your data will be aggregated with all other user data.
                </p>
              </div>
              <div className="flex gap-3 flex-shrink-0">
                <button
                  onClick={() => handleChoice('declined')}
                  className="px-5 py-2 text-sm font-inter text-warm-muted border border-hints/30 rounded hover:border-gold/50 hover:text-cream transition-all duration-300"
                  aria-label="Decline cookies"
                >
                  Decline
                </button>
                <button
                  onClick={() => handleChoice('accepted')}
                  className="btn-gold text-sm !px-5 !py-2"
                  aria-label="Accept cookies"
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
