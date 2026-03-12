import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Footer } from '../components/Footer';
import { GoalsSection } from '../components/GoalsSection';
import { YearReviewSection } from '../components/YearReviewSection';

// ─── Photos ───────────────────────────────────────────────────────────────────
// To add your cover photo:  place the file in src/assets/ then change null to:
//   import coverImg from '../assets/cover.jpg'   and set COVER_PHOTO = coverImg
// To add your profile photo: same pattern with profile.jpg → PROFILE_PHOTO
const COVER_PHOTO = null;   // null = show placeholder banner
const PROFILE_PHOTO = null; // null = show initials circle
// ─────────────────────────────────────────────────────────────────────────────

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

        {/* Cover photo banner */}
        <div className="reveal mb-6" style={{ transitionDelay: '60ms' }}>
          {COVER_PHOTO ? (
            <img
              src={COVER_PHOTO}
              alt="Cover"
              className="w-full rounded-lg object-cover"
              style={{ height: '200px' }}
            />
          ) : (
            <div
              className="w-full rounded-lg bg-gray-100 flex items-center justify-center"
              style={{ height: '200px' }}
            >
              <span className="text-gray-300 text-sm">cover photo</span>
            </div>
          )}
        </div>

        {/* Profile photo + bio block */}
        <div className="reveal mb-8" style={{ transitionDelay: '120ms' }}>
          <div className="flex gap-6 items-start">
            {/* Profile photo */}
            <div className="flex-shrink-0 flex flex-col items-center gap-2">
              {PROFILE_PHOTO ? (
                <img
                  src={PROFILE_PHOTO}
                  alt="Sohaib Sajid"
                  className="w-24 h-24 rounded-full object-cover"
                />
              ) : (
                <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 font-semibold text-xl">SS</span>
                </div>
              )}
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
        <div className="reveal mb-8" style={{ transitionDelay: '180ms' }}>
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
