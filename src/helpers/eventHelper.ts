import { Helper } from "./helper";
import { EventModel } from "../model/event.model";
import { EntitySchema } from "typeorm";
import { Event } from "../entities/event";


export class eventHelper extends Helper<Event> {

    getEntitySchema(): EntitySchema<Event> {
        return EventModel
    }

    async findEventById(id: string): Promise<Event | null> {
        return (await this.getRepository()).findOneBy({ id })
    }

    async findEvents(): Promise<Event[]> {
        return (await this.getRepository()).find()
    }

    async saveEvent(event: Event): Promise<Event> {
        return (await this.getRepository()).save(event)
    }

    async deleteEvent(id: string): Promise<void> {
        await (await this.getRepository()).delete(id)
    }
} 