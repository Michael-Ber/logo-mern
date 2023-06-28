import { Router } from "express";
import { getSponsors } from "../controllers/sponsors.js";

const router = new Router();

router.get("/", getSponsors);

export default router;