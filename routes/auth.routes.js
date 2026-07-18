import usersLogic from "../controllers/auth.controller.js";
import express from "express";

const router = express.Router()

router.post("/register", usersLogic.Register)
router.post("/login", usersLogic.Login)

export default router;