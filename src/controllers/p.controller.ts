import { Request, Response, Router } from "express";

import { db } from "../db";

const router = Router();

const SELECT_PROJECT_LIST = "SELECT * FROM projectList";
router.get("/projectList", (_, res: Response) =>
    db.query(SELECT_PROJECT_LIST).then(
        ({ rows }) => res.status(200).json(rows),
        (error) => res.status(500).send(error.message)
    )
);

const SELECT_PROJECT_STATS = "SELECT * FROM projectStats";
router.get("/projectStats", (_, res: Response) =>
    db.query(SELECT_PROJECT_STATS).then(
        ({ rows }) => res.status(200).json(rows),
        (error) => res.status(500).send(error.message)
    )
);

const SELECT_PROJECT_TRAITS = "SELECT * FROM projectTraits";
router.get("/projectTraits", (_, res: Response) =>
    db.query(SELECT_PROJECT_TRAITS).then(
        ({ rows }) => res.status(200).json(rows),
        (error) => res.status(500).send(error.message)
    )
);

export { router as p };