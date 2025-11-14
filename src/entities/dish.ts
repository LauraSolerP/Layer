import { v4 } from "uuid"
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
            availability: this.availability,
            priceValue: this.priceValue,
            priceCurrency: this.priceCurrency
        }
    }

    static create (id: string, truckId: string, description: string, availability: Availability, priceValue: number, priceCurrency: string): Dish {
        return new Dish(
            id = v4(), 
            truckId, 
            description, 
            availability, 
            priceValue, 
            priceCurrency = "EUR")
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