import { Github, Video, FileText, Camera } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Footer } from '../components/Footer';

const PROJECTS = [
  {
    name: 'Heart Disease Risk Prediction Engine',
    category: 'ML',
    description:
      'Interpretable ML pipeline for a health tech startup — 8,000 patient records, 14 clinical features (age, BMI, blood pressure, cholesterol). Full EDA, one-hot encoding, and Decision Tree classification with grid search over 180 hyperparameter combos. Delivered tree diagrams for clinical review with documented FN/FP cost tradeoffs. 96.4% test accuracy.',
    date: '11.2023',
    tags: ['Python', 'scikit-learn', 'pandas', 'NumPy', 'matplotlib'],
    links: { github: 'https://github.com/Sohaibsajid50/sohaibsajid50-ml/tree/main/heart-disease-risk-prediction', video: null, article: null, photo: null },
  },
  {
    name: 'Responsible AI Health Classifier',
    category: 'ML',
    description:
      'Logistic regression from scratch (full GD + SGD) for a healthcare analytics team — then ran a complete fairness audit. Stratified confusion matrices by gender revealed a 6.7pp false negative rate gap. Calibrated separate decision thresholds per gender to enforce 80% equal sensitivity. ROC/AUC analysis per subgroup delivered as client documentation.',
    date: '01.2024',
    tags: ['Python', 'scikit-learn', 'Fairness AI', 'NumPy', 'pandas'],
    links: { github: 'https://github.com/Sohaibsajid50/sohaibsajid50-ml/tree/main/responsible-ai-health-classifier', video: null, article: null, photo: null },
  },
  {
    name: 'AI Music Generation Engine',
    category: 'ML',
    description:
      '2-layer MLP built entirely from scratch in NumPy for a creative tech client — no ML frameworks. Trained on Chopin MIDI data with one-hot encoded note sequences, generating original compositions one note at a time via a 20-note context window. Vectorized forward pass + backprop, softmax output, autoregressive sampling. Delivered architecture tradeoff analysis: MLP → RNN → Transformer.',
    date: '03.2024',
    tags: ['Python', 'NumPy', 'Neural Networks', 'Generative AI', 'mido'],
    links: { github: 'https://github.com/Sohaibsajid50/sohaibsajid50-ml/tree/main/ai-music-generation', video: null, article: null, photo: null },
  },
  {
    name: 'Customer Review Sentiment Classifier',
    category: 'ML',
    description:
      'NLP pipeline for an e-commerce platform drowning in manual review triage. Bag-of-words across 16,000 reviews, Naive Bayes with MAP smoothing for unseen words, log-sum trick for numerical stability. Benchmarked against Logistic Regression — matched at 78.7% val accuracy. Delivered word-level feature importance showing exact drivers of negative sentiment.',
    date: '02.2024',
    tags: ['Python', 'NumPy', 'scikit-learn', 'NLP'],
    links: { github: 'https://github.com/Sohaibsajid50/sohaibsajid50-ml/tree/main/customer-review-sentiment', video: null, article: null, photo: null },
  },
  {
    name: 'Voice AI Customer Support Agent',
    category: 'Product',
    description:
      'Conversational voice agent for inbound customer queries — integrates with Vapi, handles tier-1 support without human escalation, and escalates complex issues with full context.',
    date: '03.2024',
    tags: ['Vapi', 'Claude API', 'Node.js', 'Twilio'],
    links: { github: null, video: null, article: null, photo: null },
  },
  {
    name: 'Autonomous Agent Framework',
    category: 'Infrastructure',
    description:
      'Turnkey AI agent system that handles email triage, scheduling, and task delegation. Built around a persistent memory layer and tool-use primitives.',
    date: '01.2024',
    tags: ['Python', 'LLM', 'FastAPI', 'PostgreSQL'],
    links: { github: 'https://github.com/AgentoSync/agent-framework', video: null, article: null, photo: null },
  },
  {
    name: 'Workflow Automation Engine',
    category: 'Tooling',
    description:
      'No-code builder for enterprise automation with a visual workflow designer and webhook-first execution model.',
    date: '09.2023',
    tags: ['React', 'Node.js', 'GraphQL', 'AWS Lambda'],
    links: { github: null, video: null, article: null, photo: null },
  },
  {
    name: 'AI-Powered CRM Assistant',
    category: 'Product',
    description:
      'Autonomous agent that manages customer relationships and sales follow-up cadences, integrated into existing CRM data.',
    date: '06.2023',
    tags: ['TypeScript', 'Claude API', 'Supabase'],
    links: { github: null, video: null, article: null, photo: null },
  },
  {
    name: 'Data Pipeline Orchestrator',
    category: 'Infrastructure',
    description:
      'Intelligent ETL orchestration with self-healing capabilities—detects schema drift, retries partial failures, and alerts on anomalies.',
    date: '03.2023',
    tags: ['Python', 'Airflow', 'Kafka'],
    links: { github: null, video: null, article: null, photo: null },
  },
];

const DOT_COLORS = {
  Infrastructure: '#ef4444',
  Tooling: '#3b82f6',
  Product: '#10b981',
  ML: '#8b5cf6',
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

              {/* Right: date + icon links */}
              <div className="flex-shrink-0 flex flex-col items-end gap-1 pt-1">
                <span className="text-sm text-gray-400 font-mono">{project.date}</span>
                <div className="flex gap-2">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="text-gray-400 hover:text-gray-700 transition-colors"
                    >
                      <Github size={14} />
                    </a>
                  )}
                  {project.links.video && (
                    <a
                      href={project.links.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Video"
                      className="text-gray-400 hover:text-gray-700 transition-colors"
                    >
                      <Video size={14} />
                    </a>
                  )}
                  {project.links.article && (
                    <a
                      href={project.links.article}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Article"
                      className="text-gray-400 hover:text-gray-700 transition-colors"
                    >
                      <FileText size={14} />
                    </a>
                  )}
                  {project.links.photo && (
                    <a
                      href={project.links.photo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Photo"
                      className="text-gray-400 hover:text-gray-700 transition-colors"
                    >
                      <Camera size={14} />
                    </a>
                  )}
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
