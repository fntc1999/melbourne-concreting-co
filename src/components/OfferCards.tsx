// PSYCHOLOGY: #1 Hick's Law — 4 cards max; #12 Von Restorff Effect — driveways card styled as lead offer; #23 Framing — outcome bullets not feature lists
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

interface OfferCardsProps {
  bookingLink: string;
}

const offers = [
  {
    name: 'Driveways',
    highlight: true,
    description:
      `New or replacement driveways for Melbourne homes. Exposed aggregate, brushed, honed, or plain — we'll help you pick the right finish for your property and budget.`,
    outcomes: [
      `Adds kerb appeal and resale value`,
      `Designed to handle Melbourne's freeze-thaw cycles`,
      `Properly formed edges that won't chip or crack`,
    ],
    cta: 'Get a driveway quote',
    // PLACEHOLDER: Add real driveway image from Pexels/Unsplash if available
  },
  {
    name: 'Pathways',
    highlight: false,
    description:
      'Front paths, side access, and rear garden paths. We form, pour, and finish to a clean standard that matches your existing property style.',
    outcomes: [
      'Safe, even surface — no trip hazards',
      'Matches your driveway or existing concrete',
      'Finished edges and clean joins every time',
    ],
    cta: 'Ask about pathway pricing',
  },
  {
    name: 'Shed slabs',
    highlight: false,
    description:
      `Properly reinforced concrete slabs for sheds, garages, and workshops. We set up correctly from the start so you don't have cracking problems two years down the track.`,
    outcomes: [
      'Reinforced to the right spec for the load',
      'Level, square, and ready for your shed kit',
      'No shortcuts on drainage or compaction',
    ],
    cta: 'Get a slab quote',
  },
  {
    name: 'Pool surrounds',
    highlight: false,
    description:
      `Non-slip finishes around pools and entertaining areas. We work around your pool builder's timeline and make sure the finish holds up year-round.`,
    outcomes: [
      'Non-slip finish — safe when wet',
      'Tolerates pool chemicals and UV without fading',
      'Ties in neatly with landscaping and decking',
    ],
    cta: 'Book a site visit',
  },
];

export default function OfferCards({ bookingLink }: OfferCardsProps) {
  return (
    <section
      style={{
        paddingTop: 'var(--space-section-sm)',
        paddingBottom: 'var(--space-section)',
        background: 'var(--color-bg-light)',
      }}
    >
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {offers.map((offer, i) => (
            <motion.div
              key={offer.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-15%' }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.08 }}
              className="flex flex-col rounded-xl p-6 md:p-8"
              style={{
                background: offer.highlight ? 'var(--color-heading)' : '#fff',
                color: offer.highlight ? '#fff' : 'var(--color-body-copy)',
                boxShadow: offer.highlight ? 'var(--shadow-elevated)' : 'var(--shadow-card)',
                borderRadius: 'var(--radius-card)',
                border: offer.highlight ? 'none' : `1px solid var(--color-border)`,
              }}
            >
              {offer.highlight && (
                <span
                  className="text-xs font-bold uppercase tracking-widest mb-3 inline-block px-3 py-1 rounded-full"
                  style={{ background: 'var(--color-cta)', color: '#fff', width: 'fit-content' }}
                >
                  Most popular
                </span>
              )}

              <h3
                className="text-2xl font-bold mb-3"
                style={{ color: offer.highlight ? '#fff' : 'var(--color-heading)' }}
              >
                {offer.name}
              </h3>

              <p
                className="text-sm leading-relaxed mb-5"
                style={{ color: offer.highlight ? 'rgba(255,255,255,0.80)' : 'var(--color-subtle)' }}
              >
                {offer.description}
              </p>

              <ul className="flex flex-col gap-2 mb-6 flex-1">
                {offer.outcomes.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm">
                    <CheckCircle2
                      size={16}
                      className="mt-0.5 shrink-0"
                      style={{ color: offer.highlight ? 'var(--color-cta)' : 'var(--color-cta)' }}
                    />
                    <span style={{ color: offer.highlight ? 'rgba(255,255,255,0.85)' : 'var(--color-body-copy)' }}>
                      {point}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={bookingLink}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('book-a-call')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn btn-cta text-sm self-start"
                style={{ minHeight: '48px', padding: '12px 28px' }}
              >
                {offer.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
