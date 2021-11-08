const webpack = require("webpack");
const path = require("path");
const nodeExternals = require("webpack-node-externals");

const DEVELOPMENT = process.env.DEVELOPMENT || "LOCAL";
const PORT = process.env.PORT || "8080";

module.exports = {
  target: "node",
  externals: [nodeExternals()], // warning解消??
  /** entry point */
  entry: path.resolve(__dirname, "../src/index.ts"),
  /** output point */
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "main.js",
    publicPath: "/"
  },
  /** https://qiita.com/YoshinoriKanno/items/322ae6e53daa35059c15 */
  devtool: "eval-source-map",
  /** jsファイルへの変換処理  */
  module: {
    rules: [
      /** ts  ファイルは ts-loader を使ってJSに変換 */
      {
        test: /\.ts$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
              configFile: path.resolve(__dirname, "../tsconfig.json")
            } //  ビルドの高速化
          }
        ]
      }
    ]
  },
  /**
   * webpack には import する際に、指定されたモジュールを検索して該当するファイルを探す仕組み（モジュール解決  ）がある
   * resolve オプションはモジュール解決（モジュールの import を解決する仕組み）の設定を変更します。
   */
  resolve: {
    extensions: [".ts", ".js"]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        DEVELOPMENT: JSON.stringify(DEVELOPMENT),
        PORT: JSON.stringify(PORT)
      }
    })
  ]
};
