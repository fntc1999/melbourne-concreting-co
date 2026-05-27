// PSYCHOLOGY: #106 Serial Position Effect — last impression; trust signals anchor the close
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [logoError, setLogoError] = useState(false);
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        paddingTop: 'var(--space-section-sm)',
        paddingBottom: 'var(--space-section-sm)',
        background: 'var(--color-footer-bg)',
        color: 'rgba(255,255,255,0.75)',
      }}
    >
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 mb-10">

          {/* Left — brand */}
          <div className="flex-1 max-w-xs">
            {logoError ? (
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="w-9 h-9 rounded flex items-center justify-center text-sm font-black text-white"
                  style={{ background: 'var(--color-cta)' }}
                >
                  MC
                </span>
                <span className="text-white font-bold text-base">Melbourne Concreting Co</span>
              </div>
            ) : (
              <img
                src="/images/logo.png"
                alt="Melbourne Concreting Co logo"
                className="h-10 mb-4 object-contain"
                onError={() => setLogoError(true)}
              />
            )}
            <p className="text-sm leading-relaxed mb-4">
              {/* PLACEHOLDER: Replace tagline */}
              Residential concreting for Melbourne homeowners. Driveways, pathways, shed slabs, and pool surrounds done properly.
            </p>
            <div className="flex gap-3">
              {/* PLACEHOLDER: Replace with real social URLs */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-cta)] rounded"
                aria-label="Melbourne Concreting Co on Facebook"
              >
                Facebook
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-cta)] rounded"
                aria-label="Melbourne Concreting Co on Instagram"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Right — contact */}
          <div>
            <p className="text-white font-semibold text-sm uppercase tracking-wide mb-4">Get in touch</p>
            <div className="flex flex-col gap-2 text-sm">
              {/* PLACEHOLDER: Replace with real phone number */}
              <a
                href="tel:[PHONE]"
                className="text-white/75 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-cta)] rounded"
              >
                [PHONE — TO BE PROVIDED]
              </a>
              {/* PLACEHOLDER: Replace with real email address */}
              <a
                href="mailto:[EMAIL]"
                className="text-white/75 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-cta)] rounded"
              >
                [EMAIL — TO BE PROVIDED]
              </a>
              <span className="text-white/50">Melbourne, VIC, Australia</span>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-6 text-xs"
          style={{ borderTop: '1px solid rgba(255,255,255,0.10)', color: 'rgba(255,255,255,0.40)' }}
        >
          <span>© {year} Melbourne Concreting Co. All rights reserved.</span>
          <div className="flex gap-4">
            <Link
              to="/privacy-policy"
              className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-cta)] rounded"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-use"
              className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-cta)] rounded"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
