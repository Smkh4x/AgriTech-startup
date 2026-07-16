import { DataTypes } from "sequelize";
import sequelize from "../config/config";

const MarketPrice = sequelize.define("marketPrice", {
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
    tableName: "marketPrice",
    timestamps: false


}

)
export default Offer