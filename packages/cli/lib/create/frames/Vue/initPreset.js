/**
 * @msg 设置预设
 */

const inquirer = require('inquirer');
const answerOpt = require('../../options.js').answerVue;

let questionIndex = 0, // 当前提问索引（可以实现返回上一步）
    questionsLength = 0; // 问题长度


let questions = [
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
            name: "1. ElementUl组件库",
            value: 1
         },
      ],
      saveSet(answers) {
         var library = answers.library
         answerOpt.useElementUl = library.indexOf(1) > -1;
      }
   }
]

questionsLength = questions.length;

function initPreset(){
   return new Promise((resolve,reject)=>{
      (function ask(){
         inquirer
            .prompt([
               questions[questionIndex]
            ])
            .then(answers => {
               questions[questionIndex].saveSet(answers);
               questionIndex++;  
               if (questionIndex <= questionsLength - 1) {
                  ask(questionIndex)
               } else {
                  resolve(true) // 询问完成
               }
            })
      })();
   })
     
}


module.exports = initPreset;