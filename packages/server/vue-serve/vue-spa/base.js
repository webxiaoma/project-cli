'use strict'

const path = require("path")
const webpack = require("webpack")

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const config = require('./config.js')
const {loaderCss, pathJoin} = require("../utils")

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
    modules: ["node_modules"],
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
          ? "vue-style-loader"
          : MiniCssExtractPlugin.loader,
        {}
      ),
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          cacheDirectory: true, // 开启缓存
          loaders: {
            js: "happypack/loader?id=babel"
          }
        },
        include: [pathJoin("src")]
      },
      {
        test: /\.js$/,
        use: ["happypack/loader?id=babel"],
        include: [pathJoin("src")]
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/,
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
          limit: 10000
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          name: assetsPath("fonts/[name].[hash:7]].[ext]"),
          limit: 10000
        }
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
    new VueLoaderPlugin()
  ]
}; 

/**
 *  使用happypack
 */
const  HappyPack = require("happypack");
const  os = require("os");
  // 创建进程池 HappyPack
let  happyThreadPool = HappyPack.ThreadPool({
  size: os.cpus().length-1
});
let  createHappyPlugin = (id, loaders) =>new HappyPack({
      id: id,
      loaders: loaders,
      threadPool: happyThreadPool,
      verbose: false,
});

let loaderAry = [
  {
    id: "babel",
    loaders: ["babel-loader?cacheDirectory=true"]
  },
  {
    id: "vue",
    loaders: ["vue-loader"]
  }
];

for(let len=loaderAry.length,i=len-1;i>=0;i--){
   baseWebpackConfig.plugins.push(
     createHappyPlugin(loaderAry[i].id, loaderAry[i].loaders)
   );
} 


/**
 * 是否使用cdn
 **/ 
if(config.public.useCdn.open){
    const HtmlExtendWebpackPlugin = require("@web-pro/html-extend-webpack-plugin");
    baseWebpackConfig.plugins.push(
      new HtmlExtendWebpackPlugin(HtmlWebpackPlugin,{ // 扩展HtmlWebpackPlugin
        addJs:config.public.useCdn.cdn.js,
        addCss:config.public.useCdn.cdn.css,
      }),
    )
}

/**
 * 是否使用dll
 */
if (config.public.useDll.open) {
   baseWebpackConfig.plugins.unshift(
     // 当我们需要使用动态链接库时 首先会找到manifest文件 得到name值记录的全局变量名称 然后找到动态链接库文件 进行加载
     new webpack.DllReferencePlugin({
       manifest: require(pathJoin("./pro-dll/dll.manifest.json"))
     }) 
   ); 
}


module.exports = baseWebpackConfig;