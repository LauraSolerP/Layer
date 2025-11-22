import { UserOrder } from "../entities/user_order";
import { UserOrderNotFound } from "../errors/user_order/userOrderNotFound";
import { userOrderHelper } from "../helpers/user_orderHelper";


export class userOrderService {

    constructor(private readonly helper: userOrderHelper) { }

    async findUserOrderById(id: string): Promise<UserOrder> {

        const userOrder = await this.helper.findUserOrderById(id)

        if (!userOrder) {
            throw new UserOrderNotFound(id)
        }

        return userOrder

    }

    async findUserOrders(): Promise<UserOrder[]> {
        return this.helper.findUserOrders()
    }

    async createUserOrder(userId: string, orderId: string, dishId: string): Promise<UserOrder> {

        const userOrder = UserOrder.create(userId, orderId, dishId)

        return this.helper.saveUserOrder(userOrder)
    }

    async updateUserOrder(id: string, userId?: string, orderId?: string, dishId?: string): Promise<UserOrder> {
        const existing = await this.findUserOrderById(id)

        const updatedUserOrder = existing.update({ userId, orderId, dishId })

        return this.helper.saveUserOrder(updatedUserOrder)
    }

    async deleteUserOrder(id: string): Promise<void> {
        await this.findUserOrderById(id)
        await this.helper.deleteUserOrder(id)
    }

}