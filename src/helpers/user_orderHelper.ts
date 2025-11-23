import { Helper } from "./helper";
import { UserOrderModel } from "../model/user_order.model";
import { EntitySchema } from "typeorm";
import { UserOrder } from "../entities/user_order";


export class userOrderHelper extends Helper<UserOrder> {

    getEntitySchema(): EntitySchema<UserOrder> {
        return UserOrderModel
    }

    async findUserOrderById(id: string): Promise<UserOrder | null> {
        return (await this.getRepository()).findOneBy({ id })
    }

    async findUserOrders(): Promise<UserOrder[]> {
        return (await this.getRepository()).find()
    }

    async findUserOrdersByDishId(dishId: string): Promise<UserOrder[]> {
        return (await this.getRepository()).find({ where: { dishId } })
    }

    async saveUserOrder(userOrder: UserOrder): Promise<UserOrder> {
        return (await this.getRepository()).save(userOrder)
    }

    async deleteUserOrder(id: string): Promise<void> {
        await (await this.getRepository()).delete(id)
    }
} 