import { Router } from "express";
import { getGoods } from "../controllers/goods.js";
import { addItem } from "../controllers/goods.js";
import { removeItem } from "../controllers/goods.js";

import { checkAuth } from "../utils/checkAuth.js";

const router = new Router();

//GET GOODS
router.get("/", getGoods)
//ADD_TO_CART
router.post("/cart", checkAuth, addItem)
//REMOVE_FROM_CART
router.put("/cart", checkAuth, removeItem)

export default router;