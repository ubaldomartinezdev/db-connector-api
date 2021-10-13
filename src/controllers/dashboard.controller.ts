import { Request, Response, Router } from "express";

import { db } from "../db";

const router = Router();

const SELECT_DASHBOARD = "SELECT * FROM dashboard";
router.get("/", (_, res: Response) =>
    db.query(SELECT_DASHBOARD).then(
        ({ rows }) => res.status(200).json(rows),
        (error) => res.status(500).send(error.message)
    )
);

const SELECT_LAST_SALE_PRICE =
    "SELECT contract_address, token_id, last_sale_price, last_sale_date FROM last_sale_price WHERE contract_address = $1 AND last_sale_date != '-1' ORDER BY last_sale_date DESC";
router.get("/:contract_address/last_sale_price", (req: Request, res: Response) =>
    db.query(SELECT_LAST_SALE_PRICE, [req.params.contract_address]).then(
        ({ rows }) => res.status(200).json(rows),
        (error) => res.status(500).send(error.message)
    )
);

const SELECT_COLLECTIONS =
    "SELECT * FROM collections;";
router.get("/collections", (req: Request, res: Response) =>
    db.query(SELECT_COLLECTIONS).then(
        ({ rows }) => res.status(200).json(rows),
        (error) => res.status(500).send(error.message)
    )
);

export { router as dashboard };
