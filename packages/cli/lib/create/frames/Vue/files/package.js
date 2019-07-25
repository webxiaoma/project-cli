const answerVue = require("../../../../options.js").answerVue
const cmdOpt = require("../../../../options.js").cmdOpt
const formattingStr = require("../../../../utils").formattingStr;

let packageJsonStr =
`{
  "name": "${cmdOpt.dirName}",
  "version": "1.0.0",
  "description": "vue  的脚手架",
  "scripts": {
    "start": "npx vue-server serve",
    "build": "npx vue-server build",
    "dll": "npx vue-server dll"
  },
  "author": "",
  "license": "ISC", 
  "dependencies": {
    ${answerVue.useElementUl?'"element-ui": "^2.10.1",' : "placeholder-mxx"}
    ${answerVue.request === 2?'"flyio": "^0.6.14",' : "placeholder-mxx"}
    ${answerVue.request === 1?'"axios": "^0.19.0",' : "placeholder-mxx"}
    ${answerVue.useRouter?'"vue-router": "^3.0.6",' : "placeholder-mxx"}
    ${answerVue.useVuex?'"vuex":"^3.1.1",' : "placeholder-mxx"}
    "vue": "^2.6.10"
  }, 
  "devDependencies": {
    ${answerVue.useElementUl ? '"babel-plugin-component": "^1.1.1",' : "placeholder-mxx"}
    ${answerVue.platform === 2 ? '"postcss-pxtorem":"^4.0.1"' : "placeholder-mxx"}
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

module.exports = formattingStr(packageJsonStr,"placeholder-mxx");
