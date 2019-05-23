#!/usr/bin/env node


const program = require('commander'); // 命令行工具

program
  .version('0.0.1')
  .option('-v, --version', 'output the version number')
  .option('-h, --help', 'change the working directory')


program
  .command('create [env] [otherArgs...]')
  .description('run setup commands for all envs')
  .option("-s, --setup_mode [mode]", "Which setup mode to use")
  .action(function (env, options) {
    console.log(env)
    console.log(options)
  });



  



program.parse(process.argv);