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

Farmer.hasMany(plot, {
    foreignKey: "farmerId"
})