/**
 * @msg babel presets vue
 */

module.exports = (context, options = {
  presetEnv: {}
}) => {
  
  const presets = [];
  const plugins = [];
  
  let { presetEnvOpt } = options
  // 加入@babel/preset-env
  presets.push(
    [require('@babel/preset-env'), presetEnvOpt]
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

