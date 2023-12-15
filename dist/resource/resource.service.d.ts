import { Resource } from './resource.model';
import { CreateResourceDto } from './dto/create-resource.dto';
export declare class ResourceService {
    private resourceRepository;
    constructor(resourceRepository: typeof Resource);
    createResource(dto: CreateResourceDto): Promise<Resource>;
    getAllResources(): Promise<Resource[]>;
    getResourcesByGame(gameId: number, round: number): Promise<Resource[]>;
    getTeamResources(gameId: number, round: number, teamId: number): Promise<Resource[]>;
    getResourceById(id: number): Promise<Resource>;
    updateResource(id: number, resource: any): Promise<void>;
    removeById(id: number): Promise<number>;
    transitionResources(gameId: number, round: number): Promise<void>;
}
