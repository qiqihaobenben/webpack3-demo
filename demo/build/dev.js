let webpack = require('webpack');
let devConfig = require('./webpack.dev.conf');
let { resolve } = require('path');
let getPath = (dir) => resolve(__dirname, '../', dir);

let compiler = webpack(devConfig, function (err, stats){
    if(err) throw err
    process.stdout.write(stats.toString({
        colors: true,
        chunks: false
    }))
});
/* compiler.run((err, stats) => {
    if (err) {
        throw new Error(err)
    }
    console.log(stats.toString({
        chunks: false,
        colors: true
    }))
}) */



