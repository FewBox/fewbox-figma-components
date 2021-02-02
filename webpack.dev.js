const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    target: 'web',
    entry: path.resolve(__dirname, 'containers/index.tsx'),
    devServer: {
        compress: true,
        port: 3000,
        historyApiFallback: true
    },
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]-[hash].js',
        chunkFilename: '[name]-[hash].js',
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: './assets', to: './assets' }
            ]
        }),
        new HtmlWebpackPlugin({ template: './containers/index.tmpl.html', title: 'FewBox' })
    ]
});