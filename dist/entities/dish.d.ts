import { Entity } from "./entity";
export declare enum Availability {
    AVAILABLE = "AVAILABLE",
    OUTOFSTOCK = "OUTOFSTOCK",
    UNAVAILABLE = "UNAVAILABLE"
}
export declare class Dish implements Entity {
    readonly id: string;
    readonly truckId: string;
    readonly description: string;
    readonly availability: Availability;
    readonly priceValue: number;
    readonly priceCurrency: string;
    constructor(id: string, truckId: string, description: string, availability: Availability, priceValue: number, priceCurrency: string);
    getPrimitive(): {
        id: string;
        truckId: string;
        description: string;
        availability: Availability;
        priceValue: number;
        priceCurrency: string;
    };
    static create(truckId: string, description: string, availability: Availability, priceValue: number, priceCurrency: string): Dish;
    update(data: {
        description?: string | undefined;
        availability?: Availability | undefined;
        priceValue?: number | undefined;
        priceCurrency?: string | undefined;
    }): Dish;
}
//# sourceMappingURL=dish.d.ts.map