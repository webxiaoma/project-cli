#!/usr/bin/env node

const program = require('commander'); // 命令行工具



// 检测版本
// let reslut = require('./lib/create/evn.js')();



program
  .version('0.0.1')
  .option('-v, --version', 'output the version number')
  .option('-h, --help', 'change the working directory')

/**
 * create 命令
 */
program
  .command('create [project-name]')
  .description('run setup commands for all envs')
  .action((name, cmd)=> {
       // create 命令  
     require('./lib/create')(name, cmd)
  });



  

program.parse(process.argv);