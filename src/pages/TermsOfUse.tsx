// Jurisdiction: Australia
import { Link } from 'react-router-dom';

export default function TermsOfUse() {
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
          Terms of use
        </h1>
        <p className="text-sm mb-8" style={{ color: 'var(--color-subtle)' }}>
          Last updated: {year}
        </p>

        <div className="prose max-w-none text-base leading-relaxed" style={{ color: 'var(--color-body-copy)' }}>

          <h2 className="text-xl font-bold mt-8 mb-3" style={{ color: 'var(--color-heading)' }}>Use of this website</h2>
          <p>By accessing and using the Melbourne Concreting Co website, you agree to these terms of use. If you do not agree, please do not use this website. We may update these terms at any time without notice; continued use of the site constitutes acceptance of any changes.</p>

          <h2 className="text-xl font-bold mt-8 mb-3" style={{ color: 'var(--color-heading)' }}>Intellectual property</h2>
          <p>All content on this website — including text, images, graphics, and logos — is the property of Melbourne Concreting Co and is protected by Australian copyright law. You may not reproduce, distribute, or use any content without our prior written consent.</p>

          <h2 className="text-xl font-bold mt-8 mb-3" style={{ color: 'var(--color-heading)' }}>User submissions</h2>
          <p>If you submit information through this website (for example, a quote request or contact form), you grant us permission to use that information to respond to your enquiry. You are responsible for ensuring that any information you submit is accurate and does not infringe on the rights of any third party.</p>

          <h2 className="text-xl font-bold mt-8 mb-3" style={{ color: 'var(--color-heading)' }}>Links to other websites</h2>
          <p>This website may contain links to third-party websites for your convenience. We do not control those sites and are not responsible for their content, privacy practices, or accuracy. Links do not imply endorsement.</p>

          <h2 className="text-xl font-bold mt-8 mb-3" style={{ color: 'var(--color-heading)' }}>Cookies</h2>
          <p>We may use cookies and similar technologies to improve website functionality and analyse usage. See our <Link to="/privacy-policy" className="underline">Privacy Policy</Link> for more detail.</p>

          <h2 className="text-xl font-bold mt-8 mb-3" style={{ color: 'var(--color-heading)' }}>Disclaimer</h2>
          <p>This website is provided on an "as is" basis. We make no warranties — express or implied — regarding the accuracy, completeness, or fitness for purpose of any content on this site. To the extent permitted by Australian law, we exclude all liability for loss or damage arising from use of this website.</p>

          <h2 className="text-xl font-bold mt-8 mb-3" style={{ color: 'var(--color-heading)' }}>Indemnity</h2>
          <p>You agree to indemnify and hold harmless Melbourne Concreting Co, its directors, employees, and agents from any claims, liabilities, damages, or costs arising from your use of this website or breach of these terms.</p>

          <h2 className="text-xl font-bold mt-8 mb-3" style={{ color: 'var(--color-heading)' }}>Governing law</h2>
          <p>These terms are governed by the laws of Victoria, Australia. Any disputes will be subject to the exclusive jurisdiction of the courts of Victoria.</p>

          <h2 className="text-xl font-bold mt-8 mb-3" style={{ color: 'var(--color-heading)' }}>Contact</h2>
          {/* PLACEHOLDER: Replace with real contact details */}
          <p>
            Melbourne Concreting Co<br />
            Melbourne, VIC, Australia<br />
            Email: [EMAIL — TO BE PROVIDED]
          </p>
        </div>
      </div>
    </div>
  );
}
