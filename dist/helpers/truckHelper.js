"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.truckHelper = void 0;
const helper_1 = require("./helper");
const truck_model_1 = require("../model/truck.model");
class truckHelper extends helper_1.Helper {
    getEntitySchema() {
        return truck_model_1.TruckModel;
    }
    async findTruckById(id) {
        return (await this.getRepository()).findOneBy({ id });
    }
    async findTrucks() {
        return (await this.getRepository()).find();
    }
    async saveTruck(truck) {
        return (await this.getRepository()).save(truck);
    }
    async deleteTruck(id) {
        await (await this.getRepository()).delete(id);
    }
}
exports.truckHelper = truckHelper;
//# sourceMappingURL=truckHelper.js.map