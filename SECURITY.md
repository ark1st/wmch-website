# Security Policy

## Reporting a Vulnerability

Please report suspected security issues privately to the maintainers. Include:

- A clear description of the issue and affected paths.
- Reproduction steps or proof-of-concept.
- Impact assessment.
- Suggested remediation, if known.

Do not open public issues for unpatched vulnerabilities.

## Baseline Hardening

The app now defines baseline response headers in `site/src/hooks.server.ts`:

- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: SAMEORIGIN`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: accelerometer=(), ambient-light-sensor=(), autoplay=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()`
- `Cross-Origin-Opener-Policy: same-origin`
- `Cross-Origin-Resource-Policy: same-site`
- `Content-Security-Policy: default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'self'; connect-src 'self'; font-src 'self' data:; img-src 'self' data: https:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; frame-src https://www.youtube.com https://www.youtube-nocookie.com https://www.google.com; upgrade-insecure-requests`
- `Strict-Transport-Security` (HTTPS requests only)

Source of truth for static hosts is `site/static/_headers`; `hooks.server.ts` mirrors the same policy for SSR/dev responses.
GitHub Pages does not apply custom response headers from this repo directly, so enforce production headers at the CDN/proxy layer when required.

## Templating/XSS Audit (`{@html}`)

Audit date: 2026-02-14

Command used:

```bash
rg -n '\{@html' site
```

Result:

- No `{@html}` usage found under `site/`.
- No current direct raw-HTML sinks were identified in Svelte templates.

If `{@html}` is introduced later, only render sanitized content from trusted sources.
