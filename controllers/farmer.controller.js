import Farmer from "../models/farmer.model.js";
import Plot from "../models/plot.model.js";
import User from "../models/user.model.js";

class FarmerController {

    create = async (req, res) => {
        try {

            const {
                firstName,
                lastName,
                phone,
                region,
                userId
            } = req.body;

            const farmer = await Farmer.create({
                firstName,
                lastName,
                phone,
                region,
                userId
            });

            res.status(201).json({
                message: "Farmer created successfully",
                farmer
            });

        } catch (err) {

            res.status(500).json({
                error: err.message
            });

        }
    }
    getAll = async (req, res) => {

        try {

            const farmers = await Farmer.findAll();

            res.status(200).json({
                farmers
            });

        } catch (err) {

            res.status(500).json({
                error: err.message
            });

        }

    }
    getById = async (req, res) => {

    try {

        const { id } = req.params;

        const farmer = await Farmer.findByPk(id, {
            include: [
                {
                    model: User,
                    attributes: ["id", "firstName", "lastName", "email", "role"]
                },
                {
                    model: Plot
                }
            ]
        });

        if (!farmer) {
            return res.status(404).json({
                message: "Farmer not found"
            });
        }

        res.status(200).json({
            farmer
        });

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }

}
update = async (req, res) => {

    try {

        const { id } = req.params;

        const farmer = await Farmer.findByPk(id);

        if (!farmer) {
            return res.status(404).json({
                message: "Farmer not found"
            });
        }

        await farmer.update(req.body);

        res.status(200).json({
            message: "Farmer updated successfully",
            farmer
        });

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }

}
delete = async (req, res) => {

    try {

        const { id } = req.params;

        const farmer = await Farmer.findByPk(id);

        if (!farmer) {
            return res.status(404).json({
                message: "Farmer not found"
            });
        }

        await farmer.destroy();

        res.status(200).json({
            message: "Farmer deleted successfully"
        });

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }

}

}

export default new FarmerController();