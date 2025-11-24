import { Event } from "../entities/event";
import { eventHelper } from "../helpers/eventHelper";
export declare class eventService {
    private readonly helper;
    constructor(helper: eventHelper);
    findEventById(id: string): Promise<Event>;
    findEvents(): Promise<Event[]>;
    createEvent(location: string, fromDate: Date, toDate: Date): Promise<Event>;
    updateEvent(id: string, location?: string, fromDate?: Date, toDate?: Date): Promise<Event>;
    deleteEvent(id: string): Promise<void>;
}
//# sourceMappingURL=eventService.d.ts.map