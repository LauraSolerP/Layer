import { EntitySchema } from "typeorm"
import { Menu } from "../entities/menu"

export const MenuModel = new EntitySchema<Menu>({
    name: "menu",
    tableName: "menu",
    target: Menu,
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
        season: {
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