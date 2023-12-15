import { InstituteService } from './institute.service';
import { CreateInstituteDto } from './dto/create-institute.dto';
import { Institute } from './institute.model';
export declare class InstituteController {
    private readonly instituteService;
    constructor(instituteService: InstituteService);
    createInstitute(dto: CreateInstituteDto): Promise<Institute>;
    getByValue(name: string): Promise<Institute>;
    getAllInstitute(): Promise<Institute[]>;
    removeById(id: number): Promise<number>;
}
