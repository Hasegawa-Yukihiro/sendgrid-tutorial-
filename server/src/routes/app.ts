import express, { Express } from "express";
import rootDir from "app-root-path";
import cors from "cors";
import { routes } from ".";

export default (): Express => {
  const app = express();
  app.use(express.static(rootDir + "/client/dist"));
  app.use(express.urlencoded({ extended: true, limit: "50mb" }));
  app.use(express.json({ limit: "50mb" }));

  app.use(
    cors({
      allowedHeaders: [
        "Origin",
        "X-Requested-With",
        "Content-Type",
        "Accept",
        "X-Access-Token",
        "Authorization",
        "X-CSRF-Token"
      ],
      credentials: true,
      methods: "GET,PUT,PATCH,POST,DELETE",
      origin: ["http://localhost:3000"]
    })
  );

  //  https redirect
  app.get("*", function (req, res, next) {
    const protocol = req.headers["x-forwarded-proto"];
    const hostname = req.hostname;
    if (protocol !== "https" && hostname !== "localhost")
      res.redirect(process.env.DOMAIN + req.url);
    else next();
  });

  const port = process.env.PORT || 3000;
  app.listen(port);

  routes(app);

  return app;
};
