/**
 * @msg 设置预设
 */

const inquirer = require('inquirer');
const {vueAsk} = require("../../../depend/index.js")


let questionIndex = 0, // 当前提问索引（可以实现返回上一步）
    questionsLength = 0; // 问题长度


let questions = vueAsk;

questionsLength = questions.length;

function selectDepend(){
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


module.exports = selectDepend;