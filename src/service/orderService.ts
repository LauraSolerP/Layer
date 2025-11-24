import { DateTime } from "luxon";
import { Order, OrderState } from "../entities/order";
import { orderHelper } from "../helpers/orderHelper";
import { OrdersNotFound } from "../errors/order/ordersNotFound";
import { OrderNotFound } from "../errors/order/orderNotFound";
import { userOrderService } from "./user_orderService";


export class orderService {

    constructor(private readonly helper: orderHelper, private readonly userOrderService: userOrderService) { }

    async findOrderById(id: string): Promise<Order> {

        const order = await this.helper.findOrderById(id)

        if (!order) {
            throw new OrderNotFound(id)
        }

        return order

    }

    async findOrders(): Promise<Order[]> {

        const orders = await this.helper.findOrders()

        if (!orders) {
            throw new OrdersNotFound()
        }

        return orders
    }

    async createOrder(clientId: string, truckId: string, specialRequests: string, totalValue: number, totalCurrency: string, state: OrderState, deliveryTime: DateTime, dishIds: string[]): Promise<Order> {


        const order = Order.create(clientId, truckId, specialRequests, totalValue, totalCurrency, state, deliveryTime)

        for (const dishId of dishIds) {
            await this.userOrderService.createUserOrder(clientId, order.id, dishId)
        }

        return this.helper.saveOrder(order)
    }

    async updateOrder(id: string, specialRequests?: string, totalValue?: number, totalCurrency?: string, state?: OrderState, deliveryTime?: DateTime): Promise<Order> {
        const existing = await this.findOrderById(id)

        const updatedOrder = existing.update({ specialRequests, totalValue, totalCurrency, state, deliveryTime })

        return this.helper.saveOrder(updatedOrder)
    }

    async deleteOrder(id: string): Promise<void> {
        await this.findOrderById(id)
        await this.helper.deleteOrder(id)
    }

}