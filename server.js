import express from "express";
import "dotenv/config";
import sequelize from "./config/database.js";



const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3004

const main = async () => {
    try {
        await sequelize.authenticate();
        console.log("database is connect");

        app.listen(PORT, () => {
            console.log(`server is running on port ${PORT}`);
        });
        
    } catch (err) {
        console.error({error: err.message});
    }
};

main();