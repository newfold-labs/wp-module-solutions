import { TAILWINDCSS_PRESET } from '@newfold/ui-component-library';

module.exports = {
	presets: [ TAILWINDCSS_PRESET ],
	content: [
		...TAILWINDCSS_PRESET.content,
		'./src/**/*.js',
	],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#196BDE',
					dark: '#1A4884',
					light: '#CCDCF4',
					lighter: '#949FB1',
				},
				secondary: {
					DEFAULT: '#FCD34D',
					dark: '#E9B404',
					light: '#FEF6D9',
					lighter: '#FEF6D9',
				},
				title: '#0F172A',
				body: '#4A5567',
				link: '#2271B1',
				line: '#E2E8F0',
				white: '#FFFFFF',
				offWhite: '#F0F0F5',
				black: '#000000',
				canvas: '#F1F5F9',
			},
		},
	},
};
