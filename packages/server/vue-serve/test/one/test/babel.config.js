module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          // "esmodules": false
        },
        // modules: true
      }
    ]
  ],
  plugins: [
    // "module:@babel/helper-module-imports",
    // "@babel/plugin-syntax-dynamic-import"
  ]
};
