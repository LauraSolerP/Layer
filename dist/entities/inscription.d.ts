import { Entity } from "./entity";
export declare class Inscription implements Entity {
    readonly id: string;
    readonly truckId: string;
    readonly eventId: string;
    readonly participation: boolean;
    constructor(id: string, truckId: string, eventId: string, participation: boolean);
    getPrimitive(): {
        id: string;
        truckId: string;
        eventId: string;
        participation: boolean;
    };
    static create(truckId: string, eventId: string, participation: boolean): Inscription;
    update(data: {
        participation?: boolean | undefined;
    }): Inscription;
}
//# sourceMappingURL=inscription.d.ts.map