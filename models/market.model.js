import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Market = sequelize.define("markes", {
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
    tableName: "markets",
    timestamps: false


}

)
export default Market