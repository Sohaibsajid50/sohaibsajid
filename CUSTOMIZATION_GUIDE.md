# Sohaib Portfolio - Customization Guide

This guide shows you exactly where to edit to customize your portfolio.

## Quick Reference

| Section | File | What to Edit |
|---------|------|-------------|
| Name/Logo | `src/components/Navigation.jsx` | Line 12 |
| Hero Text | `src/components/Home.jsx` | Lines 7-22 |
| CTA Buttons | `src/components/Home.jsx` | Lines 25-30 |
| Projects | `src/components/Projects.jsx` | Lines 3-47 |
| Essays | `src/components/Essays.jsx` | Lines 3-22 |
| Sidequests | `src/components/Sidequests.jsx` | Lines 3-36 |
| Current Focus | `src/components/Now.jsx` | Lines 5-20 |
| Social Links | `src/components/Footer.jsx` | Lines 10-28 |

---

## Navigation & Header

**File:** `src/components/Navigation.jsx`

Change your name (appears in top-left):

```jsx
<div className="text-xl font-bold">Your Name Here</div>  // Line 12
```

---

## Home/Hero Section

**File:** `src/components/Home.jsx`

### Main Tagline (Line 7)

```jsx
<h1 className="mb-8">I build autonomous systems.</h1>
```

Change to: `<h1 className="mb-8">Your tagline here.</h1>`

### Intro Paragraphs (Lines 11-22)

Edit the three paragraphs in the `<div>` tag. Example:

```jsx
<p>
  Your first paragraph about what you do and why it matters.
</p>

<p>
  Your second paragraph about your focus area.
</p>

<p>
  Your third paragraph with a CTA element.
</p>
```

### CTA Buttons (Lines 25-30)

```jsx
<a href="#projects" className="btn-primary flex items-center gap-2">
  See projects  // ← Change button text
  <ArrowRight size={18} />
</a>
<a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="btn-secondary">
  @sohaib  // ← Update your Twitter handle
</a>
```

---

## Projects Section

**File:** `src/components/Projects.jsx`

The `projects` array (lines 3-47) contains all projects. Each project has:

```javascript
{
  name: 'Project Name',
  description: 'One-liner description of what it does.',
  metrics: [
    '10M+ tokens processed',
    '98% task completion',
    '2.3s avg response time',
  ],
  tags: ['Python', 'LLM', 'FastAPI', 'PostgreSQL'],
  github: 'https://github.com/yourname/project',
  live: 'https://liveproject.com',
},
```

### Steps to Add Your Projects:

1. Find the `projects` array (line 3)
2. Replace each placeholder project object with yours
3. Fill in:
   - `name` - Project title
   - `description` - One-liner
   - `metrics` - 2-3 key metrics (optional numbers for impact)
   - `tags` - Tech stack, 4-5 tags
   - `github` - Link to GitHub repo
   - `live` - Link to live project (or remove if not applicable)

**Example:**

```javascript
{
  name: 'AI Sales Assistant',
  description: 'Autonomous agent that handles customer inquiries and closes deals.',
  metrics: [
    '10K+ conversations',
    '35% conversion rate',
    '4.2 avg satisfaction',
  ],
  tags: ['TypeScript', 'OpenAI', 'Stripe', 'Supabase'],
  github: 'https://github.com/yourusername/sales-agent',
  live: 'https://salesagent.example.com',
},
```

---

## Essays & Writing

**File:** `src/components/Essays.jsx`

The `essays` array (lines 3-22) has placeholder essays:

```javascript
{
  title: 'Essay Title Here',
  excerpt: 'Brief description of what the essay covers...',
  date: 'Feb 2024',
  readTime: '8 min read',
  slug: '#',  // ← Change to your essay URL when ready
},
```

### Steps to Add Essays:

1. Find the `essays` array (line 3)
2. Replace placeholders with your real essays
3. Fill in:
   - `title` - Essay title
   - `excerpt` - 1-2 sentence summary
   - `date` - Publication date
   - `readTime` - Estimated reading time (e.g., "8 min read")
   - `slug` - Link to full essay (can be external URL or internal page)

**Example:**

