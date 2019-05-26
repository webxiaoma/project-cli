/**
 * @msg 设置项目框架
 */

const inquirer = require('inquirer');
const answerOpt = require('../options.js').answer;


function initPreset(){
   return new Promise((resolve,reject)=>{
      (function ask(){
         inquirer
            .prompt([
               { // 选择项目框架 
                  type: "list",
                  message: "请选择一个项目框架：",
                  name: "frame",
                  choices: [
                      "Vue",
                  ],
               }
            ])
            .then(answers => {
               answerOpt.name = answers.frame
               let questionTypeUrl = `./${answers.frame}`;
               let frame = require(questionTypeUrl)
               resolve(new frame()) // 询问完成
            })
      })();
   })

     
}


module.exports = initPreset;