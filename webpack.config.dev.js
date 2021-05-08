const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports ={
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename:'boundle.js',
        clean:true
    },
    resolve:{
        extensions:['.js', '.jsx']
    },
    mode: "development",
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
            filename: './index.html'
        }),
        new MiniCssExtractPlugin()
    ]
};




