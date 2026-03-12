import { useState } from 'react';

/** @type {Record<number, Array<{label: string, value: number|string}>>} */
const YEAR_STATS = {
  2025: [
    { label: 'GitHub commits', value: 420 },
    { label: 'Projects shipped', value: 6 },
    { label: 'Books read', value: 14 },
    { label: 'People met', value: 60 },
    { label: 'Runs', value: 48 },
    { label: 'Countries', value: 3 },
  ],
};

const AVAILABLE_YEARS = Object.keys(YEAR_STATS)
  .map(Number)
  .sort((a, b) => b - a);

/**
 * Accordion-style year selector with a stats grid inside.
 * Most recent year is open by default.
 */
export function YearReviewSection() {
  const [openYear, setOpenYear] = useState(AVAILABLE_YEARS[0]);

  return (
    <div className="reveal mb-8" style={{ transitionDelay: '320ms' }}>
      <h2 className="text-lg font-semibold mb-3">Year in Review</h2>
      {AVAILABLE_YEARS.map((year) => (
        <div key={year} className="border border-gray-200 rounded mb-2">
          <button
            className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-50 transition-colors"
            onClick={() => setOpenYear(openYear === year ? null : year)}
            aria-expanded={openYear === year}
          >
            <span>• {year}</span>
            <span className="text-gray-400">{openYear === year ? '▴' : '▾'}</span>
          </button>
          {openYear === year && (
            <div className="px-4 pb-4 pt-2 grid grid-cols-3 gap-4">
              {YEAR_STATS[year].map(({ label, value }) => (
                <div key={label} className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{value}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
