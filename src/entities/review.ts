import { v4 } from "uuid"
import { Entity } from "./entity"



export class Review implements Entity {
    constructor(
        readonly id: string,
        readonly clientId: string,
        readonly orderId: string,
        readonly description: string
    ) {}

    getPrimitive () {
        return {
            id: this.id,
            clientId: this.clientId,
            orderId: this.orderId,
            description: this.description
        }
    }

    static create (id: string, clientId: string, orderId: string, description: string): Review {
        return new Review(
            id = v4(), 
            clientId, 
            orderId,
            description
        )
    }

    update (clientId: string, orderId: string, description: string): Review {
        return new Review(
            this.id,
            clientId,
            orderId,
            description
        )
    }

}