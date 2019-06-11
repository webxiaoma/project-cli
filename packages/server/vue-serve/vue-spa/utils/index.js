
'use strict'

const path = require('path')
const notifier = require('node-notifier')
const config = require('../config.js');

/**
 * 添加环境变量
 */

exports.addEvn = (evnObj) =>{
   if (Object.prototype.toString.call(evnObj) !== '[object Object]'){
       console.log("addProcessEvn should be an object")
       process.exit(1)
    }

   Object.keys(evnObj).forEach(key=>{
      if (!process.env[key]){
         process.env[key] = evnObj[key]
      }
   })
}

/**
 * 日志输出
 */
exports.log = function (){
   console.log(...arguments,"\n")
}


/**
 * 静态资源路径合并（图片，css,font,音频）
 */
exports.assetsPath = function (_path) {
   const assetsSubDirectory = process.env.NODE_ENV === 'production'
     ? config.build.assetsDir
     : config.dev.assetsDir
 
   return path.posix.join(assetsSubDirectory, _path)
}


/**
 * 处理css预处理器 loader
 */
exports.loaderCss = function(preset,options={}){
   
   let loader = [];

   function createPreset(ary,regStr){
      let reg = eval(regStr);
      let obj =  {
         test: reg,
         use: [],
      }
      ary.forEach(name => {
         obj.use.push({
            loader: `${name}-loader`,
            options: Object.assign({},options[name])
         })
      });

      if (preset){
         obj.use.unshift(preset)
      }

      return obj;
   }
   
   let cssProcessor = {
      css: createPreset(["css","postcss"], "/\.css$/"),
      less: createPreset(["css", "postcss", "less"],"/\.less$/"),
      scss: createPreset(["css", "postcss", "scss"],"/\.scss$/"),
      sass: createPreset(["css", "postcss", "sass"],"/\.sass$/"),
      stylus: createPreset(["css", "postcss", "stylus"],"/\.styl$/"),
   }
   
   Object.keys(cssProcessor).forEach(key=>{
      loader.push(cssProcessor[key])
   })
   
   return loader;
}

 

/**
 * 系统通知
 */
exports.notifier = (severity, errors) => {

      if (severity !== 'error') return

      const error = errors[0]
      const filename = error.file && error.file.split('!').pop().split("?")[0]
  
      notifier.notify({
         title: "项目错误通知",
         message: severity + ': ' + error.name,
         subtitle: filename || '',
         icon: path.join(__dirname, 'manong.jpg')
      })
}





