'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import CountUp from '@/components/CountUp';
import ReviewCarousel from '@/components/ReviewCarousel';
import HorizontalShowcase from '@/components/HorizontalShowcase';
import DecorativeText from '@/components/DecorativeText';
import { signatureDishes } from '@/data/menu';

const customEase = [0.22, 1, 0.36, 1];

const heroWords = ['Where', 'Persian', 'Flavour', 'Meets', 'Georgian', 'Sky'];

function HeroSection() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden film-grain">
      {/* Cinematic Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover grayscale-[20%] brightness-[0.4] scale-110"
        >
          <source src="/images/events/negin-event.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-near-black/60 via-transparent to-near-black" />
        <div className="absolute inset-0 bg-near-black/20 backdrop-blur-[2px]" />
      </div>
      
      {/* Decorative Glows */}
      <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vh] bg-gold/5 rounded-full blur-[120px] animate-pulse" />

      <div className="relative z-10 container-max mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: customEase }}
        >
          <p className="eyebrow mb-10 text-gold/80 tracking-[0.3em] cinematic-glow">
            6th Floor Rooftop · Golden Palace Hotel
          </p>
          
          <h1 className="font-cormorant text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold heading-punch text-cream mb-12 luxury-text-shadow">
            <motion.span 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: customEase }}
              className="block"
            >
              Where <span className="text-gold italic">Persian Nights</span>
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: customEase }}
              className="block"
            >
              Meet the Tbilisi Skyline
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a
              href="https://api.whatsapp.com/send/?phone=995595060033"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold !px-12 !py-5 text-lg cinematic-glow"
            >
              Book Your Evening
            </a>
            <Link href="/menu" className="btn-outline !px-12 !py-5 text-lg backdrop-blur-sm">
              Explore the Flavours
            </Link>
          </motion.div>
        </motion.div>

        {/* Cinematic Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1.5 }}
          className="absolute bottom-12 left-0 right-0 px-8 flex justify-between items-end"
        >
          <div className="hidden lg:block text-left text-[10px] uppercase tracking-[0.4em] text-cream/30 vertical-text h-32">
            Scroll to Experience
          </div>
          <div className="w-[1px] h-24 bg-gradient-to-t from-gold/40 to-transparent mx-auto hidden sm:block" />
          <div className="hidden lg:block text-right text-[10px] uppercase tracking-[0.4em] text-cream/30">
            Tbilisi, Georgia
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatBar() {
  const stats = [
    { value: 4.4, suffix: '', label: 'Google Rating', isDecimal: true },
    { value: 199, suffix: '+', label: 'Reviews', isDecimal: false },
    { value: 6, suffix: 'th', label: 'Floor Rooftop', isDecimal: false },
    { value: 7, suffix: '', label: 'Nights of Live Music', isDecimal: false },
  ];

  return (
    <section className="relative bg-near-black py-20 lg:py-32 border-b border-gold/10">
      <div className="container-max mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16">
          {stats.map((stat, i) => (
            <AnimatedSection key={i} delay={i * 0.1} className="text-center group">
              <p className="font-cormorant text-4xl sm:text-5xl lg:text-7xl font-semibold text-gold mb-4 cinematic-glow group-hover:scale-110 transition-transform duration-500">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </p>
              <div className="w-8 h-[1px] bg-gold/20 mx-auto mb-4" />
              <p className="text-cream/40 text-[10px] uppercase tracking-[0.3em] font-inter">{stat.label}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function CulinaryPhilosophy() {
  return (
    <section className="section-padding bg-near-black relative overflow-hidden">
      <DecorativeText text="ESSENCE" top="10%" left="-5%" opacity={0.02} />
      <div className="container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5 relative">
            <AnimatedSection>
              <div className="aspect-[4/5] relative rounded-lg overflow-hidden border border-gold/10">
                <Image 
                  src="/images/about/culinary-1.jpg" 
                  alt="Saffron Soul" 
                  fill 
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-gold p-8 rounded-full hidden lg:flex flex-col items-center justify-center text-espresso text-center z-10 w-32 h-32 shadow-2xl">
                <span className="font-cormorant text-2xl font-bold leading-none">100%</span>
                <span className="text-[10px] font-inter uppercase font-bold tracking-widest mt-1">Halal</span>
              </div>
            </AnimatedSection>
          </div>
          
          <div className="lg:col-span-7">
            <AnimatedSection delay={0.2}>
              <p className="eyebrow text-gold mb-6">Our Philosophy</p>
              <h2 className="font-cormorant text-5xl sm:text-6xl lg:text-8xl font-semibold text-cream tracking-heading leading-tight mb-8">
                The Soul of <span className="text-gold italic">Persian</span> Gastronomy
              </h2>
              <div className="space-y-6 text-warm-muted font-inter text-lg leading-relaxed max-w-xl">
                <p>
                  At Saffron, we don&apos;t just serve food; we narrate the rich heritage of Persia through 
                  aromatic spices, flame-grilled perfection, and centuries-old traditions.
                </p>
                <div className="flex items-center gap-6 pt-4">
                  <div className="h-[1px] w-12 bg-gold/50" />
                  <p className="font-cormorant italic text-xl text-gold">Chef Mehdi & Chef Fredo</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhySaffron() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008V7.5zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
        </svg>
      ),
      title: 'Rooftop Views',
      description: 'Dine on the 6th floor of Golden Palace Hotel with panoramic views across Tbilisi\'s skyline.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
        </svg>
      ),
      title: 'Traditional Recipes',
      description: 'Freshest ingredients, time-honored techniques, and on-table grills that keep your heart and food warm.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
        </svg>
      ),
      title: 'Live Ambience',
      description: 'Enjoy live performances nightly, premium hookah, and an atmosphere that turns dinner into a celebration.',
    },
  ];

  return (
    <section className="section-padding bg-espresso relative overflow-hidden">
      <DecorativeText text="LUXURY" top="60%" left="40%" opacity={0.02} />
      <div className="container-max mx-auto">
        <AnimatedSection className="mb-20">
          <p className="eyebrow mb-4">The Distinction</p>
          <h2 className="font-cormorant text-5xl sm:text-6xl lg:text-8xl font-semibold text-cream tracking-heading">
            Why <span className="text-gold italic">Saffron</span>
          </h2>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {features.map((feature, i) => (
            <StaggerItem key={i}>
              <div className="group">
                <div className="text-gold mb-6 block transform group-hover:scale-110 transition-transform duration-500">
                  {feature.icon}
                </div>
                <h3 className="font-cormorant text-3xl font-medium text-cream mb-4 tracking-heading">
                  {feature.title}
                </h3>
                <p className="text-warm-muted text-base font-inter leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function LightBreak() {
  return (
    <section className="bg-cream py-40 lg:py-64 relative overflow-hidden">
      <div className="container-max mx-auto px-4 text-center relative z-10">
        <AnimatedSection>
          <span className="text-gold-muted font-cormorant text-8xl lg:text-[14rem] opacity-10 block leading-none mb-4 scale-x-[-1]">“</span>
          <h2 className="font-cormorant text-3xl sm:text-6xl lg:text-8xl font-light text-espresso tracking-tight italic leading-[0.9] max-w-5xl mx-auto cinematic-glow">
            We don&apos;t just serve food; we narrate the <span className="font-semibold block sm:inline px-4">soul of Persia</span> 
            high above the heartbeat of Tbilisi.
          </h2>
          <div className="w-24 h-[1px] bg-gold-muted mx-auto mt-20 mb-10" />
          <p className="font-inter text-espresso/40 uppercase tracking-[0.5em] text-xs">Exclusivity Reimagined</p>
        </AnimatedSection>
      </div>
      {/* Subtle Grain over the light section */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
}

