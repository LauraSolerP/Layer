import { v4 } from "uuid"
import { Entity } from "./entity"



export class Event implements Entity {
    constructor(
        readonly id: string,
        readonly location: string,
        readonly fromDate: Date,
        readonly toDate: Date
    ) {}

    getPrimitive () {
        return {
            id: this.id,
            location: this.location,
            fromDate: this.fromDate,
            toDate: this.toDate
        }
    }

    static create (id: string, location: string, fromDate: Date, toDate: Date): Event {
        return new Event(
            id = v4(), 
            location, 
            fromDate, 
            toDate)
    }

    update (location: string, fromDate: Date, toDate: Date): Event {
        return new Event(
            this.id,
            location,
            fromDate,
            toDate
        )
    }

}