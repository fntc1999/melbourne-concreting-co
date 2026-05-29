// PSYCHOLOGY: #106 Serial Position Effect — strongest statement leads; #5 Anchoring Bias — credibility first; #26 Spark Effect — low effort CTA; #13 Visual Hierarchy
import { motion } from 'motion/react';

interface HeroProps {
  bookingLink: string;
}

export default function Hero({ bookingLink }: HeroProps) {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: '88vh', display: 'flex', alignItems: 'center' }}
    >
      {/* Background image with dark overlay */}
      {/* PLACEHOLDER: Replace with a real photo of a finished residential driveway or outdoor area */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(135deg, rgba(26,40,49,0.92) 0%, rgba(26,40,49,0.72) 55%, rgba(224,120,32,0.25) 100%),
            url('https://images.pexels.com/photos/8134848/pexels-photo-8134848.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 py-24 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            {/* Eyebrow */}
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: 'var(--color-cta)' }}
            >
              Melbourne Concreting Co
            </p>

            {/* H1 — outcome-first */}
            <h1
              className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
              style={{ color: '#fff', letterSpacing: '-0.02em' }}
            >
              The last driveway
              <br />
              you'll ever need.
            </h1>

            {/* Subheadline — ICP identification, addresses tradie reliability pain */}
            <p
              className="text-lg md:text-xl leading-relaxed mb-8 max-w-xl"
              style={{ color: 'rgba(255,255,255,0.85)' }}
            >
              Melbourne homeowners who want it done properly the first time — we're the concreters who call back within 24 hours, show up when we say we will, and leave your property cleaner than we found it.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <a href={bookingLink} className="btn btn-cta text-base px-8">
                Book a free site visit
              </a>
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn btn-outline text-base px-8"
              >
                See our services
              </a>
            </div>

            {/* Proof line */}
            {/* PLACEHOLDER: Replace with real years and client count when available */}
            <div className="flex flex-wrap gap-6 mt-8">
              {[
                /* PLACEHOLDER: Social proof stats */ '[X]+ driveways completed',
                'Melbourne suburbs',
                '[X] years in business',
              ].map((item) => (
                <span
                  key={item}
                  className="text-sm font-medium"
                  style={{ color: 'rgba(255,255,255,0.65)' }}
                >
                  ✓ {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
