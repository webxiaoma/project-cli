const inquirer = require('inquirer');
const fse = require("fs-extra");
const path = require("path");
const { getProFileUrl } = require("../../../../utils")

let projectJson = {
    name:'',  // 名字
    description:"", // 描述
    options:{
        
    }
}


function askSave(){
    inquirer
        .prompt([
            { // 选择项目平台
                type: "list",
                message: "是否保存该配置项目模板：",
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
                saveSet(answers) {
                    answerOpt.platform = answers.platform
                }
            }
        ]).then(res=>{

        })
}












module.exports = () => {
    return new Promise((resolve, reject) => {
       
    })
}