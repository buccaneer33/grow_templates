/*VARIABLES*/
const path = require('path');
const ExtractTextPlugin = require ('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const sass = require('sass');
const postcss = require('postcss');
const CONSTANTS = require("./constants");
const AUTOPREFIXER = require('autoprefixer');
const EVENT = process.env.npm_lifecycle_event || '';
const PROD = EVENT.includes('prod');
const DEV = EVENT.includes('dev');
const currentTemplate = 'template4';
const pathToDist = PROD ? (currentTemplate + '/dist/prod') : (currentTemplate + '/dist/dev');
const postCssLoader = PROD ? ({plugins: [AUTOPREFIXER({browsers:['ie >= 8', 'last 12 version']})],sourceMap: false}) : ({sourceMap: true});


/**CONFIG*/

var clientConfig = (function webpackConfig() {
 'use strict';
  var config = Object.assign({});

  config.entry = ['./' + currentTemplate + '/src/js/index.js','./' + currentTemplate + '/src/scss/index.scss'];
  config.output = {path: path.resolve(__dirname, pathToDist), filename: 'js/main.js'};
  PROD ? config.devtool = '' : config.devtool = 'source-map';

  config.module = {
    rules: [
		{test: /\.scss$/,
		   include: path.resolve(__dirname, currentTemplate + '/src/scss'),
			use: ExtractTextPlugin.extract({
			  fallback: "style-loader",
				use: [
					{loader: 'css-loader', options: {url: false,minimize: PROD,sourceMap: DEV}},
					{loader: 'postcss-loader', options:postCssLoader},
					{loader: 'sass-loader', options: {sourceMap: DEV}}
				], publicPath: './' + currentTemplate + '/css/'
			  })
		},
		{test: /\.(png|jpg|gif|svg|webp)$/,
		  use: 
			{loader: 'file-loader', options: {name: './img/[name].[ext]',
			  context: path.resolve(__dirname, './img')}
			  }
		},
		{test: /\.(ttf|eot|woff|woff2)$/,
		  use:
			{
				loader: "file-loader",
				options: {
					name: "[name].[ext]",
					outputPath: 'fonts/',
					context: path.resolve(__dirname, './fonts')}
			}
		},
		{test: /\.(ico)$/,
		  use:
			{
				loader: "file-loader",
				options: {
					name: "[name].[ext]",
					outputPath: '',
					context: path.resolve(__dirname, './')}
			}
		}
		
    ]
  }
config.resolve = {};

config.plugins = [
    new ExtractTextPlugin({
      filename:'./css/index.css',
      allChunks: true,
    }),
    new HtmlWebpackPlugin({
        title: currentTemplate,
        'meta': {
            'viewport': 'width=device-width, initial-scale=1, shrink-to-fit=no',
          },
        files: {
            "css": [ "index.css" ],
            "js": [ "js/main.js"],
            "chunks": {
                "head": {"entry": "",  "css": [ "css/index.css" ]},
                "main": {"entry": "js/main.js", "css": []}
            },
        },

      minify: {collapseWhitespace: false},
      filename: 'index.html',
      template: './' + currentTemplate + '/src/html/template/index.html'
        }),

  ]
return config;
});
module.exports = clientConfig;