import { Model } from 'sequelize-typescript';
interface MediaCostsCreationAttrs {
    gameId: number;
    round: number;
    smm: number;
    content_ads: number;
    bloggers_influencers: number;
    postal: number;
    outdoor_advertising: number;
    autoradio_podcasts: number;
    tv: number;
}
export declare class MediaCosts extends Model<MediaCosts, MediaCostsCreationAttrs> {
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
}
export {};
