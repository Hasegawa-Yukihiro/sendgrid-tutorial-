import express from "express";
import rootDir from "app-root-path";

const app = express();
const path = require("path");

app.use("/static", express.static(rootDir + "/dist"));
//ここでbuildフォルダをパブリックフォルダに指定する
app.get("*", (req, res) => {
  //buildフォルダ内のindex.htmlをリクエストに対して返信
  res.sendFile(rootDir + "/dist/index.html");
});
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
