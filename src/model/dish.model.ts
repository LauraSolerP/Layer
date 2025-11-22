import { EntitySchema } from "typeorm"
import { Dish } from "../entities/dish"

export const DishModel = new EntitySchema<Dish>({
    name: "dish",
    tableName: "dish",
    target: Dish,
    columns: {
        id: {
            type: String,
            primary: true
        },
        truckId: {
            type: String
        },
        description: {
            type: String
        },
        availability: {
            type: String
        },
        priceValue: {
            type: Number
        },
        priceCurrency: {
            type: String
        }
    }
})