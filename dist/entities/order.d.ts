import { Entity } from "./entity";
import { DateTime } from "luxon";
export declare enum OrderState {
    PENDING = "PENDING",
    IN_PROGRESS = "IN_PROGRESS",
    COMPLETED = "COMPLETED",
    CANCELLED = "CANCELLED"
}
export declare class Order implements Entity {
    readonly id: string;
    readonly clientId: string;
    readonly truckId: string;
    readonly specialRequests: string;
    readonly totalValue: number;
    readonly totalCurrency: string;
    readonly state: OrderState;
    readonly deliveryTime: DateTime;
    constructor(id: string, clientId: string, truckId: string, specialRequests: string, totalValue: number, totalCurrency: string, state: OrderState, deliveryTime: DateTime);
    getPrimitive(): {
        id: string;
        clientId: string;
        specialRequests: string;
        totalValue: number;
        totalCurrency: string;
        state: OrderState;
        deliveryTime: DateTime<boolean>;
    };
    static create(clientId: string, truckId: string, specialRequests: string, totalValue: number, totalCurrency: string, state: OrderState, deliveryTime: DateTime): Order;
    update(data: {
        clientId?: string | undefined;
        truckId?: string | undefined;
        specialRequests?: string | undefined;
        totalValue?: number | undefined;
        totalCurrency?: string | undefined;
        state?: OrderState | undefined;
        deliveryTime?: DateTime | undefined;
    }): Order;
}
//# sourceMappingURL=order.d.ts.map