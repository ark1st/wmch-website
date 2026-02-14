# CONTRIBUTING.md

## Minimal execution rules

1. **One PR = one purpose** (Tooling, Security, Test, UI/UX, Performance).
2. Use **separate branch + separate worktree** per role.
3. Keep changes incremental and rollback-friendly.
4. Before PR-ready, run gates in `site/`:
   - `npm ci`
   - `npm run check` (if exists)
   - `npm run lint` (if exists)
   - `npm test` (if exists)
5. If a gate fails, apply minimal fix and document it in PR notes.
6. Merge order: Tooling/DX → Security → Test → UI/UX → Performance.
