# External Integrations

**Analysis Date:** 2026-03-11

## APIs & External Services

**Not detected.**

This is a static portfolio site with no backend API calls or external service integrations. All content is hardcoded as local data.

## Data Storage

**Databases:**
- Not applicable - static site with no persistent data storage

**File Storage:**
- Local filesystem only - Static assets served from `./dist` directory post-build

**Caching:**
- Browser caching via HTTP headers (handled by GitHub Pages)

## Authentication & Identity

**Auth Provider:**
- Not applicable - public portfolio site with no authentication

## Monitoring & Observability

**Error Tracking:**
- Not detected - No error tracking service configured

**Logs:**
- Browser console only - No server-side logging

## CI/CD & Deployment

**Hosting:**
- GitHub Pages (static site deployment to `https://agentosync.github.io/sohaibsajid/`)

**CI Pipeline:**
- GitHub Actions workflow: `.github/workflows/deploy.yml`
  - Triggers on push to `main` branch
  - Builds with Node.js 22
  - Publishes `./dist` to `gh-pages` branch
  - Uses `peaceiris/actions-gh-pages@v3` action for deployment

## Environment Configuration

**Required env vars:**
- None - Static portfolio requires no environment variables

**Secrets location:**
- Not applicable - No secrets managed

## Webhooks & Callbacks

**Incoming:**
- Not applicable - Static site, no webhook endpoints

**Outgoing:**
- Social media links only (not webhooks):
  - GitHub: `https://github.com/sohaibsajid`
  - Twitter/X: `https://twitter.com/sohaibsajid`
  - LinkedIn: `https://linkedin.com/in/sohaibsajid`

## Google Fonts

**Fonts loaded from CDN:**
- Inter - body text font
- Space Grotesk - heading font
- Loaded via `@import` in `src/index.css`

---

*Integration audit: 2026-03-11*
