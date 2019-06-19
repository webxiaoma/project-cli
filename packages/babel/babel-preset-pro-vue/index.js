/**
 * @msg babel presets vue
 */

module.exports = (context, options = {}) => {

  let envOpt = options["@babel/preset-env"] || {};

  let presets = [[require('./node_modules/@babel/preset-env'), envOpt]];
  let plugins = [
    ["module:@babel/plugin-syntax-dynamic-import"]
  ];
  
  return {
    presets,
    plugins
  };
};

