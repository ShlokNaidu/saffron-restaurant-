'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { menuCategories } from '@/data/menu';

import DecorativeText from '@/components/DecorativeText';

const customEase = [0.22, 1, 0.36, 1];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);
  const categoryRefs = useRef({});
  const navRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id);
          }
        });
      },
      { rootMargin: '-120px 0px -60% 0px', threshold: 0 }
    );

    menuCategories.forEach((cat) => {
      const el = document.getElementById(cat.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Auto-scroll the nav bar to center the active category on mobile
  useEffect(() => {
    if (activeCategory && navRef.current) {
      const activeBtn = navRef.current.querySelector(`button[data-id="${activeCategory}"]`);
      if (activeBtn && window.innerWidth < 1024) { // Only on tablet/mobile
        activeBtn.scrollIntoView({
          behavior: 'smooth',
          inline: 'center',
          block: 'nearest'
        });
      }
    }
  }, [activeCategory]);

  const scrollToCategory = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 140;
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Elite Menu Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden film-grain">
        <div className="absolute inset-0">
          <Image
            src="/images/menu/kings-favorite.webp"
            alt="Menu Essence"
            fill
            sizes="100vw"
            className="object-cover opacity-30 grayscale-[50%] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-near-black via-near-black/60 to-near-black" />
        </div>

        <div className="container-max mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: customEase }}
          >
            <p className="eyebrow mb-6 text-gold/60 tracking-[0.4em]">Culinary Masterpieces</p>
            <h1 className="font-cormorant text-6xl sm:text-8xl lg:text-[10rem] font-semibold text-cream leading-[0.8] tracking-tighter mb-8 heading-punch">
              THE <span className="text-gold italic">SAFFRON</span> <br /> COLLECTION
            </h1>
            <p className="text-warm-muted font-inter max-w-xl mx-auto text-lg lg:text-xl">
              A curated journey through the aromatic heart of Persia & the Caucasus.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sticky Category Nav */}
      <div
        ref={navRef}
        className="sticky top-16 sm:top-20 z-30 bg-espresso/95 backdrop-blur-md border-b border-gold/10"
      >
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-1 py-3 scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                data-id={cat.id}
                onClick={() => scrollToCategory(cat.id)}
                className={`flex-shrink-0 px-4 py-2 text-sm font-inter font-medium rounded-sm transition-all duration-300
                  ${activeCategory === cat.id
                    ? 'bg-gold/15 text-gold border border-gold/30'
                    : 'text-warm-muted hover:text-cream border border-transparent'
                  }`}
              >
                {cat.name.replace('Main Courses — ', '').replace('Main Course — ', '')}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <section className="section-padding bg-espresso !pt-8">
        <div className="container-max mx-auto">
          {menuCategories.map((category) => (
            <div key={category.id} id={category.id} className="mb-32 lg:mb-48 last:mb-0 scroll-mt-48 relative">
              <DecorativeText text={category.id.toUpperCase()} top="0%" left="50%" opacity={0.02} />

              <AnimatedSection className="mb-12 text-center lg:text-left">
                <p className="eyebrow mb-4 tracking-[0.3em] text-gold/60">{category.subtitle}</p>
                <h2 className="font-cormorant text-5xl sm:text-6xl lg:text-8xl font-semibold text-cream tracking-heading leading-none">
                  {category.name.replace('Main Courses — ', '').replace('Main Course — ', '')}
                </h2>
                <div className="w-12 h-[1px] bg-gold/30 mt-8 mx-auto lg:mx-0" />
              </AnimatedSection>

              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4" staggerDelay={0.05}>
                {category.items.map((item, i) => (
                  <StaggerItem key={i}>
                    <motion.div
                      className="card-surface p-4 flex flex-col sm:flex-row gap-4 group overflow-hidden"
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.image && (
                        <div className="relative w-full sm:w-24 h-48 sm:h-24 flex-shrink-0 bg-surface rounded-sm overflow-hidden mb-2 sm:mb-0">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            sizes="(max-width: 640px) 100vw, 96px"
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      )}

                      <div className="flex-1 flex flex-col justify-center min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h3 className="font-cormorant text-lg font-medium text-cream tracking-heading leading-tight">
                            {item.name}
                            {item.chefPick && (
                              <span className="inline-block ml-2 align-middle px-1.5 py-0.5 bg-gold/15 text-gold text-[10px] font-inter font-medium rounded-sm border border-gold/20 whitespace-nowrap">
                                Chef&apos;s Pick
                              </span>
                            )}
                          </h3>
                          <span className="text-gold font-cormorant text-lg font-medium whitespace-nowrap flex-shrink-0">
                            {item.priceLabel || `₾${item.price}`}
                          </span>
                        </div>
                        {item.description && (
                          <p className="text-warm-muted text-xs sm:text-sm font-inter leading-relaxed">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding bg-near-black/40 text-center">
        <AnimatedSection>
          <h2 className="font-cormorant text-2xl sm:text-3xl font-semibold text-cream tracking-heading mb-4">
            Ready to <span className="text-gold">Dine</span>?
          </h2>
          <p className="text-warm-muted text-sm font-inter mb-6 max-w-md mx-auto">
            Reserve your table now and experience the best of Persian cuisine in Tbilisi.
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=995595060033"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            Reserve a Table
          </a>
        </AnimatedSection>
      </section>
    </>
  );
}
