"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventModel = void 0;
const typeorm_1 = require("typeorm");
const event_1 = require("../entities/event");
exports.EventModel = new typeorm_1.EntitySchema({
    name: "event",
    tableName: "event",
    target: event_1.Event,
    columns: {
        id: {
            type: String,
            primary: true
        },
        location: {
            type: String
        },
        fromDate: {
            type: Date
        },
        toDate: {
            type: Date
        }
    }
});
//# sourceMappingURL=event.model.js.map