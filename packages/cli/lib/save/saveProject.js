const inquirer = require('inquirer');
const fse = require("fs-extra");
const path = require("path");
const { getProFileUrl } = require("../utils")
const options = require('../options.js');
const cwd = process.cwd()

let projectJson = {
    id:new Date().getTime(),
    name: '',  // 名字
    description: "", // 描述
    options: {

    }
}

function saveProject(resolve,proUrl) {
    fse.copySync(path.resolve(cwd, `./${options.cmdOpt.dirName}`), getProFileUrl(`./project/${projectJson.name}`));
    let existsDir = fse.pathExistsSync(getProFileUrl("./project/.project.list"));
    if (existsDir) { // 如果存在
        let json = fse.readJsonSync(getProFileUrl("./project/.project.list"))
        json.push(projectJson)
        fse.outputJsonSync(getProFileUrl("./project/.project.list"), json)
    } else { //不存在
        let json = [
            projectJson
        ]
        fse.outputJsonSync(getProFileUrl("./project/.project.list"), json)
    }

    resolve(true)
}

function askSaveProject(proUrl) {
    return new Promise((resolve, reject) => {
        inquirer
            .prompt([
                { // 选择项目平台
                    type: "confirm",
                    message: "是否将项目模版保存：",
                    name: "save",
                }
            ]).then(answers => {
                if (!answers.save) { // 不进行保存
                    resolve(false)
                    return
                }
                inquirer.prompt([
                    {
                        type: 'input',
                        message: '为该模板设置一个名字:',
                        name: 'name',
                        validate: function(val) {
                            if(/^[a-zA-Z]+[a-zA-Z\-\_]+$/.test(val)) { // 校验
                                let existsDir = fse.pathExistsSync(getProFileUrl(`./project/${val}`));
                                if (!existsDir) { // 不如果存在
                                    return true;
                                }else{ // 如果存在
                                    return "该项目模板名已存在，请更换";
                                }
                            }
                            return "请输入正确的模板名（建议只包含字母-_）";
                        },
                    }, {
                        type: 'input',
                        message: '为该模板做一个描述:',
                        name: 'description',
                    }
                ]).then(answers => {
                    projectJson.name = answers.name;
                    projectJson.description = answers.description;
                    saveProject(resolve,proUrl)
                })
            })
    })
}




module.exports = askSaveProject;