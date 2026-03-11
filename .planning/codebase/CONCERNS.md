# Codebase Concerns

**Analysis Date:** 2026-03-11

## Tech Debt

**Hardcoded Content Data:**
- Issue: All page content (projects, essays, sidequests) is hardcoded directly in component files as large object arrays. Scaling to new content requires modifying component code, risking re-renders and bundle size bloat.
- Files: `src/pages/ProjectsPage.jsx`, `src/pages/EssaysPage.jsx`, `src/pages/SidequestsPage.jsx`, `src/pages/EssayStubPage.jsx`
- Impact: Adding a new project or essay requires code changes and redeployment. No separation of content from presentation. Page files exceed 100 lines due to embedded data.
- Fix approach: Extract content into a separate `src/data/` directory with JSON files or a CMS integration. Consider using `import.meta.glob()` to load content files at build time or a simple content loader module.

**Array Index as React Key:**
- Issue: Several components use array index `i` as the React key prop, which violates React best practices and can cause rendering bugs when list order changes or items are added/removed.
- Files: `src/pages/EssayStubPage.jsx` (line 75: `key={i}`), `src/components/Projects.jsx`, `src/components/Sidequests.jsx`
- Impact: If essays are reordered or new ones prepended, React will re-use DOM nodes incorrectly, causing state preservation issues and animation problems. Component state (like filters) may persist across list items unexpectedly.
- Fix approach: Use stable identifiers like `key={essay.slug}` or `key={project.name}` instead of index.

**No Test Coverage:**
- Issue: No test suite is configured. The CLAUDE.md states "No test suite is configured."
- Files: N/A (project-wide)
- Impact: Cannot catch regressions in routing, scroll reveal, mobile sidebar behavior, or content structure changes. Deployment to GitHub Pages is untested.
- Fix approach: Add vitest or Jest with `@testing-library/react`. Start with critical paths: routing/navigation, scroll reveal hook, sidebar mobile/desktop toggle, and content rendering.

## Fragile Areas

**useScrollReveal Hook:**
- Files: `src/hooks/useScrollReveal.js`
- Why fragile: The hook queries `.reveal` elements inside the ref and relies on IntersectionObserver. If CSS class names change, animations silently fail. No error handling for missing ref or empty targets.
- Safe modification: Keep `.reveal` class name stable. Add defensive checks for `ref.current` validity. Consider memoizing observer setup to prevent re-initialization on rerenders.
- Test coverage: Zero automated tests. Behavior depends entirely on CSS (`opacity: 0; transform: translateY(16px)`) remaining intact.

**Mobile Sidebar State Management:**
- Files: `src/components/Layout.jsx`, `src/components/Sidebar.jsx`, `src/index.css`
- Why fragile: Sidebar open state is local to Layout. On mobile, route changes automatically close the sidebar via useEffect. If routing or pathname detection breaks, sidebar could stay open and overlay visible. No accessibility testing for mobile users.
- Safe modification: Always test on actual mobile devices or viewport. Verify that `aria-expanded` on hamburger button tracks state accurately. Ensure overlay click handlers work on touch.
- Test coverage: Manual testing only. No E2E tests for mobile flows.

**CSS Variable Dependencies:**
- Files: `src/index.css` (design tokens), all component files using `style={{ color: 'var(--color-accent)' }}`
- Why fragile: Design tokens (colors, sidebar width) are CSS variables at `:root`. If `:root` is not loaded or CSS parsing fails, inline styles will inherit browser defaults, breaking visual hierarchy.
- Safe modification: Add fallback values in CSS variables (`--color-accent: #ef4444 /* fallback: red */`). Avoid inlining critical styles; use Tailwind or CSS classes instead.
- Test coverage: No visual regression tests. Changes to design tokens could ship undetected.

**Dynamic Color Object Lookups:**
- Files: `src/pages/ProjectsPage.jsx` (DOT_COLORS), `src/pages/SidequestsPage.jsx` (STATUS_COLORS)
- Why fragile: Uses `DOT_COLORS[project.category] ?? '#ccc'` and `STATUS_COLORS[quest.status]` with fallbacks. If category/status values don't match object keys exactly (typo in data), fallback is used silently.
- Safe modification: Validate all data against expected keys at page load. Consider moving colors to a centralized theme file. Add a build-time check to ensure all used categories/statuses have corresponding color entries.
- Test coverage: No validation tests.

## Performance Bottlenecks

**Inline Transition Delays:**
- Problem: Many elements use inline `style={{ transitionDelay: '${ms}ms' }}` calculated at render time. This ties animation timing to data structure order and requires manual tuning.
- Files: All page components (e.g., `src/pages/ProjectsPage.jsx` line 72, 84)
- Cause: Cascading reveal animations are hardcoded with incrementing delays (60ms, 80ms + i*60ms). If content order changes, delays don't adapt.
- Improvement path: Move delay calculation into CSS custom properties or a data-driven animation library. Use CSS `animation-delay` with calc() or a small animation utility. Consider reducing total animation time on slower devices.

