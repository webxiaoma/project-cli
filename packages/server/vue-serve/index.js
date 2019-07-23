#!/usr/bin/env node

const program = require('commander'); // 命令行工具


program
  .version('1.0.4')
  

/**
 * serve 命令
 */
program
  .command('serve [name]')
  .description('启动命令,name参数可省略')
  .action((name, cmd) => {
    let InitVueServer = require('./vue-spa')  
    new InitVueServer(cmd,"serve")
  });

/**
 * build 命令
 */
program
  .command('build [name]')
  .description('构建命令,name参数可省略')
  .action((name, cmd) => {
    let InitVueServer = require('./vue-spa')
    new InitVueServer(cmd, "build")
  });

/**
 * dll 命令
 */
program
  .command('dll [name]')
  .description('执行dllPlugin,name参数可省略')
  .action((name, cmd) => {
    let InitVueServer = require('./vue-spa')
    new InitVueServer(cmd, "dll");
  });

program.parse(process.argv);

