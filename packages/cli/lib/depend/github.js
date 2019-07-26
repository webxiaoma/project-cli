const cwd = process.cwd()

module.exports = { // 选择项目框架 
    vueCli:{
        githubUrl: 'direct:https://github.com/webxiaoma/webpack-cli.git#vue-cli', // 远程仓库地址
        localUrl: getProFileUrl("./github/vue-cli"),  // 下载后本地存储地址
        workUrl: path.resolve(cwd, `./${options.cmdOpt.dirName}`),   // 工作区地址
    }
}