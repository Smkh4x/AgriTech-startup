import Harvest from "../models/harvest.model.js";
import Market from "../models/market.model.js";
import Offer from "../models/offre.model.js";
import Plot from "../models/plot.model.js";
import Product from "../models/product.model.js";

class HarvestController {

    create = async (req, res) => {

        try {

            const harvest = await Harvest.create(req.body);

            res.status(201).json(harvest);

        } catch (err) {

            res.status(400).json({
                error: err.message
            });

        }

    }

    getAll = async (req, res) => {

        try {

            const harvests = await Harvest.findAll({

                include: [
                    Plot,
                    Product
                ]

            });

            res.status(200).json(harvests);

        } catch (err) {

            res.status(500).json({
                error: err.message
            });

        }

    }

    getById = async (req, res) => {

        try {

            const harvest = await Harvest.findByPk(req.params.id, {

                include: [
                    Plot,
                    Product
                ]

            });

            if (!harvest) {

                return res.status(404).json({
                    message: "Harvest not found"
                });

            }

            res.status(200).json(harvest);

        } catch (err) {

            res.status(500).json({
                error: err.message
            });

        }

    }
    sellHarvest = async (req, res) => {

        try {

            const harvest = await Harvest.findByPk(req.params.id, {

                include: [
                    {
                        model: Offer,
                        include: [
                            Market
                        ]

                    }
                ]

            });

            if (!harvest) {

                return res.status(404).json({
                    message: "Harvest not found"
                });

            }

            res.status(200).json(harvest);

        } catch (err) {

            res.status(500).json({
                error: err.message
            });

        }

    }

    update = async (req, res) => {

        try {

            const harvest = await Harvest.findByPk(req.params.id);

            if (!harvest) {

                return res.status(404).json({
                    message: "Harvest not found"
                });

            }

            await harvest.update(req.body);

            res.status(200).json(harvest);

        } catch (err) {

            res.status(400).json({
                error: err.message
            });

        }

    }

    remove = async (req, res) => {

        try {

            const harvest = await Harvest.findByPk(req.params.id);

            if (!harvest) {

                return res.status(404).json({
                    message: "Harvest not found"
                });

            }

            await harvest.destroy();

            res.status(200).json({
                message: "Harvest deleted successfully"
            });

        } catch (err) {

            res.status(500).json({
                error: err.message
            });

        }

    }

}

export default new HarvestController();