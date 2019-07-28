/**
 * 初始化配置文件
 */

const fse = require("fs-extra");
const path = require("path");
const cwd = process.cwd()
const answerVue = options.answerVue;


module.exports = ()=>{
  const options = require('../../../options.js');

  // 初始化文件
  function mergeDispose(){

    let promiseAry = [];

    // 初始化main.js
    let main = ()=>{
      let mainStr = require('./files/main.js')
      let mainUrl = path.resolve(cwd, `./${options.cmdOpt.dirName}/src/main.js`)
      return fse.outputFile(mainUrl, mainStr)
    }
    promiseAry.push(main())


    // 初始化package.json
    let package = ()=>{
      let packageStr = require('./files/package.js')
      let packageUrl = path.resolve(cwd, `./${options.cmdOpt.dirName}/package.json`)
      return fse.outputFile(packageUrl, packageStr)
    }
    promiseAry.push(package())


    // 初始化postcss.config.js .
    let postcss = () => {
      let postcssStr = require('./files/postcss.js')
      let postcssUrl = path.resolve(cwd, `./${options.cmdOpt.dirName}/postcss.config.js`)
      return fse.outputFile(postcssUrl, postcssStr)
    }
    promiseAry.push(postcss())

    // 初始化babel.config.js
    let babel = () => {
      let babelStr = require('./files/babel.js')
      let babelUrl = path.resolve(cwd, `./${options.cmdOpt.dirName}/babel.config.js`)
      return fse.outputFile(babelUrl, babelStr)
    }
    promiseAry.push(babel())


    // 初始化 App.vue
    let app = () => {
      let appStr = require('./files/app.js')
      let appUrl = path.resolve(cwd, `./${options.cmdOpt.dirName}/src/App.vue`)
      return fse.outputFile(appUrl, appStr)
    }
    promiseAry.push(app())


    // 初始化request.js
    let request = () => {
      let requestStr = require('./files/request.js')
      let requestUrl = path.resolve(cwd, `./${options.cmdOpt.dirName}/src/utils/request.js`)
      return fse.outputFile(requestUrl, requestStr)
    }
    promiseAry.push(request())



    //路由删除
    let removeRouter = () => {
      return fse.remove(path.resolve(cwd, `./${options.cmdOpt.dirName}/src/router`))
    }
    let removeViews = () => {
      return fse.remove(path.resolve(cwd, `./${options.cmdOpt.dirName}/src/views`))
    }

    //vuex 删除
    let removeStore = () => {
      return fse.remove(path.resolve(cwd, `./${options.cmdOpt.dirName}/src/store`))
    }


    // 交互工具（utils文件）
    let removeUtilsRequest = () => { 
      return fse.remove(path.resolve(cwd, `./${options.cmdOpt.dirName}/src/utils/request.js`))
    }

    let removeUtilsIndex = () => {
      return fse.remove(path.resolve(cwd, `./${options.cmdOpt.dirName}/src/utils/index.js`))
  }


    //路由操作
    if (!answerVue.useRouter){ // 不要路由
      promiseAry.push(removeRouter())
      promiseAry.push(removeViews())
    }


    //vuex操作
    if (!answerVue.useVuex) { // 不要vuex
      promiseAry.push(removeStore())
    }

    // 交互工具（utils文件）
    if (answerVue.request === 0) { // 不要交互工具
      promiseAry.push(removeUtilsRequest())
      promiseAry.push(removeUtilsIndex())
    }
    

    return promiseAry;
    
  }

  function initFiles(resolve){
    Promise.all(mergeDispose()).then(res=>{
      resolve(true)
    })
  }


  return new Promise((resolve, reject) => {
     initFiles(resolve)
  })
}