import { EntitySchema } from "typeorm"
import { DishMenu } from "../entities/dish_menu"

export const DishMenuModel = new EntitySchema<DishMenu>({
    name: "dish_menu",
    tableName: "dish_menu",
    target: DishMenu,
    columns: {
        id: {
            type: String,
            primary: true
        },
        menuId: {
            type: String
        },
        dishId: {
            type: String
        }
    }
})