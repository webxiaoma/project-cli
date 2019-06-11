'use strict'

process.env.NODE_ENV = "development"
const config = require("./config.js")
const { addEvn, notifier } = require("./utils")
addEvn(config.public.addProcessEvn) // 添加环境变量

const path = require('path')
const webpack = require('webpack')
const webpackDevServer = require('webpack-dev-server')

const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const merge = require('webpack-merge')
const chalk = require('chalk')
const progressBar = require('single-line-log')
const lockIPHost = require("../../packages/lock-ip-host")
const baseWebpackConfig = require("./base.config.js")

const devWebpackConfig = merge(baseWebpackConfig, {
    mode: "development",
    devtool: config.dev.devtool,
    plugins:[
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        }),
    ]
})

const devServerOptions  = {
    clientLogLevel: 'warning',
    contentBase: path.join(__dirname, '../dist'),
    // publicPath:"/",
    open: config.dev.autoOpenBower, // 启动后是否自动打开默认浏览器
    //当出现编译器错误或警告时，在浏览器中显示全屏覆盖层,默认false
    overlay: config.dev.useOverlay?{
        warnings: false,
        errors: true
    }: false,
    hot: config.dev.hot, // 热模块替换功能
    compress: true, // 启用gzip压缩
    quiet: true, // 是否禁止输出编译信息
    historyApiFallback: true,
}

// 端口检测
lockIPHost.lockPort(config.dev.port).then(res=>{
    devWebpackConfig.plugins.push(
        new FriendlyErrorsPlugin({
            compilationSuccessInfo: {
                messages: [
                    `项目已启动成功`,
                    `     localhost: ${chalk.green(`http://localhost:${res.canUsePort}`)}`,
                    `       network: ${chalk.green(`http://${res.ip}:${res.canUsePort}`)}`,
                ],
                notes: ['可以尽情的写bug了...']
            },       
            onErrors: config.dev.systemErrorNotifier?function ( severity, errors) {
                notifier(severity, errors)
            }:null,

        })
    )

    const compiler = webpack(devWebpackConfig);
    webpackDevServer.addDevServerEntrypoints(devWebpackConfig, devServerOptions);
    const webpackServer = new webpackDevServer(compiler, devServerOptions);
    webpackServer.listen(res.canUsePort, "0.0.0.0");
})
