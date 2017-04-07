var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
     template: __dirname + '/app/index.html',
	 filename: 'index.html',
	 inject: 'body'
});


var gulp = require('gulp');
var webpack = require('webpack-stream');
gulp.task('default', function() {
  return gulp.src('src/entry.js')
    .pipe(webpack())
    .pipe(gulp.dest('dist/'));
});

module.exports = {
 entry: __dirname + '/app/app.js',
 module: {
 loaders: [
  {
   test: /\.js$/,
   exclude: /node_modules/,
   loader: 'babel-loader'
   }
  ]
 },
 output: {
   filename: 'transformed.js',
   path: __dirname + '/build'
 },
 plugins: [HTMLWebpackPluginConfig]
};







/*
var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'app');

var config = {
  entry: APP_DIR + '/app.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  }
};

module.exports = config;

*/