import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Phone } from 'lucide-react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import OfferIntro from './components/OfferIntro';
import OfferCards from './components/OfferCards';
import FreeCallCTA from './components/FreeCallCTA';
import LeadMagnet from './components/LeadMagnet';
import Testimonials from './components/Testimonials';
import FAQs from './components/FAQs';
import About from './components/About';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';

const BOOKING_LINK = '#book-a-call';

/* Hash scroll workaround — React Router intercepts hash navigation */
function ScrollToSection() {
  useEffect(() => {
    const target = window.location.hash.slice(1);
    if (!target) return;
    setTimeout(() => {
      document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
    }, 500);
  }, []);
  return null;
}

/* MobileStickyCTA — fixed bottom bar, mobile only, hides when #book-a-call enters view */
function MobileStickyCTA() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const target = document.getElementById('book-a-call');
    if (!target) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.3 }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);
  if (!visible) return null;
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      style={{ background: 'var(--color-cta)', padding: '12px 20px' }}
    >
      <a
        href={BOOKING_LINK}
        className="btn w-full justify-center"
        style={{ background: '#1A2831', color: '#fff', minHeight: '48px' }}
      >
        <Phone size={16} className="mr-2" />
        Get a free quote
      </a>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-use" element={<TermsOfUse />} />
    </Routes>
  );
}

function HomePage() {
  return (
    <>
      <ScrollToSection />
      <NavBar bookingLink={BOOKING_LINK} />
      <Hero bookingLink={BOOKING_LINK} />
      <OfferIntro />
      <OfferCards bookingLink={BOOKING_LINK} />
      <FreeCallCTA bookingLink={BOOKING_LINK} />
      <LeadMagnet />
      <Testimonials />
      <FAQs />
      <About bookingLink={BOOKING_LINK} />
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
