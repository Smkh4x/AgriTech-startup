import sequelize from "./config/config.js";
import ps from "ps";
import express from "express";

dotenv.config();
const app = express()
app.use(express.json())

const main = async () => {
    app.listen(3000, () => {
        console.log("server is running")
    })

}