**Google Fonts Blocking:**
- Problem: `src/index.css` imports Inter and Space Grotesk from Google Fonts with `display=swap` but synchronously in CSS. This can block initial text paint.
- Files: `src/index.css` (line 1)
- Cause: Fonts are loaded before page content renders. No font fallback chain defined beyond `system-ui, sans-serif`.
- Improvement path: Use `font-display: swap` (already present). Consider self-hosting fonts or using a local font fallback (e.g., system fonts matching Inter/Space Grotesk metrics). Monitor Lighthouse CLS scores.

## Test Coverage Gaps

**Missing Route Tests:**
- What's not tested: Navigation between pages, HashRouter behavior on GitHub Pages, 404 handling for invalid essay slugs.
- Files: `src/App.jsx`, `src/pages/NotFoundPage.jsx`, `src/pages/EssayStubPage.jsx`
- Risk: Routing bugs could ship undetected. Invalid essay slug fallback (line 43-56 in EssayStubPage) is untested.
- Priority: High — routing is critical to UX.

**Missing Scroll Reveal Tests:**
- What's not tested: IntersectionObserver firing, element animation triggering, cleanup on unmount.
- Files: `src/hooks/useScrollReveal.js`
- Risk: Animation could break silently. Memory leaks possible if observer isn't properly disconnected.
- Priority: Medium — affects user experience but doesn't block core functionality.

**Missing Mobile Behavior Tests:**
- What's not tested: Sidebar open/close on mobile, hamburger button click, sidebar auto-close on route change.
- Files: `src/components/Layout.jsx`, `src/components/Sidebar.jsx`
- Risk: Mobile users could get stuck with sidebar open or encounter unresponsive hamburger.
- Priority: High — affects 50%+ of traffic on portfolio sites.

**Missing Content Rendering Tests:**
- What's not tested: Projects, essays, sidequests all render correctly; filter toggles on EssaysPage; copy-to-clipboard on AboutPage.
- Files: All page components
- Risk: New content could fail to render if data structure changes. Features like the bio copy button could break silently.
- Priority: Medium — easy wins for test coverage.

## Scaling Limits

**Content Data Structure Scaling:**
- Current capacity: ~4 projects, ~3 essays, ~6 sidequests hardcoded in component files.
- Limit: Beyond 10-20 items per page, component files become unmaintainable (>300 lines). Search/sorting would require prop drilling or context.
- Scaling path: Move to a centralized content API or JSON data store. Implement search and filtering in a separate service layer. Consider Airtable, Notion API, or a headless CMS for content management.

## Security Considerations

**Email Address Obfuscation:**
- Risk: Email address in sidebar is displayed as `sohaib[at]sohaibsajid.com` in JSX but rendered as `mailto:sohaib[at]sohaibsajid.com` on line 16 of `src/components/Sidebar.jsx`, which breaks the mailto link.
- Files: `src/components/Sidebar.jsx` (line 16)
- Current mitigation: Email is obfuscated in display, but the actual `mailto:` link may have encoding issues.
- Recommendations: Use a proper email encoding function or contact form instead of mailto links. Consider a Netlify form or simple email service to reduce spam harvesting risk.

**No Content Security Policy (CSP):**
- Risk: External fonts from Google Fonts, Lucide icons, and inline styles could be XSS vectors if the deployment process is compromised.
- Files: All files importing from external CDNs
- Current mitigation: GitHub Pages restricts script injection somewhat, but no explicit CSP headers are set.
- Recommendations: Add CSP headers in `.github/workflows/deploy.yml` or via a `_headers` file if supported by GitHub Pages.

## Known Issues

**No Offline Support:**
- Symptoms: Portfolio is completely unavailable without internet. No service worker or offline fallback.
- Files: All files (project-wide concern)
- Trigger: Loss of network connectivity
- Workaround: None — user must restore connection.
- Impact: Low for a portfolio site but reduces accessibility.

**Sidebar Closing Timing on Mobile:**
- Symptoms: On slower devices or with many items, the sidebar might appear to lag closing or reopening.
- Files: `src/components/Layout.jsx` useEffect (line 11-13)
- Trigger: Route change on mobile while sidebar is open
- Workaround: Manually close sidebar before clicking links
- Impact: Minor UX friction on mobile.

**Essay Filter Doesn't Persist:**
- Symptoms: Setting the Essays page filter (All/Essays/Thoughts) resets when navigating away and back.
- Files: `src/pages/EssaysPage.jsx` (state at line 41)
- Trigger: Navigating to another page and returning to /essays
- Workaround: None
- Impact: Minor — user will see filter reset, not a functional issue.

## Missing Critical Features

**No Dark Mode:**
- Problem: Portfolio is light-only. No user preference detection or toggle.
- Blocks: Accessibility for users with dark mode OS preference or light sensitivity.
- Impact: Low for a portfolio but reduces inclusive design score.

**No SEO Metadata:**
- Problem: No `<head>` meta tags for og:title, og:description, canonical URLs. Each page probably has the same meta.
- Blocks: Social media link previews won't show essay/project titles. Search engines get generic metadata.
- Impact: Medium — hurts discoverability and social sharing of individual essays/projects.

**No Search/Filter for Projects:**
- Problem: Projects are rendered as a flat list. No way to search by technology or filter by category.
- Blocks: Users can't quickly find projects using specific tech stacks.
- Impact: Low for current project count but will hurt at scale.

---

*Concerns audit: 2026-03-11*
