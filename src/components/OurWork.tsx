// PSYCHOLOGY: #13 Visual Hierarchy — images before copy; #30 Social Proof — real finished work; #40 Singularity Effect — each photo tells one story
// PLACEHOLDER: Replace all 6 images with real job site photos before going live
import { motion } from 'motion/react';

const photos = [
  {
    id: '15260092',
    src: 'https://images.pexels.com/photos/15260092/pexels-photo-15260092.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    label: 'Exposed Aggregate',
    category: 'Driveway',
  },
  {
    id: '9685866',
    src: 'https://images.pexels.com/photos/9685866/pexels-photo-9685866.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    label: 'Brushed Concrete',
    category: 'Driveway',
  },
  {
    id: '913162',
    src: 'https://images.pexels.com/photos/913162/pexels-photo-913162.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    label: 'Pool Surround',
    category: 'Outdoor Area',
  },
  {
    id: '11541087',
    src: 'https://images.pexels.com/photos/11541087/pexels-photo-11541087.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    label: 'Honed Finish',
    category: 'Driveway',
  },
  {
    id: '15383436',
    src: 'https://images.pexels.com/photos/15383436/pexels-photo-15383436.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    label: 'Alfresco Area',
    category: 'Outdoor Area',
  },
  {
    id: '8134847',
    src: 'https://images.pexels.com/photos/8134847/pexels-photo-8134847.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    label: 'Full Package',
    category: 'Full Outdoor',
  },
];

export default function OurWork() {
  return (
    <section
      id="our-work"
      style={{
        paddingTop: 'var(--space-section)',
        paddingBottom: 'var(--space-section)',
        background: '#fff',
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
            Recent projects
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: 'var(--color-heading)' }}
          >
            The finished product speaks for itself
          </h2>
          <p className="text-base md:text-lg max-w-xl mx-auto leading-relaxed" style={{ color: 'var(--color-subtle)' }}>
            Every job below was a residential project in Melbourne. Each one started with a free site visit and a written quote.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.06 }}
              className="relative overflow-hidden group"
              style={{ borderRadius: 'var(--radius-card)', aspectRatio: '4/3' }}
            >
              <img
                src={photo.src}
                alt={`${photo.label} — Melbourne Concreting Co`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {/* Label overlay */}
              <div
                className="absolute inset-0 flex flex-col justify-end p-4"
                style={{
                  background: 'linear-gradient(to top, rgba(26,40,49,0.80) 0%, transparent 60%)',
                }}
              >
                <span
                  className="text-xs font-semibold uppercase tracking-widest mb-1"
                  style={{ color: 'var(--color-cta)' }}
                >
                  {photo.category}
                </span>
                <span className="text-sm font-bold text-white">{photo.label}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* PLACEHOLDER: Add a "View more" link to a full gallery page once real photos are available */}
      </div>
    </section>
  );
}
