import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFAB from '@/components/WhatsAppFAB';
import CookieConsent from '@/components/CookieConsent';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-cormorant',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://saffronrestaurant.ge'),
  title: {
    default: 'Saffron Restaurant Tbilisi — Persian & Halal Rooftop Dining',
    template: '%s | Saffron Restaurant Tbilisi',
  },
  description: 'Saffron Restaurant — authentic Persian and halal cuisine on the rooftop of Golden Palace Hotel, Tbilisi. Dine in, takeaway, or order online. Live music, on-table grills, and unforgettable views.',
  keywords: ['Saffron Restaurant', 'Tbilisi restaurant', 'Persian food Tbilisi', 'halal restaurant Tbilisi', 'rooftop restaurant Tbilisi', 'BBQ Tbilisi', 'Golden Palace Hotel'],
  authors: [{ name: 'Saffron Restaurant' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://saffronrestaurant.ge',
    siteName: 'Saffron Restaurant Tbilisi',
    title: 'Saffron Restaurant Tbilisi — Persian & Halal Rooftop Dining',
    description: 'Saffron Restaurant — authentic Persian and halal cuisine on the rooftop of Golden Palace Hotel, Tbilisi. Dine in, takeaway, or order online. Live music, on-table grills, and unforgettable views.',
    images: [
      {
        url: 'https://img1.wsimg.com/isteam/ip/e31ecd18-baaf-40d9-81fd-da6b270450b8/saffron%20restaurant.png',
        width: 1200,
        height: 630,
        alt: 'Saffron Restaurant Tbilisi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saffron Restaurant Tbilisi — Persian & Halal Rooftop Dining',
    description: 'Authentic Persian cuisine on the rooftop of Golden Palace Hotel, Tbilisi.',
    images: ['https://img1.wsimg.com/isteam/ip/e31ecd18-baaf-40d9-81fd-da6b270450b8/saffron%20restaurant.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-espresso text-cream font-inter antialiased">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppFAB />
        <CookieConsent />
      </body>
    </html>
  );
}
