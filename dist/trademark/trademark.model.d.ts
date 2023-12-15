import { Model } from 'sequelize-typescript';
import { Channel } from 'src/channel/channel.model';
import { Product } from 'src/product/product.model';
interface TrademarkCreationAttrs {
    name: string;
}
export declare class Trademark extends Model<Trademark, TrademarkCreationAttrs> {
    id: number;
    name: string;
    products: Product[];
    channels: Channel[];
}
export {};
