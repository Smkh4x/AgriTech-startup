import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Plot = sequelize.define("plots", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    area: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    commune: {
        type: DataTypes.STRING,
        allowNull: true
    },
    farmerId: {
        type: DataTypes.INTEGER,
        allowNull: true
    }

}, {
    tableName: "plots",
    timestamps: false


}

)
export default Plot