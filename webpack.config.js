const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    mode: ENV,
    entry: './src/index.js',
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 3001,
        hot: process.env.APP_hot,
    },
    output: {
        filename: 'main.js',
    },
    plugins:[
        new MiniCssExtractPlugin(),
        new TerserWebpackPlugin(),
        new OptimizeCssAssetsWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.pug",
            filename: "index.html",
            title: 'Development',
        })
    ],
    optimization: {
        minimize: true,
        minimizer:[new TerserWebpackPlugin(), new OptimizeCssAssetsWebpackPlugin()]

    },
    module: {
        rules: [
            {
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options:{
                        esModule:true,
                    }
                }, 'css-loader'],
                test: /\.css$/
            },
            {
                test: /\.pug$/,
                use: 'pug-loader'
            },
            {
                test: /\.ts$/,
                use: 'ts-loader'
            },
            //{
            //    test: /\.js$/,
            //    exclude: '/node_modules/',
            //    use: 'eslint-loader'
            //}
        ]
    }
};