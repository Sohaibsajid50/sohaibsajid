import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const SOCIALS = [
  { href: 'https://github.com/sohaibsajid', label: 'GitHub', icon: Github },
  { href: 'https://twitter.com/sohaibsajid', label: 'X / Twitter', icon: Twitter },
  { href: 'https://linkedin.com/in/sohaibsajid', label: 'LinkedIn', icon: Linkedin },
  { href: 'mailto:sohaib[at]sohaibsajid.com', label: 'Email', icon: Mail },
];

export function Footer() {
  return (
    <footer
      className="border-t text-center py-10 px-6"
      style={{ borderColor: 'var(--color-border)' }}
    >
      <p className="text-sm text-gray-500 mb-4">
        Building autonomous systems, one agent at a time.
      </p>

      <div className="flex justify-center gap-5 mb-5">
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

      <p className="text-xs text-gray-400">© 2025 Sohaib. All rights reserved.</p>
    </footer>
  );
}
