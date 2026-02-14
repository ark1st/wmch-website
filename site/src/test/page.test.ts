import { describe, expect, it } from 'vitest';

import pageSource from '../routes/+page.svelte?raw';

describe('home page', () => {
	it('contains hero and sermon section markup', () => {
		expect(pageSource).toContain('하나님 나라의 망대');
		expect(pageSource).toContain('최신 설교 영상');
		expect(pageSource).toContain('title="세계선교교회 설교 영상"');
		expect(pageSource).toContain('https://www.youtube.com/embed?listType=user_uploads&list=wmch1979');
	});

	it('contains youtube channel link attributes', () => {
		expect(pageSource).toContain('href="https://youtube.com/@wmch1979"');
		expect(pageSource).toContain('target="_blank"');
		expect(pageSource).toContain('rel="noopener noreferrer"');
	});
});
