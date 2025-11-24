"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TruckNotFound = void 0;
class TruckNotFound extends Error {
    truckId;
    constructor(id) {
        const message = `The truck with id ${id} can't be reached`;
        super(message);
        this.truckId = id;
        this.name = 'TruckNotFound';
    }
}
exports.TruckNotFound = TruckNotFound;
//# sourceMappingURL=truckNotFound.js.map