import { Entity } from "./entity"


export class Order implements Entity {
    constructor(
        readonly id: string,
        readonly clientId: string,
        readonly specialRequests: string,
        readonly totalValue: number,
        readonly totalCurrency: string,
        readonly 
    ) {}

    getPrimitive () {
        return {
            id: this.id,
            truckId: this.truckId,
            description: this.description,
            availability: this.availability
        }
    }

    static create (id: string, truckId: string, description: string, availability: Availability): Dish {
        return new Order(id, truckId, description, availability)
    }

    update (description: string, availability: Availability): Order {
        return new Order(
            this.id,
            this.truckId,
            description,
            availability
        )
    }

}