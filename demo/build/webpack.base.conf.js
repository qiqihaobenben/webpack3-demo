let webpack = require('webpack');
let { resolve } = require('path');
let getPath = (dir) => resolve(__dirname, '../', dir)

module.exports = {
    entry: {
        app: [getPath('index.js')]
    },
    output: {
        path: getPath('dist'),
        filename: "[name].[hash:6].js",
        // publicPath: '/static'
    },
    resolve: {
        extensions: ['.js', '.json'],
        alias: {
            '@@': getPath('comps'),
            'style': getPath('style')
        },
        modules: ['node_modules', getPath('my_modules')]
    },
    module: {
        rules: [
            {
                test: /\.js/,
                use: ['babel-loader'],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin()
    ]
}