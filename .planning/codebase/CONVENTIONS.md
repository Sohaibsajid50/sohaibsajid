# Coding Conventions

**Analysis Date:** 2026-03-11

## Naming Patterns

**Files:**
- PascalCase for React component files: `Sidebar.jsx`, `Layout.jsx`, `HomePage.jsx`
- camelCase for hook files: `useScrollReveal.js`
- PascalCase for exported component functions: `export function Sidebar()`
- Directory structure uses lowercase for organizational folders: `src/components/`, `src/pages/`, `src/hooks/`

**Functions:**
- PascalCase for React components: `function HomePage()`, `function Layout()`
- camelCase for regular functions and hooks: `useScrollReveal()`, `copyBio()`
- Descriptive names that explain purpose: `copyBio()` not `copy()`, `setSidebarOpen()` not `setState()`

**Variables:**
- camelCase for all variables and state: `sidebarOpen`, `pathname`, `copied`, `filter`
- UPPERCASE_SNAKE_CASE for constant objects and arrays: `PROJECTS`, `SOCIALS`, `ESSAYS`, `FILTERS`, `STATUS_COLORS`, `DOT_COLORS`, `ESSAY_CONTENT`, `NAV_ITEMS`
- Boolean variables prefixed with `is` or descriptive: `sidebarOpen`, `isIntersecting`, `isActive`

**Types:**
- No TypeScript; project uses JSX with implicit typing

## Code Style

**Formatting:**
- ESLint configured with `@eslint/js`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`
- Config: `eslint.config.js`
- Rules:
  - Unused variables ignored if they start with uppercase or underscore: `varsIgnorePattern: '^[A-Z_]'`
  - React hooks rules enforced via `reactHooks.configs.flat.recommended`
  - React refresh rules enforced via `reactRefresh.configs.vite`

**Linting:**
- Run via `npm run lint`
- ESLint v9.39.1
- No Prettier configured; rely on manual formatting and ESLint

## Import Organization

**Order:**
1. External library imports (`react`, `react-router-dom`, `lucide-react`)
2. Internal component/page imports from relative paths (`../hooks/`, `../components/`, `../pages/`)
3. Style imports (`.css` files) placed after all JS imports

**Path Aliases:**
- No path aliases configured
- Use relative imports: `import { Sidebar } from './Sidebar'`, `import { useScrollReveal } from '../hooks/useScrollReveal'`

**Example from `App.jsx`:**
```jsx
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
// ... more page imports
import './index.css';
```

## Error Handling

**Patterns:**
- Early returns for edge cases: `if (!essay) { return (...) }` in `EssayStubPage.jsx`
- Optional chaining not explicitly used; null checks done with conditional rendering
- Silent fallbacks on missing data with default UI: `{ style={{ backgroundColor: DOT_COLORS[project.category] ?? '#ccc' }} }` in `ProjectsPage.jsx`
- No try/catch blocks observed; error states handled via conditional JSX

## Logging

**Framework:** None; `console` not used in codebase

**Patterns:**
- No logging observed; relied on React DevTools and browser developer tools for debugging

## Comments

**When to Comment:**
- Minimal commenting; code structure is self-documenting
- Section dividers used in CSS files: `/* ─── Design tokens ─────────────────────────────── */`
- Comments in JSX used sparingly for clarity: `{/* Close button (mobile only) */}` in `Sidebar.jsx`

**JSDoc/TSDoc:**
- Single JSDoc block used for `useScrollReveal` hook describing its purpose and usage:
```javascript
/**
 * Attach this to any container to have children with
 * className="reveal" animate in when they enter the viewport.
 */
export function useScrollReveal() {
```
- No other JSDoc blocks in the codebase

## Function Design

**Size:** Functions are compact, mostly under 50 lines. Largest is `EssayStubPage()` at 84 lines including JSX.

**Parameters:**
- Destructuring used in function signatures: `export function Layout({ children })`, `export function Sidebar({ open, onClose })`
- State management via hooks: `const [sidebarOpen, setSidebarOpen] = useState(false)`
- Minimal parameters; leverage closures and hooks

**Return Values:**
- Components return JSX wrapped in fragments (`<>`) or divs
- Hooks return refs or values: `useScrollReveal()` returns `ref`
- Early returns on error conditions with fallback UI

## Module Design

**Exports:**
- Named exports used consistently: `export function HomePage()`, `export function Layout()`
- Single export per file (one component per file pattern)

**Barrel Files:**
- None observed; imports go directly to component files

## Constants and Magic Values

**Patterns:**
- Constants defined at module top level as UPPERCASE: `const PROJECTS = [...]`
- Color mappings in objects: `const DOT_COLORS = { Infrastructure: '#ef4444', ... }`
- Transition delays hardcoded inline in JSX: `style={{ transitionDelay: '60ms' }}`
- CSS design tokens defined as CSS variables in `:root`: `--color-accent: #ef4444`, `--sidebar-w: 260px`

**Example from `ProjectsPage.jsx`:**
```jsx
const DOT_COLORS = {
  Infrastructure: '#ef4444',
  Tooling: '#3b82f6',
  Product: '#10b981',
};
```

## Styling Conventions

**Approach:** Tailwind CSS v4 + custom CSS classes

**Semantic Classes (defined in `src/index.css`):**
- `.page-container` — Main page content wrapper with max-width 680px
- `.page-header` — Page title section with bottom border
- `.row-item` — Flex row for list items (projects, essays, sidequests)
- `.row-link` — Link styling with hover arrow reveal animation
- `.tag` — Pill-style tag badges
- `.btn-primary` — Dark button (black bg, white text)
- `.btn-secondary` — Light button (border, gray text)
- `.reveal` — Scroll-in animation target (opacity + translateY)
- `.visible` — Applied to `.reveal` when visible

**Utility Classes:**
- Tailwind utilities mixed with semantic classes
- Example: `className="flex flex-wrap gap-2"` + custom `.tag` class
- Responsive classes: `md:hidden` for mobile-only elements

**CSS Variables:**
- Colors: `--color-bg`, `--color-text`, `--color-text-secondary`, `--color-border`, `--color-accent`
- Layout: `--sidebar-w` (260px)
- Used via `var(--color-accent)` in inline styles

## React Patterns

**Hooks Usage:**
- `useState` for local state: `const [sidebarOpen, setSidebarOpen] = useState(false)`
- `useEffect` for side effects (IntersectionObserver setup, sidebar close on route change)
- `useParams` for route parameters: `const { slug } = useParams()`
- `useLocation` for route info: `const { pathname } = useLocation()`
- `useRef` for DOM references: `const ref = useRef(null)` in `useScrollReveal`

**Component Structure:**
```jsx
export function ComponentName({ prop1, prop2 }) {
  // Hooks
  const ref = useScrollReveal();
  const [state, setState] = useState(initial);

  // Event handlers
  function handleEvent() { ... }

  // JSX
  return (
    <div ref={ref}>
      {/* Content */}
    </div>
  );
}
```

**Conditional Rendering:**
- Ternary operators for binary conditions: `filter === value ? 'bg-gray-900 text-white' : 'text-gray-500'`
- Short-circuit evaluation for optional content: `{project.featured && <span>featured</span>}`
- Null checks with early returns for page-level errors

---

*Convention analysis: 2026-03-11*
