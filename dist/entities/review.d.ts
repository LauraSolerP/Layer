import { Entity } from "./entity";
export declare class Review implements Entity {
    readonly id: string;
    readonly clientId: string;
    readonly orderId: string;
    readonly description: string;
    constructor(id: string, clientId: string, orderId: string, description: string);
    getPrimitive(): {
        id: string;
        clientId: string;
        orderId: string;
        description: string;
    };
    static create(clientId: string, orderId: string, description: string): Review;
    update(data: {
        clientId?: string | undefined;
        orderId?: string | undefined;
        description?: string | undefined;
    }): Review;
}
//# sourceMappingURL=review.d.ts.map