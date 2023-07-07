import { Router } from "express";
import { getGoods } from "../controllers/goods.js";
import { addItem } from "../controllers/goods.js";
import { removeItem } from "../controllers/goods.js";
import { makeOrder } from "../controllers/goods.js";
import { removeAll } from "../controllers/goods.js";

import { checkAuth } from "../utils/checkAuth.js";

const router = new Router();

//GET GOODS
router.get("/", getGoods)
//ADD_TO_CART 
router.post("/cart", checkAuth, addItem)
//REMOVE_FROM_CART
router.put("/cart", checkAuth, removeItem)
//REMOVE_ALL_FROM_CART
router.put("/cart/remove_all", checkAuth, removeAll)
//MAKE_ORDER
router.post("/make_order", checkAuth, makeOrder)

export default router;