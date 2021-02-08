const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = {
    mode: 'production',
    devtool: 'source-map',
    entry: path.resolve(__dirname, 'src/index.ts'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.js',
        libraryTarget: 'commonjs'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.svg']
    },
    module: {
        rules: [
            { test: /\.ts$/, loader: 'ts-loader' },
            { test: /\.tsx$/, loader: 'ts-loader' },
            { test: /\.svg$/, use: ['@svgr/webpack'] },
            {
                test: /\.(sa|sc)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: 'fewbox-base.min.css',
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
};

module.exports = config;