import * as path from 'path';
import * as webpack from 'webpack';

import * as CleanWebpackPlugin from 'clean-webpack-plugin';
import * as CopyWebpackPlugin from 'copy-webpack-plugin';
import * as ExtractTextPlugin from 'extract-text-webpack-plugin';
import * as HtmlWebpackHarddiskPlugin from 'html-webpack-harddisk-plugin';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as DotenvPlugin from 'webpack-dotenv-plugin';

declare var __dirname;

const ip = process.env.APP_IP || '0.0.0.0';
const port = (+process.env.APP_PORT) || 3001;

const config: webpack.Configuration = {
	// Enable sourcemaps for debugging webpack's output.
	devtool: 'source-map',

	entry: {
		app: [path.join(__dirname, 'src/bootstrap.ts')],
		vendor: [
			'jquery',
			'lodash',
			'backbone',
			'handlebars',
			'material-design-lite'
		]
	},

	module: {
		rules: [
			{
				test: /\.ts$/,
				// https://github.com/s-panferov/awesome-typescript-loader/issues/375
				loader: 'awesome-typescript-loader?silent=true'
			},
			{
				enforce: 'pre',
				test: /\.js$/,
				loader: 'source-map-loader'
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'typings-for-css-modules-loader?modules&importLoaders=1&namedExport&camelCase!postcss-loader'
				}),
				exclude: [
					path.join(__dirname, 'src/app.css'),
					path.join(__dirname, 'node_modules')
				],
				include: [path.join(__dirname, 'src/views')],
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader'],
				}),
				include: [
					path.join(__dirname, 'src/app.css'),
					path.join(__dirname, 'node_modules')
				],
				exclude: [path.join(__dirname, 'src/views')],
			},
			{
				test: /\.png$/,
				loader: 'url-loader?prefix=images/&limit=8000&mimetype=image/png'
			},
			{
				test: /\.jpg$/,
				loader: 'url-loader?prefix=images/&limit=8000&mimetype=image/jpeg'
			},
			{
				test: /\.svg$/,
				loader: 'url-loader'
			},
			{
				test: /\.woff$/,
				loader: 'url-loader?prefix=fonts/&limit=8000&mimetype=application/font-woff'
			},
			{
				test: /\.hbs$/,
				loader: 'handlebars-loader'
			},
			{
				test: /\.ttf$/,
				loader: 'file-loader?prefix=fonts/'
			},
			{
				test: /\.eot$/,
				loader: 'file-loader?prefix=fonts/'
			},
			{
				test: /\.json$/,
				loader: 'json-loader'
			}
		]
	},

	output: {
		filename: '[name].[hash].js',
		path: path.join(__dirname, 'dist')
	},

	resolve: {
		alias: {
			app: path.resolve(__dirname, 'src'),
			handlebars: 'handlebars/dist/handlebars.min.js'
		},
		extensions: ['.ts', '.js', '.json', '.hbs'],
		modules: ['src', 'node_modules']
	},

	plugins: [
		new webpack.WatchIgnorePlugin([
			/css\.d\.ts$/
		]),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: path.resolve(__dirname, 'src', 'index.hbs'),
			inject: false,
			alwaysWriteToDisk: true,
			path: 'dist/'
		}),
		new HtmlWebpackHarddiskPlugin(),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			filename: '[name].[hash].js',
			minChunks: Infinity
		}),
		new ExtractTextPlugin({
			filename: 'styles.[hash].css',
			ignoreOrder: true
		}),
		new CleanWebpackPlugin(['dist'], {
			allowExternal: true
		}),
	]
};

export default config;
