import { NavLink, Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Essays', to: '/essays' },
  { label: 'Sidequests', to: '/sidequests' },
  { label: 'Now', to: '/now' },
];

const SOCIALS = [
  { href: 'https://github.com/sohaibsajid', label: 'GitHub', icon: Github },
  { href: 'https://twitter.com/sohaibsajid', label: 'X / Twitter', icon: Twitter },
  { href: 'https://linkedin.com/in/sohaibsajid', label: 'LinkedIn', icon: Linkedin },
  { href: 'mailto:sohaib[at]sohaibsajid.com', label: 'Email', icon: Mail },
];

export function Sidebar({ open, onClose }) {
  return (
    <>
      {/* Overlay for mobile */}
      <div
        className={`sidebar-overlay${open ? ' open' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside className={`sidebar${open ? ' open' : ''}`} aria-label="Site navigation">
        {/* Close button (mobile only) */}
        <button
          className="self-end mb-4 md:hidden p-2 -mr-1 rounded hover:bg-gray-100 transition-colors"
          onClick={onClose}
          aria-label="Close menu"
        >
          <X size={20} />
        </button>

        {/* Logo */}
        <Link
          to="/"
          onClick={onClose}
          className="block mb-8 font-heading font-bold text-xl tracking-tight text-gray-900 hover:text-gray-600 transition-colors"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Sohaib
        </Link>

        {/* Nav links */}
        <nav className="flex flex-col gap-0.5 flex-1">
          {NAV_ITEMS.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              onClick={onClose}
              className={({ isActive }) =>
                `sidebar-link${isActive ? ' active' : ''}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Social links at bottom */}
        <div className="mt-auto pt-6 border-t border-gray-100 flex gap-4">
          {SOCIALS.map(({ href, label, icon: Icon }) => (
            <a
              key={href}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={label}
              className="text-gray-400 hover:text-gray-700 transition-colors"
            >
              <Icon size={17} />
            </a>
          ))}
        </div>
      </aside>
    </>
  );
}
