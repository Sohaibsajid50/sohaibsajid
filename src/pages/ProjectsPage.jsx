import { useScrollReveal } from '../hooks/useScrollReveal';
import { Footer } from '../components/Footer';

const PROJECTS = [
  {
    name: 'Autonomous Agent Framework',
    category: 'Infrastructure',
    description:
      'Turnkey AI agent system that handles email triage, scheduling, and task delegation. Built around a persistent memory layer and tool-use primitives.',
    date: '01.2024',
    tags: ['Python', 'LLM', 'FastAPI', 'PostgreSQL'],
    featured: true,
  },
  {
    name: 'Workflow Automation Engine',
    category: 'Tooling',
    description:
      'No-code builder for enterprise automation with a visual workflow designer and webhook-first execution model.',
    date: '09.2023',
    tags: ['React', 'Node.js', 'GraphQL', 'AWS Lambda'],
    featured: true,
  },
  {
    name: 'AI-Powered CRM Assistant',
    category: 'Product',
    description:
      'Autonomous agent that manages customer relationships and sales follow-up cadences, integrated into existing CRM data.',
    date: '06.2023',
    tags: ['TypeScript', 'Claude API', 'Supabase'],
    featured: false,
  },
  {
    name: 'Data Pipeline Orchestrator',
    category: 'Infrastructure',
    description:
      'Intelligent ETL orchestration with self-healing capabilities—detects schema drift, retries partial failures, and alerts on anomalies.',
    date: '03.2023',
    tags: ['Python', 'Airflow', 'Kafka'],
    featured: false,
  },
];

const DOT_COLORS = {
  Infrastructure: '#ef4444',
  Tooling: '#3b82f6',
  Product: '#10b981',
};

export function ProjectsPage() {
  const ref = useScrollReveal();

  return (
    <div ref={ref}>
      <div className="page-container">
        <header className="page-header reveal">
          <h1>Projects</h1>
          <p>Things I've built that actually run.</p>
        </header>

        {/* Featured label */}
        <div className="reveal mb-2" style={{ transitionDelay: '60ms' }}>
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            ● Featured Projects
          </span>
        </div>

        <div>
          {PROJECTS.map((project, i) => (
            <div
              key={project.name}
              className="reveal row-item group"
              style={{ transitionDelay: `${80 + i * 60}ms` }}
            >
              {/* Left: info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="dot"
                    style={{ backgroundColor: DOT_COLORS[project.category] ?? '#ccc' }}
                    title={project.category}
                  />
                  <span className="font-semibold text-gray-900">{project.name}</span>
                  {project.featured && (
                    <span className="tag ml-1" style={{ fontSize: '0.65rem' }}>
                      featured
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600 mb-2 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: date */}
              <div className="flex-shrink-0 text-sm text-gray-400 font-mono pt-1">
                {project.date}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
