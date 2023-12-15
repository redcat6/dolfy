import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Resource } from './resource.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateResourceDto } from './dto/create-resource.dto';

@Injectable()
export class ResourceService {
  constructor(
    @InjectModel(Resource)
    private resourceRepository: typeof Resource,
  ) {}

  async createResource(dto: CreateResourceDto): Promise<Resource> {
    const resource = await this.resourceRepository.create(dto);
    return resource;
  }

  async getAllResources(): Promise<Resource[]> {
    const resources = await this.resourceRepository.findAll({
      include: { all: true },
    });
    return resources;
  }

  async getResourcesByGame(gameId: number, round: number): Promise<Resource[]> {
    const resources = await this.resourceRepository.findAll({
      where: { gameId, round },
      order: ['teamId'],
      include: { all: true },
    });
    return resources;
  }

  async getTeamResources(
    gameId: number,
    round: number,
    teamId: number,
  ): Promise<Resource[]> {
    const resources = await this.resourceRepository.findAll({
      where: { gameId, round, teamId },
      include: { all: true },
    });
    return resources;
  }

  async getResourceById(id: number): Promise<Resource> {
    const resource = await this.resourceRepository.findByPk(id);
    return resource;
  }

  async updateResource(id: number, resource: any): Promise<void> {
    try {
      await this.resourceRepository.update(resource, {
        where: { id },
      });
    } catch (error) {
      throw error.message;
    }
  }

  async removeById(id: number): Promise<number> {
    try {
      const num = await this.resourceRepository.destroy({ where: { id } });
      return num;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async transitionResources(gameId: number, round: number) {
    const resources = await this.resourceRepository.findAll({
      where: { gameId, round },
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });

    if (resources?.length > 0) {
      resources.forEach(async (item) => {
        const capacities = item.capacities + item.capacities_increase;
        const dto = {
          gameId: Number(gameId),
          round: Number(round + 1),
          teamId: item.teamId,
          capacities,
          capacities_increase: 0,
          long_term_debt: item.long_term_debt,
          borrowings: 0,
          research_segments: [],
          research_costs: 0,
        };
        try {
          await this.resourceRepository.create(dto);
        } catch (error) {
          new HttpException(
            `can't create resource, error: ${error.message}`,
            HttpStatus.BAD_REQUEST,
          );
        }
      });
    }
  }
}
