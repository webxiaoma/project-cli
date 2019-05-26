/**
 * Vue 框架对象
 **/

const initPreset = require("./initPreset");
const initProject = require("./initProject");

class initVue {
   initPreset(){ // 初始化预设
     return initPreset()
   }
   initProject(){ // 初始化项目
    return initProject()
   }
}



module.exports = initVue;