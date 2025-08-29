const path = require( 'path' );
const { merge } = require( 'webpack-merge' );
const wpScriptsConfig = require( '@wordpress/scripts/config/webpack.config' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );

const apps = [
	{
		name: 'solutions-page',
		path: 'solutions-page'
	},
	{
		name: 'solutions-upsell',
		path: 'solutions-upsell',
	},
	{
		name: 'addnew',
		path: 'addnew',
	},
	{
		name: 'solutions-page-component',
		path: 'solutions-page/components/content',
		outputOptions: {
			filename: 'index.js',
			library: { type: 'commonjs2' }
		}
	},
];

const alias = {
	common: path.resolve( __dirname, '/src/common' ),
};

module.exports = apps.map( ( { name, path: appPath, outputOptions={} } ) =>
	merge( wpScriptsConfig, {
		entry: {
			[ name ]: path.resolve( __dirname, `./src/${ appPath }/index.js` ),
		},
		output: {
			path: path.resolve( __dirname, `./build/${ name }` ),
			filename: 'bundle.js',
			...outputOptions
		},
		resolve: {
			alias,
		},
		module: {
			rules: [
				{
					test: /\.css$/,
					include: [
						path.resolve( __dirname, `src/${ name }/*.css` ),
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
