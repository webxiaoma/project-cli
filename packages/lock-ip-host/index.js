/**
 * @param {lockPort} 检测端口是否被占用 异步
 * @param {getOwnIP} 获取本机ip
 */


module.exports = {
  /**
  * 检测端口是否被占用 异步
  */
  lockPort(port = 8080){ 
      let net = require('net');
      let IPv4 = this.getOwnIP().IPv4;
      let portMsg = {
        ip: IPv4,
        canUsePort:port, // 可使用端口
      } 
      return new Promise((resolve,reject)=>{
        let selectPort = (port) => {
          let server = net.createServer().listen({
            host: IPv4,
            port,
            exclusive: true
          })

          server.on('listening', function () { // 执行这块代码说明端口未被占用
              server.close() // 关闭服务
              let ipServer = net.createServer().listen({
                host: 'localhost',
                port,
              })
              ipServer.on("listening", () => {
                portMsg.canUsePort = port;
                ipServer.close(()=>{// 关闭服务
                  resolve(portMsg)
                }) 
              })

              ipServer.on("error", () => {
                if (err.code === 'EADDRINUSE') { // 端口已经被使用
                  port++;
                  selectPort(port)
                }
              })

          })

          server.on('error', function (err) {
            if (err.code === 'EADDRINUSE') { // 端口已经被使用
              port++;
              selectPort(port)
            }
          })
        }
        selectPort(port)
      })
     
  },

  /**
   * 获取本机ip
   **/
  getOwnIP(){ 
      let interfaces = require('os').networkInterfaces();
      let ipObj = {}; // IPv4  IPv6
      for (var devName in interfaces) {
        var iface = interfaces[devName];
        for (var i = 0; i < iface.length; i++) {
          var alias = iface[i];
          if (alias.address !== '127.0.0.1' && !alias.internal) {
            ipObj[alias.family] = alias.address;
          }
        }
      }

      return ipObj;
  }
}