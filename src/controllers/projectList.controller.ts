import { Request, Response, Router } from "express";

import { db } from "../db";

const router = Router();

const SELECT_PROJECT_LIST = "SELECT * FROM projectList";
router.get("/", (_, res: Response) =>
    db.query(SELECT_PROJECT_LIST).then(
        ({ rows }) => res.status(200).json(rows),
        (error) => res.status(500).send(error.message)
    )
);

export { router as projectList };