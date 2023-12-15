import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Trademark } from './trademark.model';
import { CreateTrademarkDto } from './dto/create-trademark.dto';

@Injectable()
export class TrademarkService {
  constructor(
    @InjectModel(Trademark)
    private trademarkRepository: typeof Trademark,
  ) {}

  async createTrademark(dto: CreateTrademarkDto): Promise<Trademark> {
    const trademark = await this.trademarkRepository.create(dto);
    return trademark;
  }

  async getAll(): Promise<Trademark[]> {
    const all = await this.trademarkRepository.findAll();
    return all;
  }

  async getById(id: number): Promise<Trademark> {
    const trademark = await this.trademarkRepository.findOne({
      where: { id },
    });
    return trademark;
  }

  async getByName(name: string): Promise<Trademark> {
    const trademark = await this.trademarkRepository.findOne({
      where: { name },
    });
    return trademark;
  }

  async updateTrademark(trademark: CreateTrademarkDto, id: number) {
    try {
      const num = await this.trademarkRepository.update(trademark, {
        where: { id },
      });
      return num;
    } catch (error) {
      throw error.message;
    }
  }

  async removeById(id: number): Promise<number> {
    try {
      const num = await this.trademarkRepository.destroy({ where: { id } });
      return num;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
