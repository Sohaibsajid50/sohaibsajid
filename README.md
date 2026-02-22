# Sohaib's Portfolio

A bold, minimalistic portfolio website showcasing AI/automation projects. Built with React, Tailwind CSS, and a focus on startup founder energy—no corporate vibes.

## 🎯 Design Philosophy

- **Minimalistic & Bold** - Lots of white space, strong typography, maximum impact
- **Fast & Snappy** - Zero bloat, optimized for performance
- **Builder-Focused** - Designed for builders talking to builders

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Navigation.jsx    # Top navigation bar
│   ├── Home.jsx          # Hero section + CTA
│   ├── Projects.jsx      # Main projects showcase
│   ├── Essays.jsx        # Writing & builder insights
│   ├── Sidequests.jsx    # Experiments & MVPs
│   ├── Now.jsx           # Current focus
│   └── Footer.jsx        # Footer with social links
├── App.jsx               # Main app component
├── main.jsx              # React DOM entry point
└── index.css             # Tailwind + base styles
```

## 📋 Features

- ✅ Responsive design (mobile-first)
- ✅ Fast navigation with smooth scrolling
- ✅ Project cards with metrics and tech tags
- ✅ Essay/writing section
- ✅ Sidequests (fun experiments)
- ✅ "Now" page (current focus)
- ✅ Social links footer
- ✅ Production-ready code

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repo**
   ```bash
   git clone <repository-url>
   cd sohaib-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:5173](http://localhost:5173) in your browser.

### Development

- `npm run dev` - Start Vite dev server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 📝 Customization Guide

### Update Personal Info

Edit these files to personalize the portfolio:

**Navigation & Home**
- `src/components/Navigation.jsx` - Add/remove nav links
- `src/components/Home.jsx` - Update hero text, CTA links, social handle

**Projects**
- `src/components/Projects.jsx` - Replace placeholder projects with real ones

**Essays**
- `src/components/Essays.jsx` - Add your actual essays and links

**Sidequests**
- `src/components/Sidequests.jsx` - Replace with your experiments

**Now**
- `src/components/Now.jsx` - Update current focus and date

**Footer**
- `src/components/Footer.jsx` - Update social links and contact email

### Styling

- **Colors**: Edit `src/index.css` or `tailwind.config.js`
- **Typography**: System font stack (Inter) in `tailwind.config.js`
- **Components**: Tailwind utility classes throughout

## 🚢 Deployment

### Option 1: GitHub Pages (Free)

1. **Update vite.config.js**
   ```javascript
   export default {
     base: '/repository-name/', // e.g., '/sohaib-portfolio/'
     // ... rest of config
   }
   ```

2. **Build the project**
   ```bash
   npm run build
   ```

3. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/username/sohaib-portfolio.git
   git push -u origin main
   ```

4. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: GitHub Actions
   - Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy

   on:
     push:
       branches: [main]

   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: 18
         - run: npm install
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

5. Your site will be live at: `https://username.github.io/sohaib-portfolio/`

### Option 2: Vercel (Recommended)

1. **Push to GitHub** (as above, steps 3-4)

2. **Go to Vercel** → [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Framework: React
   - Build Command: `npm run build`
   - Output Directory: `dist`

3. **Deploy**
   - Vercel auto-deploys on every push to main
   - Get a live URL instantly
   - Optional: Add custom domain in Vercel settings

4. Your site will be live at: `https://your-domain.vercel.app`

### Option 3: Custom Domain

**For either GitHub Pages or Vercel:**

1. Update your DNS provider (Namecheap, GoDaddy, etc.)
2. Point your domain to the hosting service
3. Configure custom domain in GitHub Pages/Vercel settings

## 📦 Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Utility-first CSS
- **Lucide React** - Icon library
- **ESLint** - Code quality

## 🎨 Design Inspiration

Inspired by [Alex Shibu](https://www.alexshibu.com) but with its own flavor—focused on builder aesthetics and startup founder energy.

## 📄 License

MIT License - Feel free to use this as a template.

## 🚀 Next Steps

1. Replace placeholder projects with real ones
2. Add your actual essays and links
3. Update social links
4. Deploy to GitHub Pages or Vercel
5. Monitor performance with Lighthouse

---

**Built with focus and minimal bloat.** Ship it.
