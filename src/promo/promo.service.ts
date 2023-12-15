import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePromoDto } from './dto/create-promo.dto';
import { Promo } from './promo.model';
import { UsersService } from 'src/users/users.service';
import { CheckPromoDto } from './dto/check-promo.dto';
import { User } from 'src/users/users.model';

@Injectable()
export class PromoService {
  constructor(
    @InjectModel(Promo)
    private promoRepository: typeof Promo,
    private userServise: UsersService,
  ) {}

  async create(dto: CreatePromoDto) {
    const promo = await this.promoRepository.create(dto);
    return promo;
  }

  async getAll() {
    const all = await this.promoRepository.findAll({
      include: { all: true },
      order: ['instituteId'],
    });
    return all;
  }

  async getById(id: number): Promise<Promo> {
    const promo = await this.promoRepository.findOne({
      where: { id },
      include: { all: true },
    });
    return promo;
  }

  async removeById(id: number): Promise<number> {
    const num = await this.promoRepository.destroy({ where: { id } });
    return num;
  }

  async getByValue(dto: CheckPromoDto): Promise<User> {
    const promo = await this.promoRepository.findOne({
      where: { code: dto.code },
    });
    const user = await this.userServise.getUserByEmail(dto.email);
    if (!promo || !user) {
      throw new HttpException(
        `user or promo-code not found`,
        HttpStatus.NOT_FOUND,
      );
    }
    //change the promo status
    promo.status = 'active';
    await promo.save();
    //change the user role
    user.role = 'PROFESSOR';
    user.promoId = promo.id;
    await user.save();
    return user;
  }

  private createCode(num: number): string {
    const dictionary =
      '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHKLZXCVBNM';
    let res = '';
    for (let index = 0; index < num; index++) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      res += dictionary[Math.floor(Math.random() * dictionary.length - 1)];
    }
    return res;
  }
}
