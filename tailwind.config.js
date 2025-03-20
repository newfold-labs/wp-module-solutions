import { TAILWINDCSS_PRESET } from "@newfold/ui-component-library";

module.exports = {
	presets: [ TAILWINDCSS_PRESET ],
	content: [
		...TAILWINDCSS_PRESET.content,
		'./src/**/*.js',
	],
};
