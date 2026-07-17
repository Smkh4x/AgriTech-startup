import { DataTypes } from "sequelize";
import sequelize from "../config/config";

const Plot = sequelize.define("plot", {
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
    municiality: {
        type: DataTypes.STRING,
        allowNull: true
    },
    farmerId: {
        type: DataTypes.INTEGER,
        allowNull: true
    }

}, {
    tableName: "plot",
    timestamps: false


}

)
export default plot