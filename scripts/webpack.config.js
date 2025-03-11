const path = require( 'path' );
const { merge } = require( 'webpack-merge' );
const wpScriptsConfig = require( '@wordpress/scripts/config/webpack.config' );

const webConfig = {
	mode: 'production',
	watch: true,
	entry: path.resolve( __dirname, '../src/index.js' ),
	output: {
		path: path.resolve( __dirname, '../build' ),
		filename: 'bundle.js',
	},
	externals: {
		'@wordpress/dom-ready': 'wp.domReady',
		'@wordpress/element': 'wp.element'
	}
};

module.exports = merge( wpScriptsConfig, webConfig );
