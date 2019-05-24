/**
 * @msg 设置预设
 */

const inquirer = require('inquirer');
const options = require('./options.js') 

let questionIndex = 0, // 当前提问索引
    questionsLength = 0; // 问题长度


let questions = [
   { // 选择项目框架
      type: "list",
      message: "请选择一个项目框架：",
      name: "frame",
      choices: [
          "Vue",
      ],
      saveSet(answers){
         options.frame = answers.frame
      }
   },{ // 选择项目平台
      type: "list",
      message: "请选择一个项目运行平台：",
      name: "platform",
      choices: [
          "移动端",
          "PC端",
      ],
      saveSet(answers){
         options.platform = answers.platform
      }
   }

]

questionsLength = questions.length;

function initPreset(index){
    inquirer
         .prompt([
            questions[index]
         ])
         .then(answers => {
            questions[index].saveSet(answers);

            questionIndex++;

            if (questionIndex <= questionsLength - 1) {
                initPreset(questionIndex)
            } else {
               console.log(111111111)
              return  111
            }

         })
     
}



module.exports = initPreset;