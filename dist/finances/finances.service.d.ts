import { Finances } from './finances.model';
import { CreateFinancesDto } from './dto/create-finances.dto';
import { ProductService } from 'src/product/product.service';
import { SalesService } from 'src/sales/sales.service';
import { PromotionService } from 'src/promotion/promotion.service';
import { ResourceService } from 'src/resource/resource.service';
import { IntermediaryService } from 'src/intermediary/intermediary.service';
export declare class FinancesService {
    private financesRepository;
    private productService;
    private salesService;
    private promotionService;
    private resourceService;
    private intermediaryService;
    constructor(financesRepository: typeof Finances, productService: ProductService, salesService: SalesService, promotionService: PromotionService, resourceService: ResourceService, intermediaryService: IntermediaryService);
    createFinances(dto: CreateFinancesDto): Promise<Finances>;
    getAllFinances(): Promise<Finances[]>;
    getFinancesByGame(gameId: number, round: number): Promise<Finances[]>;
    getTeamFinances(gameId: number, round: number, teamId: number): Promise<Finances[]>;
    getFinancesById(id: number): Promise<Finances>;
    updateFinances(id: number, resource: CreateFinancesDto): Promise<[affectedCount: number]>;
    removeById(id: number): Promise<number>;
    calculateFinances(gameId: number, round: number): Promise<Finances[]>;
    transitionFinances(gameId: number, round: number): Promise<void>;
}
