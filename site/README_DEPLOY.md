# Deploy notes

- This repo keeps the GitHub Pages deploy target at the same URL: `/wmch-website/`.
- The SvelteKit app lives under `site/`.
- GitHub Actions builds `site/` and deploys `site/build` to GitHub Pages.

Local:
- cd site
- npm ci
- npm run verify

CI:
- `.github/workflows/site-verify.yml` runs `npm ci` and `npm run verify` on pull requests and pushes to `main` and `chore/site-verify`.
