import { v4 } from "uuid"
import { Entity } from "./entity"
import { DateTime } from "luxon"

export enum OrderState {
    PENDING = 'PENDING',
    IN_PROGRESS = 'IN_PROGRESS',
    COMPLETED = 'COMPLETED',
    CANCELLED = 'CANCELLED'
}


export class Order implements Entity {
    constructor(
        readonly id: string,
        readonly clientId: string,
        readonly truckId: string,
        readonly specialRequests: string,
        readonly totalValue: number,
        readonly totalCurrency: string,
        readonly state: OrderState,
        readonly deliveryTime: DateTime
    ) {}

    getPrimitive () {
        return {
            id: this.id,
            clientId: this.clientId,
            specialRequests: this.specialRequests,
            totalValue: this.totalValue,
            totalCurrency: this.totalCurrency,
            state: this.state,
            deliveryTime: this.deliveryTime
        }
    }

    static create (id: string, clientId: string, truckId: string, specialRequests: string, totalValue: number, totalCurrency: string, state: OrderState, deliveryTime: DateTime): Order {
        return new Order(
            id = v4(), 
            clientId, 
            truckId, 
            specialRequests,
            totalValue, 
            totalCurrency = "EUR", 
            state, 
            deliveryTime)
    }

    update (truckId: string, specialRequests: string, totalValue: number, totalCurrency: string, state: OrderState, deliveryTime: DateTime): Order {
        return new Order(
            this.id,
            this.clientId,
            truckId,
            specialRequests,
            totalValue,
            totalCurrency,
            state,
            deliveryTime
        )
    }

}