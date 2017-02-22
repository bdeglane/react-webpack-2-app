const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
    entry: path.resolve(path.join(__dirname, 'src', 'client.js')),
    output: {
        path: path.resolve(path.join(__dirname, 'src', 'static', 'js')),
        publicPath: path.resolve(path.join(__dirname, 'src', 'static')),
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
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "sass-loader"]
                })
            }
        ]
    },
    devtool: "source-map",
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module) {
                // this assumes your vendor imports exist in the node_modules directory
                return module.context && module.context.indexOf('node_modules') !== -1;
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: isProd,
            sourceMap: isDev
        }),
        new ExtractTextPlugin({
            filename: '../style/[name].css',
            disable: false,
            allChunks: true
        })
    ]
};