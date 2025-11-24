import { Entity } from "./entity";
export declare class Event implements Entity {
    readonly id: string;
    readonly location: string;
    readonly fromDate: Date;
    readonly toDate: Date;
    constructor(id: string, location: string, fromDate: Date, toDate: Date);
    getPrimitive(): {
        id: string;
        location: string;
        fromDate: Date;
        toDate: Date;
    };
    static create(location: string, fromDate: Date, toDate: Date): Event;
    update(data: {
        location?: string | undefined;
        fromDate?: Date | undefined;
        toDate?: Date | undefined;
    }): Event;
}
//# sourceMappingURL=event.d.ts.map