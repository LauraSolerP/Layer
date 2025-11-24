import { Helper } from "./helper";
import { EntitySchema } from "typeorm";
import { Event } from "../entities/event";
export declare class eventHelper extends Helper<Event> {
    getEntitySchema(): EntitySchema<Event>;
    findEventById(id: string): Promise<Event | null>;
    findEvents(): Promise<Event[]>;
    saveEvent(event: Event): Promise<Event>;
    deleteEvent(id: string): Promise<void>;
}
//# sourceMappingURL=eventHelper.d.ts.map