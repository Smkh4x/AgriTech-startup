import express from "express";
import PlotController from "../controllers/plot.controller.js";

const router = express.Router();

router.post("/", PlotController.create);
router.get("/", PlotController.getAll);
router.get("/:id", PlotController.getById);
router.put("/:id", PlotController.update);
router.delete("/:id", PlotController.remove);

export default router;