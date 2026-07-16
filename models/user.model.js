import { DataTypes } from "sequelize";
import sequelize from "../config/config";

const Offer = sequelize.define("offer", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true
    },
        password: {
        type: DataTypes.STRING,
        allowNull: true
    },
        role: {
        type: DataTypes.ENUM(
          "admin"
        ),
        defaultValue: "user",
        allowNull: true
    },

}, {
    tableName: "offer",
    timestamps: false


}

)
export default Offer

