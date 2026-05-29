// PSYCHOLOGY: #1 Hick's Law — 3 cards, not 8; #12 Von Restorff Effect — driveways card as lead offer; #23 Framing — outcome bullets + price anchoring; #13 Visual Hierarchy — image first
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

interface OfferCardsProps {
  bookingLink: string;
}

const offers = [
  {
    name: 'Driveways',
    highlight: true,
    priceFrom: 'From $15,000',
    // PLACEHOLDER: Replace with a real photo of a finished residential driveway
    image: 'https://images.pexels.com/photos/15260092/pexels-photo-15260092.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
    imageAlt: 'Finished exposed aggregate residential driveway',
    description:
      'New and replacement driveways for Melbourne homes. Exposed aggregate, brushed, or honed — we help you pick the right finish for your property and budget.',
    outcomes: [
      'Adds kerb appeal and real resale value',
      'Properly formed edges that won\'t chip or crack',
      'Built to handle Melbourne weather for decades',
    ],
    cta: 'Get a driveway quote',
  },
  {
    name: 'Pool surrounds & outdoor areas',
    highlight: false,
    priceFrom: 'From $20,000',
    // PLACEHOLDER: Replace with a real photo of a finished pool surround or alfresco area
    image: 'https://images.pexels.com/photos/913162/pexels-photo-913162.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
    imageAlt: 'Modern concrete pool surround with outdoor furniture',
    description:
      'Pool surrounds, alfresco slabs, and entertaining areas. Non-slip finishes that hold up year-round and tie in with your landscaping and decking.',
    outcomes: [
      'Non-slip finish — safe when wet',
      'Tolerates pool chemicals and UV without fading',
      'Ties in neatly with landscaping and decking',
    ],
    cta: 'Book a site visit',
  },
  {
    name: 'Full outdoor packages',
    highlight: false,
    priceFrom: 'From $35,000',
    // PLACEHOLDER: Replace with a real photo of a completed full outdoor concrete project
    image: 'https://images.pexels.com/photos/8134847/pexels-photo-8134847.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
    imageAlt: 'Contemporary home with complete concrete outdoor area',
    description:
      'Driveway, entertaining area, pathways, and pool surround — done in one project by one crew. No handoff problems, no mismatched finishes.',
    outcomes: [
      'One crew, one quote, one point of contact',
      'Matching finishes across the whole property',
      'Significant saving versus booking separate jobs',
    ],
    cta: 'Discuss your project',
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map((offer, i) => (
            <motion.div
              key={offer.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-15%' }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.08 }}
              className="flex flex-col overflow-hidden"
              style={{
                background: offer.highlight ? 'var(--color-heading)' : '#fff',
                boxShadow: offer.highlight ? 'var(--shadow-elevated)' : 'var(--shadow-card)',
                borderRadius: 'var(--radius-card)',
                border: offer.highlight ? 'none' : `1px solid var(--color-border)`,
              }}
            >
              {/* Photo */}
              <div className="relative h-48 overflow-hidden bg-gray-200 shrink-0">
                <img
                  src={offer.image}
                  alt={offer.imageAlt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {offer.highlight && (
                  <span
                    className="absolute top-3 left-3 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                    style={{ background: 'var(--color-cta)', color: '#fff' }}
                  >
                    Most popular
                  </span>
                )}
                {/* Price badge */}
                <span
                  className="absolute bottom-3 right-3 text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ background: 'rgba(26,40,49,0.85)', color: '#fff' }}
                >
                  {offer.priceFrom}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                <h3
                  className="text-xl font-bold mb-3"
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
                        style={{ color: 'var(--color-cta)' }}
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
                  className="btn btn-cta text-sm self-start w-full justify-center"
                  style={{ minHeight: '48px', padding: '12px 24px' }}
                >
                  {offer.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
