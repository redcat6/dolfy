"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recalculateInventories = exports.getLastMonthInventories = exports.salesNormalizeSegment = exports.salesNormalize = exports.reasonableMaxSales = exports.priceMaxSales = exports.qualityMaxSales = exports.modelsRank = exports.segmentRanks = exports.segmentMaxDemand = exports.monthModelCoverage = exports.matchedMonthModels = exports.countTrademarkModels = void 0;
const common_functions_1 = require("./common.functions");
function countTrademarkModels(products) {
    const trademarks = [];
    if ((products === null || products === void 0 ? void 0 : products.length) > 0) {
        trademarks.push({
            trademarkId: products[0].trademarkId,
            models: 1,
        });
        for (let i = 1; i < products.length; i++) {
            const inArr = trademarks.find((tr) => tr.trademarkId === products[i].trademarkId);
            if (inArr) {
                inArr.models += 1;
            }
            else {
                trademarks.push({
                    trademarkId: products[i].trademarkId,
                    models: 1,
                });
            }
        }
        return trademarks;
    }
}
exports.countTrademarkModels = countTrademarkModels;
function matchedMonthModels(month, products) {
    const result = products.filter((product) => product.available_from <= month && product.available_till >= month);
    return result;
}
exports.matchedMonthModels = matchedMonthModels;
function monthModelCoverage(numOfAllModels, trademarkId, numOfModels, channels) {
    if (channels.length < 1) {
        console.log(`no channels of retail by trademark ${trademarkId}`);
        return 0;
    }
    const channels_tr = [];
    channels.map((channel) => {
        const matched = channel.trademarks.filter((trad) => trad.id === trademarkId);
        if (matched.length > 0) {
            channels_tr.push(channel);
        }
    });
    let coverage = 0;
    channels_tr.forEach((chan) => {
        if (chan.type === 7) {
            coverage +=
                (chan.peak_market_coverage * chan.stores) / (12 * numOfAllModels);
        }
        else if (chan.type === 8) {
            coverage +=
                (chan.peak_market_coverage * chan.stores) /
                    (12 * chan.num_trademarks * numOfModels);
        }
        else {
            coverage +=
                (chan.peak_market_coverage * chan.stores) /
                    (12 * chan.trademarks.length * numOfModels);
        }
    });
    return (0, common_functions_1.roundNumber)(coverage);
}
exports.monthModelCoverage = monthModelCoverage;
function segmentMaxDemand(product, segment) {
    let max_demand = 0;
    if (product.retail_price <= segment.max_price &&
        product.retail_price >= segment.min_price) {
        const material = segment[`material_${product.material}`];
        const manufacturing = segment[`manufacturing_${product.manufacturing}`];
        const design = segment[`design_${product.design}`];
        const design_type = segment[`design_${product.design_type}`];
        const min = Math.min(material, manufacturing, design, design_type);
        max_demand = (segment.actual_size * min) / 12;
    }
    return (0, common_functions_1.roundNumber)(max_demand);
}
exports.segmentMaxDemand = segmentMaxDemand;
function segmentRanks(product, segment, af, awareness, loyalty, promotion = null, spot = null) {
    const material = segment[`material_${product.material}`];
    const manufacturing = segment[`manufacturing_${product.manufacturing}`];
    const design = segment[`design_${product.design}`];
    const design_type = segment[`design_${product.design_type}`];
    const segment_af = [
        { af: 'positioning tracker', value: af.positioning_acceptance },
        { af: 'power bank', value: af.power_bank_acceptance },
        {
            af: 'missed items warning',
            value: af.missed_items_warning_acceptance,
        },
        { af: 'danger alarm', value: af.danger_alarm_acceptance },
        { af: 'fridge camera', value: af.fridge_camera_acceptance },
        { af: 'individual pictures', value: af.individual_pictures_acceptance },
        { af: 'against loss insurance', value: af.loss_insurance_acceptance },
        {
            af: 'environment friendly utilization',
            value: af.friendly_utilization_acceptance,
        },
        { af: 'charity profit sharing', value: af.profit_sharing_acceptance },
    ];
    let acceptace = 0;
    if (product.advanced_feature !== '') {
        const prod_af = segment_af.find((item) => item.af == product.advanced_feature);
        acceptace = prod_af ? prod_af.value : 0;
    }
    const variations = product.variations / 5;
    let promo = 0;
    if (spot) {
        const objective = spot.objective === 'stimulate purchase' ? 1 : 0.5;
        const value = segment[spot.value];
        const quality = spot.quality / 10;
        const chanNum = spot.channels.length / 20;
        promo = (objective + value + quality + chanNum) / 4;
    }
    let cashback = 0;
    let gift = 0;
    if (promotion) {
        cashback = promotion.cashback * 3;
        gift = (promotion.gift_cost / product.retail_price) * 3;
    }
    const rank_bi = design_type +
        (design + manufacturing + material) / 3 +
        variations +
        acceptace * 2 +
        awareness.awareness +
        loyalty.loyalty * 3 +
        promo +
        cashback +
        gift;
    const rank_bsi = design_type +
        (design + manufacturing + material) / 3 +
        variations +
        acceptace * 2 +
        awareness.awareness +
        loyalty.loyalty +
        promo / 2 +
        cashback +
        gift;
    const rank_bni = design_type +
        (design + manufacturing + material) / 3 +
        variations +
        acceptace * 2 +
        awareness.awareness / 2 +
        promo / 3 +
        cashback +
        gift;
    const result = {
        rank_bi: (0, common_functions_1.roundNumber)(rank_bi, 3),
        rank_bsi: (0, common_functions_1.roundNumber)(rank_bsi, 3),
        rank_bni: (0, common_functions_1.roundNumber)(rank_bni, 3),
    };
    return result;
}
exports.segmentRanks = segmentRanks;
function modelsRank(segments, advanced_features, products, awareness, promotion, loyalty, spots) {
    const resArr = [];
    for (let month = 0; month < 12; month++) {
        const month_arr = [];
        const month_products = matchedMonthModels(month + 1, products);
        segments.forEach((segment) => {
            const models_arr = [];
            const segment_af = advanced_features.find((af) => af.segmentId === segment.segmentId);
            month_products.forEach((product) => {
                const prod_awareness = awareness.find((item) => item.trademarkId === product.trademarkId);
                const segment_loyalty = loyalty.find((item) => item.segmentId == segment.segmentId &&
                    item.trademarkId == product.trademarkId);
                const prod_promotion = promotion.find((item) => item.trademarkId === product.trademarkId);
                const prod_spot = spots.find((item) => item.trademarkId === product.trademarkId);
                const max_demand = segmentMaxDemand(product, segment);
                if (max_demand !== 0) {
                    const ranks = segmentRanks(product, segment, segment_af, prod_awareness, segment_loyalty, prod_promotion, prod_spot);
                    models_arr.push({
                        product,
                        max_demand,
                        rank_bi: ranks.rank_bi,
                        rank_bsi: ranks.rank_bsi,
                        rank_bni: ranks.rank_bni,
                    });
                }
            });
            const segment_obj = {
                segment: segment,
                models: models_arr,
            };
            month_arr.push(segment_obj);
        });
        resArr.push(month_arr);
    }
    return resArr;
}
exports.modelsRank = modelsRank;
function qualityMaxSales(segment, models, subsegment) {
    let rank_name = 'rank_bni';
    if (subsegment === 'brand_high') {
        rank_name = 'rank_bi';
    }
    else if (subsegment === 'brand_somehow') {
        rank_name = 'rank_bsi';
    }
    const max_rank_model = models.reduce((prev, curr) => prev[rank_name] > curr[rank_name] ? prev : curr);
    const sales = (0, common_functions_1.roundNumber)(((segment.actual_size * segment[subsegment]) / 12) * segment.best_quality, 0);
    const key = `sales_max_${rank_name.split('_')[1]}`;
    max_rank_model[key] = sales;
    return sales;
}
exports.qualityMaxSales = qualityMaxSales;
function priceMaxSales(segment, models, subsegment) {
    const min_price = models.reduce((prev, curr) => prev.product.retail_price < curr.product.retail_price ? prev : curr);
    const sales = (0, common_functions_1.roundNumber)(((segment.actual_size * segment[subsegment]) / 12) * segment.lowest_price, 0);
    let key = 'sales_max_bni';
    if (subsegment === 'brand_high') {
        key = 'sales_max_bi';
    }
    else if (subsegment === 'brand_somehow') {
        key = 'sales_max_bsi';
    }
    if (min_price[key]) {
        min_price[key] += sales;
    }
    else {
        min_price[key] = sales;
    }
    return sales;
}
exports.priceMaxSales = priceMaxSales;
function reasonableMaxSales(segment, models, subsegment, sales) {
    const segment_reasonable = (0, common_functions_1.roundNumber)((segment.actual_size * segment[subsegment]) / 12 - sales, 0);
    let rank_name = 'rank_bni';
    if (subsegment === 'brand_high') {
        rank_name = 'rank_bi';
    }
    else if (subsegment === 'brand_somehow') {
        rank_name = 'rank_bsi';
    }
    const sum_ranks_weieghted = models.reduce((sum, item) => {
        return (sum += item[rank_name] / item.product.retail_price);
    }, 0);
    const key = `sales_max_${rank_name.split('_')[1]}`;
    models.forEach((model) => {
        const sales = (0, common_functions_1.roundNumber)(segment_reasonable *
            (model[rank_name] / model.product.retail_price / sum_ranks_weieghted));
        if (model[key]) {
            model[key] += sales;
        }
        else {
            model[key] = sales;
        }
        if (model[key] > (0, common_functions_1.roundNumber)(model.max_demand * segment[subsegment])) {
            model[key] = (0, common_functions_1.roundNumber)(model.max_demand * segment[subsegment]);
        }
    });
}
exports.reasonableMaxSales = reasonableMaxSales;
function salesNormalize(arr, model, offered_sale) {
    let max_sales = 0;
    arr.forEach((item) => {
        const matched = item.models.find((mod) => mod.product.productId === model.productId);
        if (matched) {
            max_sales +=
                matched.sales_max_bi + matched.sales_max_bsi + matched.sales_max_bni;
        }
    });
    arr.forEach((item) => {
        const matched = item.models.find((mod) => mod.product.productId == model.productId);
        if (matched) {
            if (max_sales > offered_sale) {
                const delta = max_sales - offered_sale;
                const mod_delta = (matched.sales_max_bi +
                    matched.sales_max_bsi +
                    matched.sales_max_bni) /
                    max_sales;
                matched.sales =
                    matched.sales_max_bi +
                        matched.sales_max_bsi +
                        matched.sales_max_bni -
                        (0, common_functions_1.roundNumber)(mod_delta * delta);
                matched.inventories = 0;
                matched.sales_total = offered_sale;
            }
            else {
                matched.sales =
                    matched.sales_max_bi + matched.sales_max_bsi + matched.sales_max_bni;
                const inventories = offered_sale - max_sales;
                matched.inventories = inventories;
                matched.sales_total = max_sales;
            }
        }
    });
}
exports.salesNormalize = salesNormalize;
function salesNormalizeSegment(arr, segment) {
    let max_sales = 0;
    const matched = arr.find((item) => item.segment.segmentId == segment.segmentId);
    if (matched) {
        max_sales = matched.models.reduce((sum, model) => {
            return (sum += model.sales);
        }, 0);
        const delta = matched.segment.actual_size / 12 - max_sales;
        if (delta > 0) {
            const available_models = matched.models.filter((model) => model.inventories > 0);
            const sum_inv = available_models.reduce((sum, model) => {
                return (sum += (0, common_functions_1.roundNumber)(model.inventories * (model.sales / model.sales_total)));
            }, 0);
            available_models.forEach((model) => {
                const stock = (0, common_functions_1.roundNumber)(model.inventories * (model.sales / model.sales_total));
                let sales_new = (0, common_functions_1.roundNumber)(model.sales + stock);
                let sales_normalized = sales_new > model.max_demand ? model.max_demand : sales_new;
                if (delta < sum_inv) {
                    sales_new = (0, common_functions_1.roundNumber)(model.sales + stock * (delta / sum_inv));
                    sales_normalized =
                        sales_new > model.max_demand ? model.max_demand : sales_new;
                }
                model.sales_normalized = sales_normalized;
            });
        }
    }
}
exports.salesNormalizeSegment = salesNormalizeSegment;
function getLastMonthInventories(arr, product) {
    let inventories = 0;
    arr.forEach((item) => {
        const matched_model = item.models.find((model) => model.product.productId === product.productId);
        if (matched_model && matched_model.inventories) {
            inventories = matched_model.inventories;
        }
    });
    return inventories;
}
exports.getLastMonthInventories = getLastMonthInventories;
function recalculateInventories(arr, model, available_sale) {
    let sum_sales = 0;
    arr.forEach((item) => {
        const matched = item.models.find((mod) => mod.product.productId === model.productId);
        if (matched) {
            const sales = matched.sales_normalized
                ? matched.sales_normalized
                : matched.sales;
            sum_sales += sales;
        }
    });
    arr.forEach((item) => {
        const matched = item.models.find((mod) => mod.product.productId == model.productId);
        if (matched) {
            matched.inventories = available_sale - sum_sales;
            matched.sales_total = sum_sales;
        }
    });
}
exports.recalculateInventories = recalculateInventories;
//# sourceMappingURL=month-sales.js.map