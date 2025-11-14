import { v4 } from "uuid"
import { Entity } from "./entity"
import { DateTime } from "luxon"


export class Order implements Entity {
    constructor(
        readonly id: string,
        readonly clientId: string,
        readonly specialRequests: string,
        readonly totalValue: number,
        readonly totalCurrency: string,
        readonly delivered: boolean,
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