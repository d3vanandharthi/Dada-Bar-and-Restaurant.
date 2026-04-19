<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Dada Bar & Restaurant

This project is a Vite + React single-page site configured for GitHub Pages deployment using GitHub Actions.

## Prerequisites

1. Node.js 20+
2. A GitHub repository for this project
3. Git installed locally

## Run Locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open http://localhost:3000

## Detailed GitHub Pages Deployment Plan

1. Codebase audit and static compatibility check
2. Configure Vite production base path for repository subpath hosting
3. Add GitHub Actions workflow to build and deploy to Pages
4. Validate with type-check and production build locally
5. Push to `main` to trigger automated deploy
6. Verify live site URL and workflow status

## One-Time Repository Setup

If this folder is not yet connected to GitHub:

1. Initialize and connect git:

   ```bash
   git init -b main
   git remote add origin https://github.com/d3vanandharthi/Dada-Bar-and-Restaurant..git
   ```

2. Commit and push:

   ```bash
   git add .
   git commit -m "Set up GitHub Pages deployment"
   git push -u origin main
   ```

## Automated Deploy Flow

After every push to `main`, workflow [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) will:

1. Install dependencies with `npm ci`
2. Build the app with a Pages-safe base path
3. Upload the `dist` artifact
4. Deploy to GitHub Pages

## Pages URL

Your site URL will be:

`https://d3vanandharthi.github.io/Dada-Bar-and-Restaurant./`

If your repository name is different from `Dada-Bar-and-Restaurant.`, replace the path segment with the actual repository name.

## First-Run Fix (If Deploy Fails With 404)

If the deploy job shows `Failed to create deployment (status: 404)`, enable Pages once in repository settings:

1. Open `Settings -> Pages` in your GitHub repository.
2. In Build and deployment, set Source to `GitHub Actions`.
3. Re-run the latest workflow from the `Actions` tab.

## Validation Commands

Run these before pushing:

```bash
npm run lint
npm run build
```
