import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Institute } from './institute.model';
import { CreateInstituteDto } from './dto/create-institute.dto';

@Injectable()
export class InstituteService {
  constructor(
    @InjectModel(Institute)
    private instituteRepository: typeof Institute,
  ) {}

  async create(dto: CreateInstituteDto) {
    const institute = await this.instituteRepository.create(dto);
    return institute;
  }

  async getAll() {
    const all = await this.instituteRepository.findAll({
      include: { all: true },
      order: ['country', 'city', 'name', 'contract'],
    });
    return all;
  }

  async getById(id: number): Promise<Institute> {
    const institute = await this.instituteRepository.findOne({
      where: { id },
    });
    return institute;
  }

  async removeById(id: number): Promise<number> {
    const num = await this.instituteRepository.destroy({ where: { id } });
    return num;
  }

  async getByValue(name: string): Promise<Institute> {
    const institute = await this.instituteRepository.findOne({
      where: { name },
    });
    return institute;
  }
}
