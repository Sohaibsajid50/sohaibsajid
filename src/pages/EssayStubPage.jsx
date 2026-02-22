import { useParams, Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Footer } from '../components/Footer';

const ESSAY_CONTENT = {
  'rise-of-autonomous-employees': {
    title: 'The Rise of Autonomous Employees',
    date: 'February 2024',
    body: [
      "The shift isn't automation—it's autonomy. Automation removes a human from a loop. Autonomy replaces the human's judgment in that loop.",
      "We've been building tools that assist. The next wave builds entities that delegate. An AI agent that books your meetings isn't automation theater; it's a junior employee who happens to never sleep.",
      "The bottleneck isn't capability anymore. GPT-4 can draft legal briefs. Claude can reason through multi-step problems. The bottleneck is trust infrastructure: how do we give these systems the right context, the right permissions, and the right feedback loops to operate without constant supervision?",
      "That's the actual engineering problem. Not 'can it do the task?' but 'how do we know when it's doing it wrong, and how fast can we course-correct?'",
    ],
  },
  'building-reliable-ai-systems': {
    title: 'Building Reliable AI Systems at Scale',
    date: 'January 2024',
    body: [
      "The first thing nobody tells you: LLMs are probabilistic services, and you need to design for that the same way you design for network calls that fail.",
      "Retry logic, structured outputs with validation, fallback prompts, and human-in-the-loop escape hatches aren't optional. They're the architecture.",
      "Cost compounds. A system that's 2x more expensive per call and runs 10x more often than you expected will bankrupt a product. Profile your token usage before you ship. Build dashboards for it. Treat LLM spend like database query latency—something to actively optimize.",
      "Prompt engineering is real engineering. Versioning your prompts, testing them against a regression suite, and rolling them out with feature flags is not overkill. It's the only way to ship changes safely.",
    ],
  },
  'economics-of-digital-workers': {
    title: 'The Economics of Digital Workers',
    date: 'December 2023',
    body: [
      "When the marginal cost of a task approaches zero, pricing models built on labor inputs collapse.",
      "A human customer success rep costs $60k/year and handles maybe 1,000 tickets a month. An AI agent handling the same tickets costs $200/month at scale. The unit economics are incomparable.",
      "This doesn't mean the human disappears. It means the human moves up the value chain—handling exceptions, edge cases, and relationship-intensive interactions that require genuine trust.",
      "The businesses that figure out this transition will have structural cost advantages that are impossible to close. The ones that don't will be competing on labor costs with companies whose labor costs are near zero.",
    ],
  },
};

export function EssayStubPage() {
  const { slug } = useParams();
  const ref = useScrollReveal();
  const essay = ESSAY_CONTENT[slug];

  if (!essay) {
    return (
      <div ref={ref}>
        <div className="page-container">
          <div className="reveal">
            <p className="text-gray-500 mb-4">Essay not found.</p>
            <Link to="/essays" className="inline-link">
              ← Back to essays
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div ref={ref}>
      <div className="page-container">
        <div className="reveal mb-6">
          <Link to="/essays" className="text-sm text-gray-400 hover:text-gray-700 transition-colors">
            ← Essays
          </Link>
        </div>

        <header className="reveal mb-8" style={{ transitionDelay: '60ms' }}>
          <h1 className="mb-2">{essay.title}</h1>
          <p className="text-sm text-gray-400">{essay.date}</p>
        </header>

        <div className="reveal prose-body" style={{ transitionDelay: '120ms' }}>
          {essay.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
