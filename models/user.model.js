import { DataTypes } from "sequelize";
import sequelize from "../config/config.js";

const User = sequelize.define("user", {
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
          "admin",
          "farmer",
          "user"
        ),
        defaultValue: "user",
        allowNull: true
    },

}, {
    tableName: "offer",
    timestamps: false


}

)
export default User

