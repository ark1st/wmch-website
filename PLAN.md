# PLAN (Nightly Upgrade) — wmch-website

## Reality check
This repository currently contains **built SvelteKit output** (GitHub Pages publish artifacts): `index.html`, `_app/`, static assets.
That means most UI/logic changes are not editable here (they live in the source project that produced the bundles).

## Tonight's goal
1) Establish a safe workflow to evolve the site without losing GitHub Pages simplicity.
2) Prepare a migration path to keep this repo as the deploy target **while adding a source-of-truth SvelteKit project + automated build/deploy**.

## Proposed PR tickets (1 PR = 1 목적)

### [Ticket] docs: add agent operating rules + morning report scaffolding
- Scope: PLAN.md, MORNING_REPORT.md, CONTRIBUTING.md, PR template
- Acceptance: docs present; clear merge order; how-to-run checks documented

### [Ticket] chore(ci): add GitHub Actions build → deploy to Pages (keep repo)
- Scope: add `.github/workflows/pages.yml`, add SvelteKit source (from `wmch-sveltekit`) into repo root or `/app`
- Constraints: keep existing Pages URL stable; keep `base` path `/wmch-website`
- Acceptance: build succeeds in CI; deploys to Pages; artifacts committed or published via Actions (decision in PR)

### [Ticket] feat(ui): a11y + semantic + metadata improvements (in source)
- Scope: SvelteKit routes/components
- Acceptance: check/lint pass; a11y warnings reduced; key pages improved

### [Ticket] perf: optimize images + reduce client work (in source)
- Scope: image loading, route loads, bundle notes
- Acceptance: before/after notes; at least one concrete improvement

### [Ticket] test: add basic smoke tests (in source)
- Scope: vitest/playwright (pick the minimal one)
- Acceptance: >= 5 tests; added to verify gate

### [Ticket] security: baseline headers + env policy (in source)
- Scope: hooks.server.ts headers + docs
- Acceptance: CSP/referrer policy documented; unsafe patterns audited

## Merge order
1. docs/tooling (this PR)
2. CI/deploy (source integration)
3. security
4. tests
5. UI/UX
6. performance
