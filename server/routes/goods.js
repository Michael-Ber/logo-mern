import { Router } from "express";
import { getGoods } from "../controllers/goods.js";

const router = new Router();

//GET GOODS
router.get("/", getGoods)

export default router;