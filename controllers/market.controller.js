import Market from "../models/market.model.js";
import MarketPrice from "../models/marketPrice.model.js";
import Offer from "../models/offre.model.js";
import Product from "../models/product.model.js";

class MarketController {

    create = async (req, res) => {

        try {

            const market = await Market.create(req.body);

            res.status(201).json(market);

        } catch (err) {

            res.status(400).json({
                error: err.message
            });

        }

    }

    getAll = async (req, res) => {

        try {

            const markets = await Market.findAll();

            res.status(200).json(markets);

        } catch (err) {

            res.status(500).json({
                error: err.message
            });

        }

    }

    getById = async (req, res) => {

        try {

            const market = await Market.findByPk(req.params.id);

            if (!market) {

                return res.status(404).json({
                    message: "Market not found"
                });

            }

            res.status(200).json(market);

        } catch (err) {

            res.status(500).json({
                error: err.message
            });

        }

    }

    // GET /markets/:id/prices

    getPrices = async (req, res) => {

        try {

            const market = await Market.findByPk(req.params.id, {

                include: [
                    
                        MarketPrice,
                        Offer
                    
                ]

            });

            if (!market) {

                return res.status(404).json({
                    message: "Market not found"
                });

            }

            res.status(200).json(market);

        } catch (err) {

            res.status(500).json({
                error: err.message
            });

        }

    }

    update = async (req, res) => {

        try {

            const market = await Market.findByPk(req.params.id);

            if (!market) {

                return res.status(404).json({
                    message: "Market not found"
                });

            }

            await market.update(req.body);

            res.status(200).json(market);

        } catch (err) {

            res.status(400).json({
                error: err.message
            });

        }

    }

    remove = async (req, res) => {

        try {

            const market = await Market.findByPk(req.params.id);

            if (!market) {

                return res.status(404).json({
                    message: "Market not found"
                });

            }

            await market.destroy();

            res.status(200).json({
                message: "Market deleted successfully"
            });

        } catch (err) {

            res.status(500).json({
                error: err.message
            });

        }

    }

}

export default new MarketController();