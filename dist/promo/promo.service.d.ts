import { CreatePromoDto } from './dto/create-promo.dto';
import { Promo } from './promo.model';
import { UsersService } from 'src/users/users.service';
import { CheckPromoDto } from './dto/check-promo.dto';
import { User } from 'src/users/users.model';
export declare class PromoService {
    private promoRepository;
    private userServise;
    constructor(promoRepository: typeof Promo, userServise: UsersService);
    create(dto: CreatePromoDto): Promise<Promo>;
    getAll(): Promise<Promo[]>;
    getById(id: number): Promise<Promo>;
    removeById(id: number): Promise<number>;
    getByValue(dto: CheckPromoDto): Promise<User>;
    private createCode;
}
