const path = require("path");
const fs = require("fs");

/**
 * エイリアスの設定
 */
class Alias {
  constructor() {
    this.aliasParams = [
      { label: "controller", alias: "src/controller" },
      { label: "application", alias: "src/application" },
      { label: "domain", alias: "src/domain" },
      { label: "factory", alias: "src/factory" },
      { label: "repository", alias: "src/repository" },
      { label: "modules", alias: "src/modules" },
      { label: "src", alias: "src" }
    ];
  }

  toTsconfigJson() {
    const paths = {};
    for (const aliasParam of this.aliasParams) {
      const alias = `${aliasParam.alias}/*`;
      paths[`~${aliasParam.label}/*`] = [alias];
    }

    return {
      compilerOptions: {
        paths: paths
      }
    };
  }

  /** webpackのエイリアスを生成 */
  toWebpack() {
    const paths = {};
    for (const aliasParam of this.aliasParams) {
      const alias = path.resolve(__dirname, `../../${aliasParam.alias}`);
      paths[`~${aliasParam.label}`] = alias;
    }
    return paths;
  }

  /** tsconfig.alias.json ファイルの更新 */
  updateTsconfigAliasJson(pathname = "./server/config/tsconfig.alias.json") {
    const json = this.toTsconfigJson();
    fs.writeFile(pathname, JSON.stringify(json), error => {
      if (!error) {
        console.log("Success : update 'tsconfig.alias.json'");
      } else {
        console.log("Failed : update 'tsconfig.alias.json'");
      }
    });
  }
}

//  ファイル読み込み時に tsconfig.alias.json を更新する
const alias = new Alias();
alias.updateTsconfigAliasJson();

exports.alias = alias;
