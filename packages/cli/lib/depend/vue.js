const answerOpt = require('../options.js').answerVue;

module.exports = [
  { // 选择项目平台
    type: "list",
    message: "请选择一个项目运行平台：",
    name: "platform",
    choices: [
       {
          name: "PC端",
          value: 1
       },
       {
          name: "移动端",
          value: 2
       },
    ],
    saveSet(answers){
       answerOpt.platform = answers.platform
    }
 },{ // 选择项目平台
    type: "checkbox",
    message: "请选择使用的全家桶项：",
    name: "family",
    choices: [
       {
          name: "1. Router路由",
          value: 1
       },
       {
          name: "2. Vuex状态管理",
          value: 2
       },
    ],
    saveSet(answers) {
       var family = answers.family
       answerOpt.useRouter = family.indexOf(1) > -1;
       answerOpt.useVuex = family.indexOf(2) > -1;
    }
 }, { // 选择交互工具
    type: "list",
    message: "请选择想使用交互工具：",
    name: "request",
    choices: [
       {
          name: "1. 都不选",
          value: 0
       },{
          name: "2. axios交互插件",
          value: 1
       },{
          name: "3. flyio交互插件",
          value: 2
       },
    ],
    saveSet(answers) {
       answerOpt.request = answers.request
    }
 },{ // 选择组件库
    type: "checkbox",
    message: "请选择想使用组件库：",
    name: "library",
    choices: [
       {
          name: "1. ElementUl组件库（pc端）",
          value: 1,
          type:1, // 1为pc端
       },
       {
          name: "2. Vant组件库(移动端)",
          value: 2,
          type:2, // 2为移动端
       },
    ],
    saveSet(answers) {
       var library = answers.library
       answerOpt.useElementUl = library.indexOf(1) > -1;
    }
 }
]