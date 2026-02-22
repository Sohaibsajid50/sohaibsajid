import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Footer } from '../components/Footer';

export function HomePage() {
  const ref = useScrollReveal();

  return (
    <div ref={ref}>
      <div className="page-container">
        <div className="reveal">
          <h1 className="mb-6">I build autonomous systems.</h1>
        </div>

        <div
          className="reveal text-base leading-relaxed space-y-5 mb-10"
          style={{ color: '#555', transitionDelay: '80ms' }}
        >
          <p>
            I'm obsessed with creating autonomous employees—AI agents that don't just assist, but
            genuinely delegate and own problems. The future isn't about tools that need human
            guidance; it's about digital entities that work while you sleep.
          </p>

          <p>
            I explore the intersection of AI, automation, and the economics of digital work. I've
            built{' '}
            <Link to="/projects" className="inline-link">
              agent frameworks, CRM assistants, and pipeline orchestrators
            </Link>{' '}
            that change how business actually runs—not proof-of-concept demos, but things people
            use every day.
          </p>

          <p>
            My writing lives at{' '}
            <Link to="/essays" className="inline-link">
              /essays
            </Link>
            —mostly thinking out loud about where autonomous systems are headed and what breaks
            along the way. For the weirder experiments, see{' '}
            <Link to="/sidequests" className="inline-link">
              /sidequests
            </Link>
            .
          </p>

          <p>Welcome to the workshop.</p>
        </div>

        <div className="reveal flex flex-wrap gap-3" style={{ transitionDelay: '160ms' }}>
          <Link to="/projects" className="btn-primary">
            See projects ↗
          </Link>
          <Link to="/about" className="btn-secondary">
            About me
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
