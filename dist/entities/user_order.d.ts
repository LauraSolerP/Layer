import { Entity } from "./entity";
export declare class UserOrder implements Entity {
    readonly id: string;
    readonly userId: string;
    readonly orderId: string;
    readonly dishId: string;
    constructor(id: string, userId: string, orderId: string, dishId: string);
    getPrimitive(): {
        id: string;
        userId: string;
        orderId: string;
        dishId: string;
    };
    static create(userId: string, orderId: string, dishId: string): UserOrder;
    update(data: {
        userId?: string | undefined;
        orderId?: string | undefined;
        dishId?: string | undefined;
    }): UserOrder;
}
//# sourceMappingURL=user_order.d.ts.map