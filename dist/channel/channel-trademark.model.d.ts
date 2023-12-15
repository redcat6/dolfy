import { Model } from 'sequelize-typescript';
export declare class ChannelTrademark extends Model<ChannelTrademark> {
    id: number;
    trademarkId: number;
    channelId: number;
}
