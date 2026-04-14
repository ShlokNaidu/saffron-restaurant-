'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import DecorativeText from '@/components/DecorativeText';
import { events } from '@/data/events';

const customEase = [0.22, 1, 0.36, 1];

const typeColors = {
  'Live Music': 'bg-gold/15 text-gold border-gold/20',
  'DJ Night': 'bg-purple-500/15 text-purple-300 border-purple-400/20',
  'Special Event': 'bg-rose-500/15 text-rose-300 border-rose-400/20',
  'Concert': 'bg-blue-500/15 text-blue-300 border-blue-400/20',
  'Festival': 'bg-emerald-500/15 text-emerald-300 border-emerald-400/20',
  'Sponsorship': 'bg-amber-500/15 text-amber-300 border-amber-400/20',
};

export default function EventsPage() {
  return (
    <>
      {/* Elite Events Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden film-grain">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-near-black" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] bg-gold/5 rounded-full blur-[120px]" />
        </div>
        <div className="container-max mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: customEase }}
          >
            <p className="eyebrow mb-6 text-gold/60 tracking-[0.4em]">Live Entertainment</p>
            <h1 className="font-cormorant text-6xl sm:text-8xl lg:text-[10rem] font-semibold text-cream leading-[0.8] tracking-tighter mb-8 heading-punch">
              SKYLINE <br /> <span className="text-gold italic">RHYTHMS</span>
            </h1>
            <p className="text-warm-muted font-inter max-w-2xl mx-auto text-lg lg:text-xl">
              From soulful Persian melodies to vibrant festivals—experience the heartbeat of the 6th floor.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="section-padding bg-espresso relative overflow-hidden">
        <DecorativeText text="RHYTHM" top="40%" left="60%" opacity={0.02} />
        <div className="container-max mx-auto">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
            {events.map((event) => (
              <StaggerItem key={event.id}>
                <motion.div
                  className="card-surface overflow-hidden h-full flex flex-col group"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Card Image Area */}
                  <div className="h-64 bg-gradient-to-br from-surface to-near-black relative overflow-hidden group-hover:opacity-90 transition-opacity">
                    {/* Media Render */}
                    {event.mediaType === 'image' && (
                      <Image
                        src={event.media}
                        alt={event.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700 z-0"
                      />
                    )}

                    {event.mediaType === 'video' && (
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        poster="/images/about/venue-primary.jpg"
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 z-0 bg-espresso shadow-inner"
                      >
                        <source src={event.media} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    )}

                    {event.mediaType === 'vimeo' && (
                      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-black flex items-center justify-center">
                        <iframe
                          src={`${event.media}&background=1&autoplay=1&muted=1&loop=1`}
                          className="w-[150%] h-[150%] pointer-events-none"
                          allow="autoplay; fullscreen; picture-in-picture"
                          frameBorder="0"
                        />
                      </div>
                    )}

                    {!event.mediaType && (
                      <div className="absolute inset-0 flex items-center justify-center z-0">
                        <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center">
                          <svg className="w-8 h-8 text-gold/30" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303" />
                          </svg>
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-near-black/80 via-near-black/20 to-transparent pointer-events-none z-10" />
                    <div className="absolute top-3 left-3 z-20">
                      <span className={`px-2.5 py-1 text-[10px] font-inter font-medium rounded-sm border ${typeColors[event.type] || typeColors['Live Music']}`}>
                        {event.type}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <svg className="w-4 h-4 text-gold-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                      </svg>
                      <span className="text-gold-muted text-xs font-inter">{event.date}</span>
                    </div>
                    <h3 className="font-cormorant text-2xl font-medium text-cream tracking-heading mb-4">
                      {event.title}
                    </h3>
                    <p className="text-warm-muted text-base font-inter leading-relaxed flex-1 line-clamp-3">
                      {event.description}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Host Your Event CTA */}
      <section className="section-padding bg-near-black/40 text-center">
        <AnimatedSection>
          <p className="eyebrow mb-4">Private Events</p>
          <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-7xl font-semibold text-cream tracking-heading mb-6">
            Host Your Event at <span className="text-gold">Saffron</span>
          </h2>
          <p className="text-warm-muted text-base font-inter mb-10 max-w-2xl mx-auto leading-relaxed">
            From weddings and birthdays to corporate dinners and cultural celebrations — our rooftop venue
            is the perfect setting for any occasion.
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=995595060033&text=Hello%20Saffron%20Restaurant%2C%20I%20would%20like%20to%20inquire%20about%20events."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            Inquire About Events
          </a>
        </AnimatedSection>
      </section>
    </>
  );
}
