import { Request, Response, Router } from "express";

import { db } from "../db";

const router = Router();

const SELECT_COLLECTIONS =
  "SELECT id, collection_name, contract_address FROM collections";
router.get("/", (_, res: Response) =>
  db.query(SELECT_COLLECTIONS).then(
    ({ rows }) => res.status(200).json(rows),
    (error) => res.status(500).send(error.message)
  )
);

const SELECT_COLLECTION =
  "SELECT token_id FROM bot_list WHERE contract_address = $1";
router.get("/:contract_address", (req: Request, res: Response) =>
  db.query(SELECT_COLLECTION, [req.params.contract_address]).then(
    ({ rows }) => res.status(200).json(rows),
    (error) => res.status(500).send(error.message)
  )
);

const SELECT_COLLECTION_LABEL =
  "SELECT token_id FROM bot_list WHERE contract_address = $1 AND label = $2 ORDER BY token_id";
router.get("/:contract_address/:label", (req: Request, res: Response) =>
  db
    .query(SELECT_COLLECTION_LABEL, [
      req.params.contract_address,
      req.params.label,
    ])
    .then(
      ({ rows }) => res.status(200).json(rows),
      (error) => res.status(500).send(error.message)
    )
);

const SELECT_SELL_PRICE =
  "SELECT sell_price FROM collections WHERE contract_address = $1";
router.get("/:contract_address/sell_price", (req: Request, res: Response) =>
  db.query(SELECT_SELL_PRICE, [req.params.contract_address]).then(
    ({ rows }) => res.status(200).json(rows),
    (error) => res.status(500).send(error.message)
  )
);

const SELECT_BID_PRICE =
  "SELECT bid_price FROM collections WHERE contract_address = $1";
router.get("/:contract_address/bid_price", (req: Request, res: Response) =>
  db.query(SELECT_BID_PRICE, [req.params.contract_address]).then(
    ({ rows }) => res.status(200).json(rows),
    (error) => res.status(500).send(error.message)
  )
);

export { router as collections };
