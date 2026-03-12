import { useScrollReveal } from '../hooks/useScrollReveal';
import { Footer } from '../components/Footer';

export function BooksPage() {
  const ref = useScrollReveal();

  return (
    <div ref={ref}>
      <div className="page-container">
        <header className="page-header reveal">
          <h1>Books</h1>
          <p>Coming soon.</p>
        </header>
      </div>

      <Footer />
    </div>
  );
}
