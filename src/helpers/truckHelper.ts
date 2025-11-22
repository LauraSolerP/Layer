import { Helper } from "./helper";
import { TruckModel } from "../model/truck.model";
import { EntitySchema } from "typeorm";
import { Truck } from "../entities/truck";


export class truckHelper extends Helper<Truck> {

    getEntitySchema(): EntitySchema<Truck> {
        return TruckModel
    }

    async findTruckById(id: string): Promise<Truck | null> {
        return (await this.getRepository()).findOneBy({ id })
    }

    async findTrucks(): Promise<Truck[]> {
        return (await this.getRepository()).find()
    }

    async saveTruck(truck: Truck): Promise<Truck> {
        return (await this.getRepository()).save(truck)
    }

    async deleteTruck(id: string): Promise<void> {
        await (await this.getRepository()).delete(id)
    }
} 