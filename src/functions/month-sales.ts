import { Channel } from 'src/channel/channel.model';
import { Product } from 'src/product/product.model';
import { roundNumber } from './common.functions';
import { MarketSegment } from 'src/market-segment/market-segment.model';
import { AdvancedFeature } from 'src/advanced-features/advanced-features.model';
import { Spot } from 'src/spot/spot.model';
import { Awareness } from 'src/awareness/awareness.model';
import { Loyalty } from 'src/loyalty/loyalty.model';
import { Promotion } from 'src/promotion/promotion.model';

export function countTrademarkModels(
  products: Product[],
): { trademarkId: number; models: number }[] {
  const trademarks = [];
  if (products?.length > 0) {
    trademarks.push({
      trademarkId: products[0].trademarkId,
      models: 1,
    });
    for (let i = 1; i < products.length; i++) {
      const inArr = trademarks.find(
        (tr) => tr.trademarkId === products[i].trademarkId,
      );
      if (inArr) {
        inArr.models += 1;
      } else {
        trademarks.push({
          trademarkId: products[i].trademarkId,
          models: 1,
        });
      }
    }
    return trademarks;
  }
}

export function matchedMonthModels(
  month: number,
  products: Product[],
): Product[] {
  const result = products.filter(
    (product) =>
      product.available_from <= month && product.available_till >= month,
  );
  return result;
}

export function monthModelCoverage(
  numOfAllModels: number,
  trademarkId: number,
  numOfModels: number,
  channels: Channel[],
): number {
  if (channels.length < 1) {
    console.log(`no channels of retail by trademark ${trademarkId}`);
    return 0;
  }

  const channels_tr = []; //channels with the trademark

  channels.map((channel) => {
    const matched = channel.trademarks.filter(
      (trad) => trad.id === trademarkId,
    );

    if (matched.length > 0) {
      channels_tr.push(channel);
    }
  });

  let coverage = 0;

  channels_tr.forEach((chan) => {
    if (chan.type === 7) {
      coverage +=
        (chan.peak_market_coverage * chan.stores) / (12 * numOfAllModels);
    } else if (chan.type === 8) {
      coverage +=
        (chan.peak_market_coverage * chan.stores) /
        (12 * chan.num_trademarks * numOfModels);
    } else {
      coverage +=
        (chan.peak_market_coverage * chan.stores) /
        (12 * chan.trademarks.length * numOfModels);
    }
  });

  return roundNumber(coverage);
}

export function segmentMaxDemand(
  product: Product,
  segment: MarketSegment,
): number {
  let max_demand = 0;
  if (
    product.retail_price <= segment.max_price &&
    product.retail_price >= segment.min_price
  ) {
    const material = segment[`material_${product.material}`];
    const manufacturing = segment[`manufacturing_${product.manufacturing}`];
    const design = segment[`design_${product.design}`];
    const design_type = segment[`design_${product.design_type}`];

    const min = Math.min(material, manufacturing, design, design_type);
    max_demand = (segment.actual_size * min) / 12;
  }
  return roundNumber(max_demand);
}

export function segmentRanks(
  product: Product,
  segment: MarketSegment,
  af: AdvancedFeature,
  awareness: Awareness,
  loyalty: Loyalty,
  promotion: Promotion = null,
  spot: Spot = null,
): { rank_bi: number; rank_bsi: number; rank_bni: number } {
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
    const prod_af = segment_af.find(
      (item) => item.af == product.advanced_feature,
    );
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

  const rank_bi =
    design_type +
    (design + manufacturing + material) / 3 +
    variations +
    acceptace * 2 +
    awareness.awareness +
    loyalty.loyalty * 3 +
    promo +
    cashback +
    gift;

  const rank_bsi =
    design_type +
    (design + manufacturing + material) / 3 +
    variations +
    acceptace * 2 +
    awareness.awareness +
    loyalty.loyalty +
    promo / 2 +
    cashback +
    gift;

  const rank_bni =
    design_type +
    (design + manufacturing + material) / 3 +
    variations +
    acceptace * 2 +
    awareness.awareness / 2 +
    promo / 3 +
    cashback +
    gift;

  const result = {
    rank_bi: roundNumber(rank_bi, 3),
    rank_bsi: roundNumber(rank_bsi, 3),
    rank_bni: roundNumber(rank_bni, 3),
  };

  return result;
}

/*max demand & model rank by 
   - month, 
   - segments & 
   - subsegments: brand imrortance (high, low or somehow)
   resArr = [
    <month>:[
      segment: segment,
      products: [
        { product, 
          max_demand,
          rank_bi, 
          rank_bsi, 
          rank_bni,
        },
        ...
      ],
      segment: [{}, {}, {}]
   ], [], ... []]
   */
