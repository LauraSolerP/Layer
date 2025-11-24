"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inscription = void 0;
const uuid_1 = require("uuid");
class Inscription {
    id;
    truckId;
    eventId;
    participation;
    constructor(id, truckId, eventId, participation) {
        this.id = id;
        this.truckId = truckId;
        this.eventId = eventId;
        this.participation = participation;
    }
    getPrimitive() {
        return {
            id: this.id,
            truckId: this.truckId,
            eventId: this.eventId,
            participation: this.participation
        };
    }
    static create(truckId, eventId, participation) {
        return new Inscription((0, uuid_1.v4)(), truckId, eventId, participation);
    }
    update(data) {
        return new Inscription(this.id, this.truckId, this.eventId, data.participation ?? this.participation);
    }
}
exports.Inscription = Inscription;
//# sourceMappingURL=inscription.js.map