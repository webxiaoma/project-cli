/**
 * 检测是否已经下载仓库，如果已经下载过，使用本地
 * 如果未下载，git下载仓库
 */

const downloadGitRepo = require('download-git-repo');
const fse = require("fs-extra");
const path = require("path");
const ora = require("ora");
const chalk = require("chalk");
const options = require('../../options.js');
const cwd = process.cwd()

let vueCli= {
    githubUrl:'direct:https://github.com/webxiaoma/webpack-cli.git#vue-cli', // 远程仓库地址
    localUrl: getProFileUrl("./github/vue-cli"),  // 下载后本地存储地址
    workUrl: path.resolve(cwd, `./${options.cmdOpt.dirName}`),   // 工作区地址
}
// 
// 复制项目
function copyProject(resolve){
    fse.copySync(vueCli.localUrl, vueCli.workUrl)
    resolve(true)
}

// 下载仓库
function downloadProject(resolve) {
    let spinner = ora({
        text: `${chalk.gray("拉取项目中...")} \n\n`,
        color: "green"
    }).start();

    downloadGitRepo(vueCli.githubUrl, vueCli.localUrl, { clone: true }, function (err) {
        if (!err) { // 下载成功
            spinner.succeed(`${chalk.green("项目拉取成功 \n")}`);
            copyProject(resolve) // 复制
        } else { // 下载失败
            spinner.fail(`${chalk.red("项目拉取失败 \n")}`);
            process.exit(0) // 退出程序
        }
    })
}


module.exports = () => {
    return new Promise((resolve, reject) => {
        let existsDir = fse.pathExistsSync(vueCli.localUrl);
        if (existsDir) { // 如果存在
            copyProject(resolve)
        } else { //不存在
            downloadProject(resolve)
        }
    })
}