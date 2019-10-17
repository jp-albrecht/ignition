const path = require( 'path' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const WebpackRTLPlugin = require( 'webpack-rtl-plugin' );
const BrowserSyncPlugin = require( 'browser-sync-webpack-plugin' );
const { CleanWebpackPlugin } = require( 'clean-webpack-plugin' );

module.exports = {
	mode: 'development',
	entry: {
		main: [ './assets/js/main.js', './assets/sass/main.scss' ],
		gform_extras: './assets/js/gform_extras.js',
		customize_controls: './assets/js/customize-controls.js',
		customize_preview: './assets/js/customize-preview.js',
		admin: './assets/sass/admin.scss',
		login_style: './assets/sass/login-style.scss',
		editor_style: './assets/sass/editor-style.scss',
		gutenberg_editor_style: './assets/sass/gutenberg-editor-style.scss',
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve( __dirname, './assets/dist' ),
	},
	devtool: 'source-map',
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
		new WebpackRTLPlugin(),
		new BrowserSyncPlugin( {
			host: 'localhost',
			port: 3000,
			proxy: 'http://localhost:8000',
		} ),
		new CleanWebpackPlugin(),
	],
};
