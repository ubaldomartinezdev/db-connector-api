import { Request, Response, Router } from "express";

import { db } from "../db";

const router = Router();

const SELECT_SELL_PRICE =
  "SELECT sell_price FROM collections WHERE contract_address = $1";
router.get("/:contract_address/sell", (req: Request, res: Response) =>
  db.query(SELECT_SELL_PRICE, [req.params.contract_address]).then(
    ({ rows }) => res.status(200).json(rows),
    (error) => res.status(500).send(error.message)
  )
);

const SELECT_BID_PRICE =
  "SELECT bid_price FROM collections WHERE contract_address = $1";
router.get("/:contract_address/bid", (req: Request, res: Response) =>
  db.query(SELECT_BID_PRICE, [req.params.contract_address]).then(
    ({ rows }) => res.status(200).json(rows),
    (error) => res.status(500).send(error.message)
  )
);

export { router as prices };
