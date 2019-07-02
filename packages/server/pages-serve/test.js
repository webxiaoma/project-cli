'use strict'

const path = require("path")
const webpack = require("webpack")
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = require('./config.js')
const { loaderCss, pathJoin } = require("./utils");
const layout = require('./utils/layout.js')

console.log(layout.entry())

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
    app: './src/pages/index.js',
    appa: './src/pages/index.js'
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
    extensions: [".js", ".json"],
    alias: {
      "@": pathJoin("src")
    }
  },
  // 排除打包库
  externals: config.public.externals,
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        include: [pathJoin("src")]
      },

    ]
  },
  plugins: [

  ]
};



module.exports = ()=>{
   
};