'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';

const customEase = [0.22, 1, 0.36, 1];

export default function BookPage() {
  const [form, setForm] = useState({
    name: '',
    date: '',
    time: '',
    guests: '2',
    requests: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `🍽️ Table Reservation Request\n\n` +
      `Name: ${form.name}\n` +
      `Date: ${form.date}\n` +
      `Time: ${form.time}\n` +
      `Guests: ${form.guests}\n` +
      `${form.requests ? `Special Requests: ${form.requests}\n` : ''}` +
      `\nSent via saffronrestaurant.ge`
    );
    window.open(`https://api.whatsapp.com/send/?phone=995595060033&text=${message}`, '_blank');
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-near-black to-espresso">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,168,83,0.08),transparent_60%)]" />
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: customEase }}
            className="eyebrow mb-3"
          >
            Reservations
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: customEase }}
            className="font-cormorant text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-cream tracking-heading mb-6"
          >
            Book Your <span className="text-gold italic">Table</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: customEase }}
            className="text-warm-muted font-inter text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Reserve your rooftop dining experience. Fill in the form below or message us directly on WhatsApp.
          </motion.p>
        </div>
      </section>

      {/* Booking Form + Info */}
      <section className="section-padding bg-espresso">
        <div className="container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Form */}
            <AnimatedSection>
              <div className="card-surface p-8 sm:p-10">
                <h2 className="font-cormorant text-3xl font-semibold text-cream tracking-heading mb-8">
                  Reservation Details
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-inter text-warm-muted mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-espresso/50 border border-gold/20 rounded-sm text-cream font-inter text-sm
                      placeholder-hints focus:outline-none focus:border-gold/50 transition-colors duration-300"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="date" className="block text-sm font-inter text-warm-muted mb-1.5">
                        Date
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={form.date}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-espresso/50 border border-gold/20 rounded-sm text-cream font-inter text-sm
                        focus:outline-none focus:border-gold/50 transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <label htmlFor="time" className="block text-sm font-inter text-warm-muted mb-1.5">
                        Time
                      </label>
                      <select
                        id="time"
                        name="time"
                        value={form.time}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-espresso/50 border border-gold/20 rounded-sm text-cream font-inter text-sm
                        focus:outline-none focus:border-gold/50 transition-colors duration-300"
                      >
                        <option value="">Select time</option>
                        {['13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
                          '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30',
                          '21:00', '21:30', '22:00', '22:30'].map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="guests" className="block text-sm font-inter text-warm-muted mb-1.5">
                      Number of Guests
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      value={form.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-espresso/50 border border-gold/20 rounded-sm text-cream font-inter text-sm
                      focus:outline-none focus:border-gold/50 transition-colors duration-300"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, '9+'].map((n) => (
                        <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="requests" className="block text-sm font-inter text-warm-muted mb-1.5">
                      Special Requests <span className="text-hints">(optional)</span>
                    </label>
                    <textarea
                      id="requests"
                      name="requests"
                      value={form.requests}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 bg-espresso/50 border border-gold/20 rounded-sm text-cream font-inter text-sm
                      placeholder-hints focus:outline-none focus:border-gold/50 transition-colors duration-300 resize-none"
                      placeholder="Birthday, dietary needs, seating preference..."
                    />
                  </div>

                  <button type="submit" className="btn-gold w-full text-base">
                    Reserve via WhatsApp
                  </button>
                </form>

                <div className="mt-6 pt-6 border-t border-gold/10 text-center">
                  <p className="text-hints text-xs font-inter mb-3">Or contact us directly</p>
                  <a
                    href="https://api.whatsapp.com/send/?phone=995595060033&text=Hello%20Saffron%20Restaurant%2C%20I%20have%20a%20question%20about%20making%20a%20reservation."
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
                {/* Hours */}
                <div className="card-surface p-8 sm:p-10">
                  <h3 className="font-cormorant text-2xl font-semibold text-cream tracking-heading mb-6 flex items-center gap-3">
                    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Opening Hours
                  </h3>
                  <div className="space-y-3">
                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                      <div key={day} className="flex justify-between text-base font-inter">
                        <span className="text-warm-muted">{day}</span>
                        <span className="text-cream">1:00 PM – 11:00 PM</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Location */}
                <div className="card-surface p-8 sm:p-10">
                  <h3 className="font-cormorant text-2xl font-semibold text-cream tracking-heading mb-6 flex items-center gap-3">
                    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    Location
                  </h3>
                  <p className="text-warm-muted text-base font-inter leading-relaxed mb-6">
                    6th Floor, Golden Palace Hotel<br />
                    62 Aghmashenebeli Alley<br />
                    Tbilisi, Georgia
                  </p>
                  <a
                    href="tel:+995595060033"
                    className="text-gold text-lg font-inter hover:text-gold-muted transition-colors duration-300"
                  >
                    +995 595 06 00 33
                  </a>
                </div>

                {/* Google Maps */}
                <div className="card-surface overflow-hidden rounded-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.5!2d44.8015!3d41.6938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDQxJzM3LjciTiA0NMKwNDgnMDUuNCJF!5e0!3m2!1sen!2sge!4v1234567890"
                    width="100%"
                    height="280"
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
    </>
  );
}
