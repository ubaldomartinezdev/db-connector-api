import { Response, Router } from "express";

import { db } from "../db";

const router = Router();

const SELECT_BOT_LIST =
  "SELECT token_id, floor_price FROM lasc_floor_prices ORDER BY floor_price";
router.get("/", (_, res: Response) =>
  db.query(SELECT_BOT_LIST).then(
    ({ rows }) => res.status(200).json(rows),
    (error) => res.status(500).send(error.message)
  )
);

export { router as bot_list };
