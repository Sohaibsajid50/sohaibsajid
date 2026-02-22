import { Github, Twitter, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div className="container-main">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-sm text-gray-600">
              Built with React, Tailwind, and caffeine.
            </p>
            <p className="text-xs text-gray-500 mt-2">
              © 2024 Sohaib. All rights reserved.
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="mailto:hello@sohaib.com"
              className="text-gray-600 hover:text-black transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