function HeritageMoment() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image 
          src="/images/about/venue-primary.jpg" 
          alt="Saffron Heritage" 
          fill 
          sizes="100vw"
          className="object-cover opacity-30 grayscale saturate-0 scale-105 hover:scale-100 transition-all duration-[3s]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-near-black via-near-black/40 to-near-black" />
      </div>
      
      <div className="container-max mx-auto px-4 relative z-10 text-center">
        <AnimatedSection>
          <p className="eyebrow text-gold/60 mb-8 tracking-[0.5em]">Defining Excellence</p>
          <h2 className="font-cormorant text-5xl sm:text-9xl lg:text-[14rem] font-semibold text-cream tracking-tighter leading-[0.8] mb-16 heading-punch">
            TIMELESS <br /> <span className="text-gold italic cinematic-glow">TRADITION</span>
          </h2>
          <Link href="/about-us" className="btn-gold !px-16 !py-6 text-xl cinematic-glow">
            Our Soul
          </Link>
        </AnimatedSection>
      </div>

      {/* Side Label */}
      <div className="absolute right-12 top-1/2 -rotate-90 origin-right hidden lg:block">
        <span className="text-[10px] uppercase tracking-[0.5em] text-cream/20">Legacy of the 6th Floor</span>
      </div>
    </section>
  );
}

