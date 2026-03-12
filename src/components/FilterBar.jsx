/**
 * Reusable controlled pill-filter component.
 *
 * @param {{ categories: Array<{ label: string, value: string }>, active: string, onChange: (value: string) => void }} props
 * @param {Array<{ label: string, value: string }>} props.categories - List of filter options
 * @param {string} props.active - The currently active filter value
 * @param {(value: string) => void} props.onChange - Callback invoked with the selected value on click
 */
export function FilterBar({ categories, active, onChange }) {
  return (
    <div className="flex gap-2 mb-6">
      {categories.map(({ label, value }) => (
        <button
          key={value}
          onClick={() => onChange(value)}
          className={
            value === active
              ? 'px-3 py-1.5 rounded text-sm font-medium transition-colors bg-gray-900 text-white'
              : 'px-3 py-1.5 rounded text-sm font-medium transition-colors text-gray-500 hover:text-gray-800 hover:bg-gray-100'
          }
        >
          {label}
        </button>
      ))}
    </div>
  );
}
