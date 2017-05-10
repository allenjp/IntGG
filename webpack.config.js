var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, './client/public');
var APP_DIR = path.resolve(__dirname, './client');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015'],
      },
    },
    {
      test: /\.png$/,
      loader: "url-loader",
      query: { mimetype: "image/png" }
    }],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
};

module.exports = config;