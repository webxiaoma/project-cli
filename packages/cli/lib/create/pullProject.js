/**
 * 检测是否已经下载仓库，如果已经下载过，使用本地
 * 如果未下载，git下载仓库
 */

const downloadGitRepo = require('download-git-repo');
const fse = require("fs-extra");
const ora = require("ora");
const chalk = require("chalk");

module.exports = () => {
   const {githubPro} = require("../depend")
   const { getProFileUrl } = require("../utils")
   const options = require('../options.js');

    let proMsg = githubPro[options.frames.name]; // vue项目信息

    // 复制项目
    function copyProject(resolve) {
        fse.copySync(proMsg.localUrl, proMsg.workUrl)
        resolve(true)
    }

    // 下载仓库
    function downloadProject(resolve,json = {}) {

        let spinner = ora({
            text: `${chalk.gray("拉取项目中...")} \n\n`,
            color: "green"
        }).start();

        downloadGitRepo(proMsg.githubUrl, proMsg.localUrl, { clone: true }, function (err) {
            if (!err) { // 下载成功
                spinner.succeed(`${chalk.green("项目拉取成功 \n")}`);
                json[options.frames.name] = proMsg;

                fse.outputJson(getProFileUrl("./github/.github.list"),json)
                copyProject(resolve) // 复制
            } else { // 下载失败
                spinner.fail(`${chalk.red("项目拉取失败 \n")}`);
                process.exit(1) // 退出程序
            }
        })
    }
 

    return new Promise((resolve, reject) => {
        // 检查项目是否完整(还是下载一半)
        let isGithubFile = fse.pathExistsSync(getProFileUrl("./github/.github.list"));
        if (isGithubFile) { // .github.list文件存在
            let json = fse.readJsonSync(getProFileUrl("./github/.github.list"))
            if(json[options.frames.name]){ // 该项目已存在
                copyProject(resolve)
            }else{
                downloadProject(resolve,json)
            }
        } else {
            downloadProject(resolve)
        }
    })
}