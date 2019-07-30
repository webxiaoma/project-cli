
const fs = require('fs');
const merge = require('webpack-merge')
const {pathJoin } = require("../utils")
let proConfig = {};

let existsConfig = fs.existsSync(pathJoin("pro.config.js"))

if (existsConfig){
    proConfig = require(pathJoin("pro.config.js"));
}
module.exports = merge(
  {
    // *****************开发环境下*****************
    dev: {
      /**
       * @msg 路径配置
       */
      baseUrl: "/", // 公共基础路径
      assetsDir: "static", // 指定静态资源目录
      staticDir: "./public", // 指定公共资源目录（默认public）

      /**
       * @msg devServe 配置(webpack-dev-server  https://github.com/webpack/webpack-dev-server)
       **/
      devServer: {
        clientLogLevel: "warning",
        contentBase: false,
        port: 8080,
        hot: true,
        open: true, // 启动后是否自动打开默认浏览器
        //当出现编译器错误或警告时，在浏览器中显示全屏覆盖层,默认false
        overlay: {
          warnings: false,
          errors: true
        },
        proxy: {}, // 代理
        quiet: true, // 是否禁止输出编译信息
        historyApiFallback: true,
        disableHostCheck: true //默认不检查hostname
      },

      /**
       * @msg 其他配置
       */
      systemErrorNotifier: true, //是否开启系统错误通知

      /**
       * @msg source-map配置
       */
      devtool: "inline-source-map" // source-map类型 https://webpack.docschina.org/configuration/devtool
    },

    // *****************生产环境*****************
    build: {
      /**
       * @msg 路径配置
       */
      baseUrl: "./", // 公共基础路径
      outputDir: "./dist", // 指定输出目录
      assetsDir: "static", // 指定静态资源目录
      staticDir: "./public", // 指定公共资源目录（默认public）

      /**
       * @msg source-map 配置
       */
      useCssMap: false, // 是否开启css source-map
      useJsMap: false, // 是否开启js source-map
      devtool: "source-map", // source-map类型 https://webpack.docschina.org/configuration/devtool

      /**
       * 代码压缩
       * @http CompressionWebpackPlugin 启用gzip压缩 https://github.com/webpack-contrib/compression-webpack-plugin
       * @msg 普通压缩和gzip压缩互不影响
       */

      // 普通压缩(使用terser-webpack-plugin)
      compress: true, // 是否启用普通压缩
      delDubgger: true, // 打包时是否删除console 和 debugger  删除警告，注释

      //启用gzip压缩
      isGzip: false, // 是否开启gzip压缩，默认关闭
      gzipType: ["js", "css"] // 压缩的文件类型
    },

    // *****************公共配置*****************
    public: {
      templateIndexHtml: "./index.html", // html模板

      // 加入系统环境变量,已添加的系统变量不会再次被添加
      addProcessEvn: {},

      /**
       * @msg 代码优化相关
       */

      // 排除打包库 https://webpack.docschina.org/configuration/externals
      externals: {},

      // 使用cdn  使用 @web-pro/html-extend-webpack-plugin 插件 https://www.npmjs.com/package/@web-pro/html-extend-webpack-plugin
      useCdn: {
        open: false, // 默认关闭
        cdn: {
          // 添加cdn
          js: [],
          css: []
        }
      },
      // 使用DllPlugin https://webpack.docschina.org/plugins/dll-plugin
      useDll: {
        open: false, // 默认关闭
        entry: {} // 配置的打包库
      },

      /**
       * @msg webpack 配置
       **/
      webpackConfig(config) {} //webpack的配置,可以修改config对象来更改webpack配置
    }
  },
  proConfig
);