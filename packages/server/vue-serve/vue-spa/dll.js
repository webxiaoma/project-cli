const webpack = require("webpack");
const { pathJoin } = require("../utils");

const dllConfig = {
  entry: {
    vueAll: ["vue", "vue-router"]
  },
  output: {
    filename: "[name].dll.js", // 动态链接库输出的文件名称
    path: pathJoin("/dist"), // 动态链接库输出路径
    libraryTarget: "var", // 链接库(react.dll.js)输出方式 默认'var'形式赋给变量 b
    library: "_dll_[name]_[hash]" // 全局变量名称 导出库将被以var的形式赋给这个全局变量 通过这个变量获取到里面模块
  },
  plugins: [
    new webpack.DllPlugin({
      // path 指定manifest文件的输出路径
      path: pathJoin("dist", "[name].manifest.json"),
      name: "_dll_[name]_[hash]" // 和library 一致，输出的manifest.json中的name值
    })
  ]
};


module.exports = ()=>{
    const compiler = webpack(dllConfig);
    compiler.run((err, stats) => {
        console.log(err)

    })
}