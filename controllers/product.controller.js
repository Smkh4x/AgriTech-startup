import Product from "../models/product.model.js";

class ProductController {

    create = async (req, res) => {

        try {

            const product = await Product.create(req.body);

            res.status(201).json(product);

        } catch (err) {

            res.status(400).json({
                error: err.message
            });

        }

    }

    getAll = async (req, res) => {

        try {

            const products = await Product.findAll();

            res.status(200).json(products);

        } catch (err) {

            res.status(500).json({
                error: err.message
            });

        }

    }

    getById = async (req, res) => {

        try {

            const product = await Product.findByPk(req.params.id);

            if (!product) {

                return res.status(404).json({
                    message: "Product not found"
                });

            }

            res.status(200).json(product);

        } catch (err) {

            res.status(500).json({
                error: err.message
            });

        }

    }

    update = async (req, res) => {

        try {

            const product = await Product.findByPk(req.params.id);

            if (!product) {

                return res.status(404).json({
                    message: "Product not found"
                });

            }

            await product.update(req.body);

            res.status(200).json(product);

        } catch (err) {

            res.status(400).json({
                error: err.message
            });

        }

    }

    remove = async (req, res) => {

        try {

            const product = await Product.findByPk(req.params.id);

            if (!product) {

                return res.status(404).json({
                    message: "Product not found"
                });

            }

            await product.destroy();

            res.status(200).json({
                message: "Product deleted successfully"
            });

        } catch (err) {

            res.status(500).json({
                error: err.message
            });

        }

    }

}

export default new ProductController();