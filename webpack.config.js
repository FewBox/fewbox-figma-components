const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    target: 'web',
    entry: path.resolve(__dirname, 'containers/index.tsx'),
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]-[hash].js',
        chunkFilename: '[name]-[hash].js',
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    devServer: {
        compress: true,
        port: 80,
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.svg']
    },
    module: {
        rules: [
            { test: /\.txt$/, use: 'raw-loader' },
            { test: /\.ts$/, loader: 'ts-loader' },
            { test: /\.tsx$/, loader: 'ts-loader' },
            { test: /\.(png|jpg|gif|eot|ttf|woff|woff2|ico)$/, use: 'url-loader' },
            { test: /\.svg$/, use: ['@svgr/webpack'] },
            {
                test: /\.css$/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
            },
            {
                test: /\.(sa|sc)ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './containers/index.tmpl.html', title: 'FewBox' })
    ]
}
module.exports = config;