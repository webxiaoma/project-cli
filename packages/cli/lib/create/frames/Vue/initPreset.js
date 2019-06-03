/**
 * @msg 设置预设
 */

const inquirer = require('inquirer');
const answerOpt = require('../../options.js').answer ;

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