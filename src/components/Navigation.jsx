export function Navigation() {
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Essays', href: '#essays' },
    { label: 'Sidequests', href: '#sidequests' },
    { label: 'Now', href: '#now' },
  ];

  return (
    <nav className="border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-6 flex items-center justify-between">
        <div className="text-xl font-bold">Sohaib</div>
        <div className="flex gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-gray-600 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
