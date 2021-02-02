const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const nodeExternals = require('webpack-node-externals');

module.exports = merge(common, {
    entry: path.resolve(__dirname, 'src/index.ts'),
    mode: 'production',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.js',
        libraryTarget: 'commonjs'
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: 'fewbox-figma.min.css',
            chunkFilename: '[id].min.css',
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'src/**/*.scss',
                    to({ context, absoluteFilename }) {
                        return `${path.relative(context, absoluteFilename).split("src\\").join("").split("src/").join("")}`;
                    }
                }
            ]
        })
    ],
    externals: [nodeExternals()]
});