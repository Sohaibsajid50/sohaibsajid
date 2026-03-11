# Technology Stack

**Analysis Date:** 2026-03-11

## Languages

**Primary:**
- JavaScript (ES2020+) - React components, hooks, utilities
- JSX - UI component syntax

**Secondary:**
- CSS - Custom styling via `src/index.css` with CSS variables for design tokens

## Runtime

**Environment:**
- Node.js 22+ (required by Vite 7, specified in `.github/workflows/deploy.yml`)

**Package Manager:**
- npm
- Lockfile: `package-lock.json` (standard npm lockfile, present in git)

## Frameworks

**Core:**
- React 19.2.0 - UI framework, React 19 with latest hooks support
- Vite 7.3.1 - Build tool and dev server

**Routing:**
- react-router-dom 7.13.0 - Client-side routing via `HashRouter` (required for GitHub Pages static hosting)

**Styling:**
- Tailwind CSS 4.2.0 - Utility-first CSS framework
- @tailwindcss/postcss 4.2.0 - PostCSS plugin for Tailwind
- PostCSS 8.5.6 - CSS processing pipeline
- autoprefixer 10.4.24 - Vendor prefix handling

**Icons:**
- lucide-react 0.575.0 - React icon library for social links and UI icons

**Linting:**
- ESLint 9.39.1 - Code quality and style checking
- eslint-plugin-react-hooks 7.0.1 - React Hooks best practices
- eslint-plugin-react-refresh 0.4.24 - React Fast Refresh support validation

**Build/Dev:**
- @vitejs/plugin-react 5.1.1 - React support for Vite with Fast Refresh
- @types/react 19.2.7 - TypeScript type definitions for React
- @types/react-dom 19.2.3 - TypeScript type definitions for React DOM
- globals 16.5.0 - ESLint globals for browser environment

## Key Dependencies

**Critical:**
- react 19.2.0 - Application UI rendering
- react-router-dom 7.13.0 - Client-side navigation (required for multi-page functionality with HashRouter)
- tailwindcss 4.2.0 - Component styling foundation

**UI/UX:**
- lucide-react 0.575.0 - Consistent iconography across the site

## Configuration

**Environment:**
- No environment variables currently used (static portfolio site)
- No `.env` file present
- Configuration values hardcoded where needed (e.g., social media links, project data)

**Build:**
- `vite.config.js` - Vite configuration with base path set to `/sohaibsajid/` for GitHub Pages deployment
- `tailwind.config.js` - Tailwind CSS configuration with content scanning for `src/**/*.{js,jsx}`
- `postcss.config.js` - PostCSS configuration with Tailwind plugin
- `eslint.config.js` - ESLint configuration using flat config format (ESLint 9.0+) with React plugins and hooks validation

## Platform Requirements

**Development:**
- Node.js 22+ or 20.19+
- npm for dependency management
- Modern browser for dev server (localhost:5173)

**Production:**
- Deployed to GitHub Pages (`https://agentosync.github.io/sohaibsajid/`)
- Static hosting only - no server-side rendering or backend required
- Client-side routing via HashRouter for static file serving

## Scripts

```bash
npm run dev       # Start Vite dev server on localhost:5173
npm run build     # Build to ./dist for production
npm run preview   # Preview production build locally
npm run lint      # Run ESLint on all files
```

## Build Output

- Build tool: Vite 7.3.1
- Output directory: `./dist`
- Deployment: Via GitHub Actions workflow (`.github/workflows/deploy.yml`)
- CI/CD: Automatic deploy on push to `main` branch using `peaceiris/actions-gh-pages` action

---

*Stack analysis: 2026-03-11*
