import express from "express";
import rootDir from "app-root-path";
import { intervalRequest } from "../modules/intervalRequest";
const app = express();

app.use(express.static(rootDir + "/client/dist"));

app.get("*", (req, res) => {
  res.sendFile(rootDir + "/client/dist/index.html");
});

const port = process.env.PORT || 3000;
app.listen(port);

intervalRequest();
