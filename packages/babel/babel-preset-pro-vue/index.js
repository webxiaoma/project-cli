/**
 * @msg babel presets vue
 */

module.exports = (context, options = {}) => {

  let envOpt = options["@babel/preset-env"] || {};
  // let jsxPluginOpt = options["@vue/babel-preset-jsx"] || {};

  let presets = [[require('./node_modules/@babel/preset-env'), envOpt]];
  let plugins = [
    // "module:@babel/plugin-transform-runtime",
    // ["module:@vue/babel-preset-jsx", jsxPluginOpt],
  ];
  
  return {
    presets,
    plugins
  };
};

