# Codebase Structure

**Analysis Date:** 2026-03-11

## Directory Layout

```
sohaibsajid/
├── src/                          # Source code
│   ├── assets/                   # Static assets (images, etc.)
│   ├── components/               # Reusable components (Layout, Sidebar, Footer)
│   ├── hooks/                    # Custom React hooks (useScrollReveal)
│   ├── pages/                    # Page components (one per route)
│   ├── App.jsx                   # Root router definition
│   ├── main.jsx                  # React DOM mount point
│   └── index.css                 # Global styles, design tokens, component classes
├── public/                       # Static assets served as-is
│   └── vite.svg                  # Favicon
├── .github/workflows/            # CI/CD (GitHub Pages deploy)
├── .planning/codebase/           # Analysis documents (this directory)
├── index.html                    # HTML entry point
├── vite.config.js                # Vite configuration (sets base to /sohaibsajid/)
├── package.json                  # Dependencies and scripts
├── tailwind.config.js            # Tailwind CSS configuration
├── postcss.config.js             # PostCSS configuration
├── eslint.config.js              # ESLint rules
├── README.md                     # Project documentation
└── CLAUDE.md                     # Developer instructions
```

## Directory Purposes

**src/:**
- Purpose: All application code
- Contains: React components, hooks, styles, entry points
- Key files: `App.jsx` (router), `main.jsx` (mount), `index.css` (styles)

**src/pages/:**
- Purpose: Page-level route components (one component per route)
- Contains: HomePage, ProjectsPage, EssaysPage, AboutPage, SidequestsPage, NowPage, EssayStubPage, NotFoundPage
- Pattern: Each page exports a named function component that wraps content in `page-container` div

**src/components/:**
- Purpose: Reusable UI components used across pages
- Contains: Layout (page wrapper), Sidebar (navigation), Footer (site footer)
- Key file: `Sidebar.jsx` defines NAV_ITEMS navigation array

**src/hooks/:**
- Purpose: Custom React hooks extracted for reuse
- Contains: `useScrollReveal.js` — IntersectionObserver hook for viewport animations

**src/assets/:**
- Purpose: Static images, icons, or media files
- Currently: Empty (no images committed; could store project screenshots here)

**public/:**
- Purpose: Static assets served directly by Vite (not processed)
- Contains: `vite.svg` (favicon)
- Note: Files here accessible at `/<filename>` in HTML

## Key File Locations

**Entry Points:**
- `index.html`: HTML shell, loads root div and main.jsx script
- `src/main.jsx`: React root mount, wraps App with HashRouter
- `src/App.jsx`: Route definitions, wraps routes in Layout component

**Configuration:**
- `vite.config.js`: Sets base to `/sohaibsajid/` for GitHub Pages subpath
- `package.json`: Build scripts, dependencies (React 19, React Router 7, Tailwind 4)
- `tailwind.config.js`: Empty (uses defaults)
- `.github/workflows/deploy.yml`: Auto-deploys to gh-pages on push to main

**Core Logic:**
- `src/components/Layout.jsx`: Mobile sidebar state, hamburger button, route change handling
- `src/components/Sidebar.jsx`: Navigation links (NAV_ITEMS), social links
- `src/hooks/useScrollReveal.js`: IntersectionObserver animation logic
- `src/index.css`: Design tokens (CSS variables), semantic classes (.page-container, .row-item, .tag, .btn-primary, .btn-secondary)

**Styling:**
- `src/index.css`: All styles (no separate CSS files per component)
- Tailwind imported via @tailwind directives (base, components, utilities)
- Custom CSS classes defined inline for component patterns

**Content Data:**
- `src/pages/ProjectsPage.jsx`: PROJECTS array (projects with tags, dates, descriptions)
- `src/pages/EssaysPage.jsx`: ESSAYS array (essay metadata for listing) + FILTERS array
- `src/pages/EssayStubPage.jsx`: ESSAY_CONTENT object (full essay text keyed by slug)
- `src/pages/SidequestsPage.jsx`: SIDEQUESTS array (experiment projects)
- `src/components/Sidebar.jsx`: NAV_ITEMS array (navigation links), SOCIALS array (social icons)
- `src/components/Footer.jsx`: SOCIALS array (repeated social links)
- `src/pages/AboutPage.jsx`: BIO string, TAGS array (expertise areas)

**Testing:**
- None (no test suite configured)

## Naming Conventions

**Files:**
- Components: PascalCase (`HomePage.jsx`, `Sidebar.jsx`, `Layout.jsx`)
- Hooks: camelCase with `use` prefix (`useScrollReveal.js`)
- Styles: Inline in `index.css` using semantic class names (`.page-container`, `.reveal`, `.row-item`)

