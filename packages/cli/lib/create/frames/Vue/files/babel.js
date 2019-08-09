const answerVue = require("../../../../options.js").answerVue
const formattingStr = require("../../../../utils").formattingStr

let babelContentStr =
`// babel 配置

module.exports = {
  presets: [
    [
      "@web-pro/babel-preset-pro-vue",{
          presetEnv: {
              "modules": false,
              "useBuiltIns": "usage",
              "corejs": 3
          }
      }
    ]
  ],
  plugins: [
    ${answerVue.useElementUl?
    `[
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ],
    `: "placeholder-mxx"}
    ${answerVue.useVant?
    `['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
    `: "placeholder-mxx"}
    ["@babel/plugin-transform-runtime"] // 兼容ie
  ]
};
` 

module.exports = formattingStr(babelContentStr, "placeholder-mxx")


