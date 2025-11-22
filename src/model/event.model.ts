import { EntitySchema } from "typeorm"
import { Event } from "../entities/event"

export const EventModel = new EntitySchema<Event>({
    name: "event",
    tableName: "event",
    target: Event,
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
})