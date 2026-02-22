export function Now() {
  return (
    <section id="now" className="container-main border-t border-gray-200">
      <div className="mb-16">
        <h2 className="mb-4">Now</h2>
        <p className="text-gray-600">What I'm focused on right now.</p>
      </div>

      <div className="max-w-2xl">
        <div className="card">
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4">Current Focus</h3>
            <div className="space-y-4 text-lg leading-relaxed text-gray-700">
              <p>
                Deep-diving into agentic AI patterns and how to make autonomous systems reliable enough for production. Building infrastructure that doesn't require constant hand-holding.
              </p>
              <p>
                Also exploring how digital workers fundamentally change business economics. There's a big opportunity here for founders willing to rethink their entire operating model.
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Last updated:</span> February 20, 2024
            </p>
          </div>
        </div>

        <p className="text-xs text-gray-500 mt-6">
          Inspired by <a href="https://nownownow.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-700">nownownow.com</a>
        </p>
      </div>
    </section>
  );
}
