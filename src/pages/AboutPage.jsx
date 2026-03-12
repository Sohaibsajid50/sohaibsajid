import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Footer } from '../components/Footer';
import { GoalsSection } from '../components/GoalsSection';
import { YearReviewSection } from '../components/YearReviewSection';

const BIO =
  'Sohaib is a builder focused on autonomous systems and AI agents. He designs software that delegates real business problems to digital employees—systems that learn, adapt, and operate independently. He works at the intersection of LLM tooling, product engineering, and the economics of automation.';

const TAGS = [
  'AI Agents',
  'Automation',
  'LLM Engineering',
  'Founder Mindset',
  'Open Source',
  'Remote-first',
];

const ORGS = [
  { name: 'NeuralSync', url: 'https://neuralsync.ai' },
  { name: 'AgentoSync', url: 'https://agentosync.github.io' },
  { name: 'MLCommunity', url: 'https://example.com' },
];

export function AboutPage() {
  const ref = useScrollReveal();
  const [copied, setCopied] = useState(false);

  function copyBio() {
    navigator.clipboard.writeText(BIO).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div ref={ref}>
      <div className="page-container">
        <header className="page-header reveal">
          <h1>About</h1>
        </header>

        {/* Bio + photo block */}
        <div className="reveal mb-8" style={{ transitionDelay: '60ms' }}>
          <div className="flex gap-6 items-start">
            {/* Initials placeholder */}
            <div className="flex-shrink-0 flex flex-col items-center gap-2">
              <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 font-semibold text-lg">SS</span>
              </div>
              <span className="text-xs text-gray-400">sohaib@sohaibsajid.com</span>
            </div>
            {/* Bio text + copy button */}
            <div className="flex-1">
              <p className="text-base leading-relaxed mb-4" style={{ color: '#444' }}>{BIO}</p>
              <button
                onClick={copyBio}
                className="btn-secondary text-sm"
                aria-label="Copy bio to clipboard"
              >
                {copied ? 'Copied!' : 'Copy bio'}
              </button>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="reveal mb-8" style={{ transitionDelay: '120ms' }}>
          <h2 className="text-lg font-semibold mb-1">Get in touch</h2>
          <p className="text-sm text-gray-600 mb-2">
            sohaib[at]sohaibsajid.com
          </p>
        </div>

        {/* Work with me */}
        <div className="reveal mb-8" style={{ transitionDelay: '160ms' }}>
          <h2 className="text-lg font-semibold mb-2">Work with me</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            I'm available for consulting on agentic system design, AI product development, and
            automation architecture. If you're building something that needs to run autonomously at
            scale, reach out.
          </p>
        </div>

        {/* Areas / Tags */}
        <div className="reveal mb-8" style={{ transitionDelay: '200ms' }}>
          <h2 className="text-lg font-semibold mb-3">Areas</h2>
          <div className="flex flex-wrap gap-2">
            {TAGS.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Organizations */}
        <div className="reveal mb-8" style={{ transitionDelay: '240ms' }}>
          <h2 className="text-lg font-semibold mb-3">Organizations</h2>
          <div className="flex flex-wrap gap-2">
            {ORGS.map(({ name, url }) => (
              <a key={name} href={url} target="_blank" rel="noopener noreferrer" className="inline-link">
                <span className="tag">{name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Current Goals accordion */}
        <GoalsSection />

        {/* Year in Review stats */}
        <YearReviewSection />
      </div>

      <Footer />
    </div>
  );
}
