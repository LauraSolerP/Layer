import { Entity } from "./entity"
import { v4 } from "uuid"


export class UserOrder implements Entity {
    constructor(
        readonly id: string,
        readonly userId: string,
        readonly orderId: string,
        readonly dishId: string
    ) { }

    getPrimitive() {
        return {
            id: this.id,
            userId: this.userId,
            orderId: this.orderId,
            dishId: this.dishId
        }
    }

    static create(userId: string, orderId: string, dishId: string): UserOrder {
        return new UserOrder(
            v4(),
            userId,
            orderId,
            dishId
        )
    }

    update(data: { userId?: string | undefined, orderId?: string | undefined, dishId?: string | undefined }): UserOrder {
        return new UserOrder(
            this.id,
            data.userId ?? this.userId,
            data.orderId ?? this.orderId,
            data.dishId ?? this.dishId
        )
    }

}