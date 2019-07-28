
const opt = require('../options.js') 
const detection = require('./detection.js')
const selectFrames = require('./selectFrames.js'); 
const pullProject = require('./pullProject.js'); 
const saveProject = require("../save/saveProject");
const installDeps = require('./installDeps.js')


/**
 * create 命令
 * 
 */ 

async function createCmd(dirName,cmd){
    
    opt.cmdOpt.dirName = dirName;

    //检测环境，并创建目录
     await detection()

    // 选择项目框架
    let frameObj = await selectFrames();

    // 选择依赖
    await frameObj.selectDepend()

    // 拉取项目
    await pullProject();

    // 初始化项目
    await frameObj.initProject();

    // 询问是否保存项目模板
     await saveProject()

    // 安装依赖
     installDeps()
}



 module.exports =  createCmd;