import { ArrowRight } from 'lucide-react';

export function Home() {
  return (
    <section id="home" className="container-main">
      <div className="max-w-3xl">
        <h1 className="mb-8">I build autonomous systems.</h1>
        
        <div className="text-lg leading-relaxed text-gray-700 space-y-6 mb-12">
          <p>
            I'm obsessed with creating autonomous employees—AI agents that don't just assist, but genuinely delegate and own problems. The future isn't about tools that need human guidance; it's about digital entities that work while you sleep.
          </p>
          
          <p>
            I explore the intersection of AI, automation, and the digital economy. Building systems that make business operations smarter, faster, and fundamentally different.
          </p>

          <p>
            Welcome to my workshop. Here's what I've built, learned, and broke trying.
          </p>
        </div>

        <div className="flex gap-4">
          <a href="#projects" className="btn-primary flex items-center gap-2">
            See projects
            <ArrowRight size={18} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            @sohaib
          </a>
        </div>
      </div>
    </section>
  );
}
