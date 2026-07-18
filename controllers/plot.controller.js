import Plot from "../models/plot.model.js";

class PlotController {

    create = async (req, res) => {

        try {

            const plot = await Plot.create(req.body);

            res.status(201).json(plot);

        } catch (err) {

            res.status(400).json({
                error: err.message
            });

        }

    }

    getAll = async (req, res) => {

        try {

            const plots = await Plot.findAll();

            res.status(200).json(plots);

        } catch (err) {

            res.status(500).json({
                error: err.message
            });

        }

    }

    getById = async (req, res) => {

        try {

            const plot = await Plot.findByPk(req.params.id);

            if (!plot) {

                return res.status(404).json({
                    message: "Plot not found"
                });

            }

            res.status(200).json(plot);

        } catch (err) {

            res.status(500).json({
                error: err.message
            });

        }

    }

    update = async (req, res) => {

        try {

            const plot = await Plot.findByPk(req.params.id);

            if (!plot) {

                return res.status(404).json({
                    message: "Plot not found"
                });

            }

            await plot.update(req.body);

            res.status(200).json(plot);

        } catch (err) {

            res.status(400).json({
                error: err.message
            });

        }

    }

    remove = async (req, res) => {

        try {

            const plot = await Plot.findByPk(req.params.id);

            if (!plot) {

                return res.status(404).json({
                    message: "Plot not found"
                });

            }

            await plot.destroy();

            res.status(200).json({
                message: "Plot deleted successfully."
            });

        } catch (err) {

            res.status(500).json({
                error: err.message
            });

        }

    }

}

export default new PlotController();