**Directories:**
- Functional grouping: `pages/`, `components/`, `hooks/`, `assets/`
- All lowercase with trailing slash

**Components:**
- Function components with descriptive names (`HomePage` not `Home`)
- Named exports: `export function ComponentName() {}`

**CSS Classes:**
- Semantic: `.page-container`, `.page-header`, `.row-item`, `.row-link`, `.tag`, `.btn-primary`, `.btn-secondary`, `.reveal`, `.visible`, `.sidebar`, `.sidebar-link`, `.sidebar-overlay`, `.hamburger`, `.main-content`, `.prose-body`, `.dot`, `.inline-link`, `.arrow-reveal`
- Tailwind utilities used inline alongside custom classes (e.g., `className="page-container reveal flex flex-wrap gap-2"`)

**CSS Variables (Design Tokens):**
- `--color-bg`: Background color (#ffffff)
- `--color-text`: Primary text (#333333)
- `--color-text-secondary`: Secondary text (#666666)
- `--color-border`: Border color (#e5e7eb)
- `--color-accent`: Accent red (#ef4444)
- `--sidebar-w`: Sidebar width (260px)

**Constants:**
- Data arrays uppercase: `PROJECTS`, `ESSAYS`, `SIDEQUESTS`, `NAV_ITEMS`, `SOCIALS`, `FILTERS`, `TAGS`
- Color maps uppercase: `DOT_COLORS`, `STATUS_COLORS`

## Where to Add New Code

**New Route/Page:**
1. Create file: `src/pages/NewPageName.jsx`
2. Define page component with useScrollReveal hook, `.page-container` wrapper, `.reveal` elements
3. Add route to `src/App.jsx`: `<Route path="/newpage" element={<NewPageName />} />`
4. Add navigation item to `src/components/Sidebar.jsx`: `{ label: 'Label', to: '/newpage' }` in NAV_ITEMS array

**New Reusable Component:**
1. Create file: `src/components/ComponentName.jsx`
2. Define as named export: `export function ComponentName() {}`
3. Import in page or Layout as needed

**New Hook:**
1. Create file: `src/hooks/useHookName.js`
2. Define hook that returns ref, state, or function
3. Import in page components where needed

**New Styled Element/Pattern:**
1. Add semantic CSS class to `src/index.css` under appropriate section (Layout, Components, etc.)
2. Use class name in components: `className="my-new-class"`
3. Include both custom CSS and Tailwind utilities in className strings

**Content Updates:**
1. Update data arrays in respective page files:
   - Projects: Edit PROJECTS array in `src/pages/ProjectsPage.jsx`
   - Essays: Edit ESSAYS in `src/pages/EssaysPage.jsx`, add content to ESSAY_CONTENT in `src/pages/EssayStubPage.jsx`
   - Sidequests: Edit SIDEQUESTS in `src/pages/SidequestsPage.jsx`
   - About: Edit BIO, TAGS in `src/pages/AboutPage.jsx`

## Special Directories

**dist/:**
- Purpose: Production build output
- Generated: Yes (by `npm run build`)
- Committed: No (in .gitignore)
- Contains: Minified HTML, CSS, JS

**node_modules/:**
- Purpose: npm dependencies
- Generated: Yes (by `npm install`)
- Committed: No (in .gitignore)

**.github/workflows/:**
- Purpose: GitHub Actions CI/CD
- Generated: No (manually configured)
- Committed: Yes
- Contains: `deploy.yml` — auto-builds and publishes to gh-pages on main push

**.planning/codebase/:**
- Purpose: Architecture and codebase analysis documents
- Generated: Yes (by mapping tools)
- Committed: Yes
- Contains: ARCHITECTURE.md, STRUCTURE.md, and other analysis docs

## Build & Deployment

**Build Output:**
- Command: `npm run build`
- Output directory: `./dist/`
- Entry file generated from: `index.html` + `src/main.jsx`
- Base URL: Set to `/sohaibsajid/` in `vite.config.js` for GitHub Pages subpath

**Deployment:**
- Target: GitHub Pages (gh-pages branch)
- Trigger: Push to main branch
- Workflow: `.github/workflows/deploy.yml` runs Node 22, builds, deploys dist/ to gh-pages

**Local Dev:**
- Command: `npm run dev`
- Server: http://localhost:5173 (Vite default)
- Hot reload: Enabled by default

---

*Structure analysis: 2026-03-11*
