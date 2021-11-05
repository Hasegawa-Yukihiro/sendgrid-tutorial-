const baseConfig = require("./webpack.config.base");
const { merge } = require("webpack-merge");

const PORT = process.env.PORT || 5000;

/**
 * @description 環境変数の設定
 * @param DOMAIN ドメイン
 * @param NODE_ENV 環境名
 */
module.exports = merge(baseConfig, {
  mode: "development",
  devServer: {
    static: "dist",
    open: true,
    port: PORT,
    /** 404のfallback先を /index.html にする */
    historyApiFallback: true
  }
});
