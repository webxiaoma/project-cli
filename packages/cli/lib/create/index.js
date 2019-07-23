
const opt = require('./options.js') 
const detection = require('./detection.js')
const selectedFrames = require('./frames/index.js'); 
const installDeps = require('./installDeps.js')


/**
 * create 命令
 * 
 */ 

async function createCmd(dirName,cmd){
    


    opt.cmdOpt.dirName = dirName;

    //检测环境，并创建目录
    // await detection()

    // 选择项目框架
    let frameObj = await selectedFrames();

    // 设置预设
    await frameObj.initPreset()
    // 初始化项目
    await frameObj.initProject()
    

    // 安装项目
    // installDeps()



}








 module.exports =  createCmd;