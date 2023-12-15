import { CreatePromoDto } from './dto/create-promo.dto';
import { Promo } from './promo.model';
import { PromoService } from './promo.service';
import { CheckPromoDto } from './dto/check-promo.dto';
import { User } from 'src/users/users.model';
export declare class PromoController {
    private readonly promoService;
    constructor(promoService: PromoService);
    createPromo(dto: CreatePromoDto): Promise<Promo>;
    getByValue(dto: CheckPromoDto): Promise<User>;
    getAll(): Promise<Promo[]>;
    getById(id: number): Promise<Promo>;
    removeById(id: number): Promise<number>;
}
