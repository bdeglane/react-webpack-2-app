const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve(path.join(__dirname, 'src', 'main.js')),
  output: {
    path: path.resolve(path.join(__dirname, 'dist')),
    filename: '[name].js'
  },
  resolve: {
    extensions: [
      '.js',
      '.json',
      '.css'
    ]
  },
  module: {
    loaders: [
      {
        test: /\.js[x]{0,1}$/,
        exclude: /node_modules/,
        use: [{loader: 'babel-loader'}]
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        // this assumes your vendor imports exist in the node_modules directory
        return module.context && module.context.indexOf('node_modules') !== -1;
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: process.env.NODE_ENV === 'production'
    })
  ]
};