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
- `site/static/_headers` is the production source of truth for hosts that support `_headers` (for example Netlify/Cloudflare Pages).
- `site/src/hooks.server.ts` mirrors the same policy for SSR/dev server responses, but this app is configured as static (`ssr = false`) so GitHub Pages will not enforce headers from that hook.
- GitHub Pages does not apply custom response headers from this repo directly, so use an upstream proxy/CDN if strict production header enforcement is required there.

Verification:
- Run `npm run check` and `npm run build`.
- Confirm the built artifact includes `build/_headers`.
- For supported hosts, validate deployed headers with `curl -I https://<host>/<path>`.
