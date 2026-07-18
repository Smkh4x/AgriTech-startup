import express from "express";
import OfferController from "../controllers/offre.controller.js";

const router = express.Router();

router.post("/", OfferController.create);

router.get("/", OfferController.getAll);

router.get("/:id", OfferController.getById);

router.put("/:id", OfferController.update);

router.delete("/:id", OfferController.remove);

export default router;