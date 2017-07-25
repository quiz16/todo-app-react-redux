'use strict';

var webpack = require('webpack');

module.exports = {
	'context' : __dirname + '/',
	'entry' : {
		'vendor' : './index.js'
	},
	'output': {
		'filename' : './app.bundle.js'
	},
	'devServer' : {
		'inline' : true,
		'port'   : 8000,
    },
	'module' : {
		'loaders' : [
			{
				'test'    : /\.js$/,
				'exclude' : /node_modules/,
				'loaders' : [ 'babel-loader' ]
			},
			{
				'test'   : /\.html$/,
				'loader' : 'file?name=[name].[ext]'
			},
			{
				'test'    : /\.scss$/,
				'loaders' : [ 'style', 'css', 'sass' ]
			}
		]
	}
};
