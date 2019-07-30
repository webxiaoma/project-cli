'use strict'

process.env.NODE_ENV = "development"
const config = require("./config.js")
const { addEvn, notifier, pathJoin } = require("../utils")
addEvn(config.public.addProcessEvn) // 添加环境变量

const webpack = require('webpack')
const webpackDevServer = require('webpack-dev-server')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const merge = require('webpack-merge')
const chalk = require('chalk')
const lockIPHost = require("@web-pro/lock-ip-host");
const baseWebpackConfig = require("./base.js")

const devWebpackConfig = merge(baseWebpackConfig, {
    mode: "development",
    devtool: config.dev.devtool,
    plugins:[
        new webpack.DefinePlugin({ // 注入环境变量
            'process.env': {
                NODE_ENV: '"development"'
            }
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new CopyWebpackPlugin([
            {
                from: pathJoin(config.dev.staticDir),
                to: `public`,
                ignore: [".*"]
            }
        ])
    ]
})

module.exports = ()=>{
   // devServer配置
   const devServerOptions = config.dev.devServer;

   // 执行webpackConfig, 外部可以配置webpackConfig
   config.public.webpackConfig(devWebpackConfig);

    // 端口检测
    lockIPHost.lockPort(devServerOptions.port).then(res => {
        devServerOptions.port = res.canUsePort;
        devWebpackConfig.plugins.push(
            new FriendlyErrorsPlugin({
                compilationSuccessInfo: {
                    messages: [
                        `Your application is running here:`,
                        `     localhost: ${chalk.green(`http://localhost:${res.canUsePort}`)}`,
                        `       network: ${chalk.green(`http://${res.ip}:${res.canUsePort}`)}`,
                    ],
                    notes: ['可以尽情的写bug了...']
                },
                onErrors: config.dev.systemErrorNotifier ? function (severity, errors) {
                    console.log(errors)
                    notifier(severity, errors)
                } : null,

            })
        )

        const compiler = webpack(devWebpackConfig);
     
        compiler.hooks.compile.tap("run", compilation => {
              console.log(chalk.green("构建中，不要着急..."));
        });
        webpackDevServer.addDevServerEntrypoints(devWebpackConfig, devServerOptions);
        const webpackServer = new webpackDevServer(compiler, devServerOptions);
        webpackServer.listen(res.canUsePort, "0.0.0.0");
    })
}