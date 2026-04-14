'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';

const customEase = [0.22, 1, 0.36, 1];

export default function ContactPage() {
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
      // Open WhatsApp as fallback
      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');
      const text = encodeURIComponent(`Contact from website:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
      window.open(`https://wa.me/995595060033?text=${text}`, '_blank');
    }
  };

  return (
    <>
      {/* Elite Contact Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden film-grain">
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
            <p className="eyebrow mb-6 text-gold/60 tracking-[0.4em]">Get in Touch</p>
            <h1 className="font-cormorant text-6xl sm:text-8xl lg:text-[10rem] font-semibold text-cream leading-[0.8] tracking-tighter mb-8 heading-punch">
              CONNECT <br /> <span className="text-gold italic">WITH US</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="section-padding bg-espresso">
        <div className="container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Form */}
            <AnimatedSection>
              <div className="card-surface p-8 sm:p-10">
                <h2 className="font-cormorant text-3xl font-semibold text-cream tracking-heading mb-8">
                  Send Us a Message
                </h2>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 mx-auto bg-gold/10 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <h3 className="font-cormorant text-xl text-gold mb-2">Message Sent!</h3>
                    <p className="text-warm-muted text-sm font-inter">
                      Thank you for reaching out. We&apos;ll get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-inter text-warm-muted mb-1.5">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-espresso/50 border border-gold/20 rounded-sm text-cream font-inter text-sm
                        placeholder-hints focus:outline-none focus:border-gold/50 transition-colors duration-300"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-inter text-warm-muted mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-espresso/50 border border-gold/20 rounded-sm text-cream font-inter text-sm
                        placeholder-hints focus:outline-none focus:border-gold/50 transition-colors duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-message" className="block text-sm font-inter text-warm-muted mb-1.5">
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-espresso/50 border border-gold/20 rounded-sm text-cream font-inter text-sm
                        placeholder-hints focus:outline-none focus:border-gold/50 transition-colors duration-300 resize-none"
                        placeholder="How can we help you?"
                      />
                    </div>
                    <button type="submit" className="btn-gold w-full text-base">
                      Send Message
                    </button>
                  </form>
                )}

                <div className="mt-6 pt-6 border-t border-gold/10 text-center">
                  <p className="text-hints text-xs font-inter mb-3">Prefer instant communication?</p>
                  <a
                    href="https://api.whatsapp.com/send/?phone=995595060033&text=Hello%20Saffron%20Restaurant%2C%20I%20would%20like%20to%20get%20in%20touch."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline text-sm"
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Message on WhatsApp
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* Info Side */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-8">
                {/* Contact Info */}
                <div className="card-surface p-8 sm:p-10">
                  <h3 className="font-cormorant text-2xl font-semibold text-cream tracking-heading mb-8">
                    Contact Information
                  </h3>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-cream text-base font-inter font-medium mb-1">Address</p>
                        <p className="text-warm-muted text-base font-inter leading-relaxed">
                          6th Floor, Golden Palace Hotel<br />
                          62 Aghmashenebeli Alley<br />
                          Tbilisi, Georgia
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-cream text-base font-inter font-medium mb-1">Phone</p>
                        <a href="tel:+995595060033" className="text-warm-muted text-base font-inter hover:text-gold transition-colors">
                          +995 595 06 00 33
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-cream text-sm font-inter font-medium mb-0.5">Hours</p>
                        <p className="text-warm-muted text-sm font-inter">
                          Monday – Sunday<br />
                          1:00 PM – 11:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Google Maps */}
                <div className="card-surface overflow-hidden rounded-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.5!2d44.8015!3d41.6938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDQxJzM3LjciTiA0NMKwNDgnMDUuNCJF!5e0!3m2!1sen!2sge!4v1234567890"
                    width="100%"
                    height="300"
                    style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.9) contrast(0.9)' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Saffron Restaurant location on Google Maps"
                    className="w-full"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

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
          }),
        }}
      />
    </>
  );
}
