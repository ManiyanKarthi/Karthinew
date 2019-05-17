var LoopbackBootPlugin = require('loopback-webpack-plugin');
const path = require('path');

const buildPath = path.resolve(__dirname, 'build/target');
var webpack = require('webpack');
module.exports = {
  entry: './index.js',
  debug: true,
  devtool: 'source-map',
  target: 'node',
  output: {
    path: buildPath,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js']
  }, module: {
    preloaders: [],
    rules: [{
      test: /\.json$/,
      loader: 'json'
    }]
  },
  node: {
    net: "empty",
    tls: "empty",
  },
  plugins: [
    new LoopbackBootPlugin({
      appRootDir: path.resolve(__dirname, 'src/loopback')
    })
  ]
};
