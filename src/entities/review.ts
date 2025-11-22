import { v4 } from "uuid"
import { Entity } from "./entity"



export class Review implements Entity {
    constructor(
        readonly id: string,
        readonly clientId: string,
        readonly orderId: string,
        readonly description: string
    ) { }

    getPrimitive() {
        return {
            id: this.id,
            clientId: this.clientId,
            orderId: this.orderId,
            description: this.description
        }
    }

    static create(clientId: string, orderId: string, description: string): Review {
        return new Review(
            v4(),
            clientId,
            orderId,
            description
        )
    }

    update(data: { clientId?: string | undefined, orderId?: string | undefined, description?: string | undefined }): Review {
        return new Review(
            this.id,
            data.clientId ?? this.clientId,
            data.orderId ?? this.orderId,
            data.description ?? this.description
        )
    }

}