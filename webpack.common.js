const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
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
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }
}
module.exports = config;