export function modelsRank(
  segments: MarketSegment[],
  advanced_features: AdvancedFeature[],
  products: Product[],
  awareness: Awareness[],
  promotion: Promotion[],
  loyalty: Loyalty[],
  spots: Spot[],
) {
  const resArr = [];
  for (let month = 0; month < 12; month++) {
    const month_arr = [];
    const month_products = matchedMonthModels(month + 1, products); // products? available this month

    segments.forEach((segment) => {
      const models_arr = [];
      const segment_af = advanced_features.find(
        (af) => af.segmentId === segment.segmentId,
      );

      month_products.forEach((product) => {
        const prod_awareness = awareness.find(
          (item) => item.trademarkId === product.trademarkId,
        );
        const segment_loyalty = loyalty.find(
          (item) =>
            item.segmentId == segment.segmentId &&
            item.trademarkId == product.trademarkId,
        );
        const prod_promotion = promotion.find(
          (item) => item.trademarkId === product.trademarkId,
        );
        const prod_spot = spots.find(
          (item) => item.trademarkId === product.trademarkId,
        );
        const max_demand = segmentMaxDemand(product, segment);
        if (max_demand !== 0) {
          const ranks = segmentRanks(
            product,
            segment,
            segment_af,
            prod_awareness,
            segment_loyalty,
            prod_promotion,
            prod_spot,
          );
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
  } //end month
  return resArr;
}

export function qualityMaxSales(
  segment: MarketSegment,
  models: {
    product: Product;
    max_demand: number;
    rank_bi: number;
    rank_bsi: number;
    rank_bni: number;
    sales_max_bi?: number;
    sales_max_bsi?: number;
    sales_max_bni?: number;
  }[],
  subsegment: string,
): number {
  let rank_name = 'rank_bni';
  if (subsegment === 'brand_high') {
    rank_name = 'rank_bi';
  } else if (subsegment === 'brand_somehow') {
    rank_name = 'rank_bsi';
  }
  const max_rank_model = models.reduce((prev, curr) =>
    prev[rank_name] > curr[rank_name] ? prev : curr,
  );

  const sales = roundNumber(
    ((segment.actual_size * segment[subsegment]) / 12) * segment.best_quality,
    0,
  );

  /* const max_demand = roundNumber(
    max_rank_model.max_demand * segment[subsegment],
    0,
  );const sales = segment_best > max_demand ? max_demand : segment_best;*/

  const key = `sales_max_${rank_name.split('_')[1]}`;
  max_rank_model[key] = sales;
  return sales;
}

export function priceMaxSales(
  segment: MarketSegment,
  models: {
    product: Product;
    max_demand: number;
    rank_bi: number;
    rank_bsi: number;
    rank_bni: number;
    sales_max_bi?: number;
    sales_max_bsi?: number;
    sales_max_bni?: number;
  }[],
  subsegment: string,
): number {
  const min_price = models.reduce((prev, curr) =>
    prev.product.retail_price < curr.product.retail_price ? prev : curr,
  );

  const sales = roundNumber(
    ((segment.actual_size * segment[subsegment]) / 12) * segment.lowest_price,
    0,
  );

  //const max_demand = roundNumber(min_price.max_demand * segment[subsegment]);
  //console.log(`max demand of ${subsegment} = ${max_demand}`);
  //let sales = segment_lowest > max_demand ? max_demand : segment_lowest;
  let key = 'sales_max_bni';
  if (subsegment === 'brand_high') {
    key = 'sales_max_bi';
  } else if (subsegment === 'brand_somehow') {
    key = 'sales_max_bsi';
  }

  if (min_price[key]) {
    min_price[key] += sales;
  } else {
    min_price[key] = sales;
  }
  return sales;
}

export function reasonableMaxSales(
  segment: MarketSegment,
  models: {
    product: Product;
    max_demand: number;
    rank_bi: number;
    rank_bsi: number;
    rank_bni: number;
    sales_max_bi?: number;
    sales_max_bsi?: number;
    sales_max_bni?: number;
  }[],
  subsegment: string,
  sales: number,
): void {
  const segment_reasonable = roundNumber(
    (segment.actual_size * segment[subsegment]) / 12 - sales,
    0,
  );

  let rank_name = 'rank_bni';
  if (subsegment === 'brand_high') {
    rank_name = 'rank_bi';
  } else if (subsegment === 'brand_somehow') {
    rank_name = 'rank_bsi';
  }

  const sum_ranks_weieghted = models.reduce((sum, item) => {
    return (sum += item[rank_name] / item.product.retail_price);
  }, 0);

  const key = `sales_max_${rank_name.split('_')[1]}`;

  models.forEach((model) => {
    const sales = roundNumber(
      segment_reasonable *
        (model[rank_name] / model.product.retail_price / sum_ranks_weieghted),
    );

    //console.log(`model ${model.product.productId} sales = ${sales}`)

    if (model[key]) {
      model[key] += sales;
    } else {
      model[key] = sales;
    }

    if (model[key] > roundNumber(model.max_demand * segment[subsegment])) {
      model[key] = roundNumber(model.max_demand * segment[subsegment]);
    }
  });
}

export function salesNormalize(
  arr: {
    segment: MarketSegment;
    models: {
      product: Product;
      max_demand: number;
      rank_bi: number;
      rank_bsi: number;
      rank_bni: number;
      sales_max_bi: number;
      sales_max_bsi: number;
      sales_max_bni: number;
      sales?: number;
      sales_total?: number;
      inventories?: number;
    }[];
  }[],
  model: Product,
  offered_sale: number,
) {
  let max_sales = 0;

  arr.forEach((item) => {
    const matched = item.models.find(
      (mod) => mod.product.productId === model.productId,
    );
    if (matched) {
      max_sales +=
        matched.sales_max_bi + matched.sales_max_bsi + matched.sales_max_bni;
    }
  });

  arr.forEach((item) => {
    const matched = item.models.find(
      (mod) => mod.product.productId == model.productId,
    );
    if (matched) {
      if (max_sales > offered_sale) {
        const delta = max_sales - offered_sale;
        const mod_delta =
          (matched.sales_max_bi +
            matched.sales_max_bsi +
            matched.sales_max_bni) /
          max_sales;
        matched.sales =
          matched.sales_max_bi +
          matched.sales_max_bsi +
          matched.sales_max_bni -
          roundNumber(mod_delta * delta);
        matched.inventories = 0;
        matched.sales_total = offered_sale;
      } else {
        matched.sales =
          matched.sales_max_bi + matched.sales_max_bsi + matched.sales_max_bni;
        const inventories = offered_sale - max_sales;
        matched.inventories = inventories;
        matched.sales_total = max_sales;
      }

      /* console.log(
        `model ${matched.product.productId} inventories = ${matched.inventories} `,
      ); */
    }
  });
}

export function salesNormalizeSegment(
  arr: {
    segment: MarketSegment;
    models: {
      product: Product;
      max_demand: number;
      rank_bi: number;
      rank_bsi: number;
      rank_bni: number;
      sales_max_bi: number;
      sales_max_bsi: number;
      sales_max_bni: number;
      sales: number;
      sales_total: number;
      sales_normalized?: number;
      inventories?: number;
    }[];
  }[],
  segment: MarketSegment,
): void {
  let max_sales = 0;

  const matched = arr.find(
    (item) => item.segment.segmentId == segment.segmentId,
  );

  if (matched) {
    max_sales = matched.models.reduce((sum, model) => {
      return (sum += model.sales);
    }, 0);

    const delta = matched.segment.actual_size / 12 - max_sales;
    /*console.log(
      `segment ${segment.segmentId} delta = ${delta}`,
    );*/

    if (delta > 0) {
      const available_models = matched.models.filter(
        (model) => model.inventories > 0,
      );

      const sum_inv = available_models.reduce((sum, model) => {
        return (sum += roundNumber(
          model.inventories * (model.sales / model.sales_total),
        ));
      }, 0);

      available_models.forEach((model) => {
        const stock = roundNumber(
          model.inventories * (model.sales / model.sales_total),
        );
        let sales_new = roundNumber(model.sales + stock);
        let sales_normalized =
          sales_new > model.max_demand ? model.max_demand : sales_new;

        if (delta < sum_inv) {
          sales_new = roundNumber(model.sales + stock * (delta / sum_inv));
          sales_normalized =
            sales_new > model.max_demand ? model.max_demand : sales_new;
        }
        model.sales_normalized = sales_normalized;
        //console.log(`segment ${segment.segmentId} sales_new ${sales_normalized}`);
      });
    }
  }
}

export function getLastMonthInventories(
  arr: {
    segment: MarketSegment;
    models: {
      product: Product;
      max_demand: number;
      rank_bi: number;
      rank_bsi: number;
      rank_bni: number;
      sales_max_bi: number;
      sales_max_bsi: number;
      sales_max_bni: number;
      sales: number;
      sales_normalized?: number;
      inventories?: number;
    }[];
  }[],
  product: Product,
): number {
  let inventories = 0;
  arr.forEach((item) => {
    const matched_model = item.models.find(
      (model) => model.product.productId === product.productId,
    );
    if (matched_model && matched_model.inventories) {
      inventories = matched_model.inventories;
    }
  });
  //console.log(inventories);
  return inventories;
}

export function recalculateInventories(
  arr: {
    segment: MarketSegment;
    models: {
      product: Product;
      max_demand: number;
      rank_bi: number;
      rank_bsi: number;
      rank_bni: number;
      sales_max_bi: number;
      sales_max_bsi: number;
      sales_max_bni: number;
      sales: number;
      sales_normalized: number;
      sales_total: number;
      inventories?: number;
    }[];
  }[],
  model: Product,
  available_sale: number,
) {
  let sum_sales = 0;

  arr.forEach((item) => {
    const matched = item.models.find(
      (mod) => mod.product.productId === model.productId,
    );
    if (matched) {
      const sales = matched.sales_normalized
        ? matched.sales_normalized
        : matched.sales;
      sum_sales += sales;
    }
  });

  arr.forEach((item) => {
    const matched = item.models.find(
      (mod) => mod.product.productId == model.productId,
    );
    if (matched) {
      matched.inventories = available_sale - sum_sales;
      matched.sales_total = sum_sales;
    }
  });
}
