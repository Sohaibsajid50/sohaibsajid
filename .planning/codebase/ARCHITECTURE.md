# Architecture

**Analysis Date:** 2026-03-11

## Pattern Overview

**Overall:** Single Page Application (SPA) with client-side routing

**Key Characteristics:**
- React 19 + Vite build system deployed as static site to GitHub Pages
- Client-side routing via React Router (`HashRouter` for GitHub Pages compatibility)
- Desktop-first layout with responsive mobile sidebar
- Hardcoded content (no backend API, all data embedded in components)
- Scroll-reveal animations using IntersectionObserver for viewport-triggered animations

## Layers

**Presentation Layer:**
- Purpose: Render pages and interactive UI components
- Location: `src/pages/`, `src/components/`
- Contains: Page components (HomePage, ProjectsPage, etc.), Layout wrapper, Sidebar navigation
- Depends on: React Router (routing), hooks (animations, state)
- Used by: App.jsx (root router)

**Layout & Navigation Layer:**
- Purpose: Manage persistent sidebar, mobile responsive state, page structure
- Location: `src/components/Layout.jsx`, `src/components/Sidebar.jsx`
- Contains: Fixed sidebar (260px desktop), hamburger menu (mobile), route-aware state
- Depends on: React Router (useLocation), React hooks (useState)
- Used by: All pages via App.jsx wrapper

**Hooks & Utilities Layer:**
- Purpose: Reusable logic for animations and component behavior
- Location: `src/hooks/useScrollReveal.js`
- Contains: IntersectionObserver-based scroll reveal animation hook
- Depends on: React (useRef, useEffect)
- Used by: All page components for staggered entrance animations

**Styling Layer:**
- Purpose: Design system and component styles
- Location: `src/index.css`
- Contains: Design tokens (CSS variables), Tailwind directives, semantic CSS classes
- Depends on: Tailwind CSS v4, custom CSS classes
- Used by: All components via className strings

## Data Flow

**Route Navigation:**

1. User clicks sidebar link or Link component
2. React Router's HashRouter intercepts navigation
3. Location change triggers Layout effect (`useLocation`)
4. Sidebar closes automatically on mobile
5. New page component renders within Layout
6. Page mounts useScrollReveal hook
7. Elements with `.reveal` class fade/slide in as they enter viewport

**Content Rendering:**

1. Page component defines hardcoded content arrays (PROJECTS, ESSAYS, SIDEQUESTS, etc.)
2. Content arrays `.map()` to render rows with tag pills, category indicators, dates
3. Each item wrapped in `.reveal` with staggered `transitionDelay` CSS property
4. IntersectionObserver in useScrollReveal detects viewport entry
5. Observer adds `.visible` class to trigger CSS animation

**State Management:**

- Minimal: Only mobile sidebar state (open/closed) in Layout.jsx
- Page-level state exists in EssaysPage (filter by type) and AboutPage (copy-to-clipboard feedback)
- No global state manager needed (no cross-page data sharing)

## Key Abstractions

**Page Component Pattern:**

Pattern used in every page (`src/pages/*.jsx`):
```jsx
export function XPage() {
  const ref = useScrollReveal();

  return (
    <div ref={ref}>
      <div className="page-container">
        <header className="page-header reveal">
          <h1>Title</h1>
          <p>Subtitle</p>
        </header>

        {/* Content rows with staggered reveals */}
        <div className="reveal row-item" style={{ transitionDelay: '60ms' }}>
          ...
        </div>
      </div>
      <Footer />
    </div>
  );
}
```

- Every page wraps content in `.page-container` (max-width 680px, centered)
- All animated elements get `.reveal` class + custom `transitionDelay`
- Every page ends with `<Footer />`

**Navigation Configuration:**

`src/components/Sidebar.jsx` centralizes navigation:
```jsx
const NAV_ITEMS = [
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Essays', to: '/essays' },
  { label: 'Sidequests', to: '/sidequests' },
  { label: 'Now', to: '/now' },
];
```

**Important:** Both `src/App.jsx` and `src/components/Sidebar.jsx` must have matching routes.

**Content as Data:**

Pages store content as constants at top of file:
```jsx
const ESSAYS = [
  {
    slug: 'rise-of-autonomous-employees',
    title: 'The Rise of Autonomous Employees',
    date: '02.2024',
    type: 'essay',
    excerpt: '...',
  },
  // ...
];
```

This allows filtering, sorting, and rendering without backend calls.

## Entry Points

**Application Root:**
- Location: `src/main.jsx`
- Triggers: Vite dev server or production bundle load
- Responsibilities: Mount React app to #root div, wrap App with HashRouter for client-side routing

**App Router:**
- Location: `src/App.jsx`
- Triggers: On app mount
- Responsibilities: Define all routes (/, /about, /projects, /essays/:slug, etc.), wrap routes in Layout component

**Layout Wrapper:**
- Location: `src/components/Layout.jsx`
- Triggers: Every page render
- Responsibilities: Render persistent sidebar + hamburger, manage mobile sidebar state, track route changes to close sidebar

## Error Handling

**Strategy:** Silent fallback pages

**Patterns:**
- 404 Not Found: `src/pages/NotFoundPage.jsx` renders when no route matches (via `<Route path="*">`)
- Essay not found: `src/pages/EssayStubPage.jsx` checks if slug exists in ESSAY_CONTENT, renders placeholder text if missing
- No validation errors or error boundaries in use (simple content site)

## Cross-Cutting Concerns

**Logging:** Not used (no console logs in production code)

**Validation:** No form validation (no forms on site; AboutPage has copy-to-clipboard but no validation needed)

**Authentication:** Not applicable (no auth on static site)

**Mobile Responsiveness:** Layout.jsx handles mobile state, Tailwind `@media (min-width: 768px)` breakpoints in CSS, hamburger hidden on desktop via `.hamburger { display: none }` at md breakpoint

**Accessibility:**
- Sidebar links use NavLink for active state indication
- Hamburger button has aria-label and aria-expanded
- Links have aria-labels
- Focus-accessible navigation (semantic HTML, no divs used as buttons)

---

*Architecture analysis: 2026-03-11*