```javascript
{
  title: 'How I Built a $1M ARR AI Product',
  excerpt: 'Lessons from 18 months of building, failing, pivoting, and finally shipping. A brutally honest breakdown of what worked and what didn\'t.',
  date: 'Jan 2024',
  readTime: '12 min read',
  slug: 'https://yourblog.com/1m-arr-lessons',
},
```

---

## Sidequests

**File:** `src/components/Sidequests.jsx`

The `sidequests` array (lines 3-36) has projects in different states:

```javascript
{
  title: 'Project Title',
  description: 'What this experiment is about.',
  status: 'In progress',  // or 'Active', 'Paused', 'Archived'
  tags: ['Node.js', 'Twilio', 'Prototype'],
  link: '#',
},
```

### Status Options:
- `'In progress'` - Currently building
- `'Active'` - Shipped and maintained
- `'Paused'` - On hold
- `'Archived'` - No longer maintained

**Example:**

```javascript
{
  title: 'Autonomous Email Agent',
  description: 'Experiment: Can an AI handle 80% of my inbox without human review?',
  status: 'In progress',
  tags: ['Node.js', 'Claude API', 'Mailgun'],
  link: 'https://github.com/yourname/email-agent',
},
```

---

## Current Focus (Now)

**File:** `src/components/Now.jsx`

Update your current focus section:

```jsx
<h3 className="text-xl font-bold mb-4">Current Focus</h3>
<div className="space-y-4 text-lg leading-relaxed text-gray-700">
  <p>
    Your first paragraph about what you're focused on RIGHT NOW.
  </p>
  <p>
    Your second paragraph about what's exciting you.
  </p>
</div>
```

Also update the date (line 18):

```jsx
<span className="font-semibold">Last updated:</span> February 20, 2024
```

---

## Footer & Social Links

**File:** `src/components/Footer.jsx`

Update social links (lines 10-28):

```jsx
<a href="https://github.com/YOUR_USERNAME" ...>

<a href="https://twitter.com/YOUR_HANDLE" ...>

<a href="mailto:your-email@example.com" ...>
```

And update the copyright year/name (line 35):

```jsx
<p className="text-xs text-gray-500 mt-2">
  © 2024 Your Name. All rights reserved.
</p>
```

---

## Styling & Colors

All colors are hardcoded in `src/index.css`. To customize:

### Edit `src/index.css`:

**Main colors:**
- `#ffffff` - Background (white)
- `#000000` - Text (black)
- `#e5e7eb` - Borders (light gray)
- `#f3f4f6` - Tag backgrounds (lighter gray)

**Examples of changes:**

```css
/* Change background to off-white */
html, body {
  background-color: #fafafa;
}

/* Change link hover color */
a:hover {
  color: #4f46e5; /* Indigo instead of gray */
}
```

---

## Adding More Sections

To add a new section (e.g., "Speaking Engagements"):

1. Create new file: `src/components/Speaking.jsx`
2. Export a component: `export function Speaking() { ... }`
3. Import in `src/App.jsx`: `import { Speaking } from './components/Speaking'`
4. Add to render: `<Speaking />`
5. Add nav link in `Navigation.jsx`

---

## Optimizing Performance

- **Images**: Compress using TinyPNG or similar
- **Icons**: Already using Lucide React (lightweight)
- **Build**: Run `npm run build` to check bundle size
- **Preview**: `npm run preview` to test production build

---

## Testing Before Deploying

```bash
# Start dev server
npm run dev

# Build and preview production
npm run build
npm run preview
```

Visit `http://localhost:5173` (dev) or `http://localhost:4173` (preview).

---

## Common Tasks

### Change from white to dark mode

Edit `src/index.css`:

```css
html, body {
  background-color: #0f0f0f;  /* Dark background */
  color: #ffffff;  /* Light text */
}
```

And adjust all the colors (buttons, cards, etc.)

### Add an email signup form

Create `src/components/Newsletter.jsx` and import it into `App.jsx`.

### Add Google Analytics

Add to `index.html` in the `<head>`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

Replace `GA_MEASUREMENT_ID` with your Google Analytics ID.

---

## Need More Help?

- **Vite docs**: https://vitejs.dev
- **React docs**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com
- **Lucide icons**: https://lucide.dev

---

**You've got this!** Your portfolio is yours to customize. Make it bold, make it yours. 🚀
