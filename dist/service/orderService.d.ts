import { DateTime } from "luxon";
import { Order, OrderState } from "../entities/order";
import { orderHelper } from "../helpers/orderHelper";
export declare class orderService {
    private readonly helper;
    constructor(helper: orderHelper);
    findOrderById(id: string): Promise<Order>;
    findOrders(): Promise<Order[]>;
    createOrder(clientId: string, truckId: string, specialRequests: string, totalValue: number, totalCurrency: string, state: OrderState, deliveryTime: DateTime): Promise<Order>;
    updateOrder(id: string, specialRequests?: string, totalValue?: number, totalCurrency?: string, state?: OrderState, deliveryTime?: DateTime): Promise<Order>;
    deleteOrder(id: string): Promise<void>;
}
//# sourceMappingURL=orderService.d.ts.map