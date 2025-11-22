import { Truck } from "../entities/truck";
import { TruckNotFound } from "../errors/truck/truckNotFound";
import { truckHelper } from "../helpers/truckHelper";


export class truckService {

    constructor(private readonly helper: truckHelper) { }

    async findTruckById(id: string): Promise<Truck> {

        const truck = await this.helper.findTruckById(id)

        if (!truck) {
            throw new TruckNotFound(id)
        }

        return truck

    }

    async findTrucks(): Promise<Truck[]> {
        return this.helper.findTrucks()
    }

    async createTruck(ownerId: string, nom: string): Promise<Truck> {

        const truck = Truck.create(ownerId, nom)

        return this.helper.saveTruck(truck)
    }

    async updateTruck(id: string, ownerId?: string, nom?: string): Promise<Truck> {
        const existing = await this.findTruckById(id)

        const updatedTruck = existing.update({ ownerId, nom })

        return this.helper.saveTruck(updatedTruck)
    }

    async deleteTruck(id: string): Promise<void> {
        await this.findTruckById(id)
        await this.helper.deleteTruck(id)
    }

}