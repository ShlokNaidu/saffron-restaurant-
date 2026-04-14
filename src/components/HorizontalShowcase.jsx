'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const customEase = [0.22, 1, 0.36, 1];

const showcaseItems = [
  {
    title: "Celestial Rooftop View",
    description: "Panoramic vistas of Tbilisi's historic skyline from the luxury of the 6th floor.",
    image: "/images/about/venue-primary.jpg",
    category: "The Ambience"
  },
  {
    title: "Kings Favorite Kebab",
    description: "A masterclass in Persian grilling, ground lamb over veal fillet.",
    image: "/images/menu/kings-favorite.webp",
    category: "Signature Dish"
  },
  {
    title: "The Heart of Saffron",
    description: "Authentic spices and traditional techniques in every single bite.",
    image: "/images/about/culinary-1.jpg",
    category: "Our Heritage"
  },
  {
    title: "Elegant Events",
    description: "From intimate dinners to grand celebrations, we host them all with grace.",
    image: "/images/about/event-hosting.jpg",
    category: "Private Dining"
  },
  {
    title: "Culinary Artistry",
    description: "Presentation that delights the eyes as much as the palate.",
    image: "/images/about/culinary-2.jpg",
    category: "Expertise"
  }
];

export default function HorizontalShowcase() {
  const targetRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(
    scrollYProgress,
    [0.1, 0.95],
    ["0%", isMobile ? "-85.5%" : "-73.5%"]
  );
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const headerScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-near-black">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden w-full">
        <div className="absolute top-12 sm:top-20 left-6 sm:left-10 z-20">
          <motion.div
            style={{ opacity: headerOpacity, scale: headerScale }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: customEase }}
          >
            <p className="eyebrow mb-3 text-gold/60 tracking-[0.4em]">The Immersive Scroll</p>
            <h2 className="font-cormorant text-6xl sm:text-7xl lg:text-[10rem] font-semibold text-cream leading-[0.8] tracking-tighter">
              THE ART OF <br /> <span className="text-gold italic">SAFFRON</span>
            </h2>
          </motion.div>
        </div>

        {/* Dynamic Background Glow */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] bg-gold/5 rounded-full blur-[150px]" />
        </div>

        <motion.div style={{ x }} className="flex gap-24 sm:gap-40 lg:gap-64 px-[10vw] z-10 items-center">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={index}
              className="group relative h-[65vh] w-[80vw] md:w-[65vw] lg:w-[50vw] overflow-hidden rounded-sm border border-gold/10 bg-surface flex-shrink-0"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6, ease: customEase }}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 85vw, (max-width: 1200px) 70vw, 55vw"
                className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-near-black via-near-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 p-10 lg:p-16 w-full">
                <motion.p
                  className="eyebrow text-gold/80 mb-4 tracking-[0.3em]"
                >
                  {item.category}
                </motion.p>
                <h3 className="font-cormorant text-4xl md:text-5xl lg:text-7xl font-semibold text-cream mb-6 heading-punch cinematic-glow">
                  {item.title}
                </h3>
                <p className="text-warm-muted text-base lg:text-lg font-inter max-w-lg opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Final Call to Action Slide */}
          <div className="h-[65vh] w-[80vw] md:w-[65vw] lg:w-[50vw] flex flex-col items-center justify-center text-center p-12 bg-espresso border border-gold/20 rounded-sm flex-shrink-0 relative overflow-hidden">
            <div className="absolute inset-0 bg-gold/5 animate-pulse" />
            <h3 className="font-cormorant text-4xl lg:text-8xl font-semibold text-gold mb-8 italic relative z-10 leading-none">
              READY TO <br /> EXPERIENCE?
            </h3>
            <p className="text-warm-muted text-base lg:text-xl font-inter max-w-md mb-12 leading-relaxed relative z-10">
              Join us high above the Tbilisi skyline for an unforgettable fusion of rhythm and taste.
            </p>
            <div className="relative z-10">
              <a
                href="https://api.whatsapp.com/send/?phone=995595060033"
                className="btn-gold px-10 py-4 text-base lg:!px-16 lg:!py-6 lg:text-xl cinematic-glow"
              >
                Book Your Table
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
