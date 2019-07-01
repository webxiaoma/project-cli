const fs = require("fs")
const path = require('path');
const config = require('../config.js')
const currentFilePath = path.join(process.cwd(),"packages/server/pages-serve/utils/src/pages"); // 当前的执行路径
let layout = []; // 存储文件目录信息 

function mapDir(filePath,chunkName){
  let webpackObj = {
      entryName:"",
      entryfile:"",
      html:[],
      baseUrl:"",
  }
  let files = fs.readdirSync(filePath);
  
  files.forEach(item=>{
     
      let url = path.join(filePath, item);
      
      // 子文件是目录，并且在排除目录的名称之外
      if (fs.statSync(url).isDirectory() && config.public.externalsFiles.indexOf(item)<0){
          mapDir(url, item)
      }else{
          webpackObj.entryName = chunkName;
          webpackObj.baseUrl = filePath;

          let extname = path.extname(item)
          if (extname === '.html') {
            webpackObj.html.push(url)
          }
          if (item === 'index.js'){
            webpackObj.entryfile = url;
          }
      }

  })

  layout.push(webpackObj)
}

mapDir(currentFilePath,"main")

console.log(layout)

exports.modules = function entry() {
   
   
  
}


exports.modules = function htmlPlubin() {


}


