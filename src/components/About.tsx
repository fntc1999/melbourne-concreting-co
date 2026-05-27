// PSYCHOLOGY: #42 Authority Bias — credentials woven into story; #102 Storytelling Effect — background connects to ICP pain; #10 Empathy Gap
import { useState } from 'react';
import { motion } from 'motion/react';

interface AboutProps {
  bookingLink: string;
}

export default function About({ bookingLink }: AboutProps) {
  /* PLACEHOLDER: Replace headshot with real image file in /public/images/ */
  const headshotSrc = '/images/headshot.jpg';
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="about"
      style={{
        paddingTop: 'var(--space-section)',
        paddingBottom: 'var(--space-section)',
        background: '#fff',
      }}
    >
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">

          {/* Photo */}
          <motion.div
            className="shrink-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-15%' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            {imgError ? (
              <div
                className="w-48 h-48 md:w-64 md:h-64 rounded-2xl flex items-center justify-center text-3xl font-black text-white"
                style={{ background: 'var(--color-heading)' }}
                aria-label="Melbourne Concreting Co team"
              >
                {/* PLACEHOLDER: Initials fallback — replace with owner initials */}
                MC
              </div>
            ) : (
              <img
                src={headshotSrc}
                alt="Melbourne Concreting Co team on a job site"
                className="w-48 h-48 md:w-64 md:h-64 rounded-2xl object-cover"
                style={{ boxShadow: 'var(--shadow-elevated)' }}
                onError={() => setImgError(true)}
              />
            )}
          </motion.div>

          {/* Copy */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-15%' }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          >
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--color-cta)' }}
            >
              Who we are
            </p>

            {/* PLACEHOLDER: Replace with owner/founder name and genuine backstory */}
            <h2
              className="text-3xl md:text-4xl font-bold mb-5"
              style={{ color: 'var(--color-heading)' }}
            >
              Built by a Melbourne tradie who got tired of the excuses
            </h2>

            {/* PLACEHOLDER: Replace with real founder story — connect to ICP pain around unreliable tradies */}
            <div className="flex flex-col gap-4 text-base leading-relaxed" style={{ color: 'var(--color-body-copy)' }}>
              <p>
                [PLACEHOLDER: Owner background — TO BE PROVIDED. Example: "I've been in the concreting trade for [X] years. Before starting Melbourne Concreting Co, I watched job after job get done badly — base prep skipped, edges cut sloppy, clients left waiting weeks for a quote that never came. I started this business because I wanted to show homeowners that good trades work still exists in Melbourne."]
              </p>
              <p>
                [PLACEHOLDER: Connection to ICP pain — TO BE PROVIDED. Example: "Most of our clients have been burned before. Someone quoted them, took a deposit, and disappeared. Or the finish looked great for a year and then started cracking. We get it. That frustration is exactly why we operate the way we do — written quotes, consistent crews, and we don't leave site until you're satisfied with what you see."]
              </p>
              <p>
                [PLACEHOLDER: Social proof woven in — TO BE PROVIDED. Example: "In [X] years, we've completed [X]+ driveways, pathways, slabs and pool surrounds across Melbourne's suburbs. Every single one gets a site visit, a written quote, and the same crew start to finish."]
              </p>
            </div>

            {/* What to expect on the call */}
            <div
              className="mt-8 p-5 rounded-xl text-sm"
              style={{ background: 'var(--color-bg-light)', border: '1px solid var(--color-border)' }}
            >
              <p className="font-semibold mb-2" style={{ color: 'var(--color-heading)' }}>
                What to expect at the site visit
              </p>
              <ul className="flex flex-col gap-1" style={{ color: 'var(--color-subtle)' }}>
                <li>✓ We come to you — usually within 2–3 business days</li>
                <li>✓ We walk the site, take measurements, and discuss your options</li>
                <li>✓ Written quote sent the same day in most cases</li>
                <li>✓ No pressure, no invoice — just a clear picture of what's involved</li>
              </ul>
            </div>

            <a
              href={bookingLink}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('book-a-call')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn btn-cta mt-8 inline-flex"
            >
              Book your free site visit
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

