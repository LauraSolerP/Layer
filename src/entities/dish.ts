import { Entity } from "./entity"

enum Availability{
    AVAILABLE = 'AVAILABLE',
    OUTOFSTOCK = 'OUTOFSTOCK',
    UNAVAILABLE = 'UNAVAILABLE'

}

export class Dish implements Entity {
    constructor(
        readonly id: string,
        readonly truckId: string,
        readonly description: string,
        readonly availability: Availability,
        readonly priceValue: number,
        readonly priceCurrency: string
    ) {}

    getPrimitive () {
        return {
            id: this.id,
            truckId: this.truckId,
            description: this.description,
            availability: this.availability
        }
    }

    static create (id: string, truckId: string, description: string, availability: Availability, priceValue: number, priceCurrency: string): Dish {
        return new Dish(id, truckId, description, availability, priceValue, priceCurrency)
    }

    update (description: string, availability: Availability, priceValue: number, priceCurrency:string): Dish {
        return new Dish(
            this.id,
            this.truckId,
            description,
            availability,
            priceValue,
            priceCurrency
        )
    }

}