import { Event } from "../entities/event";
import { EventNotFound } from "../errors/event/eventNotFound";
import { eventHelper } from "../helpers/eventHelper";


export class eventService {

    constructor(private readonly helper: eventHelper) { }

    async findEventById(id: string): Promise<Event> {

        const event = await this.helper.findEventById(id)

        if (!event) {
            throw new EventNotFound(id)
        }

        return event

    }

    async findEvents(): Promise<Event[]> {
        return this.helper.findEvents()
    }

    async createEvent(location: string, fromDate: Date, toDate: Date): Promise<Event> {

        const event = Event.create(location, fromDate, toDate)

        return this.helper.saveEvent(event)
    }

    async updateEvent(id: string, location?: string, fromDate?: Date, toDate?: Date): Promise<Event> {
        const existing = await this.findEventById(id)

        const updatedEvent = existing.update({ location, fromDate, toDate })

        return this.helper.saveEvent(updatedEvent)
    }

    async deleteEvent(id: string): Promise<void> {
        await this.findEventById(id)
        await this.helper.deleteEvent(id)
    }

}