import { Model } from 'sequelize-typescript';
import { Segment } from 'src/segment/segment.model';
interface MediaCoverageCreationAttrs {
    gameId: number;
    round: number;
    smm: number;
    content_ads: number;
    bloggers_influencers: number;
    postal: number;
    outdoor_advertising: number;
    autoradio_podcasts: number;
    tv: number;
    segmentId: number;
}
export declare class MediaCoverage extends Model<MediaCoverage, MediaCoverageCreationAttrs> {
    id: number;
    gameId: number;
    round: number;
    smm: number;
    content_ads: number;
    bloggers_influencers: number;
    postal: number;
    outdoor_advertising: number;
    autoradio_podcasts: number;
    tv: number;
    segmentId: number;
    segment: Segment;
}
export {};
