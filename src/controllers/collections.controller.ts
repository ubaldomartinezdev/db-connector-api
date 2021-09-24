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

const SELECT_COLLECTION_ITEMS = "SELECT * FROM items WHERE collection_id = $1";
router.get("/:collectionId/items", (req: Request, res: Response) =>
  db.query(SELECT_COLLECTION_ITEMS, [req.params.collectionId]).then(
    ({ rows }) => res.status(200).json(rows),
    (error) => res.status(500).send(error.message)
  )
);

export { router as collections };
