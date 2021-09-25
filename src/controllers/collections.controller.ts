import { Request, Response, Router } from "express";

import { db } from "../db";

const router = Router();

const SELECT_COLLECTIONS = "SELECT * FROM collections ORDER BY cat DESC";
router.get("/", (_, res: Response) =>
  db.query(SELECT_COLLECTIONS).then(
    ({ rows }) => res.status(200).json(rows),
    (error) => res.status(500).send(error.message)
  )
);

const SELECT_COLLECTION = "SELECT * FROM items WHERE contract = $1";
router.get("/:contract", (req: Request, res: Response) =>
  db.query(SELECT_COLLECTION, [req.params.contract]).then(
    ({ rows }) => res.status(200).json(rows),
    (error) => res.status(500).send(error.message)
  )
);

export { router as collections };
