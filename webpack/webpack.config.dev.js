const baseConfig = require("./webpack.config.base");
const { merge } = require("webpack-merge");

/**
 * @description 環境変数の設定
 * @param DOMAIN ドメイン
 * @param NODE_ENV 環境名
 */

const config = merge(baseConfig, {
  mode: "development",
  devServer: {
    static: "dist",
    open: true,
    port: 11111,
    /** 404のfallback先を /index.html にする */
    historyApiFallback: true
  }
});

module.exports = config;
