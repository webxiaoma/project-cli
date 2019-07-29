const path = require("path");
const cwd = process.cwd()
const options = require('../options.js');
const { getProFileUrl } = require("../utils")

module.exports = { // 选择项目框架 
    vue:{
        githubUrl: 'direct:https://github.com/webxiaoma/webpack-cli.git#vue-cli', // 远程仓库地址
        localUrl: getProFileUrl("./github/vue-cli"),  // 下载后本地存储地址
        getWorkUrl: ()=>path.resolve(cwd, `./${options.cmdOpt.dirName}`),   // 工作区地址
    }
}