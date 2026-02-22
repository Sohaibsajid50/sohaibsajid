import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Footer } from '../components/Footer';

const ESSAYS = [
  {
    slug: 'rise-of-autonomous-employees',
    title: 'The Rise of Autonomous Employees',
    date: '02.2024',
    type: 'essay',
    excerpt:
      'Why AI agents are the next paradigm shift in how we work. Not automation theater—actual delegation to digital entities that learn and adapt.',
  },
  {
    slug: 'building-reliable-ai-systems',
    title: 'Building Reliable AI Systems at Scale',
    date: '01.2024',
    type: 'essay',
    excerpt:
      'Lessons from deploying LLM-powered systems to production: error handling, prompt engineering, cost optimization, and the things nobody tells you.',
  },
  {
    slug: 'economics-of-digital-workers',
    title: 'The Economics of Digital Workers',
    date: '12.2023',
    type: 'thought',
    excerpt:
      'How autonomous systems change unit economics. When your marginal cost per task approaches zero, everything you know about pricing breaks down.',
  },
];

const FILTERS = [
  { label: 'All', value: 'all' },
  { label: '📝 Essays', value: 'essay' },
  { label: '💭 Thoughts', value: 'thought' },
];

export function EssaysPage() {
  const ref = useScrollReveal();
  const [filter, setFilter] = useState('all');

  const visible = filter === 'all' ? ESSAYS : ESSAYS.filter((e) => e.type === filter);

  return (
    <div ref={ref}>
      <div className="page-container">
        <header className="page-header reveal">
          <h1>Essays</h1>
          <p>Builder insights, AI learnings, and tech thoughts.</p>
        </header>

        {/* Filter tabs */}
        <div className="reveal flex gap-2 mb-8" style={{ transitionDelay: '60ms' }}>
          {FILTERS.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setFilter(value)}
              className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
                filter === value
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-500 hover:text-gray-800 hover:bg-gray-100'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Essay rows */}
        <div>
          {visible.map((essay, i) => (
            <div
              key={essay.slug}
              className="reveal row-item group"
              style={{ transitionDelay: `${80 + i * 60}ms` }}
            >
              <div className="flex-1 min-w-0">
                <Link
                  to={`/essays/${essay.slug}`}
                  className="row-link mb-1 block"
                  style={{ color: 'var(--color-accent)' }}
                >
                  {essay.title}
                  <span className="arrow-reveal">↗</span>
                </Link>
                <p className="text-sm text-gray-500 leading-relaxed">{essay.excerpt}</p>
              </div>
              <div className="flex-shrink-0 text-sm text-gray-400 font-mono pt-1">
                {essay.date}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