function SignatureDishes() {
  return (
    <section className="section-padding bg-near-black overflow-hidden relative">
      <DecorativeText text="FLAVOUR" top="30%" left="60%" opacity={0.02} />
      <div className="container-max mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <AnimatedSection className="max-w-2xl">
            <p className="eyebrow mb-4">From Our Kitchen</p>
            <h2 className="font-cormorant text-5xl sm:text-6xl lg:text-8xl font-semibold text-cream tracking-heading">
              Signature <br /> <span className="text-gold italic">Masterpieces</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2} className="hidden lg:block">
            <Link href="/menu" className="btn-outline mb-4">View Full Menu</Link>
          </AnimatedSection>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {signatureDishes.map((dish, i) => (
            <StaggerItem key={i} className="h-full">
              <motion.div
                className="card-surface overflow-hidden group h-full flex flex-col"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="h-48 bg-gradient-to-br from-surface to-espresso relative overflow-hidden flex-shrink-0">
                  {dish.image ? (
                    <Image
                      src={dish.image}
                      alt={dish.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 z-0"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center z-0">
                      <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center">
                        <svg className="w-10 h-10 text-gold/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                        </svg>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent z-10" />
                  <div className="absolute top-3 right-3 z-20">
                    <span className="px-3 py-1 bg-gold/90 text-espresso text-xs font-inter font-medium rounded-sm shadow-sm">
                      Chef&apos;s Pick
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="eyebrow mb-1">{dish.category}</p>
                  <h3 className="font-cormorant text-xl font-medium text-cream mb-2 tracking-heading">
                    {dish.name}
                  </h3>
                  <p className="text-warm-muted text-sm font-inter mb-6 leading-relaxed flex-1">
                    {dish.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-gold font-cormorant text-xl font-medium">₾{dish.price}</span>
                    <Link 
                      href="/menu" 
                      className="text-gold-muted text-sm font-inter hover:text-gold transition-colors duration-300 flex items-center gap-1"
                    >
                      View Menu
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function ReviewsSection() {
  return (
    <section className="section-padding bg-espresso overflow-hidden">
      <div className="container-max mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="eyebrow mb-4">What Our Guests Say</p>
          <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-7xl font-semibold text-cream tracking-heading">
            Real <span className="text-gold">Reviews</span>
          </h2>
          <div className="gold-divider mx-auto mt-6" />
        </AnimatedSection>
        <AnimatedSection>
          <ReviewCarousel />
        </AnimatedSection>
      </div>
    </section>
  );
}

function DeliveryPlatforms() {
  const platforms = [
    { name: 'Wolt', url: 'https://wolt.com/en/geo/tbilisi/restaurant/saffron-restaurant', color: '#009DE0' },
    { name: 'Bolt Food', url: 'https://food.bolt.eu/en-US/15/p/72334-saffron-restaurant', color: '#34D186' },
    { name: 'Glovo', url: 'https://ufv9.adj.st?adjust_deeplink=glovoapp%3A%2F%2Fopen%3Flink_type%3Dstore%26store_id%3D409172&adjust_t=s321jkn', color: '#FFC244' },
  ];

  return (
    <section className="section-padding bg-near-black/40">
      <div className="container-max mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="eyebrow mb-4">Order Online</p>
          <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-7xl font-semibold text-cream tracking-heading">
            Delivery <span className="text-gold">Partners</span>
          </h2>
          <p className="text-warm-muted font-inter text-base mt-4">From top-rated food delivery apps in Georgia</p>
        </AnimatedSection>

        <StaggerContainer className="flex flex-col sm:flex-row items-center justify-center gap-6 lg:gap-10">
          {platforms.map((platform) => (
            <StaggerItem key={platform.name}>
              <motion.a
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-surface px-10 py-6 flex items-center justify-center min-w-[180px] group"
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <span 
                  className="font-cormorant text-2xl font-semibold tracking-heading transition-colors duration-300"
                  style={{ color: platform.color }}
                >
                  {platform.name}
                </span>
              </motion.a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function EventsTeaser() {
  return (
    <section className="section-padding bg-espresso">
      <div className="container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <AnimatedSection>
            <motion.div
              className="card-surface p-8 lg:p-10 h-full flex flex-col justify-between"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <p className="eyebrow mb-3">Every Week</p>
                <h3 className="font-cormorant text-2xl lg:text-3xl font-semibold text-cream tracking-heading mb-3">
                  Live Music & <span className="text-gold">Events</span>
                </h3>
                <p className="text-warm-muted text-sm font-inter leading-relaxed mb-6">
                  From live Persian music performances to DJ nights and cultural celebrations — 
                  there&apos;s always something special happening at Saffron.
                </p>
              </div>
              <Link href="/events" className="btn-outline text-sm w-fit">
                View All Events
              </Link>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <motion.div
              className="card-surface p-8 lg:p-10 h-full flex flex-col justify-between"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <p className="eyebrow mb-3">Join the Competition</p>
                <h3 className="font-cormorant text-2xl lg:text-3xl font-semibold text-cream tracking-heading mb-3">
                  Saffron <span className="text-gold">Game Night</span>
                </h3>
                <p className="text-warm-muted text-sm font-inter leading-relaxed mb-6">
                  Battle it out over backgammon with a chance to win 500 GEL 
                  in prizes and our finest wines. Strategy, luck, and great food.
                </p>
              </div>
              <Link href="/game-night" className="btn-outline text-sm w-fit">
                Learn More
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section className="section-padding bg-near-black/40">
      <div className="container-max mx-auto">
        <AnimatedSection className="max-w-xl mx-auto text-center">
          <p className="eyebrow mb-4">Stay Connected</p>
          <h2 className="font-cormorant text-4xl sm:text-5xl font-semibold text-cream tracking-heading mb-4">
            Get <span className="text-gold">10% Off</span> Your First Visit
          </h2>
          <p className="text-warm-muted text-base font-inter mb-10">
            Subscribe to our newsletter for exclusive offers, event announcements, and updates.
          </p>
          <form
            action="https://formspree.io/f/xwpkpqkv"
            method="POST"
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-3 bg-surface border border-gold/20 rounded-sm text-cream font-inter text-sm 
              placeholder-hints focus:outline-none focus:border-gold/50 transition-colors duration-300"
              aria-label="Email address for newsletter"
            />
            <button type="submit" className="btn-gold text-sm whitespace-nowrap">
              Subscribe
            </button>
          </form>
          <p className="text-hints text-xs font-inter mt-3">
            No spam, ever. Unsubscribe anytime.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatBar />
      <CulinaryPhilosophy />
      <WhySaffron />
      <LightBreak />
      <HorizontalShowcase />
      <HeritageMoment />
      <SignatureDishes />
      <ReviewsSection />
      <DeliveryPlatforms />
      <EventsTeaser />
      <Newsletter />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Restaurant',
            name: 'Saffron Restaurant',
            url: 'https://saffronrestaurant.ge',
            telephone: '+995595060033',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '62 Aghmashenebeli Alley, 6th Floor, Golden Palace Hotel',
              addressLocality: 'Tbilisi',
              addressCountry: 'GE',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 41.6938,
              longitude: 44.8015,
            },
            openingHoursSpecification: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
              opens: '13:00',
              closes: '23:00',
            },
            servesCuisine: ['Persian', 'Halal', 'BBQ'],
            priceRange: '$$',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.4',
              reviewCount: '199',
            },
            image: 'https://img1.wsimg.com/isteam/ip/e31ecd18-baaf-40d9-81fd-da6b270450b8/saffron%20restaurant.png',
          }),
        }}
      />
    </>
  );
}
