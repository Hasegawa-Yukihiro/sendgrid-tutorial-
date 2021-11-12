import { Express } from "express";

export const routes = (app: Express): Express => {
  app.get("/", (req, res) => {
    return res.send("Hello World");
  });

  return app;
};
