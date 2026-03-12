# Requirements: Sohaib Sajid Portfolio

**Defined:** 2026-03-11
**Core Value:** A visitor can understand who Sohaib is, what he's built, and what he thinks — all from one cohesive, authentic personal site.

## v1 Requirements

### Infrastructure

- [x] **INFRA-01**: Shared route constants extracted so App.jsx and Sidebar.jsx stay in sync automatically
- [x] **INFRA-02**: `src/data/` directory exists with data files for content-heavy pages (sidequests, books, experiments)
- [x] **INFRA-03**: Reusable `FilterBar` component extracted (avoids duplicating filter pill pattern across Writing and future pages)
- [x] **INFRA-04**: `useScrollReveal` hook fixed to re-run when filter state changes (prevents filtered content missing scroll animations)

### Sidebar & Navigation

- [x] **NAV-01**: Sidebar brand name updated to "Sohaib Sajid"
- [x] **NAV-02**: Instagram added to sidebar social links (alongside X, GitHub, LinkedIn, Email)
- [x] **NAV-03**: Broken `mailto:` link in sidebar fixed (currently `sohaib[at]sohaibsajid.com` is not a valid href)
- [x] **NAV-04**: NAV_ITEMS updated to reflect new pages: About, Projects, Writing, Books, Experiments, Sidequests

### About Page

- [x] **ABOUT-01**: About page displays bio paragraph (3rd-person copyable bio)
- [x] **ABOUT-02**: About page displays profile photo
- [x] **ABOUT-03**: About page has "Current Goals" / OKR section with accordion toggle per quarter
- [x] **ABOUT-04**: About page has "Year in Review" stats section (runs, pushups, books read, people met, etc.)
- [x] **ABOUT-05**: About page has "Organizations / Communities" list with linked badges

### Projects Page

- [ ] **PROJ-01**: Each project entry shows date in MM.YYYY format
- [ ] **PROJ-02**: Each project entry has icon links for GitHub (💻), video (🎥), article (✍️), photo (📷) where applicable
- [ ] **PROJ-03**: Projects listed in reverse chronological order (newest first)
- [ ] **PROJ-04**: At least 5 real placeholder projects with descriptions populated

### Writing Page

- [ ] **WRITE-01**: Essays page renamed/replaced with Writing page at `/writing` route
- [ ] **WRITE-02**: Writing page has category filter tabs: All, Essays, Blog, Books, Projects
- [ ] **WRITE-03**: Each writing entry shows date and title as a linked row
- [ ] **WRITE-04**: At least 6 placeholder writing entries across multiple categories

### Books Page

- [ ] **BOOKS-01**: Books page exists at `/books` route with title heading
- [ ] **BOOKS-02**: Each book entry shows title, author, and date read
- [ ] **BOOKS-03**: At least 5 placeholder book entries

### Experiments Page

- [ ] **EXP-01**: Experiments page exists at `/experiments` route with title heading
- [ ] **EXP-02**: Each experiment entry shows name, description, and optional link
- [ ] **EXP-03**: At least 3 placeholder experiment entries

### Sidequests

- [ ] **SQ-01**: Sidequests page acts as a hub linking to sub-pages (title + description cards)
- [ ] **SQ-02**: Each sidequest card links to its own dedicated route
- [ ] **SQ-03**: At least 3 sidequest sub-pages exist with placeholder content (e.g., `/sidequests/coffee`, `/sidequests/rejected`, `/sidequests/now`)
- [ ] **SQ-04**: Sidequest detail pages follow the same layout pattern as essay stub pages

## v2 Requirements

### Enhancements (post-v1)

- **LORE-01**: Interactive life timeline page at `/lore` (hover/click for details)
- **HOME-01**: Featured writing entries shown directly on home page
- **HOME-02**: Newsletter/email signup on home page
- **ABOUT-06**: "Things I Believe" manifesto section on About page
- **ABOUT-07**: Career timeline section with company logos and date ranges (Karpathy-style)
- **WRITE-05**: Individual essay/writing detail pages with full content
- **PROJ-05**: Featured/pinned projects section at top of projects page

## Out of Scope

| Feature | Reason |
|---------|--------|
| Dark mode | Not planned for v1, minimal aesthetic is light-only |
| CMS / Headless CMS | Static site, content as code is the pattern |
| Search | Not needed for current content volume |
| MDX / rich essay rendering | Overkill for placeholder content phase |
| Comment system | Public portfolio, no interaction needed |
| Skills bars / tech stack icons | Anti-pattern, avoid resume-style sections |
| Backend / database | Static site only |
| Authentication | Public portfolio |
| `/now` page removal | Keep as-is, low effort to maintain |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| INFRA-01–04 | Phase 1 | Pending |
| NAV-01–04 | Phase 1 | Pending |
| ABOUT-01–05 | Phase 2 | Pending |
| PROJ-01–04 | Phase 2 | Pending |
| WRITE-01–04 | Phase 3 | Pending |
| BOOKS-01–03 | Phase 3 | Pending |
| EXP-01–03 | Phase 3 | Pending |
| SQ-01–04 | Phase 4 | Pending |

**Coverage:**
- v1 requirements: 28 total
- Mapped to phases: 28
- Unmapped: 0 ✓

---
*Requirements defined: 2026-03-11*
*Last updated: 2026-03-11 after initial definition*
