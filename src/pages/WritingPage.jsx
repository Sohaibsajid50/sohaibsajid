import { useScrollReveal } from '../hooks/useScrollReveal';
import { Footer } from '../components/Footer';

export function WritingPage() {
  const ref = useScrollReveal();

  return (
    <div ref={ref}>
      <div className="page-container">
        <header className="page-header reveal">
          <h1>Writing</h1>
          <p>Coming soon.</p>
        </header>
      </div>

      <Footer />
    </div>
  );
}
