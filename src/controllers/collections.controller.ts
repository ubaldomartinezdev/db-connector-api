import { Request, Response, Router } from "express";

import { db } from "../db";

const router = Router();

const SELECT_COLLECTIONS = "SELECT id, name, contract_id FROM collections";
router.get("/", (_, res: Response) =>
  db.query(SELECT_COLLECTIONS).then(
    ({ rows }) => res.status(200).json(rows),
    (error) => res.status(500).send(error.message)
  )
);

const SELECT_COLLECTION =
  "SELECT token_id FROM bot_list WHERE contract_id = $1 ORDER BY floor_price";
router.get("/:contract_id", (req: Request, res: Response) =>
  db.query(SELECT_COLLECTION, [req.params.contract_id]).then(
    ({ rows }) => res.status(200).json(rows),
    (error) => res.status(500).send(error.message)
  )
);

const SELECT_SELL_PRICE =
  "SELECT sell_price FROM collections WHERE contract_id = $1";
router.get("/:contract_id/sell_price", (req: Request, res: Response) =>
  db.query(SELECT_SELL_PRICE, [req.params.contract_id]).then(
    ({ rows }) => res.status(200).json(rows),
    (error) => res.status(500).send(error.message)
  )
);

const SELECT_BID_PRICE =
  "SELECT bid_price FROM collections WHERE contract_id = $1";
router.get("/:contract_id/bid_price", (req: Request, res: Response) =>
  db.query(SELECT_BID_PRICE, [req.params.contract_id]).then(
    ({ rows }) => res.status(200).json(rows),
    (error) => res.status(500).send(error.message)
  )
);

export { router as collections };
