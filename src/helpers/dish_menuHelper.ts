import { Helper } from "./helper";
import { DishMenuModel } from "../model/dish_menu.model";
import { EntitySchema } from "typeorm";
import { DishMenu } from "../entities/dish_menu";


export class dishMenuHelper extends Helper<DishMenu> {

    getEntitySchema(): EntitySchema<DishMenu> {
        return DishMenuModel
    }

    async findDishMenuById(id: string): Promise<DishMenu | null> {
        return (await this.getRepository()).findOneBy({ id })
    }

    async findDishMenus(): Promise<DishMenu[]> {
        return (await this.getRepository()).find()
    }

    async saveDishMenu(dishMenu: DishMenu): Promise<DishMenu> {
        return (await this.getRepository()).save(dishMenu)
    }

    async deleteDishMenu(id: string): Promise<void> {
        await (await this.getRepository()).delete(id)
    }
} 