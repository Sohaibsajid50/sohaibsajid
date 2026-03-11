# Testing Patterns

**Analysis Date:** 2026-03-11

## Test Framework

**Runner:**
- No test framework configured
- No vitest, jest, or testing library dependencies installed
- `CLAUDE.md` notes: "No test suite is configured"

**Assertion Library:**
- None installed

**Run Commands:**
- No test commands available
- Project has `npm run dev`, `npm run build`, `npm run preview`, `npm run lint` but no test command

## Test Coverage

**Current State:**
- Zero test files present
- No `*.test.js`, `*.spec.js`, `*.test.jsx`, or `*.spec.jsx` files in codebase
- Application is a deployed portfolio site (low test priority compared to production APIs or complex business logic)

## Testing Recommendations

**Critical Paths to Test (if tests were added):**
- Route navigation and page rendering (React Router behavior)
- `useScrollReveal` hook behavior:
  - IntersectionObserver initialization
  - `visible` class application on scroll
  - Cleanup on unmount
  - Edge case: no `.reveal` elements
- Sidebar open/close behavior on route change
- Filter functionality in `EssaysPage.jsx`
- Copy-to-clipboard in `AboutPage.jsx`

**What NOT to Test:**
- DOM snapshots (brittle, high maintenance)
- CSS class application (implementation detail)
- Inline style calculations (low value)
- Static content rendering (content should be in integration/visual tests, not unit)

## Architecture for Testing (If Implemented)

**If vitest were to be added:**

1. **Setup Configuration:**
   ```javascript
   // vitest.config.js
   import { defineConfig } from 'vitest/config'
   import react from '@vitejs/plugin-react'

   export default defineConfig({
     plugins: [react()],
     base: '/sohaibsajid/',
     test: {
       globals: true,
       environment: 'jsdom',
       setupFiles: ['./src/test/setup.js'],
     },
   })
   ```

2. **Test File Structure:**
   - Co-locate with components: `Sidebar.jsx` → `Sidebar.test.jsx`
   - Hooks in separate `__tests__` folder or suffix: `useScrollReveal.test.js`
   - Keep tests next to implementation for easier maintenance

3. **Testing Library Pattern (hypothetical):**
   ```javascript
   import { describe, it, expect, beforeEach, afterEach } from 'vitest'
   import { render, screen } from '@testing-library/react'
   import { BrowserRouter } from 'react-router-dom'

   describe('Sidebar', () => {
     it('closes sidebar when route changes', () => {
       // Test structure
     })
   })
   ```

## Hook Testing Pattern

**For `useScrollReveal` hook (if tests existed):**
```javascript
describe('useScrollReveal', () => {
  it('observes elements with .reveal class', () => {
    // Mock IntersectionObserver
    // Render component with reveal children
    // Verify observer.observe called
  })

  it('adds visible class when element intersects viewport', () => {
    // Simulate intersection
    // Assert visible class added
  })

  it('disconnects observer on unmount', () => {
    // Render and unmount
    // Verify observer.disconnect called
  })

  it('handles container with no reveal children', () => {
    // Render without .reveal elements
    // Should not error
  })
})
```

## UI Component Testing Pattern

**For pages like `ProjectsPage` (if tests existed):**
```javascript
describe('ProjectsPage', () => {
  it('renders all projects', () => {
    render(
      <BrowserRouter>
        <ProjectsPage />
      </BrowserRouter>
    )
    expect(screen.getByText('Autonomous Agent Framework')).toBeInTheDocument()
  })

  it('applies correct category color to dot', () => {
    // Verify DOT_COLORS mapping applied
  })

  it('renders featured tag for featured projects', () => {
    // Check featured badge presence
  })
})
```

## State Interaction Testing

**For components with state like `EssaysPage` (if tests existed):**
```javascript
describe('EssaysPage', () => {
  it('filters essays by type', async () => {
    render(
      <BrowserRouter>
        <EssaysPage />
      </BrowserRouter>
    )
    const essayButton = screen.getByRole('button', { name: /📝 Essays/i })
    await userEvent.click(essayButton)
    // Verify only essays shown, thoughts hidden
  })

  it('shows all items when All filter selected', async () => {
    // Test filter reset
  })
})
```

## Integration Testing Needs

**Page Navigation:**
- Routes resolve correctly (React Router integration)
- Sidebar closes automatically on route change (Layout integration)
- Correct page renders for each route (App routing)

**Scroll Reveal Animation:**
- Animation triggers on scroll into viewport
- Works across all page types

## Mocking Strategy (If Tests Existed)

**What to Mock:**
- `IntersectionObserver` - browser API
- `navigator.clipboard` - for copy-to-clipboard testing in `AboutPage`
- `useLocation` hook - for testing route-dependent behavior

**What NOT to Mock:**
- Component internals (test behavior, not implementation)
- CSS classes (test effect not styling)
- React Router's `useParams`, `useLocation` in integration tests (use `<BrowserRouter>` wrapper)

**Example Mock Setup:**
```javascript
global.IntersectionObserver = class {
  constructor(callback) {
    this.callback = callback
  }
  observe(element) {
    this.callback([{ target: element, isIntersecting: true }])
  }
  unobserve() {}
  disconnect() {}
}
```

## Current Testing Debt

**Gaps:**
- Zero automated tests for UI behavior
- Hook logic (`useScrollReveal`) untested
- State transitions untested (sidebar, filters, copy state)
- Route navigation untested

**Impact:**
- Medium risk - portfolio site, low traffic, primarily static content
- Breaking changes to routing, state logic would go undetected until manual testing
- New features added without regression protection

**Priority if Adding Tests:**
1. `useScrollReveal` hook (shared, complex browser API usage)
2. `EssaysPage` filter functionality (state logic)
3. `Layout` sidebar behavior (route integration)
4. Route navigation smoke tests

---

*Testing analysis: 2026-03-11*
