import { Channel } from 'src/channel/channel.model';
import { Product } from 'src/product/product.model';
import { MarketSegment } from 'src/market-segment/market-segment.model';
import { AdvancedFeature } from 'src/advanced-features/advanced-features.model';
import { Spot } from 'src/spot/spot.model';
import { Awareness } from 'src/awareness/awareness.model';
import { Loyalty } from 'src/loyalty/loyalty.model';
import { Promotion } from 'src/promotion/promotion.model';
export declare function countTrademarkModels(products: Product[]): {
    trademarkId: number;
    models: number;
}[];
export declare function matchedMonthModels(month: number, products: Product[]): Product[];
export declare function monthModelCoverage(numOfAllModels: number, trademarkId: number, numOfModels: number, channels: Channel[]): number;
export declare function segmentMaxDemand(product: Product, segment: MarketSegment): number;
export declare function segmentRanks(product: Product, segment: MarketSegment, af: AdvancedFeature, awareness: Awareness, loyalty: Loyalty, promotion?: Promotion, spot?: Spot): {
    rank_bi: number;
    rank_bsi: number;
    rank_bni: number;
};
export declare function modelsRank(segments: MarketSegment[], advanced_features: AdvancedFeature[], products: Product[], awareness: Awareness[], promotion: Promotion[], loyalty: Loyalty[], spots: Spot[]): any[];
export declare function qualityMaxSales(segment: MarketSegment, models: {
    product: Product;
    max_demand: number;
    rank_bi: number;
    rank_bsi: number;
    rank_bni: number;
    sales_max_bi?: number;
    sales_max_bsi?: number;
    sales_max_bni?: number;
}[], subsegment: string): number;
export declare function priceMaxSales(segment: MarketSegment, models: {
    product: Product;
    max_demand: number;
    rank_bi: number;
    rank_bsi: number;
    rank_bni: number;
    sales_max_bi?: number;
    sales_max_bsi?: number;
    sales_max_bni?: number;
}[], subsegment: string): number;
export declare function reasonableMaxSales(segment: MarketSegment, models: {
    product: Product;
    max_demand: number;
    rank_bi: number;
    rank_bsi: number;
    rank_bni: number;
    sales_max_bi?: number;
    sales_max_bsi?: number;
    sales_max_bni?: number;
}[], subsegment: string, sales: number): void;
export declare function salesNormalize(arr: {
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
}[], model: Product, offered_sale: number): void;
export declare function salesNormalizeSegment(arr: {
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
}[], segment: MarketSegment): void;
export declare function getLastMonthInventories(arr: {
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
}[], product: Product): number;
export declare function recalculateInventories(arr: {
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
}[], model: Product, available_sale: number): void;
