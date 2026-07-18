import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Offer = sequelize.define("offers", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    quantity: {
        type: Sequelize.FLOAT,
        allowNull: true
    },
    askingPrice: {
        type: Sequelize.FLOAT,
        allowNull: true
    },
    status: {
        type: Sequelize.STRING,
        allowNull: true
    },
    harvestId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
            model: "harvests",
            key: "id"
        }
    },
    marketId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
            model: "markets",
            key: "id"
        }
    }

}, {
    tableName: "offers",
    timestamps: false


}

)
export default Offer