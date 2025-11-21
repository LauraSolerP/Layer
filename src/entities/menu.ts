import { v4 } from "uuid"
import { Entity } from "./entity"

export enum Season {
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
    ) { }

    getPrimitive() {
        return {
            id: this.id,
            truckId: this.truckId,
            description: this.description,
            season: this.season,
            priceValue: this.priceValue,
            priceCurrency: this.priceCurrency
        }
    }

    static create(truckId: string, description: string, season: Season, priceValue: number): Menu {
        return new Menu(
            v4(),
            truckId,
            description,
            season,
            priceValue,
            "EUR")
    }

    update(data: { description: string | undefined, season: Season | undefined, priceValue: number | undefined, priceCurrency: string | undefined }): Menu {
        return new Menu(
            this.id,
            this.truckId,
            data.description ?? this.description,
            data.season ?? this.season,
            data.priceValue ?? this.priceValue,
            data.priceCurrency ?? this.priceCurrency
        )
    }

}