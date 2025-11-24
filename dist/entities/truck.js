"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Truck = void 0;
const uuid_1 = require("uuid");
class Truck {
    id;
    ownerId;
    nom;
    constructor(id, ownerId, nom) {
        this.id = id;
        this.ownerId = ownerId;
        this.nom = nom;
    }
    getPrimitive() {
        return {
            id: this.id,
            ownerId: this.ownerId,
            nom: this.nom
        };
    }
    static create(ownerId, nom) {
        return new Truck((0, uuid_1.v4)(), ownerId, nom);
    }
    update(data) {
        return new Truck(this.id, data.ownerId ?? this.ownerId, data.nom ?? this.nom);
    }
}
exports.Truck = Truck;
//# sourceMappingURL=truck.js.map