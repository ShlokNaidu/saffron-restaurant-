'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

const customEase = [0.22, 1, 0.36, 1];

const galleryImages = [
  '/images/game-night/1.webp',
  '/images/game-night/2.webp',
  '/images/game-night/3.webp',
  '/images/game-night/4.webp',
  '/images/game-night/5.webp',
];

export default function GameNightPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      await fetch('https://formspree.io/f/xwpkpqkv', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      setSubmitted(true);
    } catch {
      alert('Error submitting form. Please try again or contact us directly.');
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-near-black to-espresso overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,168,83,0.12),transparent_60%)]" />
        <div className="absolute top-40 left-10 w-72 h-72 bg-gold/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gold/3 rounded-full blur-[120px]" />

        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: customEase }}
            className="eyebrow mb-3"
          >
            SAFFRON Game Nights Presents:
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: customEase }}
            className="font-cormorant text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-cream tracking-heading mb-4"
          >
            Saffron&apos;s <span className="text-gold italic">Backgammon Night</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: customEase }}
            className="font-cormorant text-xl sm:text-2xl text-gold-muted italic mb-6"
          >
            A Roll of the Dice!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: customEase }}
            className="text-warm-muted font-inter max-w-3xl mx-auto text-lg md:text-xl leading-relaxed flex flex-col gap-6"
          >
            <p>
              Last night, Saffron hosted an unforgettable evening of backgammon competition! Our skilled players battled it out over the backgammon board, showcasing their strategic moves and a touch of luck.
            </p>
            <p>
              Congratulations to our backgammon champion, who took home an incredible prize of <strong>500 GEL worth of money</strong> and a selection of our finest wines!
            </p>
            <p>
              Thank you to everyone who joined us for this exciting game night. Be sure to follow us on social media for announcements about our upcoming events – you won&apos;t want to miss them!
            </p>
            <p className="text-gold font-medium text-xl mt-4">
              #SaffronTbilisi #BackgammonNight #GameNight — see you there!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Event Gallery */}
      <section className="section-padding bg-near-black/40 border-y border-gold/10">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-7xl font-semibold text-cream tracking-heading">
              Gallery <span className="text-gold">Highlights</span>
            </h2>
            <div className="gold-divider mx-auto mt-6" />
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
            {galleryImages.map((src, i) => (
              <StaggerItem
                key={i}
                className={i === 0 || i === 3 ? "col-span-2 md:col-span-1" : ""}
              >
                <div className="relative w-full aspect-square rounded-sm overflow-hidden group">
                  <Image
                    src={src}
                    alt={`Game night momentum ${i + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-espresso/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Registration Form */}
      <section className="section-padding bg-espresso text-center">
        <div className="container-max mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="eyebrow mb-4">Join The Next One</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-semibold text-cream tracking-heading mb-6 leading-tight">
              Can&apos;t Wait to see you <span className="text-gold italic">Compete</span> In Saffron Restaurant!
            </h2>
            <p className="text-warm-muted text-base md:text-lg font-inter mb-10">
              Fill in the Form Down Below. And we will contact you for registration.
            </p>

            <div className="card-surface p-6 sm:p-8 text-left">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 mx-auto bg-gold/10 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="font-cormorant text-xl text-gold mb-2">Registration Request Received!</h3>
                  <p className="text-warm-muted text-sm font-inter">
                    Thank you. We will contact you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-inter text-warm-muted mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-espresso/50 border border-gold/20 rounded-sm text-cream font-inter text-sm
                      placeholder-hints focus:outline-none focus:border-gold/50 transition-colors duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-inter text-warm-muted mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 bg-espresso/50 border border-gold/20 rounded-sm text-cream font-inter text-sm
                      placeholder-hints focus:outline-none focus:border-gold/50 transition-colors duration-300"
                      placeholder="+995..."
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-inter text-warm-muted mb-1.5">
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      title="Please enter a valid email address."
                      className="w-full px-4 py-3 bg-espresso/50 border border-gold/20 rounded-sm text-cream font-inter text-sm
                      placeholder-hints focus:outline-none focus:border-gold/50 transition-colors duration-300"
                      placeholder="your@email.com"
                    />
                  </div>

                  <button type="submit" className="btn-gold w-full text-base">
                    Send
                  </button>

                  <p className="text-hints text-xs font-inter text-center mt-4">
                    This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                  </p>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
