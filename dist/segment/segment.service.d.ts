import { CreateSegmentDto } from '../segment/dto/create-segment.dto';
import { Segment } from './segment.model';
export declare class SegmentService {
    private segmentRepository;
    constructor(segmentRepository: typeof Segment);
    createSegment(dto: CreateSegmentDto): Promise<Segment>;
    getAll(): Promise<Segment[]>;
    getByCategory(category: string): Promise<Segment[]>;
    getById(id: number): Promise<Segment>;
    updateSegment(id: number, segment: CreateSegmentDto): Promise<[affectedCount: number]>;
    removeById(id: number): Promise<number>;
}
