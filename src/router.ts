import { Router as createRouter } from "express";

import { catchError } from "./middlewares/error.ts";
import { deletePaste, getAllPastes, getCreateNewPaste, getPaste, postCreateNewPaste } from "./controllers/paste.ts";

const router = createRouter();

router.get("/",[ getAllPastes, catchError]);
router.get("/paste/:id", [getPaste, catchError]);
router.get("/paste", getCreateNewPaste);
router.post("/paste", [postCreateNewPaste, catchError]);
router.post("/paste/delete/:id", [deletePaste, catchError]);

export default router;