import { Model } from 'sequelize-typescript';
import { AdvancedFeature } from 'src/advanced-features/advanced-features.model';
import { MarketSegment } from 'src/market-segment/market-segment.model';
interface SegmentCreationAttrs {
    name: string;
    category?: string;
    peak_size: number;
}
export declare class Segment extends Model<Segment, SegmentCreationAttrs> {
    id: number;
    category?: string;
    name: string;
    peak_size: number;
    segment_params: MarketSegment[];
    advanced_features: AdvancedFeature[];
    segment: any;
}
export {};
