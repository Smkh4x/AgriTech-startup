import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Offer = sequelize.define("offers", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    quantity: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    askingPrice: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    status: {
        type: DataTypes.STRING,
        allowNull: true
    },
    harvestId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: "harvests",
            key: "id"
        }
    },
    marketId: {
        type: DataTypes.INTEGER,
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