"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventHelper = void 0;
const helper_1 = require("./helper");
const event_model_1 = require("../model/event.model");
class eventHelper extends helper_1.Helper {
    getEntitySchema() {
        return event_model_1.EventModel;
    }
    async findEventById(id) {
        return (await this.getRepository()).findOneBy({ id });
    }
    async findEvents() {
        return (await this.getRepository()).find();
    }
    async saveEvent(event) {
        return (await this.getRepository()).save(event);
    }
    async deleteEvent(id) {
        await (await this.getRepository()).delete(id);
    }
}
exports.eventHelper = eventHelper;
//# sourceMappingURL=eventHelper.js.map