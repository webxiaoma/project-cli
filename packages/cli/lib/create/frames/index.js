/**
 * @msg 设置项目框架
 */

const inquirer = require('inquirer');
const framesOpt = require('../../options.js').frames;
const {framseAsk} = require("../../depend/index.js")

function initPreset(){
   return new Promise((resolve,reject)=>{
      (function ask(){
         inquirer
            .prompt([
               framseAsk
            ])
            .then(answers => {
               framesOpt.name = answers.frame
               let questionTypeUrl = `./${answers.frame}`;
               let frame = require(questionTypeUrl)
               resolve(new frame()) // 询问完成
            })
      })();
   })
}

module.exports = initPreset; 