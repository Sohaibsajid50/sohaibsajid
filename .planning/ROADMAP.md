# Roadmap: Sohaib Sajid Portfolio

## Overview

Four phases transform a stub portfolio into a fully navigable, content-rich personal site. Phase 1 lays the shared foundations so all subsequent pages are consistent. Phase 2 completes the identity and projects pages — the two highest-signal pages for any visitor. Phase 3 delivers the content library pages (Writing, Books, Experiments). Phase 4 turns Sidequests into a real sub-page system. Every phase delivers a coherent, independently verifiable capability.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [x] **Phase 1: Foundations** - Shared infrastructure, route constants, data layer, and sidebar polish (completed 2026-03-12)
- [ ] **Phase 2: Identity & Projects** - Full About page and polished Projects page
- [ ] **Phase 3: Content Library** - Writing, Books, and Experiments pages with filter support
- [ ] **Phase 4: Sidequests** - Hub page plus dedicated sub-pages for each sidequest

## Phase Details

### Phase 1: Foundations
**Goal**: The shared infrastructure and navigation are correct so all future pages build on a stable base
**Depends on**: Nothing (first phase)
**Requirements**: INFRA-01, INFRA-02, INFRA-03, INFRA-04, NAV-01, NAV-02, NAV-03, NAV-04
**Success Criteria** (what must be TRUE):
  1. Sidebar displays "Sohaib Sajid" as the brand name and includes Instagram alongside the existing social links
  2. The mailto link in the sidebar opens a mail client without errors
  3. NAV_ITEMS in the sidebar lists all six target pages (About, Projects, Writing, Books, Experiments, Sidequests) and routes never fall out of sync between App.jsx and Sidebar.jsx
  4. A `src/data/` directory exists and a reusable FilterBar component is available for use by content pages
  5. Scroll reveal animations re-trigger correctly after a filter change on any page
**Plans**: 2 plans

Plans:
- [ ] 01-01-PLAN.md — Route constants, stub pages, FilterBar, useScrollReveal fix
- [ ] 01-02-PLAN.md — Sidebar NAV polish (brand name, Instagram, mailto, NAV_ITEMS)

### Phase 2: Identity & Projects
**Goal**: A visitor can learn who Sohaib is and what he has built from two complete, content-filled pages
**Depends on**: Phase 1
**Requirements**: ABOUT-01, ABOUT-02, ABOUT-03, ABOUT-04, ABOUT-05, PROJ-01, PROJ-02, PROJ-03, PROJ-04
**Success Criteria** (what must be TRUE):
  1. About page shows a bio paragraph, profile photo, and a linked organizations list
  2. About page has a "Current Goals" section with accordion toggles per quarter
  3. About page has a "Year in Review" stats section with at least one stat visible
  4. Projects page lists at least 5 projects in reverse chronological order, each showing a MM.YYYY date, a description, and applicable icon links (GitHub, video, article)
**Plans**: 2 plans

Plans:
- [ ] 02-01-PLAN.md — About page (bio+photo layout, Goals accordion, Year in Review stats, Organizations badges)
- [ ] 02-02-PLAN.md — Projects page (icon links per entry, 5+ projects, reverse-chron data shape)

### Phase 3: Content Library
**Goal**: Visitors can browse all written work and explore books and experiments through dedicated, filterable pages
**Depends on**: Phase 2
**Requirements**: WRITE-01, WRITE-02, WRITE-03, WRITE-04, BOOKS-01, BOOKS-02, BOOKS-03, EXP-01, EXP-02, EXP-03
**Success Criteria** (what must be TRUE):
  1. Navigating to `/writing` shows a Writing page (not Essays) with filter tabs: All, Essays, Blog, Books, Projects — and filtering visibly changes the displayed entries
  2. At least 6 writing entries are present across multiple categories, each showing a date and a linked title
  3. The Books page at `/books` lists at least 5 entries, each showing title, author, and date read
  4. The Experiments page at `/experiments` lists at least 3 entries, each showing a name, description, and an optional link
**Plans**: TBD

### Phase 4: Sidequests
**Goal**: Each sidequest is a real, navigable page visitors can land on directly
**Depends on**: Phase 3
**Requirements**: SQ-01, SQ-02, SQ-03, SQ-04
**Success Criteria** (what must be TRUE):
  1. The Sidequests page presents sidequest cards with titles and descriptions, each linking to its own route
  2. At least 3 sidequest sub-pages exist (e.g., `/sidequests/coffee`, `/sidequests/rejected`, `/sidequests/now`) with placeholder content
  3. Sidequest detail pages match the layout pattern of existing essay stub pages
**Plans**: TBD

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3 → 4

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Foundations | 2/2 | Complete   | 2026-03-12 |
| 2. Identity & Projects | 1/2 | In Progress|  |
| 3. Content Library | 0/TBD | Not started | - |
| 4. Sidequests | 0/TBD | Not started | - |
