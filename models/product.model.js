import { DataTypes } from "sequelize";
import sequelize from "../config/config";

const Product = sequelize.define("product", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    category: {
        type: DataTypes.STRING,
        allowNull: true
    },
    unit: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: "product",
    timestamps: false


}

)
export default Product