import express from "express";
import "dotenv/config";
import sequelize from "./config/database.js";
import "./models/index.js";

import authRouter from "./routes/auth.routes.js";
import farmerRouter from "./routes/farmer.routes.js";
import plotRouter from "./routes/plot.routes.js";
import harvestRouter from "./routes/harvest.routes.js";
import productRouter from "./routes/product.routes.js";
import marketRouter from "./routes/market.routes.js";
import marketPriceRouter from "./routes/marketPrice.routes.js";
import offerRouter from "./routes/offre.routes.js";


const app = express();
app.use(express.json());

app.use("/auth", authRouter);

app.use("/farmers", farmerRouter);

app.use("/plots", plotRouter);

app.use("/harvests", harvestRouter);

app.use("/products", productRouter);

app.use("/markets", marketRouter);

app.use("/prices", marketPriceRouter);

app.use("/offers", offerRouter);

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