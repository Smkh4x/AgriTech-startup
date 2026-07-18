import User from "./user.model";
import Farmer from "./farmer.model";
import Harvest from "./harvest.model";
import Market from "./market.model";
import MarketPrice from "./marketPrice.model";
import Product from "./product.model";
import Plot from "./plot.model";
import Offre from "./offre.model"




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