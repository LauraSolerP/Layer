"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventNotFound = void 0;
class EventNotFound extends Error {
    eventId;
    constructor(id) {
        const message = `The event with id ${id} can't be reached`;
        super(message);
        this.eventId = id;
        this.name = 'EventNotFound';
    }
}
exports.EventNotFound = EventNotFound;
//# sourceMappingURL=eventNotFound.js.map