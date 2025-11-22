import { EntitySchema } from "typeorm"
import { Order } from "../entities/order"

export const OrderModel = new EntitySchema<Order>({
    name: "order",
    tableName: "order",
    target: Order,
    columns: {
        id: {
            type: String,
            primary: true
        },
        clientId: {
            type: String
        },
        truckId: {
            type: String
        },
        specialRequests: {
            type: String
        },
        totalValue: {
            type: Number
        },
        totalCurrency: {
            type: String
        },
        state: {
            type: String
        },
        deliveryTime: {
            type: Date
        }
    }
})