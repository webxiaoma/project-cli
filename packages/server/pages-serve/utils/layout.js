const fs = require("fs")
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const config = require('../bin/config.js')
const currentFilePath = path.join(process.cwd(),"./src/pages"); // 多页面目录的绝对路径
let layout = []; // 存储文件目录信息 

/**
 * 自动遍历目录
 **/
function mapDir(filePath,chunkName){
  let webpackObj = {
      chunkName:"", // chunk名称
      entryfile:"", // 入口文件
      html:[],    // html 模板路径
      baseUrl:"", // 基础绝对路径
  }
  let files = fs.readdirSync(filePath);
  
  files.forEach(item=>{
     
      let url = path.join(filePath, item); // 文件绝对路径
      let relativeUrl = path.relative(currentFilePath, url);// 相对路径+文件名（相对于多页面构建目录的路径）
      
      // 子文件是目录，并且在排除目录的名称之外
      if (fs.statSync(url).isDirectory() && config.public.externalsFiles.indexOf(item)<0){
          let chunkNameChange = relativeUrl.replace("\\","/")
          mapDir(url, chunkNameChange)
      }else{
          let extname = path.extname(item)
          webpackObj.chunkName = chunkName;
          webpackObj.baseUrl = filePath;
          if (extname === '.html') {
              webpackObj.html.push({
                name: path.basename(url,'.html'),   //filename
                path: url,
                relativeUrl: relativeUrl, // 相对路径+文件名（相对于多页面构建目录的路径）
              })
          }

          if (extname === '.art') {
              let name = path.basename(url,'.art');
              webpackObj.html.push({
                name, //filename
                path: url,
                relativeUrl:relativeUrl.replace(/\.art$/,".html"), // 相对路径+文件名（相对于多页面构建目录的路径）
              })
          }
          if (item === 'index.js'){
             webpackObj.entryfile = url;
          }
      }

  })

  layout.push(webpackObj)
}

mapDir(currentFilePath,"home")

/**
 * @msg 入口文件处理
 **/ 
exports.getEntry = ()=>{
   let entryObj = {};

   layout.forEach(item=>{
     entryObj[item.chunkName] = item.entryfile
   })

   return entryObj;
}

/**
 * @msg html-webpack-plugin 处理
 **/
exports.getHtmlWebpackPlugin = () =>{
  let plugins = [];
  let htmlOptions = {
    filename: '',//文件目录名
    template: '',//文件模板目录
    hash: true,//是否添加hash值
    chunks: [],
  }
   
  layout.forEach(item => {  
    item.html.forEach(html=>{
        htmlOptions = Object.assign(htmlOptions, {
          template: html.path,
          filename: html.relativeUrl,
          inject: true,
          chunks:[item.chunkName]
        })

      plugins.push(new HtmlWebpackPlugin(htmlOptions))
    })
  })

  return plugins;
}


/**
 * @msg MiniCssExtractPlugin css分离处理
 **/
exports.getMiniCssExtractPlugin = ()=>{
    let cssPlugin = [];
    layout.forEach(item => {  
          cssPlugin.push(
              new MiniCssExtractPlugin({
                filename: `[name]/css/index-[hash:7].css`,
                chunkFilename: `[name]/css/index-[contenthash:7].css`
              }),
          )

    })

    return cssPlugin;
} 


/** 
 * @msg css loader 处理
 */

