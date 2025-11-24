"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
const uuid_1 = require("uuid");
class Event {
    id;
    location;
    fromDate;
    toDate;
    constructor(id, location, fromDate, toDate) {
        this.id = id;
        this.location = location;
        this.fromDate = fromDate;
        this.toDate = toDate;
    }
    getPrimitive() {
        return {
            id: this.id,
            location: this.location,
            fromDate: this.fromDate,
            toDate: this.toDate
        };
    }
    static create(location, fromDate, toDate) {
        return new Event((0, uuid_1.v4)(), location, fromDate, toDate);
    }
    update(data) {
        return new Event(this.id, data.location ?? this.location, data.fromDate ?? this.fromDate, data.toDate ?? this.toDate);
    }
}
exports.Event = Event;
//# sourceMappingURL=event.js.map