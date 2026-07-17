import { DataTypes } from "sequelize";
import sequelize from "../config/config";

const Offer = sequelize.define("offer", {
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
    tableName: "offer",
    timestamps: false


}

)
export default Offer