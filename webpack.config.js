const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const cssimport = require('postcss-import');
const cssnext = require('postcss-cssnext');

const isProd = process.env.NODE_ENV === 'production';
const isDev = process.env.NODE_ENV === 'development';

const cssLocalName = isDev ? '[path][name]__[local]' : '[hash:base64:5]';

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
                test: /\.css$/,
                use: ExtractTextPlugin.extract([
                    {
                        loader: 'css-loader',
                        // this must be `query`. if it is `option` the imported classNames are all `undefined`.
                        query: {
                            modules: true,
                            sourceMap: isDev,
                            minimize: isProd,
                            localIdentName: cssLocalName
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [
                                    cssimport(),
                                    cssnext({
                                        browsers: ['last 2 versions', '> 5%']
                                    })
                                ]
                            }
                        }
                    }
                ])
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