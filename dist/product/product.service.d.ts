import { Product } from './product.model';
import { CreateProductDto } from './dto/create-product.dto';
import { TrademarkService } from 'src/trademark/trademark.service';
export declare class ProductService {
    private productRepository;
    private trademarkService;
    constructor(productRepository: typeof Product, trademarkService: TrademarkService);
    createProduct(dto: CreateProductDto): Promise<Product>;
    getAllProducts(): Promise<Product[]>;
    getProductsByGame(gameId: number, round: number): Promise<Product[]>;
    getTeamProducts(gameId: number, round: number, teamId: number): Promise<Product[]>;
    getProductById(id: number): Promise<Product>;
    updateProduct(id: number, product: any): Promise<[affectedCount: number]>;
    removeById(id: number): Promise<number>;
    transitionProduct(gameId: number, round: number): Promise<void>;
}
