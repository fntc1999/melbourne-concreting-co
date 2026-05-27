// PSYCHOLOGY: #62 Labor Illusion — sets context before showing offers; #4 Cognitive Load — section header reduces overwhelm
import { motion } from 'motion/react';

export default function OfferIntro() {
  return (
    <section
      id="services"
      style={{
        paddingTop: 'var(--space-section)',
        paddingBottom: 'var(--space-section-sm)',
        background: 'var(--color-bg-light)',
      }}
    >
      <div className="max-w-6xl mx-auto px-5">
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--color-cta)' }}
          >
            What we do
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: 'var(--color-heading)' }}
          >
            Residential concreting, done properly
          </h2>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: 'var(--color-subtle)' }}>
            We specialise in driveways, pathways, shed slabs, and pool surrounds for Melbourne homeowners. Every job gets the same crew, the same standards, and a written quote before we start.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
