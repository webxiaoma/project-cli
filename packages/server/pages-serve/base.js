'use strict'

const path = require("path")
const webpack = require("webpack")
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = require('./config.js')
const { loaderCss, pathJoin } = require("../utils");


// 资源路径
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
        ? config.build.baseUrl
        : config.dev.baseUrl
  },
  resolve: {
    modules: [pathJoin("node_modules")],
    extensions: [".js", ".json", ".vue"],
    alias: {
      "@": pathJoin("src")
    }
  },
  // 排除打包库
  externals: config.public.externals,
  module: {
    rules: [
      // css loader
      ...loaderCss(
        process.env.NODE_ENV !== "production"
          ? "style-loader"
          : MiniCssExtractPlugin.loader,
        {}
      ),
      {
        test: /\.js$/,
        use: "babel-loader",
        include: [pathJoin("src")]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: "url-loader",
        options: {
          name: assetsPath("img/[name]-[hash:7].[ext]"),
          limit: 1024, // 1kb
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: "url-loader",
        options: {
          name: assetsPath("media/[name].[hash:7]].[ext]"),
          limit: 10000
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          name: assetsPath("fonts/[name].[hash:7]].[ext]"),
          limit: 10000
        },
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
  ]
};



module.exports = baseWebpackConfig;