/**
 * git下载仓库，并初始化配置文件
 */

const downloadGitRepo = require('download-git-repo');
const fse = require("fs-extra");
const options = require('../../options.js');
const path = require("path");
console.log(path.resolve(process.cwd(), `./${options.cmdOpt.dirName}/main.js`));

// 下载仓库
function download(){
  downloadGitRepo('direct:https://github.com/webxiaoma/webpack-cli.git#vue-cli-dev', options.cmdOpt.dirName, { clone: true }, function (err) {

     if (!err){ // 下载成功
       console.log("下载成功")
      

     }else{ // 下载失败
       console.log("下载失败")

     }
  })
}

// 初始化文件
function initFiles(){
  let mainStr = require('./files/main.js.js')
  fse.outputFile(path.resolve(process.cwd(), `./${options.cmdOpt.dirName}/src/main.js`), mainStr).then(res => {
    console.log(res)
  })
}




















function initProject(){
   download()
}



module.exports = initProject;