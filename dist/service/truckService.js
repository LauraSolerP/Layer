"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.truckService = void 0;
const truck_1 = require("../entities/truck");
const truckNotFound_1 = require("../errors/truck/truckNotFound");
class truckService {
    helper;
    constructor(helper) {
        this.helper = helper;
    }
    async findTruckById(id) {
        const truck = await this.helper.findTruckById(id);
        if (!truck) {
            throw new truckNotFound_1.TruckNotFound(id);
        }
        return truck;
    }
    async findTrucks() {
        return this.helper.findTrucks();
    }
    async createTruck(ownerId, nom) {
        const truck = truck_1.Truck.create(ownerId, nom);
        return this.helper.saveTruck(truck);
    }
    async updateTruck(id, ownerId, nom) {
        const existing = await this.findTruckById(id);
        const updatedTruck = existing.update({ ownerId, nom });
        return this.helper.saveTruck(updatedTruck);
    }
    async deleteTruck(id) {
        await this.findTruckById(id);
        await this.helper.deleteTruck(id);
    }
}
exports.truckService = truckService;
//# sourceMappingURL=truckService.js.map