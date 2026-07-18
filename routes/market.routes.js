import express from "express";
import MarketController from "../controllers/market.controller.js";

const router = express.Router();

router.post("/", MarketController.create);

router.get("/", MarketController.getAll);

router.get("/:id", MarketController.getById);

router.get("/:id/prices", MarketController.getPrices);

router.put("/:id", MarketController.update);

router.delete("/:id", MarketController.remove);

export default router;