import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event);

	// Keep development/SSR behavior aligned with static/_headers.
	response.headers.set('X-Content-Type-Options', 'nosniff');
	response.headers.set('X-Frame-Options', 'SAMEORIGIN');
	response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
	response.headers.set(
		'Permissions-Policy',
		'accelerometer=(), ambient-light-sensor=(), autoplay=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()'
	);
	response.headers.set('Cross-Origin-Opener-Policy', 'same-origin');
	response.headers.set('Cross-Origin-Resource-Policy', 'same-site');
	response.headers.set(
		'Content-Security-Policy',
		"default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'self'; connect-src 'self'; font-src 'self' data:; img-src 'self' data: https:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; frame-src https://www.youtube.com https://www.youtube-nocookie.com https://www.google.com; upgrade-insecure-requests"
	);

	// Only emit HSTS on HTTPS responses to avoid local development issues.
	if (event.url.protocol === 'https:') {
		response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
	}

	return response;
};
