/**
 * 初始化服务参数及配置
 */
const path = require("path")
const currentExePath = process.cwd(); // 当前的执行路径

class InitVueServer {
    constructor(cmd,type){
      this.entry = cmd.entry // 入口文件
      this.out = cmd.out     // 出口文件
      this.type = type;
      
      this.init();
    }

    init(){
      this.initConfig()

      if (this.type === 'serve'){
        this.server()
      }else{
        this.build()
      }
    }

    // 初始化配置文件
    initConfig(){
       let config = require("./config.js");
       

    }
    
    // 开始启动编译
    server(){
       require("./dev.js")()
    }

    //开始打包
    build(){
      require("./pro.js")()
    }

    
}







module.exports = InitVueServer;