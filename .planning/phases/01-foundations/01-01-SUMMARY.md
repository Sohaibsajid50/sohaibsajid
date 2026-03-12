---
phase: 01-foundations
plan: 01
subsystem: infra
tags: [react, vite, react-router, tailwind, intersection-observer]

# Dependency graph
requires: []
provides:
  - ROUTES constants object (11 route path keys, frozen, single source of truth)
  - FilterBar controlled pill-filter component (categories/active/onChange props)
  - useScrollReveal hook with configurable deps array (re-animates on filter change)
  - src/data/ directory committed to git (placeholder for Phase 3 data files)
  - WritingPage, BooksPage, ExperimentsPage stub pages routed in App.jsx
affects: [02-writing-page, 03-books-page, 03-experiments-page, all-future-pages]

# Tech tracking
tech-stack:
  added: []
  patterns: [route-constants, controlled-filter-component, deps-driven-scroll-reveal]

key-files:
  created:
    - src/constants/routes.js
    - src/components/FilterBar.jsx
    - src/pages/WritingPage.jsx
    - src/pages/BooksPage.jsx
    - src/pages/ExperimentsPage.jsx
    - src/data/.gitkeep
  modified:
    - src/App.jsx
    - src/hooks/useScrollReveal.js

key-decisions:
  - "ROUTES object is Object.freeze() so no accidental mutation at runtime"
  - "useScrollReveal resets .visible before re-observing to ensure re-animation on deps change"
  - "Stub pages use minimal structure matching NowPage pattern — content deferred to Phase 3"

patterns-established:
  - "Route pattern: import ROUTES from src/constants/routes and use ROUTES.X for all path props"
  - "Filter pattern: FilterBar accepts categories array + active string + onChange callback"
  - "Scroll reveal pattern: pass [filter] as deps to useScrollReveal to re-animate after filter change"

requirements-completed: [INFRA-01, INFRA-02, INFRA-03, INFRA-04]

# Metrics
duration: 2min
completed: 2026-03-12
---

# Phase 1 Plan 01: Shared Infrastructure Foundations Summary

**Frozen ROUTES constant, deps-aware useScrollReveal hook, and reusable FilterBar pill component — shared infrastructure that unblocks all Phase 2 and 3 page builds**

## Performance

- **Duration:** ~2 min
- **Started:** 2026-03-12T07:42:44Z
- **Completed:** 2026-03-12T07:44:58Z
- **Tasks:** 2
- **Files modified:** 8 (6 created, 2 updated)

## Accomplishments
- Created `src/constants/routes.js` with frozen ROUTES object (11 keys) — eliminates route drift between App.jsx and Sidebar.jsx
- Fixed `useScrollReveal` to accept a `deps` array so filter-driven pages can re-trigger scroll animations
- Built `FilterBar` controlled pill component extracted from the EssaysPage pattern
- Added WritingPage, BooksPage, ExperimentsPage stub routes wired into App.jsx
- Committed `src/data/` directory with `.gitkeep` for Phase 3 data files

## Task Commits

Each task was committed atomically:

1. **Task 1: Create route constants and migrate App.jsx** - `5bf4c80` (feat)
2. **Task 2: Fix useScrollReveal and create FilterBar** - `efd4f95` (feat)

## Files Created/Modified
- `src/constants/routes.js` - Frozen ROUTES object with all 11 route path strings
- `src/App.jsx` - Migrated to use ROUTES constants; added Writing, Books, Experiments routes
- `src/pages/WritingPage.jsx` - Stub page with page-container layout and Footer
- `src/pages/BooksPage.jsx` - Stub page with page-container layout and Footer
- `src/pages/ExperimentsPage.jsx` - Stub page with page-container layout and Footer
- `src/components/FilterBar.jsx` - Controlled pill-filter component (categories/active/onChange)
- `src/hooks/useScrollReveal.js` - Added deps parameter; resets .visible before re-observing
- `src/data/.gitkeep` - Placeholder to commit data directory to git

## Decisions Made
- Used `Object.freeze()` on ROUTES so no accidental runtime mutation is possible
- `useScrollReveal` defaults to `deps = []` so all existing call sites work unchanged
- Stub pages deliberately minimal — real content and data integration deferred to Phase 3

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 3 - Blocking] Installed missing npm dependencies**
- **Found during:** Task 1 verification (npm run build)
- **Issue:** `node_modules` was absent — `vite` command not found, blocking build verification
- **Fix:** Ran `npm install` to restore all 249 packages
- **Files modified:** None (node_modules not committed)
- **Verification:** `npm run build` completed with exit code 0 after install
- **Committed in:** N/A (node_modules not committed)

---

**Total deviations:** 1 auto-fixed (1 blocking — missing node_modules)
**Impact on plan:** Auto-fix was a one-time environment setup. No scope creep.

## Issues Encountered
- `node_modules` was not present on first build attempt. Resolved by running `npm install` (Rule 3 auto-fix). Subsequent builds worked without issue.

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- All Phase 2 and Phase 3 pages can now `import { ROUTES } from '../constants/routes'`
- All filter-driven pages can pass `[activeFilter]` to `useScrollReveal` for re-animation
- `FilterBar` is ready to use in Writing, Books, Experiments pages
- `src/data/` directory is committed and ready for JSON data files
- No blockers for next plan

---
*Phase: 01-foundations*
*Completed: 2026-03-12*

## Self-Check: PASSED

All expected files present and all task commits verified on disk.
