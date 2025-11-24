"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InscriptionModel = void 0;
const typeorm_1 = require("typeorm");
const inscription_1 = require("../entities/inscription");
exports.InscriptionModel = new typeorm_1.EntitySchema({
    name: "inscription",
    tableName: "inscription",
    target: inscription_1.Inscription,
    columns: {
        id: {
            type: String,
            primary: true
        },
        truckId: {
            type: String
        },
        eventId: {
            type: String
        },
        participation: {
            type: Boolean
        }
    }
});
//# sourceMappingURL=inscription.model.js.map