# SECURITY.md

## Frontend security checklist

- [x] Keep dependencies reproducible via `package-lock.json`.
- [x] Use HTTPS-only external embeds.
- [x] Add iframe `sandbox` and `referrerpolicy` where possible.
- [x] Prefer local static assets over third-party raw content hosts.
- [ ] Add CSP/security headers at deploy edge (Netlify/Vercel/Nginx).
- [ ] Add dependency audit into CI (`npm audit --omit=dev` policy-based).

## Findings (overnight hardening)

1. **Remote logo dependency reduced**
   - Before: logo loaded from `raw.githubusercontent.com`.
   - After: logo served from local `/wmch-logo.png`.
   - Effect: lower supply-chain/availability risk and less referrer leakage.

2. **Embed hardening**
   - Added `referrerpolicy` and `sandbox` on YouTube and Google Maps iframes.
   - Effect: narrows capabilities for third-party frames and improves privacy defaults.

## Notes

- `npm audit` currently reports low-severity vulnerabilities in transitive deps.
- No blocking vulnerability was introduced by this change set.
