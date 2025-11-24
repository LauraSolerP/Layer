import { Entity } from "./entity";
export declare class Truck implements Entity {
    readonly id: string;
    readonly ownerId: string;
    readonly nom: string;
    constructor(id: string, ownerId: string, nom: string);
    getPrimitive(): {
        id: string;
        ownerId: string;
        nom: string;
    };
    static create(ownerId: string, nom: string): Truck;
    update(data: {
        ownerId?: string | undefined;
        nom?: string | undefined;
    }): Truck;
}
//# sourceMappingURL=truck.d.ts.map