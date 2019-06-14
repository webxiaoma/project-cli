'use strict'

process.env.NODE_ENV = "development"

const path = require('path')
const webpack = require('webpack')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const merge = require('webpack-merge')
const chalk = require('chalk')
const open = require('open')
const progressBar = require('single-line-log')
const baseWebpackConfig = require("./base.config.js")
const config = require("./config.js")
const {log,notifierCallback} = require("./utils")

const devWebpackConfig = merge(baseWebpackConfig, {
    mode: "development",
    devtool: config.dev.devtool,
    devServer: {
        clientLogLevel: 'warning',
        contentBase: path.join(__dirname, '../dist'),
        // publicPath:"/",
        open:config.dev.autoOpenBower, // 启动后是否自动打开默认浏览器
        //当出现编译器错误或警告时，在浏览器中显示全屏覆盖层,默认false
        overlay: config.dev.useOverlay?{
            warnings: false,
            errors: true
        }:false,
        host:config.dev.host || "localhost", // ip 和localhost 都可以访问
        port:config.dev.port ||'8080', // 端口访问
        hot: config.dev.hot, // 热模块替换功能
        compress: true, // 启用gzip压缩
        quiet:true, // 是否禁止输出编译信息
        historyApiFallback: true,
    },
    plugins:[
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        }),
       
    ]
})

module.exports = new Promise((resolve, reject) =>{
    let host = config.dev.host;
    let prot = config.dev.port;
    devWebpackConfig.plugins.push(
        new FriendlyErrorsPlugin({
            compilationSuccessInfo: {
                messages: [`项目已启动成功: ${chalk.green(`http://${host}:${prot}`)}`],
                notes: ['可以尽情的写bug了...']
            },       
            onErrors: config.dev.systemErrorNotifier?function ( severity, errors) {
                notifierCallback(severity, errors)
            }:null,

        })
    )

   
    resolve(devWebpackConfig)
});