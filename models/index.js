import User from "./user.model.js";
import Farmer from "./farmer.model.js";
import Harvest from "./harvest.model.js";
import Market from "./market.model.js";
import MarketPrice from "./marketPrice.model.js";
import Product from "./product.model.js";
import Plot from "./plot.model.js";
import Offre from "./offre.model.js"


User.hasOne(Farmer, {
    foreignKey: "userId"
})
Farmer.belongsTo(User, {
    foreignKey: "userId"
})

Farmer.hasMany(Plot, {
    foreignKey: "farmerId"
})
Plot.belongsTo(Farmer, {
    foreignKey: "farmerId"
})

Plot.hasMany(Harvest, {
    foreignKey: "plotId"
})
Harvest.belongsTo(Plot, {
    foreignKey: "plotId"
})

Product.hasMany(Harvest, {
    foreignKey: "productId"
})
Harvest.belongsTo(Product, {
    foreignKey: "productId"
})

Market.hasMany(MarketPrice, {
    foreignKey: "marketId"
})
MarketPrice.belongsTo(Market, {
    foreignKey: "marketId"
})

Product.hasMany(MarketPrice, {
    foreignKey: "productId"
})
MarketPrice.belongsTo(Product, {
    foreignKey: "productId"
})

Harvest.hasMany(Offre, {
    foreignKey: "harvestId"
})
Offre.belongsTo(Harvest, {
    foreignKey: "harvestId"
})

Market.hasMany(Offre, {
    foreignKey: "marketId"
})
Offre.belongsTo(Market, {
    foreignKey: "marketId"
})

