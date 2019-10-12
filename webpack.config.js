const path = require( 'path' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );

module.exports = {
	mode: 'development',
	// grab all js files from '/assets/js/custom' and glob them together as the entry point
	// entry: [ './assets/js/index.js', './assets/sass/main.scss' ],
	entry: [ './assets/js/main.js', './assets/sass/main.scss' ],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve( __dirname, './assets/dist' ),
	},
	devtool: 'cheap-source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [ '@babel/preset-env' ],
					},
				},
			},
			{
				// Apply rule for .sass, .scss or .css files
				test: /\.(sa|sc|c)ss$/,

				// Set loaders to transform files.
				// Loaders are applying from right to left(!)
				// The first loader will be applied after others
				use: [
					// Output file as main.bundle.css
					{
						loader: MiniCssExtractPlugin.loader,
					},
					{
						// Translates CSS into CommonJS
						loader: 'css-loader',
						options: {
							sourceMap: true,
						},
					},
					// Autoprefix
					'postcss-loader',
					// Compiles Sass to CSS
					'sass-loader',
				],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin( {
			filename: '[name].bundle.css',
		} ),
	],
};
