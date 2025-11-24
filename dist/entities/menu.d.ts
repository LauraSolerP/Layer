import { Entity } from "./entity";
export declare enum Season {
    SPRING = "SPRING",
    SUMMER = "SUMMER",
    FALL = "FALL",
    WINTER = "WINTER"
}
export declare class Menu implements Entity {
    readonly id: string;
    readonly truckId: string;
    readonly description: string;
    readonly season: Season;
    readonly priceValue: number;
    readonly priceCurrency: string;
    constructor(id: string, truckId: string, description: string, season: Season, priceValue: number, priceCurrency: string);
    getPrimitive(): {
        id: string;
        truckId: string;
        description: string;
        season: Season;
        priceValue: number;
        priceCurrency: string;
    };
    static create(truckId: string, description: string, season: Season, priceValue: number): Menu;
    update(data: {
        description: string | undefined;
        season: Season | undefined;
        priceValue: number | undefined;
        priceCurrency: string | undefined;
    }): Menu;
}
//# sourceMappingURL=menu.d.ts.map