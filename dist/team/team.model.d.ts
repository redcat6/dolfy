import { Model } from 'sequelize-typescript';
import { Channel } from 'src/channel/channel.model';
import { Game } from 'src/game/game.model';
import { Product } from 'src/product/product.model';
import { Resource } from 'src/resource/resource.model';
import { Spot } from 'src/spot/spot.model';
interface TeamCreationAttrs {
    name: string;
    gameId: number;
}
export declare class Team extends Model<Team, TeamCreationAttrs> {
    id: number;
    name: string;
    gameId: number;
    game: Game;
    products: Product[];
    channels: Channel[];
    resources: Resource[];
    spots: Spot[];
}
export {};
