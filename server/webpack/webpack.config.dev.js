const baseConfig = require("./webpack.config.base");
const { merge } = require("webpack-merge");

module.exports = merge(baseConfig, {
  mode: "development",
  watch: true,
  devServer: {
    contentBase: "dist",
    open: true,
    historyApiFallback: true
  }
});
