// 公共方法
const path = require("path");

/**
 * @msg 格式化字符串
 */
exports.formattingStr = function(str,placeholder){
  let ary = str.split(placeholder);
  let newStr = "";
  for(let i = 0,length=ary.length;i<length;i++){
    newStr += ary[i].replace(/^\n+(\s+)?/,"")
  }

  return newStr;
}

/**
 * @msg 获取项目存储的文件路径
 */
 exports.getProFileUrl = function(url) {
   return path.resolve(process.env.USERPROFILE, "/.pro", url)
 }
