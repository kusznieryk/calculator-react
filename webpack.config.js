const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const MinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports ={
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename:'boundle[hash].js',
        publicPath:'./',
        clean:true
    },
    resolve:{
        extensions:['.js', '.jsx']
    },
    mode: "production",
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.html$/,
                use:[
                    {
                        loader:"html-loader"
                    }
                ]
            },
            {
                test: /\.css$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            }
        ]
    },
    plugins:[
        new HtmlPlugin({
            template: './public/index.html',
            filename: './index[hash].html'
        }),
        new MiniCssExtractPlugin()
    ],
    optimization:{
        minimize: true,
        minimizer:[
            new MinimizerPlugin(),
            new TerserPlugin()
        ]
    }
};




