import { useScrollReveal } from '../hooks/useScrollReveal';
import { Footer } from '../components/Footer';

export function NowPage() {
  const ref = useScrollReveal();

  return (
    <div ref={ref}>
      <div className="page-container">
        <header className="page-header reveal">
          <h1>Now</h1>
          <p>What I'm focused on at the moment. Updated irregularly.</p>
        </header>

        <div className="space-y-8">
          <section className="reveal" style={{ transitionDelay: '60ms' }}>
            <h2 className="text-base font-semibold mb-2">Building</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Working on agentic patterns for delegating real business tasks—not toy demos but
              systems that handle exception cases gracefully and know when to escalate to a human.
            </p>
          </section>

          <section className="reveal" style={{ transitionDelay: '110ms' }}>
            <h2 className="text-base font-semibold mb-2">Thinking about</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              The business economics of replacing human labor with AI agents. Specifically: where
              the trust threshold is, how fast it moves, and what the defensible moat looks like
              once everyone has access to the same foundation models.
            </p>
          </section>

          <section className="reveal" style={{ transitionDelay: '160ms' }}>
            <h2 className="text-base font-semibold mb-2">Reading</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Working through papers on multi-agent coordination and tool-use reliability. Also
              re-reading older work on complex systems failure modes—the LLM parallels are
              interesting.
            </p>
          </section>

          <section className="reveal" style={{ transitionDelay: '210ms' }}>
            <p className="text-xs text-gray-400">Last updated: February 2025</p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
