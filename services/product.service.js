import Market from "../models/market.model.js";
import MarketPrice from "../models/marketPrice.model.js";
import Product from "../models/product.model.js";

const getBestPrice = async (id) => {

    const product = await Product.findByPk(id, {
        include: [
            {
                model: MarketPrice,
                include: [
                    Market
                ]
            }
        ]
    });

    if (!product) {
        return null;
    }

    console.log(product.toJSON())
    let bestPrix = 0;
    for (let i = 0; i < product.marketPrices.length; i++) {
        const nowPrice = product.marketPrices[i].pricePerKg;
        if (nowPrice > bestPrix)
            bestPrix = nowPrice;
    }

    return bestPrix;

};

export default getBestPrice;