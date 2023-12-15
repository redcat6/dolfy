import { ResourceService } from './resource.service';
import { CreateResourceDto } from './dto/create-resource.dto';
import { Resource } from './resource.model';
export declare class ResourceController {
    private resourceService;
    constructor(resourceService: ResourceService);
    create(resourceDto: CreateResourceDto): Promise<Resource>;
    getByGameAndRound(game_id: number, round: number): Promise<Resource[]>;
    resourchesTransition(game_id: number, round: number): Promise<void>;
    getResourcesByTeam(teamId: number, gameId: number, round: number): Promise<Resource[]>;
    update(obj: any, id: number): Promise<void>;
    removeById(id: number): Promise<number>;
}
