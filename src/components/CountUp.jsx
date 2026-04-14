'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

export default function CountUp({ target, suffix = '', prefix = '', duration = 2 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: duration * 1000, bounce: 0 });

  useEffect(() => {
    if (isInView) {
      motionValue.set(target);
    }
  }, [isInView, motionValue, target]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (ref.current) {
        const display = Number.isInteger(target) 
          ? Math.floor(latest) 
          : latest.toFixed(1);
        ref.current.textContent = `${prefix}${display}${suffix}`;
      }
    });
    return unsubscribe;
  }, [springValue, prefix, suffix, target]);

  return (
    <span ref={ref}>
      {prefix}0{suffix}
    </span>
  );
}
