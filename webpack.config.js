const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const DotenvPlugin = require('webpack-dotenv-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// TEMP
const DEBUG = true;

const ip = process.env.APP_IP || '0.0.0.0'
const port = (+process.env.APP_PORT) || 3001
const cssLoaderConfig = 'css-loader?importLoaders=1!postcss-loader'

const config = {
	entry: {
		app: [path.join(__dirname, 'src/bootstrap.ts')],
		vendor: [
			'jquery',
			'lodash',
			'backbone',
			'handlebars'
		]
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].[hash].js'
	},
	resolve: {
		extensions: ['.ts', '.js', '.json'],
		modules: ['src', 'node_modules'],
		alias: {
			app: path.resolve(__dirname, 'src'),
			handlebars: 'handlebars/dist/handlebars.min.js'
		}
	},

	// Enable sourcemaps for debugging webpack's output.
	devtool: 'source-map',

	module: {
		rules: [{
				test: /\.ts$/,
				loader: 'awesome-typescript-loader'
			},
			{
				enforce: 'pre',
				test: /\.js$/,
				loader: 'source-map-loader'
			},
			{
				test: /\.css$/,
				loader: DEBUG ? `style-loader!${cssLoaderConfig}` : ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: cssLoaderConfig
				})
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

	plugins: [
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
		new CleanWebpackPlugin(['dist'], {
			allowExternal: true
		}),
	],
};

module.exports = config;
