import { Sequelize } from "sequelize";
import Dotenv from "dotenv";
Dotenv.config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.HOST,
        port: process.env.PORT,
        dialect: process.env.DIALECT
    }
);
export default sequelize;

