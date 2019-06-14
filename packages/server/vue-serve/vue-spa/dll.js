const config = require("./config.js");
const webpack = require("webpack")
const path = require('path')
const chalk = require("chalk")
const ora = require("ora")
const { pathJoin } = require("../utils")

if (!config.public.useDll.open) { // 未开启dll
   console.log(chalk.red("请在配置中开启Dll")+"\n");
   process.exit(1);
}else{
   if (!config.public.useCdn.open) {
      console.log(chalk.yellowBright("请在配置中开启CDN,并将dll打包的资源引入到html中") + "\n");
   }
}

const dllWebpackConfig = {
  context: pathJoin(), // 基础路径
  mode: "production",
  entry: config.public.useDll.entry,
  output: {
    path: pathJoin("./vueDll"), // 动态链接库输出路径
    filename: "[name].dll.js", // 动态链接库输出的文件名称
    libraryTarget: "var", // 默认'var'形式赋给变量 b
    library: "_dll_[name]" // 全局变量名称 导出库将被以var的形式赋给这个全局变量 通过这个变量获取到里面模块
  },
  plugins: [
    new webpack.DllPlugin({
      // path 指定manifest文件的输出路径
      path: path.join(pathJoin("./vueDll"), "[name]-manifest.json"),
      name: "_dll_[name]" // 和library 一致，输出的manifest.json中的name值
    })
  ]
};

module.exports = ()=>{
  // loading
    const spinner = ora({
      text: `${chalk.gray("正在打包中，耐心等待...")} \n\n`,
      color: "green"
    }).start(); 

   const compiler = webpack(dllWebpackConfig);
   compiler.run((err, stats) => {
     if (err) {
       console.error(err.stack || err);
       if (err.details) {
         console.error(err.details);
       }
       spinner.fail(`${chalk.red("打包出错 \n")}`);
       return;
     }

     if (!stats.hasErrors()) {
       spinner.succeed(`${chalk.green("打包成功 \n")}`);
     }
     console.log(
       stats.toString({
         // 增加控制台颜色开关
         chunks: false, // 使构建过程更静默无输出
         colors: true,
         modules: false,
         // 添加构建日期和构建时间信息
         builtAt: true,
         // 添加 children 信息
         children: false,
         // 添加 chunk 信息（设置为 `false` 能允许较少的冗长输出）
         chunks: false,
         entrypoints: true, //  通过对应的 bundle 显示入口起点
         warnings: false // 关闭警告
       })
     );

     //  打印警告
     if (stats.hasWarnings()) {
       let info = stats.toJson();
       console.log(
         `\n\n${chalk.magenta.bold("认真阅读打包时出现的警告：")}\n`
       );
       info.warnings.forEach((warn, index) => {
         console.log(chalk.yellowBright(`警告${index + 1}：` + warn + "\n"));
       });
     }

     //  打印报错
     if (stats.hasErrors()) {
       let info = stats.toJson();
       console.log(
         `\n\n${chalk.magenta.bold("认真阅读打包时出现的错误：")}\n`
       );
       info.errors.forEach((error, index) => {
         console.log(chalk.red(`警告${index + 1}：` + error + "\n"));
       });
     }
   });
}