const path = require( 'path' );
const { merge } = require( 'webpack-merge' );
const wpScriptsConfig = require( '@wordpress/scripts/config/webpack.config' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );

const apps = [ 'solutions-page', 'solutions-upsell', 'addnew' ];

const alias = {
	common: path.resolve( __dirname, '/src/common' ),
};

module.exports = apps.map( ( app ) =>
	merge( wpScriptsConfig, {
		entry: {
			[ app ]: path.resolve( __dirname, `./src/${ app }/index.js` ),
		},
		output: {
			path: path.resolve( __dirname, `./build/${ app }` ),
			filename: 'bundle.js',
		},
		resolve: {
			alias,
		},
		module: {
			rules: [
				{
					test: /\.css$/,
					include: [
						path.resolve( __dirname, `src/${ app }/*.css` ),
					],
					use: [ MiniCssExtractPlugin.loader, 'css-loader' ],
				},
			],
		},
		plugins: [
			new MiniCssExtractPlugin( {
				filename: '[name].css',
			} ),
		],
	} )
);
