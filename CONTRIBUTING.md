# Contributing (wmch-website)

## Important
This repository currently contains the **GitHub Pages publish output** for a SvelteKit site.
Most changes should be made in the **SvelteKit source project** (to be integrated via CI).

## PR rules
- 1 PR = 1 목적 (do not mix refactor/perf/test/docs)
- Include in PR body:
  - What changed / Why / How to test / Risk / Rollback

## Local checks (once source is integrated)
- `npm ci` (or `pnpm i --frozen-lockfile`)
- `npm run check`
- `npm run lint`
- `npm test`
- (Recommended) `npm run verify` (aggregate)
