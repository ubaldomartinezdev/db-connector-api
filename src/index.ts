/* eslint-disable import/first */
require("dotenv-flow").config();

import cors from "cors";
import express, { Response } from "express";

import * as controllers from "./controllers";
import { db } from "./db";

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());

app.get("/", (_, res: Response) => {
  res.status(200).json({ health: true });
});

app.use("/collections", controllers.collections);
app.use("/dashboard", controllers.dashboard);
app.use("/prices", controllers.prices);
app.use("/p", controllers.p);

db.connect()
  .then(() => console.log("Database connection open"))
  .catch((error) => console.error("Database connection failed", error.stack));

app.listen(PORT, () => {
  console.log("Server is running on port: " + PORT);
});
