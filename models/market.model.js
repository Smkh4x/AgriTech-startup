import { DataTypes } from "sequelize";
import sequelize from "../config/config";

const Market = sequelize.define("market", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    city: {
        type: DataTypes.STRING,
        allowNull: true
    },
    region: {
        type: DataTypes.STRING,
        allowNull: true
    }

}, {
    tableName: "market",
    timestamps: false


}

)
export default Market