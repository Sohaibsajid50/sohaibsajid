# Sohaib Portfolio - Deployment Guide

This guide walks you through deploying your portfolio to **GitHub Pages** (free) or **Vercel** (recommended for ease).

## Table of Contents

1. [GitHub Pages](#github-pages)
2. [Vercel](#vercel)
3. [Custom Domain Setup](#custom-domain)

---

## GitHub Pages

### Step 1: Initialize Git & Push to GitHub

```bash
# Initialize git repository
git init
git add .
git commit -m "Initial commit: Sohaib portfolio"

# Create a new repository on GitHub (https://github.com/new)
# Then connect and push:
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/sohaib-portfolio.git
git push -u origin main
```

### Step 2: Update vite.config.js

Edit `vite.config.js` to set the base path (replace `sohaib-portfolio` with your repo name):

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/sohaib-portfolio/',  // ← Update this
  plugins: [react()],
})
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select **GitHub Actions**

### Step 4: GitHub Pages Workflow

The `.github/workflows/deploy.yml` file is already configured. It will:
- Automatically build on every push to `main`
- Deploy to `gh-pages` branch
- Update your live site

**Your site will be live at:** `https://YOUR_USERNAME.github.io/sohaib-portfolio/`

### Step 5: (Optional) Custom Domain

1. Go to **Settings** → **Pages**
2. Under "Custom domain", enter your domain (e.g., `sohaib.com`)
3. Update your domain's DNS records to point to GitHub Pages

---

## Vercel

### Step 1: Push to GitHub

```bash
# Initialize git repository
git init
git add .
git commit -m "Initial commit: Sohaib portfolio"

# Create a new repository on GitHub (https://github.com/new)
# Then connect and push:
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/sohaib-portfolio.git
git push -u origin main
```

### Step 2: Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **Add New** → **Project**
3. Click **Import Git Repository**
4. Select your `sohaib-portfolio` repository from GitHub
5. Click **Import**

### Step 3: Configure Build Settings

Vercel should auto-detect these settings, but verify:

- **Framework**: React
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

Click **Deploy** and wait for the build to complete.

### Step 4: Live!

Once deployed, you'll get a URL like: `https://sohaib-portfolio.vercel.app`

**Every push to `main` will auto-deploy!**

---

## Custom Domain

### For GitHub Pages:

1. Update `vite.config.js` base path (if using custom domain, you can remove it)
2. Go to **Settings** → **Pages**
3. Under "Custom domain", enter your domain
4. Update DNS records:

```
A record:  @ → 185.199.108.153
A record:  @ → 185.199.109.153
A record:  @ → 185.199.110.153
A record:  @ → 185.199.111.153
CNAME:     www → YOUR_USERNAME.github.io
```

### For Vercel:

1. Go to your Vercel project dashboard
2. Click **Settings** → **Domains**
3. Add your custom domain
4. Vercel provides DNS records to add to your domain provider

---

## Troubleshooting

### Build Failed on GitHub Pages/Vercel

- Check Node.js version (should be 18+)
- Ensure `npm run build` works locally: `npm run build`
- Check `dist/` folder is created with files

### Site Not Showing

**GitHub Pages:**
- Verify workflow ran successfully in **Actions** tab
- Check branch is `gh-pages` in Settings → Pages

**Vercel:**
- Wait 5 minutes for first deployment
- Check build logs in Vercel dashboard

### CSS/Styles Not Showing

- Ensure Tailwind CSS is properly configured
- Clear browser cache (Ctrl+Shift+Delete)
- Check network tab for 404 errors

---

## Next Steps

1. **Customize content:**
   - Update project details in `src/components/Projects.jsx`
   - Add essays in `src/components/Essays.jsx`
   - Update your focus in `src/components/Now.jsx`

2. **Update social links:**
   - `src/components/Home.jsx` - CTA links
   - `src/components/Footer.jsx` - Social handles

3. **Add your domain:**
   - Follow "Custom Domain Setup" above

4. **Monitor:**
   - Use Google Analytics (optional)
   - Check Lighthouse scores in DevTools

---

## Local Testing Before Deploy

```bash
# Build locally and preview
npm run build
npm run preview

# Visit http://localhost:4173 in your browser
```

---

**Ship it!** 🚀

Your portfolio is production-ready. Push to GitHub and deploy with confidence.
