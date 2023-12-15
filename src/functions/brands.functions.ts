import { Channel } from 'src/channel/channel.model';
import { Spot } from 'src/spot/spot.model';
import { enumToArrayNames } from './common.functions';
import { spot_channels } from 'src/enums';
import { Product } from 'src/product/product.model';
import { MarketSegment } from 'src/market-segment/market-segment.model';
import { AdvancedFeature } from 'src/advanced-features/advanced-features.model';
import { Chain } from 'src/chain/chain.model';

export function BrandCoverage(
  trademarkId: number,
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

  const coverage = channels_tr.reduce((sum, chan) => {
    return (sum += chan.peak_market_coverage * chan.stores);
  }, 0);
  console.log(`coverage: `, coverage);
  return coverage;
}

export function PromoRate(spot: Spot): number {
  const channels = enumToArrayNames(spot_channels);
  const weights = [0.2, 0.2, 0.2, 0.2, 0.1, 0.1, 0.1];
  let rate = 0;

  spot.channels.forEach((chan) => {
    const index = channels.indexOf(chan);
    rate += weights[index];
  });

  if (rate > 1) {
    rate = 1;
  }

  return rate;
}

export function PriceRate(segment: MarketSegment, models: Product[]): number {
  let rate = 0;

  const matchPriceModels = models.filter(
    (model) =>
      model.retail_price <= segment.max_price &&
      model.retail_price >= segment.min_price,
  );
  //console.log('matchPriceModels', matchPriceModels);

  const numOfModels = models.length;
  const numOfmatchedModels = matchPriceModels ? matchPriceModels.length : 0;
  const koeff = numOfmatchedModels / numOfModels;

  if (koeff >= 0.8) {
    rate = 1;
  } else if (koeff < 0.8 && koeff >= 0.6) {
    rate = 0.6;
  } else if (koeff < 0.6 && koeff >= 0.3) {
    rate = 0.3;
  }
  return rate;
}

export function TypeRate(segment: MarketSegment, models: Product[]): number {
  let rate = 0;

  const segment_design_types = [
    { type: 'art', value: segment.design_art },
    { type: 'business', value: segment.design_business },
    { type: 'casual', value: segment.design_casual },
    { type: 'classic', value: segment.design_classic },
    { type: 'innovative', value: segment.design_innovative },
  ];

  const sorted = segment_design_types.sort((a, b) => b.value - a.value);

  const matchTypeModels = models.filter((model) => {
    return (
      sorted[0].type === model.design_type ||
      sorted[1].type === model.design_type
    );
  });
  //console.log('matchTypeModels', matchTypeModels);

  const numOfModels = models.length;
  const numOfmatchedModels = matchTypeModels ? matchTypeModels.length : 0;
  const koeff = numOfmatchedModels / numOfModels;

  if (koeff >= 0.8) {
    rate = 1;
  } else if (koeff < 0.8 && koeff >= 0.6) {
    rate = 0.6;
  } else if (koeff < 0.6 && koeff >= 0.3) {
    rate = 0.3;
  }
  return rate;
}

export function AFRate(af_seg: AdvancedFeature, models: Product[]): number {
  let rate = 0;
  console.log(af_seg);
  const segment_af = [
    { af: 'positioning tracker', value: af_seg.positioning_acceptance },
    { af: 'power bank', value: af_seg.power_bank_acceptance },
    {
      af: 'missed items warning',
      value: af_seg.missed_items_warning_acceptance,
    },
    { af: 'danger alarm', value: af_seg.danger_alarm_acceptance },
    { af: 'fridge camera', value: af_seg.fridge_camera_acceptance },
    { af: 'individual pictures', value: af_seg.individual_pictures_acceptance },
    { af: 'against loss insurance', value: af_seg.loss_insurance_acceptance },
    {
      af: 'environment friendly utilization',
      value: af_seg.friendly_utilization_acceptance,
    },
    { af: 'charity profit sharing', value: af_seg.profit_sharing_acceptance },
  ];

  const sorted = segment_af.sort((a, b) => b.value - a.value);

  const matchAFModels = models.filter((model) => {
    return (
      sorted[0].af === model.advanced_feature ||
      sorted[1].af === model.advanced_feature
    );
  });
  //console.log('matchAFModels', matchAFModels);

  const numOfModels = models.length;
  const numOfmatchedModels = matchAFModels ? matchAFModels.length : 0;
  const koeff = numOfmatchedModels / numOfModels;

  if (koeff >= 0.8) {
    rate = 1;
  } else if (koeff < 0.8 && koeff >= 0.6) {
    rate = 0.6;
  } else if (koeff < 0.6 && koeff >= 0.3) {
    rate = 0.3;
  }
  return rate;
}

export function SpotRate(spot: Spot, segment: MarketSegment): number {
  let rate = 0;

  const spot_value = segment[spot.value];
  let spot_objective = 0.8;

  if (spot.objective == 'maintain loyalty') {
    spot_objective = 1;
  } else if (spot.objective == 'stimulate purchase') {
    spot_objective = 0.9;
  }

  rate =
    spot_value * spot_objective * (spot.quality / 5 + (5 - spot.quality) / 10);

  return rate;
}

export function MatchByPrice(chain: Chain, products: Product[]): number {
  const matchPriceModels = products.filter(
    (model) =>
      model.retail_price <= chain.max_price &&
      model.retail_price >= chain.min_price,
  );
  return matchPriceModels.length;
}

export function MatchByDesign(chain: Chain, products: Product[]): number {
  const matchModels = products.filter(
    (model) =>
      model.design_type == chain.design_main ||
      model.design_type == chain.design_second,
  );
  return matchModels.length;
}

export function MatchByMargin(chain: Chain, products: Product[]): number {
  const matchModels = products.filter(
    (model) =>
      (model.retail_price - model.price) / model.retail_price >=
      chain.retail_margin,
  );
  return matchModels.length;
}
