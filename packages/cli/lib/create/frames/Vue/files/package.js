const answerVue = require("../../../options.js").answerVue

let dependencies = [];
let devDependencies = [];



let packageJsonStr =
`{
  "name": "vue-cli",
  "version": "1.0.0",
  "description": "vue  的脚手架",
  "scripts": {
    "start": "npx vue-server serve",
    "build": "npx vue-server build",
    "dll": "npx vue-server dll"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/webxiaoma/vue-cli.git"
  },
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/webxiaoma/vue-cli/issues"
  },
  "homepage": "https://github.com/webxiaoma/vue-cli#readme",
  "dependencies": {
    "element-ui": "^2.9.1",
    "flyio": "^0.6.14",
    "vue": "^2.6.10",
    "vue-router": "^3.0.6"
  }, 
  "devDependencies": {
    "@web-pro/babel-preset-pro-vue": "^1.0.4",
    "@web-pro/vue-server": "^1.0.4"
  },
  "browserslist": [
    "> 1%",
    "last 3 versions",
    "not ie <= 8"
  ]
}
`




module.exports = packageJsonStr;