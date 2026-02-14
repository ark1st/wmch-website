# Deploy notes

- This repo keeps the GitHub Pages deploy target at the same URL: `/wmch-website/`.
- The SvelteKit app lives under `site/`.
- GitHub Actions builds `site/` and deploys `site/build` to GitHub Pages.

Local:
- cd site
- npm ci
- npm run check
- npm run build
