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
        readonly orderValue: number,
        readonly orderCurrency: string,
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
            delivered: this.delivered,
            deliveryTime: this.deliveryTime
        }
    }

    static create (id: string, clientId: string, specialRequests: string, totalValue: number, totalCurrency: string, delivered: boolean, deliveryTime: DateTime): Order {
        return new Order(
            id = v4(), 
            clientId, 
            specialRequests, 
            totalValue, 
            totalCurrency = "EUR", 
            delivered, 
            deliveryTime)
    }

    update (specialRequests: string, totalValue: number, totalCurrency: string, delivered: boolean, deliveryTime: DateTime): Order {
        return new Order(
            this.id,
            this.clientId,
            specialRequests,
            totalValue,
            totalCurrency,
            delivered,
            deliveryTime
        )
    }

}