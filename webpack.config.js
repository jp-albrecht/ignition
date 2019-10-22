const path = require( 'path' );
const glob = require( 'glob' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const WebpackRTLPlugin = require( 'webpack-rtl-plugin' );
const BrowserSyncPlugin = require( 'browser-sync-webpack-plugin' );
const { CleanWebpackPlugin } = require( 'clean-webpack-plugin' );
const FixStyleOnlyEntries = require( 'webpack-fix-style-only-entries' );

module.exports = {
	mode: 'development',
	entry: {
		custom: glob.sync( './assets/js/custom/*.js' ),
		template_parts: glob.sync( './template-parts/**/*.{js,scss}' ),
		gform_extras: './assets/js/gform_extras.js',
		customize_controls: './assets/js/customize-controls.js',
		customize_preview: './assets/js/customize-preview.js',
		//CSS Entries
		main: './assets/sass/main.scss',
		admin: './assets/sass/admin.scss',
		login_style: './assets/sass/login-style.scss',
		editor_style: './assets/sass/editor-style.scss',
		gutenberg_editor_style: './assets/sass/gutenberg-editor-style.scss',
	},
	output: {
		filename: 'js/[name].bundle.js',
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
		new FixStyleOnlyEntries( {
			extensions: [ 'scss' ],
		} ),
		new MiniCssExtractPlugin( {
			filename: 'css/[name].bundle.css',
		} ),
		new WebpackRTLPlugin(),
		new BrowserSyncPlugin(
			{
				host: 'localhost',
				port: 3000,
				proxy: 'http://localhost:8000',
				tunnel: 'ignition',
				files: '**/*.php',
			},
			{
				injectCss: true,
			}
		),
		new CleanWebpackPlugin(),
	],
};
