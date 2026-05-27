// PSYCHOLOGY: #41 Reciprocity — give before asking; #26 Spark Effect — free resource lowers barrier
// PLACEHOLDER: Lead magnet — no lead magnet was provided. Build full section structure with placeholder content.
// Replace with real resource name, description, and download/opt-in URL when available.
import { motion } from 'motion/react';
import { Download } from 'lucide-react';

export default function LeadMagnet() {
  return (
    <section
      style={{
        paddingTop: 'var(--space-section)',
        paddingBottom: 'var(--space-section)',
        background: '#fff',
      }}
    >
      <div className="max-w-5xl mx-auto px-5">
        <div
          className="flex flex-col md:flex-row items-center gap-10 rounded-2xl p-8 md:p-12"
          style={{
            background: 'var(--color-bg-light)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-card)',
          }}
        >
          {/* Icon block */}
          <div
            className="w-20 h-20 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: 'var(--color-cta)' }}
          >
            <Download size={36} color="#fff" />
          </div>

          {/* Copy */}
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-15%' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <p
                className="text-sm font-semibold uppercase tracking-widest mb-2"
                style={{ color: 'var(--color-cta)' }}
              >
                Free download
              </p>
              {/* PLACEHOLDER: Replace with real lead magnet title */}
              <h2
                className="text-2xl md:text-3xl font-bold mb-3"
                style={{ color: 'var(--color-heading)' }}
              >
                [LEAD MAGNET TITLE — TO BE PROVIDED]
              </h2>
              {/* PLACEHOLDER: Replace with real lead magnet description and benefit points */}
              <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-subtle)' }}>
                [LEAD MAGNET DESCRIPTION — TO BE PROVIDED. Example: "5 questions to ask before hiring a concreter in Melbourne — what to look for, what to avoid, and how to spot a cheap shortcut before it's poured."]
              </p>
              <ul className="flex flex-col gap-1 mb-6 text-sm" style={{ color: 'var(--color-body-copy)' }}>
                <li>✓ [Benefit 1 — TO BE PROVIDED]</li>
                <li>✓ [Benefit 2 — TO BE PROVIDED]</li>
                <li>✓ [Benefit 3 — TO BE PROVIDED]</li>
              </ul>
              {/* PLACEHOLDER: Replace href with real lead magnet URL */}
              <a
                href="#"
                className="btn btn-cta text-sm px-8"
              >
                Download for free
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
