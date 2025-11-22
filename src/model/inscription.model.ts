import { EntitySchema } from "typeorm"
import { Inscription } from "../entities/inscription"

export const InscriptionModel = new EntitySchema<Inscription>({
    name: "inscription",
    tableName: "inscription",
    target: Inscription,
    columns: {
        id: {
            type: String,
            primary: true
        },
        truckId: {
            type: String
        },
        eventId: {
            type: String
        },
        participation: {
            type: Boolean
        }
    }
})