/* eslint-disable import/first */
require("dotenv-flow").config();

import cors from "cors";
import express, { Response } from "express";

import { db } from "./db";

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());

app.get("/", (_, res: Response) => {
  res.status(200).json({ health: true });
});

db.connect()
  .then(() => console.log("Database connection open"))
  .catch((error) => console.error("Database connection failed", error.stack));

app.listen(PORT, () => {
  console.log("Server is running on port: " + PORT);
});
