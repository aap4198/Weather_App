import express from "express";
import router from "./routes/routes.js";
import errorController from "./controller/errorController.js";
import { config } from "dotenv";
import rateLimit from "express-rate-limit";
import bodyParser from "body-parser";

config();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  rateLimit({
    windowMs: 60 * 1000,
    max: 2,
    message: "Too many requests, please try again later.",
  })
);
app.use(router);
app.use(errorController);
app.get("*", function (req, res) {
  res.status(404).send("Route not found");
});

export default app;
