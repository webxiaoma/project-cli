#!/usr/bin/env node

const program = require('commander'); // 命令行工具


program
  .version('1.0.0')
  .option('-v, --version', 'output the version number')
  .option('-h, --help', 'help')


/**
 * serve 命令
 */
program
  .command('serve [name]')
  .description('run setup commands for all envs')
  .action((name, cmd) => {
    let InitPagesServer = require('./dev.js')
    InitPagesServer(cmd, "serve")
  });

/**
* build 命令
*/
program
  .command('build [name]')
  .description('run setup commands for all envs')
  .action((name, cmd) => {
    let InitBuildServer = require('./pro.js')
    InitBuildServer(cmd, "build")
  });

program.parse(process.argv);