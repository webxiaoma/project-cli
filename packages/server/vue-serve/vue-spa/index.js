/**
 * 初始化服务参数及配置
 */
const path = require("path")
const currentExePath = process.cwd(); // 当前的执行路径

class InitVueServer {
    constructor(cmd, type) {
      this.entry = cmd.entry; // 入口文件
      this.out = cmd.out; // 出口文件
      this.type = type;

      this.init();
    }

    init() {
        switch (this.type) {
          case "serve":
            this.server();
            break;
          case "build":
            this.build();
            break;
          case "dll":
            this.dll();
            break;
        }
    }

    // 开始启动编译
    server() {
      require("./dev.js")();
    }

    //开始打包
    build() {
      require("./pro.js")()
    }
    // 使用dll
    dll() {
      require("./dll.js")();
    }
}





module.exports = InitVueServer;