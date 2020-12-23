const path = require('path')

module.exports = {
    entry: './src/core/index.ts',
    output: {
        filename: 'webtem.js',
        path: path.resolve(__dirname, 'dist')
    },
    target: ["node"],
    resolve: {
        extensions: [".ts", ".js", ".json"]
    },
    externals: {
        metalsmith: "commonjs2 metalsmith",
        handlebars: "handlebars"
    },
    devtool: "cheap-module-source-map",
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ["ts-loader"],
                include: /src/,
                exclude: /node_modules/
            }
        ]
    }
}