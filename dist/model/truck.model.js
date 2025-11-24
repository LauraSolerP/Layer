"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TruckModel = void 0;
const typeorm_1 = require("typeorm");
const truck_1 = require("../entities/truck");
exports.TruckModel = new typeorm_1.EntitySchema({
    name: "truck",
    tableName: "truck",
    target: truck_1.Truck,
    columns: {
        id: {
            type: String,
            primary: true
        },
        ownerId: {
            type: String
        },
        nom: {
            type: String
        }
    }
});
//# sourceMappingURL=truck.model.js.map