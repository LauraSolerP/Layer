import { EntitySchema } from "typeorm"
import { Review } from "../entities/review"

export const ReviewModel = new EntitySchema<Review>({
    name: "review",
    tableName: "review",
    target: Review,
    columns: {
        id: {
            type: String,
            primary: true
        },
        clientId: {
            type: String
        },
        orderId: {
            type: String
        },
        description: {
            type: String
        }
    }
})