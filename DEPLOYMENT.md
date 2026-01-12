# GitHub Pages Deployment Guide

The design system demo site is automatically deployed to GitHub Pages.

## 🌐 Live Demo

**URL:** https://syntaxsidekick.github.io/rk-design-system

## 🚀 Automatic Deployment

The site is automatically deployed when you push to the `main` branch using GitHub Actions.

### How it Works

1. Push code to `main` branch
2. GitHub Actions workflow triggers
3. Installs dependencies
4. Builds the demo site (`npm run build`)
5. Deploys to GitHub Pages

## 📦 Manual Deployment

You can also deploy manually from your local machine:

```bash
# Build and deploy in one command
npm run deploy
```

This will:
1. Build the demo site
2. Deploy to the `gh-pages` branch
3. GitHub Pages will serve from that branch

## 🔧 Build Commands

```bash
# Build demo site only
npm run build

# Build library for npm only
npm run build:lib

# Build demo and move to dist folder
npm run build:demo

# Run development server
npm run dev

# Preview production build locally
npm run preview
```

## 📁 Build Output

- **Demo Site:** `dist-demo/` → Deployed to GitHub Pages
- **NPM Library:** `dist/` → Published to npm

## ⚙️ GitHub Repository Settings

To enable GitHub Pages:

1. Go to repository **Settings** → **Pages**
2. Source: **GitHub Actions** (recommended)
   - Or select **Deploy from a branch** → `gh-pages` branch

3. The site will be available at: `https://syntaxsidekick.github.io/rk-design-system`

## 🔄 Workflow File

The deployment workflow is in `.github/workflows/deploy.yml`

It runs on:
- Push to `main` branch
- Manual workflow dispatch

## 📝 Base Path Configuration

The site is configured with base path `/rk-design-system/` in `vite.config.ts`:

```typescript
base: '/rk-design-system/',
```

This ensures all assets load correctly on GitHub Pages.

## 🐛 Troubleshooting

### Assets not loading
- Check that `base` path in `vite.config.ts` matches your repository name
- Ensure it's `/repo-name/` with leading and trailing slashes

### 404 errors
- GitHub Pages may take a few minutes to deploy
- Check Actions tab for deployment status
- Verify Pages is enabled in repository settings

### Hash routing issues
The app uses hash-based routing (`#overview`, `#brand`, etc.) which works perfectly with GitHub Pages (no server-side configuration needed).

## 🔐 Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `public/` directory with your domain
2. Update DNS settings to point to GitHub Pages
3. Enable custom domain in repository settings

## 📊 Deployment Status

Check deployment status:
- GitHub Actions: Repository → **Actions** tab
- Pages settings: Repository → **Settings** → **Pages**

---

**Note:** The first deployment may take a few minutes. Subsequent deployments are faster (1-2 minutes).
