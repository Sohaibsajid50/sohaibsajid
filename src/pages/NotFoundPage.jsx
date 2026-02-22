import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';

export function NotFoundPage() {
  return (
    <div>
      <div className="page-container">
        <h1 className="mb-4">404</h1>
        <p className="text-gray-600 mb-6">Page not found.</p>
        <Link to="/" className="inline-link">
          ← Back home
        </Link>
      </div>
      <Footer />
    </div>
  );
}
