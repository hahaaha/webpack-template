const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require("webpack")

module.exports = merge(common, {
    mode: 'production',
    output: {
        library: 'webtem',
        libraryTarget: 'umd',
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
})