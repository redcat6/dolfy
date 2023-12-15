import { Sales } from './sales.model';
import { CreateSalesDto } from './dto/create-sales.dto';
import { MonthSalesService } from 'src/month-sales/month-sales.service';
import { ProductService } from 'src/product/product.service';
import { ChannelService } from 'src/channel/channel.service';
import { PromotionService } from 'src/promotion/promotion.service';
export declare class SalesService {
    private salesRepository;
    private monthSalesService;
    private productService;
    private promotionService;
    private channelService;
    constructor(salesRepository: typeof Sales, monthSalesService: MonthSalesService, productService: ProductService, promotionService: PromotionService, channelService: ChannelService);
    createSales(dto: CreateSalesDto): Promise<Sales>;
    getAllSales(): Promise<Sales[]>;
    getSalesByGame(gameId: number, round: number): Promise<Sales[]>;
    getTeamSales(gameId: number, round: number, teamId: number): Promise<Sales[]>;
    getSalesById(id: number): Promise<Sales>;
    updateSales(id: number, sales: CreateSalesDto): Promise<[affectedCount: number]>;
    removeById(id: number): Promise<number>;
    calculateSales(gameId: number, round: number): Promise<void>;
    private channelSales;
}
