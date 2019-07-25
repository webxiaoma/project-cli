
const shell = require('shelljs');
const ora = require("ora");
const chalk = require("chalk");
const opt = require('../options.js');
/**
 * 安装插件
 **/

module.exports = ()=>{
    shell.cd(`${opt.cmdOpt.dirName}`)

    let spinner = ora({
        text: `${chalk.gray("安装依赖中...")} \n\n`,
        color: "green"
    }).start();

    // 安装插件
    
    if (shell.exec("yarn install").code !== 0){
        spinner.fail(`${chalk.red("安装失败,请手动安装\n")}`);
        process.exit(1) // 退出程序
    }else{
        spinner.succeed(`${chalk.green("安装成功 \n")}`);
        // 启动项目
        shell.exec("yarn start");
    }
   
};