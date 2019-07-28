#!/usr/bin/env node

const program = require('commander'); // 命令行工具



program
  .version('0.0.1')
  .option('-v, --version', 'output the version number')
  .option('-h, --help', 'change the working directory')

/**
 * create 命令
 */
program
  .command('create [project-name]')
  .description('创建项目')
  .action((name, cmd)=> {
       // create 命令  
     require('./lib/create')(name, cmd)
  });


/**
 * save 命令
 */
program
  .command('save [project-url]')
  .description('保存添加项目')
  .action((name, cmd) => {
    // create 命令  
    console.log("正在开发中...")
  });



program.parse(process.argv);