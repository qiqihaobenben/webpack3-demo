let webpack = require('webpack');
let webpackMerge = require('webpack-merge');
let webpackDevServer = require('webpack-dev-server');
let htmlWebpackPlugin = require('html-webpack-plugin');
let friendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
let cleanWebpackPlugin = require('clean-webpack-plugin');
let baseConfig = require('./webpack.base.conf');
let { resolve } = require('path');
let getPath = (dir) => resolve(__dirname, '../', dir)

baseConfig.entry.app.unshift('webpack/hot/only-dev-server')
baseConfig.entry.app.unshift('webpack-dev-server/client?http://localhost:9000/')

module.exports = webpackMerge(baseConfig, {
    module: {
        rules: [{
            test: /\.css/,
            use: [{
                loader: 'css-loader',
                options: {
                    sourceMap: false
                }
            }]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    // devServer: {
    //     contentBase: getPath('dist'),
    //     hot: true
    // },
    plugins: [
        // new cleanWebpackPlugin(['dist'],{root: resolve(__dirname, '..')}),
        new webpack.DefinePlugin({
            'process.env': 'devlopment'
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new htmlWebpackPlugin({
            title: '本地开发',
            template: getPath('htmlTpl.tpl'),
            filename: 'index.html',
            inject: true
        }),
        new friendlyErrorsPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
})

const compiler = webpack(module.exports);

const devServer = new webpackDevServer(compiler, {
    contentBase: getPath('dist'),
    disableHostCheck: true,
    hot: true,
    stats: {
        color: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }
})

devServer.listen(9000, 'localhost', () => {
    console.log('dev server listening at localhost:9000')
})

