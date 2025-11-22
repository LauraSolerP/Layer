import { EntitySchema } from "typeorm"
import { UserOrder } from "../entities/user_order"

export const UserOrderModel = new EntitySchema<UserOrder>({
    name: "user_order",
    tableName: "user_order",
    target: UserOrder,
    columns: {
        id: {
            type: String,
            primary: true
        },
        userId: {
            type: String
        },
        orderId: {
            type: String
        },
        dishId: {
            type: String
        }
    }
})