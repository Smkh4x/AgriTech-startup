import express from "express";
import MarketPriceController from "../controllers/marketPrice.controller.js";

const router = express.Router();

router.post("/", MarketPriceController.create);

router.get("/", MarketPriceController.getAll);

router.get("/:id", MarketPriceController.getById);

router.put("/:id", MarketPriceController.update);

router.delete("/:id", MarketPriceController.remove);

export default router;