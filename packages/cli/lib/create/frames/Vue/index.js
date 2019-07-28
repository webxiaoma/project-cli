/**
 * Vue 框架对象
 **/

const selectDepend = require("./selectDepend");
const initProject = require("./initProject");

class initVue {
   selectDepend(){ // 初始化预设
     return selectDepend()
   }
   initProject(){ // 初始化项目
     return initProject()
   }
}



module.exports = initVue;