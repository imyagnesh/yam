const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');

const plugins = [
    new webpack.HotModuleReplacementPlugin(), // Tell webpack we want hot reloading
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
        template: 'app/index.html',
        inject: true,
        filename: 'index.html'
    }),
    new CircularDependencyPlugin({
        exclude: /a\.js|node_modules/, // exclude node_modules
        failOnError: false, // show a warning when there is a circular dependency
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        children: true,
        minChunks: 2,
        async: true,
    }),
];

module.exports = require('./webpack.base.config')({
    // Add hot reloading in development
    entry: [
        'eventsource-polyfill', // Necessary for hot reloading with IE
        'webpack-hot-middleware/client',
        path.join(process.cwd(), 'app/index.js'), // Start with js/app.js
    ],

    // Don't use hashes in dev mode for better performance
    output: {
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
    },

    // Add development plugins
    plugins: plugins, // eslint-disable-line no-use-before-define

    // Tell babel that we want to hot-reload
    babelQuery: {
        presets: ['babel-preset-react-hmre'].map(require.resolve),
    },

    // Emit a source map for easier debugging
    devtool: 'cheap-module-eval-source-map',

    performance: {
        hints: false,
    },
});
