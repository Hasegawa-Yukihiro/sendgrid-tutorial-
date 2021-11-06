const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("dist"));
//ここでbuildフォルダをパブリックフォルダに指定する
app.get("*", (req, res) => {
  //buildフォルダ内のindex.htmlをリクエストに対して返信
  res.sendFile(path.join("dist", "index.html"));
});
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
