const path = require( 'path' );
const { merge } = require( 'webpack-merge' );
const wpScriptsConfig = require( '@wordpress/scripts/config/webpack.config' );

const webConfig = merge({
	entry: path.resolve( __dirname, './src/index.js' ),
	output: {
		path: path.resolve( __dirname, './build' ),
		filename: 'bundle.js',
	}
}, {
    entry: path.resolve(__dirname, './src/addnew/index.js'),
    output: {
        path: path.resolve(__dirname, './build/addnew'),
        filename: 'bundle.js',
    }
});

module.exports = merge( wpScriptsConfig, webConfig );
