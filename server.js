import sequelize from "./config/database.js";
import ps from "ps";
import express from "express";
import dotenv from "dotenv"

dotenv.config();
const app = express()
app.use(express.json())

const main = async () => {
    try {
           await sequelize.authenticate();
    console.log("database is connect");
    app.listen(3000, () =>  {
        console.log("server is running on port 3000")

    })
 
    } catch (err) {
        console.log({error: err.message})
        
    }

}
main()