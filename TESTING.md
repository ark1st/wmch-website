# TESTING.md

## Test strategy (current baseline)

- This repo currently uses a **smoke quality gate** for frontend integrity.
- `npm test` executes `npm run test:smoke`.
- `test:smoke` reuses `svelte-check` via `npm run check`.

## Commands

Run inside `site/`:

- `npm ci`
- `npm run check`
- `npm test`
- `npm run build`

## Next step candidates

- Add Vitest for component logic tests.
- Add Playwright for routing and accessibility smoke tests.
- Add coverage threshold after first stable test suite lands.
