import { Response, Router } from "express";

import { db } from "../db";

const router = Router();

const SELECT_FLOOR_PRICE =
  'SELECT MIN(floor_price) AS "Floor_Price" FROM lasc_floor_prices';
router.get("/", (_, res: Response) =>
  db.query(SELECT_FLOOR_PRICE).then(
    ({ rows }) => res.status(200).json(rows),
    (error) => res.status(500).send(error.message)
  )
);

export { router as floor_price };
