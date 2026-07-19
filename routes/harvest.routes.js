import express from "express";
import HarvestController from "../controllers/harvest.controller.js";

const router = express.Router();

router.post("/", HarvestController.create);

router.get("/", HarvestController.getAll);

router.get("/:id", HarvestController.getById);

router.get("/:id/sallOffer", HarvestController.sellHarvest);

router.put("/:id", HarvestController.update);

router.delete("/:id", HarvestController.remove);

export default router;