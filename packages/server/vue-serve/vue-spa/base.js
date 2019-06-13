'use strict'

const path = require("path")
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const config = require('./config.js');
const {loaderCss, pathJoin} = require("../utils");

let assetsPath = function (_path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsDir
    : config.dev.assetsDir

  return path.posix.join(assetsSubDirectory, _path)
}
const baseWebpackConfig = {
  context: pathJoin(), // 基础路径
  entry: {
    app: "./src/main.js"
  },
  output: {
    filename: "[name].js",
    path: pathJoin("dist"),
    publicPath:
      process.env.NODE_ENV === "production"
        ? config.build.assetsPublicPath
        : config.dev.assetsPublicPath
  },
  resolve: {
    // modules: [pathJoin("node_modules")],
    extensions: [".js", ".json", ".vue"],
    alias: {
      "@": pathJoin("src")
    }
  },
  // 排除打包库
  externals: config.public.useCdn.open ? config.public.useCdn.externals : {},
  module: {
    rules: [
      // css loader
      ...loaderCss(
        process.env.NODE_ENV !== "production"
          ? "vue-style-loader"
          : MiniCssExtractPlugin.loader,
        {}
      ),
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          cacheDirectory: true // 开启缓存
        },
        include: [pathJoin("src")]
      },
      {
        test: /\.js$/,
        use: ["babel-loader"],
        include: [pathJoin("src")]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: "url-loader",
        options: {
          name: assetsPath("img/[name]-[hash:7].[ext]"),
          limit: 1024 // 1kb
        },
        include: [pathJoin("src")]
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: "url-loader",
        options: {
          name: assetsPath("media/[name].[hash:7]].[ext]"),
          limit: 10000 // 1kb
        },
        include: [pathJoin("src")]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          name: assetsPath("fonts/[name].[hash:7]].[ext]"),
          limit: 10000 // 1kb
        },
        include: [pathJoin("src")]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      //使用自带模板时，设置为false,使用自己的html模板是设置为true
      inject: true,
      template: config.public.templateIndexHtml,
      minify: config.build.compress
        ? {
            removeComments: true, //去注释
            collapseWhitespace: true, //压缩空格
            removeAttributeQuotes: true //去除属性引用
          }
        : false
    }),
    new VueLoaderPlugin(),
    // 当我们需要使用动态链接库时 首先会找到manifest文件 得到name值记录的全局变量名称 然后找到动态链接库文件 进行加载
    new webpack.DllReferencePlugin({
      manifest: require("./dist/vueAll.manifest.json")
    })
  ]
}; 


// 是否使用cdn
if(config.public.useCdn.open){
  const HtmlExtendWebpackPlugin = require("@web-pro/html-extend-webpack-plugin");

  baseWebpackConfig.plugins.push(
    new HtmlExtendWebpackPlugin(HtmlWebpackPlugin,{ // 扩展HtmlWebpackPlugin
      addJs:config.public.useCdn.cdn.js,
      addCss:config.public.useCdn.cdn.css,
    }),
  )
}


const referencedWebpackConfig = config.public.webpackConfig()

module.exports = merge(baseWebpackConfig,referencedWebpackConfig);