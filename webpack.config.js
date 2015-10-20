const webpack = require('webpack');
const path = require('path');

const config = {
	entry: {
		app: ['./main.js']
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: ['babel']
			}
		]
	},
	output: {
		filename: '[name].js',
		path: path.join(__dirname, './build')
	}
};

module.exports = config;