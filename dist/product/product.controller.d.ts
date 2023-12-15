import { ProductService } from './product.service';
import { Product } from './product.model';
import { CreateProductDto } from './dto/create-product.dto';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    create(product: CreateProductDto): Promise<Product>;
    getByGameAndRound(game_id: number, round: number): Promise<Product[]>;
    productTransition(game_id: number, round: number): Promise<void>;
    getProductsByTeam(team_id: number, gameId: number, round: number): Promise<Product[]>;
    update(dto: any, id: number): Promise<[affectedCount: number]>;
    removeById(id: number): Promise<number>;
}
