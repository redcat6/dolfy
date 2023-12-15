import { CreateSegmentDto } from '../segment/dto/create-segment.dto';
import { Segment } from '../segment/segment.model';
import { SegmentService } from './segment.service';
export declare class SegmentController {
    private segmentService;
    constructor(segmentService: SegmentService);
    createSegment(dto: CreateSegmentDto): Promise<Segment>;
    getSegments(): Promise<Segment[]>;
    getSegmentsbyCategory(category: string): Promise<Segment[]>;
    updateSegment(segment: CreateSegmentDto, id: number): Promise<[affectedCount: number]>;
    deleteSegment(id: number): Promise<number>;
}
