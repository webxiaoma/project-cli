'use strict'

const path = require("path")
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const config = require('./config.js');
const {assetsPath} = require("./utils")


const baseWebpackConfig = {
  context: path.resolve(__dirname, "../"),
  entry: {
    app: "./src/main.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../dist"),
    publicPath:
      process.env.NODE_ENV === "production"
        ? config.build.assetsPublicPath
        : config.dev.assetsPublicPath
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".json", ".vue"],
    alias: {
      "@": path.resolve(__dirname, "../src")
    }
  },
  // 排除打包库
  externals: config.public.useCdn.open ? config.public.useCdn.externals : {},
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loaders: {}
        }
      },
      {
        test: /\.js$/,
        use: ["babel-loader"],
        include: [path.resolve(__dirname, "../src")]
      },
      {
        test: /\.css$/,
        use: [
          process.env.NODE_ENV !== "production"
            ? "style-loader"
            : MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader"
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: "url-loader",
        options: {
          name: assetsPath("img/[name]-[hash:7].[ext]"),
          limit: 1024 // 1kb
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: "url-loader",
        options: {
          name: assetsPath("media/[name].[hash:7]].[ext]"),
          limit: 10000 // 1kb
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          name: assetsPath("fonts/[name].[hash:7]].[ext]"),
          limit: 10000 // 1kb
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      //使用自带模板时，设置为false,使用自己的html模板是设置为true
      inject: true,
      template: config.public.templateIndexHtml,
      minify: false
    }),
    new VueLoaderPlugin()
  ]
}; 



if(config.public.useCdn.open){
  const HtmlExtendWebpackPlugin = require("./utils/html-extend-webpack-plugin");

  baseWebpackConfig.plugins.push(
    new HtmlExtendWebpackPlugin(HtmlWebpackPlugin,{ // 扩展HtmlWebpackPlugin
      addJs:config.public.useCdn.cdn.js,
      addCss:config.public.useCdn.cdn.css,
    }),
  )
}



const referencedWebpackConfig = config.public.webpackConfig()

module.exports = merge(baseWebpackConfig,referencedWebpackConfig);