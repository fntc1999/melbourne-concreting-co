// Jurisdiction: Australia — Privacy Act 1988, OAIC, Australian Spam Act 2003
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  const year = new Date().getFullYear();
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-16 md:px-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium mb-8 hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-[var(--color-cta)] rounded"
          style={{ color: 'var(--color-cta)' }}
        >
          ← Back to home
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: 'var(--color-heading)' }}>
          Privacy policy
        </h1>
        <p className="text-sm mb-8" style={{ color: 'var(--color-subtle)' }}>
          Last updated: {year}
        </p>

        <div className="prose max-w-none text-base leading-relaxed" style={{ color: 'var(--color-body-copy)' }}>

          <h2 className="text-xl font-bold mt-8 mb-3" style={{ color: 'var(--color-heading)' }}>About this policy</h2>
          <p>Melbourne Concreting Co ("we", "us", "our") is committed to protecting your personal information. This policy explains how we collect, use, store, and disclose personal information in accordance with the <em>Privacy Act 1988</em> (Cth) and the Australian Privacy Principles.</p>

          <h2 className="text-xl font-bold mt-8 mb-3" style={{ color: 'var(--color-heading)' }}>What we collect</h2>
          <p>We may collect the following personal information:</p>
          <ul className="list-disc pl-5 mt-2 flex flex-col gap-1">
            <li>Name, phone number, and email address when you contact us or request a quote</li>
            <li>Property address and job details when arranging a site visit</li>
            <li>Communications you send us by phone, email, or through our website</li>
            <li>Usage data collected automatically when you visit our website (see Cookies, below)</li>
          </ul>

          <h2 className="text-xl font-bold mt-8 mb-3" style={{ color: 'var(--color-heading)' }}>Why we collect it</h2>
          <p>We collect personal information to:</p>
          <ul className="list-disc pl-5 mt-2 flex flex-col gap-1">
            <li>Respond to enquiries and provide quotes</li>
            <li>Schedule and carry out concreting work</li>
            <li>Send service-related communications (job updates, invoices)</li>
            <li>Improve our website and services</li>
            <li>Meet legal and regulatory obligations</li>
          </ul>
          <p className="mt-3">We will not use your personal information for any purpose you would not reasonably expect.</p>

          <h2 className="text-xl font-bold mt-8 mb-3" style={{ color: 'var(--color-heading)' }}>How we store your information</h2>
          <p>Your information is stored securely. We take reasonable steps to protect personal information from misuse, interference, loss, and unauthorised access. We retain your information only as long as necessary to fulfil the purpose for which it was collected, or as required by law.</p>

          <h2 className="text-xl font-bold mt-8 mb-3" style={{ color: 'var(--color-heading)' }}>Third parties</h2>
          <p>We do not sell, trade, or rent your personal information to third parties. We may share your information with service providers who assist in operating our business (for example, scheduling or invoicing tools), on the condition that they keep it confidential and use it only to perform services for us.</p>

          <h2 className="text-xl font-bold mt-8 mb-3" style={{ color: 'var(--color-heading)' }}>Cookies</h2>
          <p>Our website may use cookies to improve your browsing experience. Cookies are small files stored on your device that help us understand how you use our site. You can disable cookies in your browser settings, though some site features may not work as intended.</p>

          <h2 className="text-xl font-bold mt-8 mb-3" style={{ color: 'var(--color-heading)' }}>Marketing communications</h2>
          <p>If you have consented to receive marketing emails, you can unsubscribe at any time by clicking the unsubscribe link in any email or by contacting us directly. We comply with the <em>Spam Act 2003</em> (Cth).</p>

          <h2 className="text-xl font-bold mt-8 mb-3" style={{ color: 'var(--color-heading)' }}>Access, correction, and deletion</h2>
          <p>You have the right to request access to the personal information we hold about you, to correct inaccurate information, or to request deletion where we are not required by law to retain it. To make a request, contact us using the details below.</p>

          <h2 className="text-xl font-bold mt-8 mb-3" style={{ color: 'var(--color-heading)' }}>Complaints</h2>
          <p>If you believe we have handled your personal information in a way that does not comply with the Privacy Act, please contact us first. If you are not satisfied with our response, you may lodge a complaint with the Office of the Australian Information Commissioner (OAIC) at <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer" className="underline">www.oaic.gov.au</a>.</p>

          <h2 className="text-xl font-bold mt-8 mb-3" style={{ color: 'var(--color-heading)' }}>Contact us</h2>
          {/* PLACEHOLDER: Replace with real contact details */}
          <p>
            Melbourne Concreting Co<br />
            Melbourne, VIC, Australia<br />
            Email: [EMAIL — TO BE PROVIDED]<br />
            Phone: [PHONE — TO BE PROVIDED]
          </p>
        </div>
      </div>
    </div>
  );
}
