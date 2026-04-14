import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found',
};

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-espresso">
      <div className="text-center px-4">
        <p className="text-gold font-cormorant text-[120px] sm:text-[160px] font-semibold leading-none opacity-20">
          404
        </p>
        <h1 className="font-cormorant text-3xl sm:text-4xl font-semibold text-cream tracking-heading -mt-8 mb-4">
          Page Not Found
        </h1>
        <p className="text-warm-muted font-inter text-sm mb-8 max-w-md mx-auto">
          It seems this page has wandered off. Perhaps it&apos;s enjoying the rooftop view.
          Let us guide you back.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="btn-gold">
            Back to Home
          </Link>
          <Link href="/menu" className="btn-outline">
            View Our Menu
          </Link>
        </div>
      </div>
    </section>
  );
}
