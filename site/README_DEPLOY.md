# Deploy notes

- This repo keeps the GitHub Pages deploy target at the same URL: `/wmch-website/`.
- The SvelteKit app lives under `site/`.
- GitHub Actions builds `site/` and deploys `site/build` to GitHub Pages.

Local:
- cd site
- npm ci
- npm run check
- npm run build

Security headers:
- `site/static/_headers` defines hardened response headers for hosts that support `_headers` (for example Netlify/Cloudflare Pages).
- GitHub Pages does not apply custom response headers from this repo directly, so use an upstream proxy/CDN if strict production header enforcement is required there.
