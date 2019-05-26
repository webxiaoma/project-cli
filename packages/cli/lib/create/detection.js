/**
 * 初始化检测环境，并验证创建的文件名是否合规 deteciton.js 
 */

const fse = require("fs-extra");
const inquirer = require('inquirer');
const validateNpmName = require("validate-npm-package-name");
const opt = require('./options.js');


module.exports = async () =>{
  return new Promise((resolve,reject)=>{
      /**
       * @msg 检测文件命名是否符合规则
       **/
      async function checkDirName(message){
          let npmNameResult;  //检测npm包名结果
          
          npmNameResult = validateNpmName(opt.cmdOpt.dirName);
          
          if(!npmNameResult.validForNewPackages){
                  inquirer
                    .prompt([
                          { // 选择项目框架 
                            type: "input",
                            message: message?message:"请输入正确的项目名称：",
                            name: "dirName",
                            validate: function(val) {
                                var done = this.async();
                                npmNameResult = validateNpmName(val);
                                if(!npmNameResult.validForNewPackages){
                                  done("请输入正确的项目名称（可查看npm包名命名规则）",false);
                                  return;
                                }

                                done(null, true);
                            }
                          }
                    ]).then(res=>{
                        opt.cmdOpt.dirName = res.dirName;
                        createDir()
                    })
          }else{
            createDir()
          }
        }
        checkDirName()


      /**
       * @msg  创建目录
       */
        async function createDir(){
                let  existsDir = fse.pathExistsSync(opt.cmdOpt.dirName);
                // 如果目录存在
                if(existsDir){
                    inquirer
                        .prompt([
                              { // 选择项目框架 
                                type: "confirm",
                                message: `当前已存在 ${opt.cmdOpt.dirName} 目录，是否覆盖：`,
                                name: "existsDir",
                              }
                        ]).then(res=>{
                            if(res.existsDir){ // 覆盖项目
                                fse.emptyDirSync(opt.cmdOpt.dirName) 
                                resolve(true)
                            }else{
                                opt.cmdOpt.dirName = ""
                                checkDirName("请重新输入项目名称：")
                            }
                        })
                }else{
                    fse.emptyDirSync(opt.cmdOpt.dirName) 
                    resolve(true)
                }
        }
  })

}