import { Injectable } from '@nestjs/common';
import { Chain } from './chain.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateChainDto } from './dto/create-chain.dto';

@Injectable()
export class ChainService {
  constructor(
    @InjectModel(Chain)
    private chainRepository: typeof Chain,
  ) {}

  async createChain(dto: CreateChainDto): Promise<Chain> {
    const chain = await this.chainRepository.create(dto);
    return chain;
  }

  async getAll(): Promise<Chain[]> {
    const all = await this.chainRepository.findAll();
    return all;
  }

  async getByName(gameId: number, name: string): Promise<Chain> {
    const chain = await this.chainRepository.findOne({
      where: { gameId, name },
    });
    return chain;
  }

  async getByGame(gameId: number): Promise<Chain[]> {
    const chains = await this.chainRepository.findAll({
      where: { gameId },
      include: { all: true },
    });
    return chains;
  }

  async getById(id: number): Promise<Chain> {
    const chain = await this.chainRepository.findOne({
      where: { id },
    });
    return chain;
  }

  async updateChain(id: number, chain: CreateChainDto) {
    try {
      const num = await this.chainRepository.update(chain, {
        where: { id },
      });
      return num;
    } catch (error) {
      throw error.message;
    }
  }

  async removeById(id: number): Promise<number> {
    const num = await this.chainRepository.destroy({ where: { id } });
    return num;
  }
}
