
'use strict'

const path = require('path')
const notifier = require('node-notifier')
const config = require('../config.js');

/**
 * 添加环境变量
 */

exports.addEvn = (evnObj) =>{
   if (typeof evnObj === 'object'){
       process.exit(1)
    }

   // var keys = Object.keys(evnObj)
   
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
 * 系统通知
 */

exports.notifierCallback = (severity, errors) => {

      if (severity !== 'error') return

      const error = errors[0]
      const filename = error.file && error.file.split('!').pop()

      notifier.notify({
         title: "项目通知",
         message: severity + ': ' + error.name,
         subtitle: filename || '',
         icon: path.join(__dirname, 'manong.jpg')
      })
}





