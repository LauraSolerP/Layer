import { v4 } from "uuid"
import { Entity } from "./entity"



export class Inscription implements Entity {
    constructor(
        readonly id: string,
        readonly truckId: string,
        readonly eventId: string,
        readonly participation: boolean
    ) { }

    getPrimitive() {
        return {
            id: this.id,
            truckId: this.truckId,
            eventId: this.eventId,
            participation: this.participation
        }
    }

    static create(truckId: string, eventId: string, participation: boolean): Inscription {
        return new Inscription(
            v4(),
            truckId,
            eventId,
            participation)
    }

    update(data: { participation?: boolean | undefined }): Inscription {
        return new Inscription(
            this.id,
            this.truckId,
            this.eventId,
            data.participation ?? this.participation
        )
    }

}