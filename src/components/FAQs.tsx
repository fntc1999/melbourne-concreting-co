// PSYCHOLOGY: #4 Cognitive Load — structured answers; #32 Curiosity Gap — accordion invites clicks; #69 Reactance — answers remove objections
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How does the quoting process work?',
    answer: (
      <div>
        <p>You get in touch, we come out and look at the job in person, and we give you a written quote before we leave. No ballpark figures over the phone and no waiting a week to find out what it'll cost.</p>
        <p className="mt-3">The site visit is free. We measure up, check the ground conditions and access, and talk you through your options. Most quotes come back the same day.</p>
      </div>
    ),
  },
  {
    question: 'Who is this right for?',
    answer: (
      <div>
        <p>We do our best work for Melbourne homeowners who want it done properly the first time. If you're after the cheapest quote in the suburb, we're probably not your crew.</p>
        <p className="mt-3">But if you want a driveway that still looks good in 15 years — and a tradie who actually shows up when they say they will — you're in the right place.</p>
      </div>
    ),
  },
  {
    question: 'How much does a new driveway cost?',
    answer: (
      <div>
        <p>A standard residential driveway in Melbourne typically runs between $8,000 and $20,000+, depending on size, access, finish, and site conditions. We don't give quotes without seeing the job first because every property is different.</p>
        <p className="mt-3">What we can tell you: we don't cut corners on base preparation, reinforcement, or edge forming — those are the things that determine whether your driveway looks good in year 10 or starts crumbling in year 3.</p>
      </div>
    ),
  },
  {
    question: "What makes you different from other concreters?",
    answer: (
      <div>
        <p>We answer the phone. We show up when we say we will. We give you a written quote before work starts. We finish the job clean.</p>
        <p className="mt-3">Those things shouldn't be rare in this industry — but they are. We built this business because we were frustrated watching homeowners get let down by tradies who ghost after quoting, cut corners on site prep, or leave a mess behind.</p>
      </div>
    ),
  },
  {
    question: 'How long will the job take?',
    answer: (
      <div>
        <p>Most residential driveways take one to three days to form and pour. Concrete then needs around seven days before you can drive on it, and reaches full strength at 28 days.</p>
        <p className="mt-3">We'll walk you through the exact timeline for your job when we come out to quote — including how long we'll need access to the site and what we need from you on pour day.</p>
      </div>
    ),
  },
  {
    question: "I've been quoted before and the tradie never followed up. How do I know you're different?",
    answer: (
      <div>
        <p>You wouldn't be the first to tell us that. We've heard the story more times than we can count — tradie comes out, homeowner never hears back, job sits unbooked for months.</p>
        <p className="mt-3">What we can offer is this: we call back within 24 hours, we come out on time, we send you a written quote, and we keep you in the loop from start to finish. If you've been burned before, that's exactly who we built this business for.</p>
      </div>
    ),
  },
  {
    question: 'What concrete finishes are available?',
    answer: (
      <div>
        <p>We work in exposed aggregate, brushed (broom finish), honed, stencilled, and plain grey. Each has different price points, maintenance requirements, and looks.</p>
        <p className="mt-3">We'll show you samples when we visit and help you pick what works for your home and budget. Exposed aggregate is the most popular choice in Melbourne — it's non-slip, low maintenance, and holds up well in our climate.</p>
      </div>
    ),
  },
  {
    question: 'Do you offer a workmanship guarantee?',
    answer: (
      /* PLACEHOLDER: Replace with real guarantee terms once confirmed */
      <div>
        <p>[PLACEHOLDER: Workmanship guarantee details — TO BE PROVIDED. Example: "Yes — we stand behind our work. If there's a structural issue with any pour we've completed within [X] years of the job date, we'll come back and assess it at no charge. We'll confirm the full terms in writing when we quote your job."]</p>
      </div>
    ),
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      style={{
        paddingTop: 'var(--space-section)',
        paddingBottom: 'var(--space-section)',
        background: '#fff',
      }}
    >
      <div className="max-w-3xl mx-auto px-5">
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
            Common questions
          </p>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--color-heading)' }}>
            Things people usually ask
          </h2>
        </motion.div>

        <div className="flex flex-col gap-2">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-15%' }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.04 }}
              className="rounded-xl overflow-hidden"
              style={{ border: '1px solid var(--color-border)' }}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-base gap-4 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[var(--color-cta)]"
                style={{ background: openIndex === index ? 'var(--color-bg-light)' : '#fff', color: 'var(--color-heading)' }}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <ChevronDown
                  size={18}
                  className="shrink-0 transition-transform duration-200"
                  style={{
                    transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                    color: 'var(--color-cta)',
                  }}
                />
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div
                      className="px-6 pb-5 pt-2 text-sm leading-relaxed"
                      style={{ color: 'var(--color-body-copy)', background: 'var(--color-bg-light)' }}
                    >
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
