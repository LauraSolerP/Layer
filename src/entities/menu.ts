import { v4 } from "uuid"
import { Entity } from "./entity"

enum Season{
    SPRING = 'SPRING',
    SUMMER = 'SUMMER',
    FALL = 'FALL',
    WINTER = 'WINTER'

}

export class Menu implements Entity {
    constructor(
        readonly id: string,
        readonly truckId: string,
        readonly description: string,
        readonly season: Season,
        readonly priceValue: number,
        readonly priceCurrency: string
    ) {}

    getPrimitive () {
        return {
            id: this.id,
            truckId: this.truckId,
            description: this.description,
            season: this.season,
            priceValue: this.priceValue,
            priceCurrency: this.priceCurrency
        }
    }

    static create (id: string, truckId: string, description: string, season: Season, priceValue: number, priceCurrency: string): Menu {
        return new Menu(
            id = v4(), 
            truckId, 
            description, 
            season, 
            priceValue, 
            priceCurrency = "EUR")
    }

    update (description: string, season: Season, priceValue: number, priceCurrency:string): Menu {
        return new Menu(
            this.id,
            this.truckId,
            description,
            season,
            priceValue,
            priceCurrency
        )
    }

}