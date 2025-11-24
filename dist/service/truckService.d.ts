import { Truck } from "../entities/truck";
import { truckHelper } from "../helpers/truckHelper";
export declare class truckService {
    private readonly helper;
    constructor(helper: truckHelper);
    findTruckById(id: string): Promise<Truck>;
    findTrucks(): Promise<Truck[]>;
    createTruck(ownerId: string, nom: string): Promise<Truck>;
    updateTruck(id: string, ownerId?: string, nom?: string): Promise<Truck>;
    deleteTruck(id: string): Promise<void>;
}
//# sourceMappingURL=truckService.d.ts.map