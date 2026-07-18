import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const MarketPrice = sequelize.define("marketPrices", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    pricePerKg: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    priceDate: {
        type: DataTypes.DATE,
        allowNull: true
    },
    marketId: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: true
    },

}, {
    tableName: "marketPrices",
    timestamps: false


}

)
export default MarketPrice