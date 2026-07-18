import express from "express";
import FarmerController from "../controllers/farmer.controller.js";

const router = express.Router();

router.post("/", FarmerController.create);
router.get("/", FarmerController.getAll);
router.get("/:id", FarmerController.getById);
router.put("/:id", FarmerController.update);
router.delete("/:id", FarmerController.delete);
export default router;