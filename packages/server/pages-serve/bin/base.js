'use strict'

const path = require("path")
const webpack = require("webpack")
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = require('./config.js')
const { loaderCss, pathJoin } = require("../utils");
const layout = require('../utils/layout.js')

const {CleanWebpackPlugin} = require('clean-webpack-plugin');

// 资源路径
let assetsPath = function (_path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsDir
    : config.dev.assetsDir

  return path.posix.join(assetsSubDirectory, _path)
}

const baseWebpackConfig = {
  mode:"none",
  context: pathJoin(), // 基础路径
  entry: layout.getEntry(),
  output: {
    filename: "[name]/js/index-[contenthash:7].js",
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
       // css loader
      ...loaderCss(
        process.env.NODE_ENV !== "production"
          ? "style-loader"
          : MiniCssExtractPlugin.loader,
        {}
      ),
      {
        test: /\.art$/, 
        loader: "art-template-loader",
        options: {
            // art-template options (if necessary)
            // @see https://github.com/aui/art-template
        }
      },
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
     
    ]
  },  
  plugins: [
    ...layout.getHtmlWebpackPlugin(),
    // new CleanWebpackPlugin()
  ]
};



module.exports = baseWebpackConfig;
// module.exports = ()=>{
//   webpack(baseWebpackConfig, (err, stats) => {
//     if (err || stats.hasErrors()) {
//       // 在这里处理错误
//     }
//     // 处理完成
//   });
// };