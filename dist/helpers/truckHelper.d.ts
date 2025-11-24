import { Helper } from "./helper";
import { EntitySchema } from "typeorm";
import { Truck } from "../entities/truck";
export declare class truckHelper extends Helper<Truck> {
    getEntitySchema(): EntitySchema<Truck>;
    findTruckById(id: string): Promise<Truck | null>;
    findTrucks(): Promise<Truck[]>;
    saveTruck(truck: Truck): Promise<Truck>;
    deleteTruck(id: string): Promise<void>;
}
//# sourceMappingURL=truckHelper.d.ts.map