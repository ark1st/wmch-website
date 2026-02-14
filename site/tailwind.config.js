/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'primary': '#3b82f6',
				'navy-deep': '#0f172a',
				'navy-dark': '#020617',
				'electric-blue': '#06b6d4',
				'silver': '#e2e8f0'
			},
			fontFamily: {
				'display': ['Inter', 'Noto Sans KR', 'sans-serif']
			},
			borderRadius: {
				'DEFAULT': '1rem',
				'lg': '2rem',
				'xl': '3rem',
				'full': '9999px'
			}
		}
	},
	plugins: []
};
