import { Entity } from "./entity"
import { v4 } from "uuid"


export class UserOrder implements Entity {
    constructor(
        readonly id: string,
        readonly userId: string,
        readonly orderId: string,
        readonly dishId: string
    ) {}

    getPrimitive () {
        return {
            id: this.id,
            userId: this.userId,
            orderId: this.orderId,
            dishId: this.dishId
        }
    }

    static create (id: string, userId: string, orderId: string, dishId: string): UserOrder {
        return new UserOrder(
            id = v4(), 
            userId, 
            orderId,
            dishId
        )
    }

    update (userId: string, orderId: string, dishId: string): UserOrder {
        return new UserOrder(
            this.id,
            userId,
            orderId,
            dishId
        )
    }

}