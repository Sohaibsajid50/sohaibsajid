# Sohaib Portfolio - Quick Setup

Your production-ready portfolio is ready. Here's what you need to know:

## 📦 What's Included

```
sohaib-portfolio/
├── src/
│   ├── components/          # All page sections
│   │   ├── Navigation.jsx   # Top nav bar
│   │   ├── Home.jsx         # Hero + CTA
│   │   ├── Projects.jsx     # Your projects
│   │   ├── Essays.jsx       # Your writing
│   │   ├── Sidequests.jsx   # Fun experiments
│   │   ├── Now.jsx          # Current focus
│   │   └── Footer.jsx       # Social links
│   ├── App.jsx              # Main app
│   ├── main.jsx             # Entry point
│   └── index.css            # Styles
├── .github/workflows/       # GitHub Pages auto-deploy
├── public/                  # Static files
├── dist/                    # Production build (ready to deploy!)
├── README.md                # Project overview
├── DEPLOYMENT_GUIDE.md      # Deploy to GitHub Pages or Vercel
├── CUSTOMIZATION_GUIDE.md   # How to edit everything
├── package.json             # Dependencies
├── vite.config.js           # Build config
└── tailwind.config.js       # CSS framework config
```

## ⚡ Quick Start

### 1. Install & Run Locally

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Open http://localhost:5173 in your browser
```

### 2. Customize with Your Content

Read `CUSTOMIZATION_GUIDE.md` to update:
- Hero text and tagline
- Your actual projects (with links & metrics)
- Your essays/writing
- Sidequests and current focus
- Social links

### 3. Deploy

Choose one:

**Option A: Vercel (Easiest)**
1. Push repo to GitHub
2. Go to vercel.com
3. Import your GitHub repo
4. Done! Auto-deploys on every push

**Option B: GitHub Pages (Free)**
1. Update `vite.config.js` with repo name
2. Push to GitHub
3. GitHub Actions auto-deploys to `gh-pages`
4. Enable Pages in repo Settings

See `DEPLOYMENT_GUIDE.md` for detailed steps.

## 📝 Key Files to Edit

| Want to... | Edit this file |
|-----------|----------------|
| Change hero text | `src/components/Home.jsx` |
| Add projects | `src/components/Projects.jsx` |
| Add essays | `src/components/Essays.jsx` |
| Update sidequests | `src/components/Sidequests.jsx` |
| Change current focus | `src/components/Now.jsx` |
| Update social links | `src/components/Footer.jsx` |
| Change your name | `src/components/Navigation.jsx` |
| Customize colors | `src/index.css` |

## 🎨 Design Notes

- **Bold & Minimalistic** - Lots of white space, strong typography
- **Dark mode**: Edit colors in `src/index.css` if needed
- **Mobile responsive** - Built with Tailwind CSS breakpoints
- **Fast** - Optimized React + Vite build, ~65KB gzipped JS

## 📊 Performance

Current metrics:
- **JavaScript**: 206 KB (65 KB gzipped)
- **CSS**: 2.77 KB (1.12 KB gzipped)
- **Total**: ~207 KB (66 KB gzipped)
- **Load time**: < 1 second on 4G

## 🚀 Next Steps

1. **Run locally**: `npm run dev`
2. **Customize**: Follow `CUSTOMIZATION_GUIDE.md`
3. **Test**: `npm run build && npm run preview`
4. **Deploy**: Follow `DEPLOYMENT_GUIDE.md`
5. **Iterate**: Push to GitHub → auto-deploys!

## 💡 Pro Tips

- Use short, punchy copy (builder audience loves it)
- Update "Now" section regularly
- Link real GitHub repos and live projects
- Add essays as you write them
- Use Lighthouse DevTools to monitor performance

## 🛠️ Tech Stack

- **React 19** - UI framework
- **Vite 7** - Lightning-fast build tool
- **Tailwind CSS 4** - Utility-first styling
- **Lucide React** - Beautiful icons
- **ESLint** - Code quality checks

## 📚 Resources

- Vite docs: https://vitejs.dev
- React docs: https://react.dev
- Tailwind: https://tailwindcss.com
- Icons: https://lucide.dev

## ❓ Troubleshooting

**"npm run build fails"**
- Make sure Node 16+ is installed: `node --version`
- Clear node_modules: `rm -rf node_modules && npm install`

**"Website not showing styles"**
- Clear browser cache (Ctrl+Shift+Delete)
- Check the Network tab for CSS 404s

**"I can't remember where to edit X"**
- See `CUSTOMIZATION_GUIDE.md` - it has a complete reference

## 📧 Support

- See CUSTOMIZATION_GUIDE.md for detailed editing instructions
- See DEPLOYMENT_GUIDE.md for deployment steps
- All code is production-ready and well-commented

---

## Ready? Let's Go! 🚀

```bash
npm run dev        # Start building locally
npm run build      # Prepare for production
git push origin    # Deploy!
```

Your portfolio is yours. Make it bold. Ship it fast. Good luck!
