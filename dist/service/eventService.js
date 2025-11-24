"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventService = void 0;
const event_1 = require("../entities/event");
const eventNotFound_1 = require("../errors/event/eventNotFound");
class eventService {
    helper;
    constructor(helper) {
        this.helper = helper;
    }
    async findEventById(id) {
        const event = await this.helper.findEventById(id);
        if (!event) {
            throw new eventNotFound_1.EventNotFound(id);
        }
        return event;
    }
    async findEvents() {
        return this.helper.findEvents();
    }
    async createEvent(location, fromDate, toDate) {
        const event = event_1.Event.create(location, fromDate, toDate);
        return this.helper.saveEvent(event);
    }
    async updateEvent(id, location, fromDate, toDate) {
        const existing = await this.findEventById(id);
        const updatedEvent = existing.update({ location, fromDate, toDate });
        return this.helper.saveEvent(updatedEvent);
    }
    async deleteEvent(id) {
        await this.findEventById(id);
        await this.helper.deleteEvent(id);
    }
}
exports.eventService = eventService;
//# sourceMappingURL=eventService.js.map