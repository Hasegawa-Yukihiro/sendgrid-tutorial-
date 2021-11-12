import express, { Express } from "express";
import rootDir from "app-root-path";
import { routes } from ".";

export default (): Express => {
  const app = express();
  app.use(express.static(rootDir + "/client/dist"));

  const port = process.env.PORT || 3000;
  app.listen(port);

  routes(app);

  return app;
};
