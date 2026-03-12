import { useState } from 'react';

/** @type {Array<{quarter: string, objectives: Array<{id: string, text: string}>}>} */
const GOALS = [
  {
    quarter: 'Q1 2026',
    objectives: [
      { id: 'OBJ 01', text: 'Ship code to GitHub 6 days/week' },
      { id: 'OBJ 02', text: 'Launch NeuralSync v2 with agentic automation suite' },
      { id: 'OBJ 03', text: 'Complete Graph RAG production integration for 2 clients' },
    ],
  },
  {
    quarter: 'Q4 2025',
    objectives: [
      { id: 'OBJ 01', text: 'Build and ship first public open-source agent tool' },
      { id: 'OBJ 02', text: 'Read 3 books on systems thinking and business design' },
    ],
  },
];

/**
 * Accordion section listing quarterly goals with expand/collapse per quarter.
 * Q1 2026 (first quarter) is open by default.
 */
export function GoalsSection() {
  const [openQuarter, setOpenQuarter] = useState(GOALS[0].quarter);

  return (
    <div className="reveal mb-8" style={{ transitionDelay: '280ms' }}>
      <h2 className="text-lg font-semibold mb-3">Current Goals</h2>
      {GOALS.map(({ quarter, objectives }) => (
        <div key={quarter} className="border border-gray-200 rounded mb-2">
          <button
            className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-50 transition-colors"
            onClick={() => setOpenQuarter(openQuarter === quarter ? null : quarter)}
            aria-expanded={openQuarter === quarter}
          >
            <span>{quarter}</span>
            <span className="text-gray-400">{openQuarter === quarter ? '−' : '+'}</span>
          </button>
          {openQuarter === quarter && (
            <div className="px-4 pb-4 space-y-2">
              {objectives.map(({ id, text }) => (
                <div key={id} className="flex items-start gap-3 text-sm">
                  <span className="text-gray-400 font-mono text-xs pt-0.5 flex-shrink-0">{id}</span>
                  <span className="text-gray-700">{text}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
