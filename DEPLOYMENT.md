# Deployment Guide

## Initial Setup

1. **Create GitHub Repository**
   - Go to GitHub and create a new repository named: `ningxia-hengkang-technology-modernization`
   - Do NOT initialize with README, .gitignore, or license (we already have these)

2. **Link Local Repository to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/ningxia-hengkang-technology-modernization.git
   ```
   Replace `YOUR_USERNAME` with your actual GitHub username.

3. **Commit and Push**
   ```bash
   git add .
   git commit -m "Initial commit: Ningxia Hengkang Technology website"
   git branch -M main
   git push -u origin main
   ```

4. **Configure GitHub Pages**
   - Go to your repository on GitHub
   - Click on **Settings** → **Pages**
   - Under "Build and deployment":
     - Source: Select **GitHub Actions**
   - The workflow will automatically deploy your site

5. **Access Your Site**
   - After the workflow completes, your site will be available at:
   - `https://YOUR_USERNAME.github.io/ningxia-hengkang-technology-modernization/`

## Updating the Site

Whenever you make changes:

```bash
npm run build
git add .
git commit -m "Description of your changes"
git push
```

The GitHub Action will automatically rebuild and redeploy your site.

## Troubleshooting

### Site not loading properly
- Check that the `base` path in `vite.config.ts` matches your repository name
- Ensure GitHub Pages is set to use "GitHub Actions" as the source
- Check the Actions tab for any build errors

### 404 errors on refresh
- This is expected with client-side routing
- The HashRouter is already configured to handle this

### Build fails
- Make sure all dependencies are in `package.json`
- Check the Actions tab for detailed error logs
