# lock-ip-host

一个可以检测端口是否被占用，获取本机`ip`地址的`npm`插件

## 安装

```js
npm i @web-pro/lock-ip-host

```

## 使用

### lockPort方法，检测端口是否被占用

```js
const lockIPHost = require("@web-pro/lock-ip-host")
lockIPHost.lockPort(8080).then(res => {
  // res 为返回对象
})
```

**`res`为对象`Object`,该对象下的参数有：**

- `ip`: 本机的IPv4地址
- `canUsePort`: 当传入的端口被占用时，可以返回一个可用的端口号，（为传入端口号时，默认为8080）



### getOwnIP方法，检测本机ip

```js
const lockIPHost = require("@web-pro/lock-ip-host")

let ip = lockIPHost.getOwnIP()

ip.IPv4 // IPv4 地址
ip.IPv6 // IPv6 地址，如果存在
```

`getOwnIP()`方法返回本机的`ip`，为一个对象，包括`IPv4`和`IPv6`（如果存在）

