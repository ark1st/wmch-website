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
- `X-Frame-Options: DENY`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`
- `Strict-Transport-Security` (HTTPS requests only)

Note: this repository uses `@sveltejs/adapter-static`. Production header enforcement must also be configured at the hosting layer (for example, CDN/web server config), since static hosting can bypass runtime hooks.

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
