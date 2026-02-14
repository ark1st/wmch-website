# PERF_NOTES.md

## Performance updates

1. Added `preconnect` and `dns-prefetch` hints for external embed origins.
2. Set non-critical logo images to `loading="lazy"` + `decoding="async"`.
3. Set YouTube iframe to `loading="lazy"`.

## Expected impact

- Faster external handshake for media embeds.
- Less initial network/decoding pressure on first paint.
- Lower above-the-fold contention on slower mobile devices.

## Verify

In `site/`:

- `npm run check`
- `npm run build`
- Optional: Lighthouse trace compare before/after on mobile profile.
