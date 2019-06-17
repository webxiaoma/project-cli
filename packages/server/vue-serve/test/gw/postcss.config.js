module.exports = {
  plugins: {
    autoprefixer: {
      browsers: ["Android >= 4.0", "iOS >= 6"]
    },
    "postcss-pxtorem": {
      rootValue: 37.5,
      propList: ["*"]
    }
  }
};
