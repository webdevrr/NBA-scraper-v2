import express from "express";
import { update } from "../controllers/update";
import { checkSeason } from "../middleware/checkSeason";

const router = express.Router();

router.put("/:season", checkSeason, update);

export default router;
