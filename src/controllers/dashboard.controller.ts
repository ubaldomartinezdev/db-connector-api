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

export { router as dashboard };
