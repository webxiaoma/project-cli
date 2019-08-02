module.exports = {
  presets: [
    [
      "../../../../babel/babel-preset-pro-vue",
    ]
  ],
  plugins: [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ],
    ["@babel/plugin-transform-runtime"] // 兼容ie
  ]
};
 