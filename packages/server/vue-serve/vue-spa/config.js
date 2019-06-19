
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
    // 开发环境下
    dev: {
      assetsPublicPath: "/", // 公共路径
      assetsDir: "static",
      

      /**
       * devServe配置 webpack-dev-server
       **/
      autoOpenBower: true, // 自动打开浏览器
      port: 8080,
      useOverlay: true, // 错误全部覆盖显示
      hot: true, // 模块热替换
      proxyTable: { // 代理
        
      },
      systemErrorNotifier: true, //是否开启系统错误通知

      /**
       * source-map
       */
      devtool: "inline-source-map"
    },

    // 生产环境
    build: {
      /**
       * 路径配置
       */
      assetsRoot: pathJoin("dist"), //
      assetsDir: "static",
      assetsPublicPath: "./",
      staticDir: "./public", // 公共资源目录

      /**
       * source-map 配置
       */
      useCssMap: false, // 是否开启css source-map
      useJsMap: false, // 是否开启js source-map
      devtool: "source-map", // source-map类型

      /**
       * 代码压缩
       * @http CompressionWebpackPlugin 启用gzip压缩 https://github.com/webpack-contrib/compression-webpack-plugin
       * @msg 普通压缩和gzip压缩互不影响
       */

      // 普通压缩(使用terser-webpack-plugin)
      compress: true, // 是否启用普通压缩
      delDubgger: false, // 打包时是否删除console 和 debugger  删除警告，注释

      //启用gzip压缩
      isGzip: false,
      gzipType: ["js", "css"],
    },
    // 公共配置
    public: {
      templateIndexHtml: pathJoin("index.html"), // html模板
      addProcessEvn: {
        // 加入系统环境变量,已添加的系统变量不会再次被添加
      },

      /**
       * 代码优化相关
       */

      externals: {// 排除打包库
        // "vue":["Vue"],
        // "vue-router": ['Router']
      },
      useCdn: {
        // 使用cdn
        open: false, // 开启
        cdn: {
          js: [],
          css: []
        }
      },
      useDll: {
        // 使用dll
        open: false,
        entry: {
          vue: ["vue"],
          vueRouter: ["vue-router"],
        }
      },

      /**
       * webpack 配置
       **/
      webpackConfig(config) {
        // config webpack的配置
      }
    }
  },
  proConfig
);