/**
 * @msg babel presets vue
 */

module.exports = (context, options = {}) => {

  const presets = [];
  const plugins = [];

  // 加入@babel/preset-env
  presets.push(
    [require('@babel/preset-env')]
  )
  
  // 支持vue jsx语法
  plugins.push(
    [require("babel-plugin-transform-vue-jsx")]
  )


  return {
    presets,
    plugins
  };
};

