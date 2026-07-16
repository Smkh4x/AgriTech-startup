import { DataTypes } from "sequelize";
import sequelize from "../config/config";

const Harvest = sequelize.define("harvest", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    quantity: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    harvestDate: {
        type: DataTypes.DATE,
        allowNull: true
    },
    status: {
        type: DataTypes.STRING,
        allowNull: true
    },
    plotId: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: true
    }

}, {
    tableName: "harvest",
    timestamps: false


}

)
export default Harvest