// PSYCHOLOGY: #13 Visual Hierarchy — logo anchors brand; #8 Fitts's Law — CTA large and accessible
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, X } from 'lucide-react';

interface NavBarProps {
  bookingLink: string;
}

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Our work', href: '#our-work' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
];

function scrollTo(href: string) {
  const id = href.slice(1);
  const el = document.getElementById(id);
  if (el) {
    setTimeout(() => {
      el.scrollIntoView({ behavior: 'smooth' });
    }, 350);
  }
}

export default function NavBar({ bookingLink }: NavBarProps) {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 w-full"
      style={{ background: 'var(--color-heading)' }}
    >
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2 text-white font-bold text-lg tracking-tight"
          aria-label="Melbourne Concreting Co — home"
        >
          <span
            className="w-8 h-8 rounded flex items-center justify-center text-sm font-black"
            style={{ background: 'var(--color-cta)', color: '#fff' }}
          >
            MC
          </span>
          <span className="hidden sm:inline">Melbourne Concreting Co</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
              className="text-white/80 hover:text-white text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-cta)] focus:ring-offset-2 focus:ring-offset-[var(--color-heading)] rounded"
            >
              {link.label}
            </a>
          ))}
          <a
            href={bookingLink}
            onClick={(e) => { e.preventDefault(); scrollTo(bookingLink); }}
            className="btn btn-cta text-sm px-6"
            style={{ minHeight: '40px', padding: '10px 24px' }}
          >
            Book a free quote
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-cta)] rounded"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="md:hidden overflow-hidden"
            style={{ background: 'var(--color-heading)' }}
          >
            <div className="flex flex-col px-5 pb-5 pt-2 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(false);
                    scrollTo(link.href);
                  }}
                  className="text-white/80 hover:text-white text-base font-medium py-2 border-b border-white/10 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={bookingLink}
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(false);
                  scrollTo(bookingLink);
                }}
                className="btn btn-cta w-full justify-center mt-2"
              >
                Book a free quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
