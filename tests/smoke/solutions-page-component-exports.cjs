/**
 * Smoke test: the built `solutions-page-component` bundle must expose the
 * public API host plugins import — `Content` and `getSolutionsPageTitle`.
 *
 * The bundle is a webpack `commonjs2` library whose externals resolve against
 * browser globals (`window.React`, `window.ReactJSXRuntime`, `window.lodash`,
 * `window.wp.*`). A bare `require()` therefore throws at load time unless those
 * globals are present, which can make the export look "missing". This test wires
 * the externals to the real installed packages, loads the *built* artifact, and
 * asserts the named exports exist and that `getSolutionsPageTitle()` reflects the
 * active solution.
 *
 * Run after `npm run build`:  `node tests/smoke/solutions-page-component-exports.cjs`
 */
'use strict';

const assert = require( 'assert' );
const path = require( 'path' );

// --- Minimal browser environment for the bundle's externals --------------
const sprintf = ( format, ...args ) => {
	let i = 0;
	return String( format ).replace( /%s/g, () => args[ i++ ] );
};

const win = {
	React: require( 'react' ),
	ReactDOM: require( 'react-dom' ),
	ReactJSXRuntime: require( 'react/jsx-runtime' ),
	lodash: require( 'lodash' ),
	wp: {
		element: require( '@wordpress/element' ),
		i18n: { __: ( s ) => s, _n: ( s ) => s, _x: ( s ) => s, isRTL: () => false, sprintf },
		compose: require( '@wordpress/compose' ),
		url: require( '@wordpress/url' ),
	},
	location: { hash: '', href: '', search: '', protocol: 'http:' },
	history: { replaceState() {} },
	navigator: { userAgent: 'node', platform: 'node', maxTouchPoints: 0 },
	document: {
		activeElement: null,
		addEventListener() {},
		removeEventListener() {},
		createElement: () => ( {} ),
		querySelector: () => null,
	},
	getComputedStyle: () => ( {} ),
	addEventListener() {},
	removeEventListener() {},
	setTimeout: () => 0,
	clearTimeout: () => {},
	scrollTo() {},
	scrollY: 0,
	pageYOffset: 0,
};

global.window = win;

// --- Load the built bundle ------------------------------------------------
const bundlePath = path.resolve(
	__dirname,
	'../../build/solutions-page-component/index.js'
);

let mod;
try {
	mod = require( bundlePath );
} catch ( err ) {
	console.error(
		`✖ Failed to load built bundle at ${ bundlePath }. Did you run \`npm run build\`?`
	);
	throw err;
}

// --- Assertions -----------------------------------------------------------
assert.ok(
	'getSolutionsPageTitle' in mod,
	'solutions-page-component must export `getSolutionsPageTitle`'
);
assert.strictEqual(
	typeof mod.getSolutionsPageTitle,
	'function',
	'`getSolutionsPageTitle` must be a function'
);
assert.ok( 'Content' in mod, 'solutions-page-component must export `Content`' );

// `getActiveSolution()` reads the bare global `NewfoldSolutions` (in the
// browser this is `window.NewfoldSolutions`, set via wp_localize_script).
const setSolutions = ( data ) => {
	global.NewfoldSolutions = data;
	win.NewfoldSolutions = data;
};

// Active solution -> title reflects the purchased add-on name.
setSolutions( {
	solution: 'WP_SOLUTION_COMMERCE',
	solutions: [
		{ sku: 'WP_SOLUTION_COMMERCE', name: 'eCommerce Premium Add-On' },
	],
} );
assert.strictEqual(
	mod.getSolutionsPageTitle(),
	'Premium tools available in eCommerce Premium Add-On',
	'active solution title must include the add-on name'
);

// No active solution -> generic fallback.
setSolutions( { solution: false, solutions: [] } );
assert.strictEqual(
	mod.getSolutionsPageTitle(),
	'Premium tools available in eCommerce Add-Ons',
	'no active solution must fall back to the generic title'
);

console.log(
	'✓ solutions-page-component exports: ' + Object.keys( mod ).join( ', ' )
);
console.log( '✓ getSolutionsPageTitle smoke test passed' );
