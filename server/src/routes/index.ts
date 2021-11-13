import { Express } from "express";
import { Validator } from "express-json-validator-middleware";
import controller from "~factory/Controller";

export const routes = (app: Express): Express => {
  const { validate } = new Validator({ allErrors: true });

  app.get("/", (req, res) => {
    return res.send("Hello World");
  });

  /** Contact */
  app.post(
    "/contact",
    validate({
      body: controller.createContact.schema
    })
  );

  return app;
};
