'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export default function DecorativeText({ text, top = "0%", left = "0%", opacity = 0.03, fontSize = "20vw", speed = 0.2 }) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      <motion.span
        style={{ 
          y,
          top,
          left,
          opacity,
          fontSize,
          lineHeight: 1
        }}
        className="absolute font-cormorant font-bold text-cream whitespace-nowrap italic tracking-tighter"
      >
        {text}
      </motion.span>
    </div>
  );
}
