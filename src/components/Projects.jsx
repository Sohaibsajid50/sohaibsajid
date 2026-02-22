import { Github, ExternalLink } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      name: 'Autonomous Agent Framework',
      description: 'Turnkey AI agent system that handles email, scheduling, and task delegation.',
      metrics: [
        '10M+ tokens processed',
        '98% task completion',
        '2.3s avg response time',
      ],
      tags: ['Python', 'LLM', 'FastAPI', 'PostgreSQL'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      name: 'Workflow Automation Engine',
      description: 'No-code builder for enterprise automation with visual workflow design.',
      metrics: [
        '500+ workflows active',
        '85K monthly executions',
        'Zero-downtime deploys',
      ],
      tags: ['React', 'Node.js', 'GraphQL', 'AWS Lambda'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      name: 'AI-Powered CRM Assistant',
      description: 'Autonomous agent that manages customer relationships and sales follow-ups.',
      metrics: [
        '45% conversion boost',
        '200+ integrations',
        'Real-time analytics',
      ],
      tags: ['TypeScript', 'Claude API', 'Supabase', 'Next.js'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      name: 'Data Pipeline Orchestrator',
      description: 'Intelligent system for ETL workflows with self-healing capabilities.',
      metrics: [
        '99.9% uptime',
        '2B records/day',
        'Self-healing pipelines',
      ],
      tags: ['Python', 'Airflow', 'Kafka', 'Spark'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
  ];

  return (
    <section id="projects" className="container-main border-t border-gray-200">
      <div className="mb-16">
        <h2 className="mb-4">Projects</h2>
        <p className="text-gray-600">Things I've built that actually matter.</p>
      </div>

      <div className="space-y-8">
        {projects.map((project, idx) => (
          <div key={idx} className="card">
            <div className="mb-4">
              <h3 className="text-xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-700">{project.description}</p>
            </div>

            <div className="mb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {project.metrics.map((metric, i) => (
                  <div key={i} className="text-sm">
                    <p className="font-semibold text-black">{metric.split(' ')[0]}</p>
                    <p className="text-gray-600">{metric.split(' ').slice(1).join(' ')}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6 flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-semibold hover:text-gray-600 transition-colors"
              >
                <Github size={16} />
                Code
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-semibold hover:text-gray-600 transition-colors"
              >
                <ExternalLink size={16} />
                Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
