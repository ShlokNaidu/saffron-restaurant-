'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import DecorativeText from '@/components/DecorativeText';

const customEase = [0.22, 1, 0.36, 1];

const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
      </svg>
    ),
    title: 'On-Table Grills',
    description: 'Worried about food getting cold? Our innovative on-table grills keep your dishes warm all night long, so you can relax, chat, and dance to live music without a care.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
      </svg>
    ),
    title: 'Live Music Nightly',
    description: 'Every evening, talented performers fill the rooftop with soulful Persian melodies, creating an atmosphere that turns dinner into an unforgettable celebration.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'Halal Certified',
    description: 'All our meats are halal certified, prepared with the highest standards. We proudly welcome guests from every background and dietary tradition.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438a2.25 2.25 0 01-1.228 2.39l-.403.2a2.048 2.048 0 01-1.79.065c-3.26-1.444-5.543-4.574-5.543-8.219" />
      </svg>
    ),
    title: 'International Clientele',
    description: 'Located in a prestigious five-star hotel, we welcome guests from all over the world, creating a warm and cosmopolitan dining atmosphere.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Elite About Hero */}
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
            <p className="eyebrow mb-6 text-gold/60 tracking-[0.4em]">Our Legacy</p>
            <h1 className="font-cormorant text-6xl sm:text-8xl lg:text-[10rem] font-semibold text-cream leading-[0.8] tracking-tighter mb-8 heading-punch">
              A STORY OF <br /> <span className="text-gold italic">SOUL & SPICE</span>
            </h1>
            <p className="text-warm-muted font-inter max-w-2xl mx-auto text-lg lg:text-xl">
              Perched on the 6th floor of the Golden Palace, we narrate the culinary heart of Persia through the skyline of Tbilisi.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-espresso relative overflow-hidden">
        <DecorativeText text="HERITAGE" top="60%" left="50%" opacity={0.02} />
        <div className="container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection>
              <div className="space-y-8">
                <p className="eyebrow">The Foundation</p>
                <h2 className="font-cormorant text-5xl sm:text-6xl lg:text-8xl font-semibold text-cream tracking-heading">
                  Passion for <span className="text-gold italic">Soul</span>
                </h2>
                <div className="space-y-6 text-warm-muted font-inter text-base md:text-lg leading-relaxed">
                  <p>
                    At Saffron Restaurant, we are passionate about serving exceptional food. We use the freshest 
                    ingredients and the highest quality meats to create dishes that are both flavorful and satisfying.
                  </p>
                  <p>
                    Our menu blends the best of Persian cuisine with international favorites, featuring everything 
                    from kebabs and barbecue to hearty stews, fresh salads, and comforting soups.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative">
                <div className="aspect-[4/5] relative rounded-lg overflow-hidden border border-gold/10 scale-95 lg:scale-100">
                  <Image
                    src="/images/about/venue-primary.jpg"
                    alt="Saffron Restaurant Venue"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Elite Sensory Break */}
      <section className="bg-cream py-32 lg:py-64 relative overflow-hidden film-grain">
        <DecorativeText text="CULTURE" top="50%" left="50%" opacity={0.05} color="#1a0f05" />
        <div className="container-max mx-auto px-4 text-center relative z-10">
          <AnimatedSection>
            <span className="text-gold-muted font-cormorant text-8xl lg:text-[14rem] opacity-20 block leading-none mb-4 scale-x-[-1]">“</span>
            <h2 className="font-cormorant text-4xl sm:text-6xl lg:text-8xl font-light text-espresso tracking-tight italic leading-[0.9] max-w-6xl mx-auto cinematic-glow">
              We don&apos;t just serve meals; we share the <span className="font-semibold block sm:inline px-4">golden heritage</span> 
              of my homeland with the beautiful city of Tbilisi.
            </h2>
            <div className="w-16 h-[1px] bg-gold-muted mx-auto mt-16 mb-8" />
            <p className="font-inter text-espresso/40 uppercase tracking-[0.5em] text-xs">The Vision of Saffron</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-near-black/40">
        <div className="container-max mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="eyebrow mb-4">What Makes Us Special</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-7xl font-semibold text-cream tracking-heading">
              The Saffron <span className="text-gold">Experience</span>
            </h2>
            <div className="gold-divider mx-auto mt-6" />
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8" staggerDelay={0.1}>
            {features.map((feature, i) => (
              <StaggerItem key={i}>
                <motion.div
                  className="card-surface p-8 flex gap-5 group"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold/20 transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-cormorant text-2xl font-medium text-cream tracking-heading mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-warm-muted text-sm font-inter leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Culinary Gallery */}
      <section className="section-padding bg-near-black/60 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,168,83,0.05),transparent_70%)]" />
        <div className="container-max mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <AnimatedSection>
              <div className="aspect-[3/4] md:aspect-[4/5] relative rounded-lg overflow-hidden group">
                <Image 
                  src="/images/about/culinary-1.jpg" 
                  alt="Saffron Culinary Specialty" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-near-black to-transparent">
                  <h3 className="font-cormorant text-3xl text-gold mb-3 italic">A Taste of Heritage</h3>
                  <p className="text-cream font-inter text-base">Authentic Persian flavors prepared with time-honored recipes.</p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="aspect-[3/4] md:aspect-[4/5] relative rounded-lg overflow-hidden group">
                <Image 
                  src="/images/about/culinary-2.jpg" 
                  alt="Saffron Authentic Dining" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-near-black to-transparent">
                  <h3 className="font-cormorant text-3xl text-gold mb-3 italic">The Art of Dining</h3>
                  <p className="text-cream font-inter text-base">Experience the rich textures and aromas of the Golden Palace&apos;s 6th floor.</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Events & Hosting */}
      <section className="section-padding bg-espresso">
        <div className="container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection delay={0.1}>
              <div className="relative">
                <div className="aspect-video relative rounded-lg overflow-hidden border border-gold/10">
                  <Image
                    src="/images/about/event-hosting.jpg"
                    alt="Events at Saffron"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-near-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <p className="text-gold font-cormorant text-lg italic">Live Events & Celebrations</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="space-y-8">
                <p className="eyebrow">Events & Private Dining</p>
                <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-7xl font-semibold text-cream tracking-heading">
                  More Than Just a <span className="text-gold">Restaurant</span>
                </h2>
                <div className="space-y-6 text-warm-muted font-inter text-base md:text-lg leading-relaxed">
                  <p>
                    At Saffron Restaurant, we believe in creating more than just delicious meals — we create 
                    experiences. From live musical performances and vibrant dance festivals to business meetings, 
                    corporate lunches, weddings, and birthday celebrations, we&apos;re here to make your special 
                    moments unforgettable.
                  </p>
                  <p>
                    On selected evenings, we offer live music, enhancing your dining experience with the perfect 
                    atmosphere. Whether it&apos;s an intimate gathering or a large celebration, Saffron Restaurant 
                    is the ideal venue in Tbilisi for all kinds of events.
                  </p>
                </div>
                <a
                  href="https://api.whatsapp.com/send/?phone=995595060033&text=Hello%20Saffron%20Restaurant%2C%20I%20would%20like%20to%20reach%20out."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold inline-flex mt-2"
                >
                  Inquire About Events
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
