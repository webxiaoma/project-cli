'use strict'
process.env.NODE_ENV = "production";
const config = require("./config.js")
require("./utils").addEvn(config.public.addProcessEvn);

const path = require("path");
const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack');
const WebpackDeepScopeAnalysisPlugin = require("webpack-deep-scope-plugin").default;
const glob = require("glob-all");
const baseWebpackConfig = require("./base.config.js");

const referencedWebpackConfig = config.build.webpackConfig();

const proWebpackConfig = merge(
  baseWebpackConfig,
  {
    mode: "production",
    devtool:
      config.build.useCssMap && config.build.useJsMap
        ? config.build.devtool
        : "",
    output: {
      filename: `${config.build.assetsDir}/js/[name]-[contenthash:7].js`,
      // 为生成的chunk其名字
      // chunkFilename: `${config.build.assetsDir}/js/[name]-chunk.js`,
      path: config.build.assetsRoot,
      publicPath:
        process.env.NODE_ENV === "production"
          ? config.build.assetsPublicPath
          : config.dev.assetsPublicPath
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: '"production"'
        }
      }),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: `${config.build.assetsDir}/css/[name]-[hash:7].css`
        // chunkFilename: '[name]-[contenthash:7].css'
      }),
      new CopyWebpackPlugin([
        {
          from: path.resolve(__dirname, "../public"),
          to: "static/public",
          ignore: [".*"]
        }
      ]),
      // new PurifyCSSPlugin({ // 还在使用旧api
      //   // tree shaking css https://github.com/webpack-contrib/purifycss-webpack
      //   // Give paths to parse for rules. These should be absolute!
      //   paths: glob.sync([
      //     path.resolve(__dirname, "../*.html"), // 处理根目录下的html文件
      //     path.resolve(__dirname, "../src/*.js"), // 处理src目录下的js文件
      //     path.resolve(__dirname, "../src/*.vue") // 处理src目录下的Vue文件
      //   ])
      // }),

      // tree shaking js https://github.com/vincentdchan/webpack-deep-scope-analysis-plugin
      // new WebpackDeepScopeAnalysisPlugin()
    ],
    optimization: {
      noEmitOnErrors: true, //跳过生成阶段(emitting phase)
      minimizer: [], // 压缩配置
      splitChunks: {
        // 提取公共代码 查看 https://webpack.docschina.org/plugins/split-chunks-plugin/
        chunks: "all",
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            priority: 1,
            name: "vendor-chunk"
          },
          common: {
            name: "common-chunk",
            chunks: "all",
            minSize: 10,
            priority: 0
          }
        }
      },
      runtimeChunk: true
    }
  },
  referencedWebpackConfig
);


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
 *  代码gzip压缩配置
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




module.exports = proWebpackConfig;