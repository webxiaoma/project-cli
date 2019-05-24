
const validateNpmName = require("validate-npm-package-name")
const options = require('./options.js') 
const initPreset = require('./setPreset.js')


/**
 * create 命令
 * 
 */ 

function createCmd(name,cmd){
    console.log(name)
    // console.log(cmd)
    let result = validateNpmName(name)

    // if(result.){

    // }
    initPreset(0)

    console.log(options)

    // console.log(result.errors[0])















}






























 module.exports =  createCmd;