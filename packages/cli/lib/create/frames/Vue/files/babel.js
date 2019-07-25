const answerVue = require("../../../../options.js").answerVue
const formattingStr = require("../../../../utils").formattingStr

let babelContentStr =
`// babel 配置

module.exports = {
  presets: [
    [
      "@web-pro/babel-preset-pro-vue",
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
    ]
    `: "placeholder-mxx"}]
};
` 

module.exports = formattingStr(babelContentStr, "placeholder-mxx")