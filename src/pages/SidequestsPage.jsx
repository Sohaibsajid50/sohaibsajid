import { useScrollReveal } from '../hooks/useScrollReveal';
import { Footer } from '../components/Footer';

const STATUS_COLORS = {
  'building': '#3b82f6',
  'active': '#10b981',
  'paused': '#f59e0b',
  'archived': '#9ca3af',
};

const SIDEQUESTS = [
  {
    title: 'SMS Task Management',
    description:
      'Manage todos via plain SMS. No app, no login, no friction. Twilio + a small state machine. Surprisingly useful.',
    status: 'building',
    statusLabel: 'Building',
    category: 'Automation experiment',
    tags: ['Node.js', 'Twilio'],
  },
  {
    title: 'Prompt Engineering Notebook',
    description:
      'A living collection of prompt patterns that actually work across Claude, GPT-4, and open-weight models. Community-driven, open source.',
    status: 'active',
    statusLabel: 'Active',
    category: 'Tooling',
    tags: ['Documentation'],
  },
  {
    title: 'AI Agent Benchmark Suite',
    description:
      'Standardized harness for measuring autonomous agent capability across domains. v1 failed spectacularly—learned a lot about evaluation design.',
    status: 'paused',
    statusLabel: 'Paused',
    category: 'Research',
    tags: ['Python', 'Testing'],
  },
  {
    title: 'Cold Outreach Automation',
    description:
      'Agentic system that researches prospects, drafts personalized outreach, and schedules follow-ups—without templates.',
    status: 'active',
    statusLabel: 'Active',
    category: 'Cold outreach system',
    tags: ['Claude API', 'n8n'],
  },
  {
    title: 'Dealflow Notes',
    description:
      'Private Notion-linked agent that summarizes startup decks, extracts key signals, and cross-references against prior notes.',
    status: 'building',
    statusLabel: 'Building',
    category: 'Dealflow tooling',
    tags: ['Python', 'Notion API'],
  },
  {
    title: 'Travel Agent Tooling',
    description:
      'Itinerary planner that books flights, accommodation, and ground transport via agent loops. Narrowly avoided booking two flights simultaneously.',
    status: 'archived',
    statusLabel: 'Archived',
    category: 'Automation experiment',
    tags: ['LLM', 'APIs'],
  },
];

export function SidequestsPage() {
  const ref = useScrollReveal();

  return (
    <div ref={ref}>
      <div className="page-container">
        <header className="page-header reveal">
          <h1>Sidequests</h1>
          <p>Experiments, MVPs, failed ideas, and works in progress.</p>
        </header>

        <div>
          {SIDEQUESTS.map((quest, i) => (
            <div
              key={quest.title}
              className="reveal row-item"
              style={{ transitionDelay: `${60 + i * 55}ms` }}
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="font-semibold text-gray-900">{quest.title}</span>
                  <span
                    className="text-xs font-medium px-1.5 py-0.5 rounded"
                    style={{
                      color: STATUS_COLORS[quest.status],
                      background: STATUS_COLORS[quest.status] + '18',
                    }}
                  >
                    {quest.statusLabel}
                  </span>
                  <span className="text-xs text-gray-400">{quest.category}</span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed mb-2">
                  {quest.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {quest.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
