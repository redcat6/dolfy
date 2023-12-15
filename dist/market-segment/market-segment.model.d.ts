import { Model } from 'sequelize-typescript';
import { Segment } from 'src/segment/segment.model';
interface MarketSegmentCreationAttrs {
    gameId: number;
    round: number;
    segmentId: number;
    max_price: number;
    min_price: number;
    lowest_price: number;
    best_quality: number;
    on_line: number;
    off_line: number;
    family: number;
    attractiveness: number;
    personality: number;
    social_status: number;
    fun: number;
    friendship: number;
    pets: number;
    independent: number;
    brand_high: number;
    brand_not: number;
    brand_somehow: number;
    design_classic: number;
    design_art: number;
    design_business: number;
    design_casual: number;
    design_innovative: number;
    design_1: number;
    design_2: number;
    design_3: number;
    design_4: number;
    design_5: number;
    material_1: number;
    material_2: number;
    material_3: number;
    material_4: number;
    material_5: number;
    manufacturing_1: number;
    manufacturing_2: number;
    manufacturing_3: number;
    manufacturing_4: number;
    manufacturing_5: number;
}
export declare class MarketSegment extends Model<MarketSegment, MarketSegmentCreationAttrs> {
    id: number;
    gameId: number;
    round: number;
    actual_size: number;
    max_price: number;
    min_price: number;
    lowest_price: number;
    best_quality: number;
    on_line: number;
    off_line: number;
    family: number;
    attractiveness: number;
    personality: number;
    social_status: number;
    fun: number;
    friendship: number;
    pets: number;
    independent: number;
    brand_high: number;
    brand_not: number;
    brand_somehow: number;
    design_classic: number;
    design_art: number;
    design_business: number;
    design_casual: number;
    design_innovative: number;
    design_1: number;
    design_2: number;
    design_3: number;
    design_4: number;
    design_5: number;
    material_1: number;
    material_2: number;
    material_3: number;
    material_4: number;
    material_5: number;
    manufacturing_1: number;
    manufacturing_2: number;
    manufacturing_3: number;
    manufacturing_4: number;
    manufacturing_5: number;
    segmentId: number;
    segment: Segment;
}
export {};
