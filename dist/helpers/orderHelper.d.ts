import { Helper } from "./helper";
import { EntitySchema } from "typeorm";
import { Order } from "../entities/order";
export declare class orderHelper extends Helper<Order> {
    getEntitySchema(): EntitySchema<Order>;
    findOrderById(id: string): Promise<Order | null>;
    findOrders(): Promise<Order[]>;
    saveOrder(order: Order): Promise<Order>;
    deleteOrder(id: string): Promise<void>;
}
//# sourceMappingURL=orderHelper.d.ts.map