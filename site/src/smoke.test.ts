import { describe, expect, it } from 'vitest';

import { prerender, ssr } from './routes/+layout.js';
import appHtml from './app.html?raw';
import pageSource from './routes/+page.svelte?raw';
import svelteConfig from '../svelte.config.js?raw';

describe('site smoke checks', () => {
	it('uses static prerendering and disables ssr on layout', () => {
		expect(prerender).toBe(true);
		expect(ssr).toBe(false);
	});

	it('contains expected page title metadata', () => {
		expect(pageSource).toContain('<title>세계선교교회 | 하나님 나라의 망대</title>');
		expect(pageSource).toContain('name="description" content="하나님 나라의 망대 - 세계선교교회"');
	});

	it('includes core hero call to action text', () => {
		expect(pageSource).toContain('메시지 보기');
		expect(pageSource).toContain('유튜브 채널');
	});

	it('has required app shell placeholders', () => {
		expect(appHtml).toContain('%sveltekit.head%');
		expect(appHtml).toContain('%sveltekit.body%');
	});

	it('configures production base path for static deploys', () => {
		expect(svelteConfig).toContain("base: process.env.NODE_ENV === 'production' ? '/wmch-website' : ''");
	});
});
