'use strict'
process.env.NODE_ENV = "production";
const config = require("./config.js")
const { addEvn, pathJoin } = require("../utils")
addEvn(config.public.addProcessEvn) // 添加环境变量

const path = require("path");
const webpack = require('webpack');
const chalk = require("chalk");
const ora = require("ora");
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const baseWebpackConfig = require("./base.js");


let proWebpackConfig = merge(baseWebpackConfig, {
  mode: "production",
  devtool:
    config.build.useCssMap && config.build.useJsMap ? config.build.devtool : "",
  output: {
    filename: `${config.build.assetsDir}/js/[name]-[contenthash:7].js`,
    // 为生成的chunk其名字
    // chunkFilename: `${config.build.assetsDir}/js/[name]-chunk.js`,
    path: pathJoin(config.build.outputDir),
    publicPath:
      process.env.NODE_ENV === "production"
        ? config.build.baseUrl
        : config.dev.baseUrl
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: '"production"'
      }
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: `${config.build.assetsDir}/css/[name]-[hash:7].css`,
      chunkFilename: `${config.build.assetsDir}/css/[name]-[contenthash:7].css`
    }),
    new CopyWebpackPlugin([
      {
        from: pathJoin(config.build.staticDir),
        to: `public`,
        ignore: [".*"]
      }
    ]),
  ],
  optimization: {
    noEmitOnErrors: true, //跳过生成阶段(emitting phase)
    minimizer: [], // 压缩配置
    splitChunks: {
      // 提取公共代码 查看 https://webpack.docschina.org/plugins/split-chunks-plugin/
      chunks: "all",
      cacheGroups: {
        vendor: { //node_modules内的依赖库
          chunks: "all",
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          minChunks: 1, //被不同entry引用次数(import),1次的话没必要提取
          maxInitialRequests: 5,
          minSize: 0,
          priority: 100,
        },
        common: {// ‘src/js’ 下的js文件
          chunks: "all",
          test: /[\\/]src[\\/]js[\\/].*\.js/,//也可以值文件/[\\/]src[\\/]js[\\/].*\.js/,  
          name: "common", //生成文件名，依据output规则
          minChunks: 2,
          maxInitialRequests: 5,
          minSize: 0,
          priority: 1
        }
      }
    },
    runtimeChunk:{ // 打包 runtime 代码
      name: 'runtime-app'
    }
  }
});


/**
 * 是否进行普通压缩
 */
if (config.build.compress){
    proWebpackConfig.optimization.minimizer.push(
        new OptimizeCssPlugin({ // css代码压缩
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                preset: ['default', { discardComments: { removeAll: true } }],
            },
            cssProcessorOptions:{
                map: config.build.useCssMap?{
                    // 不生成内联映射,这样配置就会生成一个source-map文件
                    inline: false,
                    // 向css文件添加source-map路径注释
                    // 如果没有此项压缩后的css会去除source-map路径注释
                    // annotation: true
                }:false
            },
            canPrint: true // 是否将消息打印到控制台
        })
    )

    proWebpackConfig.optimization.minimizer.push(
        new TerserPlugin({ //js代码压缩
            test: /\.js(\?.*)?$/i,
            parallel: true, // 启用多进程并行运行构建
            sourceMap: config.build.useJsMap,  //cheap-source-map 与改插件不加兼容 查看 https://github.com/webpack-contrib/terser-webpack-plugin#sourcemap
            terserOptions: {
                output: { //删除注释
                    comments: !config.build.delDubgger
                },
                compress: {//删除console 和 debugger  删除警告
                    warnings: !config.build.delDubgger,
                    drop_debugger: config.build.delDubgger,
                    drop_console: config.build.delDubgger
                }
            }
        })
    )
}

/**
 *  是否进行gzip缩压缩 
 **/ 
if (config.build.isGzip){
    const CompressionWebpackPlugin = require('compression-webpack-plugin');
    proWebpackConfig.plugins.push(
        new CompressionWebpackPlugin({
            filename: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp(
                '\\.(' +
                config.build.gzipType.join('|') +
                ')$'
            ),
            threshold: 10240, // 10千字节(kb)
            minRatio: 0.8 //压缩率达到0.8
        })
    )
}

// 执行webpackConfig, 外部可以配置webpackConfig
config.public.webpackConfig(proWebpackConfig);

module.exports = ()=>{
    // loading
    const spinner = ora({
      text: `${chalk.gray("正在打包中，耐心等待...")} \n\n`,
      color: "green"
    }).start(); 

    const compiler = webpack(proWebpackConfig);
    compiler.run((err, stats) => {
          if (err) {
              console.error(err.stack || err);
            if (err.details) {
              console.error(err.details);
            }
            spinner.fail(`${chalk.red("打包出错 \n")}`);
            return;
          }

          if (stats.hasErrors()) {
             spinner.fail(`${chalk.red("打包出现错误 \n")}`);
          } else if (stats.hasWarnings()) {
             spinner.warn(`${chalk.yellowBright("打包出现警告 \n")}`);
          } else {
             spinner.succeed(`${chalk.green("打包成功 \n")}`);
          }

         console.log(
           stats.toString({
             // 增加控制台颜色开关
             chunks: false, // 使构建过程更静默无输出
             colors: true,
             modules: false,
             // 添加构建日期和构建时间信息
             builtAt: true,
             // 添加 children 信息
             children: false,
             // 添加 chunk 信息（设置为 `false` 能允许较少的冗长输出）
             chunks: false,
             entrypoints: true, //  通过对应的 bundle 显示入口起点
           })
         );
 
    });

}