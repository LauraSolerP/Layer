import { Helper } from "./helper";
import { OrderModel } from "../model/order.model";
import { EntitySchema } from "typeorm";
import { Order } from "../entities/order";


export class orderHelper extends Helper<Order> {

    getEntitySchema(): EntitySchema<Order> {
        return OrderModel
    }

    async findOrderById(id: string): Promise<Order | null> {
        return (await this.getRepository()).findOneBy({ id })
    }

    async findOrders(): Promise<Order[]> {
        return (await this.getRepository()).find()
    }

    async saveOrder(order: Order): Promise<Order> {
        return (await this.getRepository()).save(order)
    }

    async deleteOrder(id: string): Promise<void> {
        await (await this.getRepository()).delete(id)
    }
} 