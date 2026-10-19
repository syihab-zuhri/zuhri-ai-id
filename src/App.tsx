import { useState, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { WhyDomain } from './components/WhyDomain';
import { DomainSpecs } from './components/DomainSpecs';
import { ProcessSteps } from './components/ProcessSteps';
import { FaqAccordion } from './components/FaqAccordion';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { CheckCircle2 } from 'lucide-react';

export function App() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 3000);
  }, []);

  return (
    <div className="site-wrapper">
      <Navbar />

      <main id="top">
        <Hero onShowToast={showToast} />
        <Marquee />
        <WhyDomain />
        <DomainSpecs onShowToast={showToast} />
        <ProcessSteps />
        <FaqAccordion />
        <FinalCta onShowToast={showToast} />
      </main>

      <Footer />

      {/* Floating feedback toast */}
      {toastMessage && (
        <div className="toast-notice" role="status" aria-live="polite">
          <CheckCircle2 size={16} color="var(--primary)" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}

export default App;
