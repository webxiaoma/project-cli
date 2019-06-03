/**
 * git下载仓库，并初始化配置文件
 */

const downloadGitRepo = require('download-git-repo');
const options = require('../../options.js');

function download(){
  //  downloadGitRepo('github:webxiaoma/vue-cli', options.cmdOpt.name, { clone: true }, function (err) {
  //    console.log(err)
  //  })
  downloadGitRepo('direct:https://github.com/webxiaoma/vue-cli.git', 'vue', { clone: true }, function (err) {
    console.log(err ? 'Error' : 'Success')
  })
}










function initProject(){
   download()
   console.log(11111)
}



module.exports = initProject;