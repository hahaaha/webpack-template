const path = require('path')

module.exports = {
    entry: './src/core/index.ts',
    output: {
        filename: 'webtem.js',
        path: path.resolve(__dirname, 'dist')
    },
    target: ["node"],
    resolve: {
        extensions: [".ts", ".js", ".json"],
        fallback: {
            "path": false,
            "assert": false,
            "stream": false,
            "buffer": false,
            "crypto": false,
            "os": false,
            "vm": false,
            "tty": false,
            "constants": false
        },
        alias: {
            handlebars: 'handlebars/dist/handlebars.min.js',
        }
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ["ts-loader"],
                include: /src/,
                exclude: /node_modules/
            },
            {
                test: /\.coffee$/,
                loader: 'coffee-loader',
            }
        ]
    }
}