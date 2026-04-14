'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { reviews } from '@/data/events';

function StarIcon() {
  return (
    <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

export default function ReviewCarousel() {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);
  const animationRef = useRef(null);
  const scrollPos = useRef(0);

  // Triple the reviews for seamless infinite loop
  const tripleReviews = [...reviews, ...reviews, ...reviews];

  const animate = useCallback(() => {
    if (!isPaused && scrollRef.current) {
      scrollPos.current += 0.5;
      const singleSetWidth = scrollRef.current.scrollWidth / 3;
      if (scrollPos.current >= singleSetWidth) {
        scrollPos.current = 0;
      }
      scrollRef.current.scrollLeft = scrollPos.current;
    }
    animationRef.current = requestAnimationFrame(animate);
  }, [isPaused]);

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate]);

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden py-4"
        style={{ scrollBehavior: 'auto' }}
      >
        {tripleReviews.map((review, index) => (
          <motion.div
            key={`${review.id}-${index}`}
            className="flex-shrink-0 w-[350px] sm:w-[400px] card-surface p-6 rounded-lg"
            whileHover={{ y: -4, borderColor: 'rgba(212, 168, 83, 0.4)' }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-1 mb-3">
              {[...Array(review.rating)].map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>
            <p className="text-cream/90 font-inter text-sm leading-relaxed mb-4 italic">
              &ldquo;{review.text}&rdquo;
            </p>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gold font-cormorant text-lg font-medium">{review.author}</p>
                <p className="text-hints text-xs font-inter">{review.badge}</p>
              </div>
              <div className="flex items-center gap-1.5 text-hints text-xs">
                <GoogleIcon />
                <span>via Google</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
