import app from "./routes/app";
import http from "http";
import chalk from "chalk";

const port = process.env.PORT || 8080;
const server = http.createServer(app());

server.listen(port, () => {
  console.log(new Date().toISOString());
  console.log(
    `${chalk.blueBright("Success Connected Server")} : PORT -> ${port}`
  );
});
