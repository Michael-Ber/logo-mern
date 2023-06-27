import { Router } from "express";
import { register, login, me } from "../controllers/auth.js";
import { checkAuth } from "../utils/checkAuth.js";

const router = new Router();

//REGISTER
router.post("/register", register)

//LOGIN
router.post("/login", login)

//GETME
router.get("/me", checkAuth, me)

export default router;