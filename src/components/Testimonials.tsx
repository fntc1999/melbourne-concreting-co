// PSYCHOLOGY: #30 Social Proof — specific attribution; #40 Singularity Effect — one detailed story beats a crowd claim; #102 Storytelling Effect — quote as mini-story
// PLACEHOLDER: All three testimonials are placeholders. Replace with real client quotes, names, and suburb before going live.
import { motion } from 'motion/react';

const testimonials = [
  {
    quote:
      `[INSERT TESTIMONIAL — e.g. "We'd had three concreters come out and either not quote at all or quote and disappear. These guys called back same day, gave us a proper written quote, showed up exactly when they said they would, and the finish is beautiful. 10 years from now it'll still look good."]`,
    name: '[Client Name]',
    detail: '[Suburb, Melbourne]',
  },
  {
    quote:
      `[INSERT TESTIMONIAL — e.g. "We wanted exposed aggregate to match our neighbours but had been burned by a guy who did shoddy formwork. Melbourne Concreting Co came out, explained exactly what they'd do differently, and delivered. The edges are sharp, the colour is consistent, and they cleaned up properly after themselves."]`,
    name: '[Client Name]',
    detail: '[Suburb, Melbourne]',
  },
  {
    quote:
      `[INSERT TESTIMONIAL — e.g. "Straight talking, fair price, no nonsense. They told us the job would take two days — it took two days. Told us to stay off it for a week — we did. Now we have a driveway we're genuinely proud of."]`,
    name: '[Client Name]',
    detail: '[Suburb, Melbourne]',
  },
];

export default function Testimonials() {
  return (
    <section
      style={{
        paddingTop: 'var(--space-section)',
        paddingBottom: 'var(--space-section)',
        background: 'var(--color-bg-light)',
      }}
    >
      <div className="max-w-6xl mx-auto px-5">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--color-cta)' }}
          >
            From Melbourne homeowners
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ color: 'var(--color-heading)' }}
          >
            What our clients say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-15%' }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
              className="flex flex-col p-6 rounded-xl"
              style={{
                background: '#fff',
                boxShadow: 'var(--shadow-card)',
                borderRadius: 'var(--radius-card)',
                border: '1px solid var(--color-border)',
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, s) => (
                  <span key={s} style={{ color: 'var(--color-cta)', fontSize: '16px' }}>★</span>
                ))}
              </div>

              {/* Quote */}
              <p
                className="text-sm leading-relaxed flex-1 mb-4 italic"
                style={{ color: 'var(--color-body-copy)' }}
              >
                "{t.quote}"
              </p>

              {/* Attribution */}
              <div className="mt-auto pt-4" style={{ borderTop: '1px solid var(--color-border)' }}>
                <p className="font-semibold text-sm" style={{ color: 'var(--color-heading)' }}>
                  {t.name}
                </p>
                <p className="text-xs mt-0.5" style={{ color: 'var(--color-subtle)' }}>
                  {t.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
