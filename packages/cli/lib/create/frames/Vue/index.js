/**
 * Vue 框架对象
 **/

const initPreset = require("./initPreset");
const pullProject = require("./pullProject");
const initProject = require("./initProject");

class initVue {
   initPreset(){ // 初始化预设
     return initPreset()
   }
   pullProject(){ // 拉取项目
     return pullProject()
   }
   initProject(){ // 初始化项目
     return initProject()
   }
}



module.exports = initVue;