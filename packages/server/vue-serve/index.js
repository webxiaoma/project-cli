#!/usr/bin/env node

const program = require('commander'); // 命令行工具
const version = require("")


program
  .version('1.0.3')
  .option('-v, --version', 'output the version number')
  .option('-h, --help', 'help')

/**
 * serve 命令
 */
program
  .command('serve [name]')
  .description('run setup commands for all envs')
  .option('-e, --entry <filePath>', 'entrance to the file')
  .option('-o, --out <filePath>', 'output file path')
  .action((name, cmd) => {
    let InitVueServer = require('./vue-spa')
    new InitVueServer(cmd,"serve")
  });

/**
 * build 命令
 */
program
  .command('build [name]')
  .description('run setup commands for all envs')
  .option('-e, --entry <filePath>', 'entrance to the file')
  .option('-o, --out <filePath>', 'output file path')
  .action((name, cmd) => {
    let InitVueServer = require('./vue-spa')
    new InitVueServer(cmd, "build")
  });

/**
 * dll 命令
 */
program
  .command('dll [name]')
  .description('run setup commands for all envs')
  .option('-e, --entry <filePath>', 'entrance to the file')
  .option('-o, --out <filePath>', 'output file path')
  .action((name, cmd) => {
    let InitVueServer = require('./vue-spa')
    new InitVueServer(cmd, "dll");
  });


/**
 * help 命令
 **/ 

program.on('--help', function () {
  console.log('')
  console.log('Examples:');
  console.log('  $ custom-help --help');
  console.log('  $ custom-help -h');
});


program.parse(process.argv);

