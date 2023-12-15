import { Institute } from './institute.model';
import { CreateInstituteDto } from './dto/create-institute.dto';
export declare class InstituteService {
    private instituteRepository;
    constructor(instituteRepository: typeof Institute);
    create(dto: CreateInstituteDto): Promise<Institute>;
    getAll(): Promise<Institute[]>;
    getById(id: number): Promise<Institute>;
    removeById(id: number): Promise<number>;
    getByValue(name: string): Promise<Institute>;
}
