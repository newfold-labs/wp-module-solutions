// postcss.config.js
const path = require('path');
const wpPreset = require('@wordpress/postcss-plugins-preset');
const prefixSelector = require('postcss-prefix-selector');

function isSolutionsComponent(ctx) {
	const out = ctx?.webpackLoaderContext?._compiler?.outputPath || '';
	// normalizza e rimuove eventuale slash finale (cross-platform)
	const normalized = path.normalize(out).replace(/[\\\/]+$/, '');
	// matcha .../build/solutions-page-component
	return normalized.endsWith(path.join('build', 'solutions-page-component'));
}

module.exports = (ctx = {}) => {
	const addPrefix = isSolutionsComponent(ctx);

	const basePlugins = [
		require('postcss-import'),
		require('tailwindcss/nesting'),
		require('tailwindcss'),
	];

	const maybePrefix = addPrefix
		? [
			prefixSelector({
				prefix: '.nfd-page-solutions',
				transform(prefix, selector, prefixed) {
					if (selector === 'html' || selector === 'body') return prefix;
					if (selector.startsWith(prefix)) return selector;
					return prefixed;
				},
			}),
		]
		: [];

	return {
		plugins: [
			...basePlugins,
			...maybePrefix,
			...wpPreset,
		],
	};
};
