import MarketPrice from "../models/marketPrice.model.js";
import Market from "../models/market.model.js";
import Product from "../models/product.model.js";

class MarketPriceController {

    create = async (req, res) => {

        try {

            const marketPrice = await MarketPrice.create(req.body);

            res.status(201).json(marketPrice);

        } catch (err) {

            res.status(400).json({
                error: err.message
            });

        }

    }

    getAll = async (req, res) => {

        try {

            const prices = await MarketPrice.findAll({

                include: [
                    Market,
                    Product
                ]

            });

            res.status(200).json(prices);

        } catch (err) {

            res.status(500).json({
                error: err.message
            });

        }

    }

    getById = async (req, res) => {

        try {

            const price = await MarketPrice.findByPk(req.params.id, {

                include: [
                    Market,
                    Product
                ]

            });

            if (!price) {

                return res.status(404).json({
                    message: "Price not found"
                });

            }

            res.status(200).json(price);

        } catch (err) {

            res.status(500).json({
                error: err.message
            });

        }

    }

    update = async (req, res) => {

        try {

            const price = await MarketPrice.findByPk(req.params.id);

            if (!price) {

                return res.status(404).json({
                    message: "Price not found"
                });

            }

            await price.update(req.body);

            res.status(200).json(price);

        } catch (err) {

            res.status(400).json({
                error: err.message
            });

        }

    }

    remove = async (req, res) => {

        try {

            const price = await MarketPrice.findByPk(req.params.id);

            if (!price) {

                return res.status(404).json({
                    message: "Price not found"
                });

            }

            await price.destroy();

            res.status(200).json({
                message: "Price deleted successfully"
            });

        } catch (err) {

            res.status(500).json({
                error: err.message
            });

        }

    }

}

export default new MarketPriceController();