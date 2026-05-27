// PSYCHOLOGY: #26 Spark Effect — low perceived effort; #1 Hick's Law — four fields max; #69 Reactance — no pressure framing; #30 Social Proof — trust bullets
import { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Loader2 } from 'lucide-react';

interface FreeCallCTAProps {
  bookingLink: string;
}

type FormState = 'idle' | 'submitting' | 'success' | 'error';

const trustPoints = [
  'We come to you — free, no obligation',
  'Written quote before work starts',
  'Most quotes delivered same day',
  'No pushy sales — just a straight conversation',
];

export default function FreeCallCTA({ bookingLink: _bookingLink }: FreeCallCTAProps) {
  const [formState, setFormState] = useState<FormState>('idle');
  const [fields, setFields] = useState({ name: '', phone: '', suburb: '', message: '' });
  const [errors, setErrors] = useState<Partial<typeof fields>>({});

  function validate() {
    const next: Partial<typeof fields> = {};
    if (!fields.name.trim()) next.name = 'Please enter your name';
    if (!fields.phone.trim()) next.phone = 'Please enter your phone number';
    if (!fields.suburb.trim()) next.suburb = 'Please enter your suburb';
    return next;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setFormState('submitting');

    try {
      // PLACEHOLDER: Replace YOUR_FORM_ID with your Formspree form ID
      // Sign up free at https://formspree.io — takes 2 minutes
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: fields.name,
          phone: fields.phone,
          suburb: fields.suburb,
          message: fields.message,
        }),
      });
      if (res.ok) {
        setFormState('success');
      } else {
        setFormState('error');
      }
    } catch {
      setFormState('error');
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFields(f => ({ ...f, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors(er => ({ ...er, [name]: undefined }));
    }
  }

  return (
    <section
      id="book-a-call"
      style={{
        paddingTop: 'var(--space-section)',
        paddingBottom: 'var(--space-section)',
        background: 'var(--color-heading)',
      }}
    >
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

          {/* Left — copy */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-15%' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: 'var(--color-cta)' }}
            >
              Book a free site visit
            </p>

            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight"
            >
              Tell us about your job — we'll come to you
            </h2>

            <p className="text-lg leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Fill in the form and we'll be in touch within 24 hours to book a time that suits you. No obligation, no invoice at the end of the visit.
            </p>

            <ul className="flex flex-col gap-3">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <CheckCircle2
                    size={18}
                    className="shrink-0"
                    style={{ color: 'var(--color-cta)' }}
                  />
                  <span className="text-sm" style={{ color: 'rgba(255,255,255,0.80)' }}>
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right — form */}
          <motion.div
            className="w-full lg:w-[440px] shrink-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-15%' }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          >
            <div
              className="rounded-2xl p-6 md:p-8"
              style={{ background: '#fff', boxShadow: 'var(--shadow-elevated)' }}
            >
              {formState === 'success' ? (
                <div className="flex flex-col items-center text-center py-6">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                    style={{ background: 'var(--color-cta)' }}
                  >
                    <CheckCircle2 size={28} color="#fff" />
                  </div>
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: 'var(--color-heading)' }}
                  >
                    Got it — we'll be in touch
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-subtle)' }}>
                    We typically respond within a few hours during business hours. We'll call you to book a time for the site visit.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h3
                    className="text-xl font-bold mb-1"
                    style={{ color: 'var(--color-heading)' }}
                  >
                    Get a free quote
                  </h3>
                  <p className="text-sm mb-6" style={{ color: 'var(--color-subtle)' }}>
                    We'll call you back within 24 hours.
                  </p>

                  <div className="flex flex-col gap-4">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-1"
                        style={{ color: 'var(--color-heading)' }}
                      >
                        Your name <span style={{ color: 'var(--color-cta)' }}>*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="e.g. Sarah Thompson"
                        value={fields.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg text-sm border focus:outline-none focus:ring-2 focus:ring-[var(--color-cta)]"
                        style={{
                          border: errors.name ? '1px solid #e53e3e' : '1px solid var(--color-border)',
                          color: 'var(--color-body-copy)',
                          background: '#fff',
                        }}
                      />
                      {errors.name && (
                        <p className="text-xs mt-1" style={{ color: '#e53e3e' }}>{errors.name}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium mb-1"
                        style={{ color: 'var(--color-heading)' }}
                      >
                        Phone number <span style={{ color: 'var(--color-cta)' }}>*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="e.g. 0412 345 678"
                        value={fields.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg text-sm border focus:outline-none focus:ring-2 focus:ring-[var(--color-cta)]"
                        style={{
                          border: errors.phone ? '1px solid #e53e3e' : '1px solid var(--color-border)',
                          color: 'var(--color-body-copy)',
                          background: '#fff',
                        }}
                      />
                      {errors.phone && (
                        <p className="text-xs mt-1" style={{ color: '#e53e3e' }}>{errors.phone}</p>
                      )}
                    </div>

                    {/* Suburb */}
                    <div>
                      <label
                        htmlFor="suburb"
                        className="block text-sm font-medium mb-1"
                        style={{ color: 'var(--color-heading)' }}
                      >
                        Suburb <span style={{ color: 'var(--color-cta)' }}>*</span>
                      </label>
                      <input
                        id="suburb"
                        name="suburb"
                        type="text"
                        autoComplete="address-level2"
                        placeholder="e.g. Hawthorn"
                        value={fields.suburb}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg text-sm border focus:outline-none focus:ring-2 focus:ring-[var(--color-cta)]"
                        style={{
                          border: errors.suburb ? '1px solid #e53e3e' : '1px solid var(--color-border)',
                          color: 'var(--color-body-copy)',
                          background: '#fff',
                        }}
                      />
                      {errors.suburb && (
                        <p className="text-xs mt-1" style={{ color: '#e53e3e' }}>{errors.suburb}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-1"
                        style={{ color: 'var(--color-heading)' }}
                      >
                        What do you need done? <span style={{ color: 'var(--color-subtle)', fontWeight: 400 }}>(optional)</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        placeholder="e.g. New exposed aggregate driveway, approx 60m²"
                        value={fields.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg text-sm border focus:outline-none focus:ring-2 focus:ring-[var(--color-cta)] resize-none"
                        style={{
                          border: '1px solid var(--color-border)',
                          color: 'var(--color-body-copy)',
                          background: '#fff',
                        }}
                      />
                    </div>

                    {/* Error banner */}
                    {formState === 'error' && (
                      <p
                        className="text-sm px-4 py-3 rounded-lg"
                        style={{ background: '#fff5f5', color: '#c53030', border: '1px solid #fed7d7' }}
                      >
                        Something went wrong. Please try again or call us directly.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={formState === 'submitting'}
                      className="btn btn-cta w-full justify-center text-sm"
                      style={{ minHeight: '52px' }}
                    >
                      {formState === 'submitting' ? (
                        <>
                          <Loader2 size={16} className="mr-2 animate-spin" />
                          Sending…
                        </>
                      ) : (
                        'Book my free site visit'
                      )}
                    </button>

                    <p className="text-center text-xs" style={{ color: 'var(--color-subtle)' }}>
                      No obligation · We respond within 24 hours
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
