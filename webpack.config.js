const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [
    'axios'
    ,'bootstrap'
    // ,'font-awesome'
    ,'jquery'
    ,'popper.js'
    ,'react'
    ,'react-dom'
    ,'react-redux'
    ,'react-router-dom'
    ,'redux'
    ,'redux-thunk'
]

const config = {
    entry: {
        bundle: './src/index.js',
        vendor: VENDOR_LIBS
    },
    output:{
        filename : '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'build')
    },
    module :{
        rules: [
            {
                use:'babel-loader',
                test: /\.js$/
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
                // use: ['style-loader', 'css-loader'],
            },
            {
                loader: 'file-loader',
                test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.woff2$|\.eot$|\.tff$|\.wav$|\.mp3$|\.ico$/
            }
        ]
    },
    plugins :[
        new MiniCssExtractPlugin('style.css'),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.$': 'jquery',
            'window.jQuery' : 'jquery'
          }),
        new HtmlWebpackPlugin({
            template:'src/index.html'
        })
    ]
}

module.exports = config;