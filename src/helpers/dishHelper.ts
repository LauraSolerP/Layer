import { Helper } from "./helper";
import { DishModel } from "../model/dish.model";
import { EntitySchema } from "typeorm";
import { Dish } from "../entities/dish";


export class dishHelper extends Helper<Dish> {

    getEntitySchema(): EntitySchema<Dish> {
        return DishModel
    }

    async findDishById(id: string): Promise<Dish | null> {
        return (await this.getRepository()).findOneBy({ id })
    }

    async findDishes(): Promise<Dish[]> {
        return (await this.getRepository()).find()
    }

    async saveDish(dish: Dish): Promise<Dish> {
        return (await this.getRepository()).save(dish)
    }

    async deleteDish(id: string): Promise<void> {
        await (await this.getRepository()).delete(id)
    }
} 