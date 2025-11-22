import { v4 } from "uuid"
import { Entity } from "./entity"



export class Event implements Entity {
    constructor(
        readonly id: string,
        readonly location: string,
        readonly fromDate: Date,
        readonly toDate: Date
    ) { }

    getPrimitive() {
        return {
            id: this.id,
            location: this.location,
            fromDate: this.fromDate,
            toDate: this.toDate
        }
    }

    static create(location: string, fromDate: Date, toDate: Date): Event {
        return new Event(
            v4(),
            location,
            fromDate,
            toDate)
    }

    update(data: { location?: string | undefined, fromDate?: Date | undefined, toDate?: Date | undefined }): Event {
        return new Event(
            this.id,
            data.location ?? this.location,
            data.fromDate ?? this.fromDate,
            data.toDate ?? this.toDate
        )
    }

}