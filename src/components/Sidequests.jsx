import { ExternalLink } from 'lucide-react';

export function Sidequests() {
  const sidequests = [
    {
      title: 'SMS-based Task Management',
      description: 'Manage todos via plain SMS. Minimal, stupid simple, surprisingly useful.',
      status: 'In progress',
      tags: ['Node.js', 'Twilio', 'Prototype'],
      link: '#',
    },
    {
      title: 'Prompt Engineering Notebook',
      description: 'Collection of prompt patterns that actually work. Open source, community-driven.',
      status: 'Active',
      tags: ['OpenAI', 'Documentation', 'Community'],
      link: '#',
    },
    {
      title: 'AI Agent Benchmark Suite',
      description: 'Standardized way to measure autonomous agent capability. Failed v1, learned a lot.',
      status: 'Paused',
      tags: ['Python', 'Testing', 'Benchmarks'],
      link: '#',
    },
    {
      title: 'Slack Bot Framework',
      description: 'Opinionated SDK for building context-aware Slack bots. Fun project that shipped before the idea was mature.',
      status: 'Archived',
      tags: ['TypeScript', 'Slack API', 'Framework'],
      link: '#',
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'In progress':
        return 'bg-blue-100 text-blue-700';
      case 'Active':
        return 'bg-green-100 text-green-700';
      case 'Paused':
        return 'bg-yellow-100 text-yellow-700';
      case 'Archived':
        return 'bg-gray-100 text-gray-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <section id="sidequests" className="container-main border-t border-gray-200">
      <div className="mb-16">
        <h2 className="mb-4">Sidequests</h2>
        <p className="text-gray-600">Experiments, MVPs, failed ideas, and works in progress. The fun stuff.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sidequests.map((quest, idx) => (
          <a
            key={idx}
            href={quest.link}
            className="card hover:shadow-lg group flex flex-col"
          >
            <div className="mb-4 flex items-start justify-between">
              <div>
                <h3 className="text-lg font-bold mb-1 group-hover:text-gray-700 transition-colors">
                  {quest.title}
                </h3>
                <p className="text-gray-700 text-sm">{quest.description}</p>
              </div>
              <ExternalLink size={18} className="flex-shrink-0 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
              <span className={`text-xs font-semibold px-2.5 py-1 rounded ${getStatusColor(quest.status)}`}>
                {quest.status}
              </span>
              <div className="flex gap-1 flex-wrap justify-end">
                {quest.tags.slice(0, 2).map((tag, i) => (
                  <span key={i} className="tag text-xs">{tag}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
