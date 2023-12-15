import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateSegmentDto } from '../segment/dto/create-segment.dto';
import { Segment } from './segment.model';

@Injectable()
export class SegmentService {
  constructor(
    @InjectModel(Segment)
    private segmentRepository: typeof Segment,
  ) {}

  async createSegment(dto: CreateSegmentDto): Promise<Segment> {
    const segment = await this.segmentRepository.create(dto);
    return segment;
  }

  async getAll(): Promise<Segment[]> {
    const all = await this.segmentRepository.findAll();
    return all;
  }

  async getByCategory(category: string): Promise<Segment[]> {
    const all = await this.segmentRepository.findAll({
      where: { category },
    });
    return all;
  }

  async getById(id: number): Promise<Segment> {
    const segment = await this.segmentRepository.findOne({
      where: { id },
    });
    return segment;
  }

  async updateSegment(id: number, segment: CreateSegmentDto) {
    try {
      const num = await this.segmentRepository.update(segment, {
        where: { id },
      });
      return num;
    } catch (error) {
      throw error.message;
    }
  }

  async removeById(id: number): Promise<number> {
    const num = await this.segmentRepository.destroy({ where: { id } });
    return num;
  }
}
