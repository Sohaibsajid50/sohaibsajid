import { ArrowRight } from 'lucide-react';

export function Essays() {
  const essays = [
    {
      title: 'The Rise of Autonomous Employees',
      excerpt: 'Why AI agents are the next paradigm shift in how we work. Not automation theater—actual delegation to digital entities that learn and adapt.',
      date: 'Feb 2024',
      readTime: '8 min read',
      slug: '#',
    },
    {
      title: 'Building Reliable AI Systems at Scale',
      excerpt: 'Lessons from deploying LLM-powered systems to production. Error handling, prompt engineering, cost optimization, and the things nobody tells you.',
      date: 'Jan 2024',
      readTime: '12 min read',
      slug: '#',
    },
    {
      title: 'The Economics of Digital Workers',
      excerpt: 'How autonomous systems change unit economics. When your marginal cost per task approaches zero, everything you know about pricing breaks down.',
      date: 'Dec 2023',
      readTime: '10 min read',
      slug: '#',
    },
  ];

  return (
    <section id="essays" className="container-main border-t border-gray-200">
      <div className="mb-16">
        <h2 className="mb-4">Essays & Writing</h2>
        <p className="text-gray-600">Builder insights, AI learnings, and tech thoughts.</p>
      </div>

      <div className="space-y-8">
        {essays.map((essay, idx) => (
          <a
            key={idx}
            href={essay.slug}
            className="card hover:shadow-xl cursor-pointer group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 group-hover:text-gray-700 transition-colors">
                  {essay.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">{essay.excerpt}</p>
              </div>
              <ArrowRight size={20} className="flex-shrink-0 ml-4 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span>{essay.date}</span>
              <span>•</span>
              <span>{essay.readTime}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
