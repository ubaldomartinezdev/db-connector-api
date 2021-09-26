import { Response, Router } from "express";

import { db } from "../db";

const router = Router();

const SELECT_SELL_PRICE =
  'SELECT MIN(floor_price) AS "Sell_Price" FROM lasc_floor_prices';
router.get("/", (_, res: Response) =>
  db.query(SELECT_SELL_PRICE).then(
    ({ rows }) => res.status(200).json(rows),
    (error) => res.status(500).send(error.message)
  )
);

export { router as sell_price };
