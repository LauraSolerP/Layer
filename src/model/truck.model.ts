import { EntitySchema } from "typeorm"
import { Truck } from "../entities/truck"

export const TruckModel = new EntitySchema<Truck>({
    name: "truck",
    tableName: "truck",
    target: Truck,
    columns: {
        id: {
            type: String,
            primary: true
        },
        ownerId: {
            type: String
        },
        nom: {
            type: String
        }
    }
})