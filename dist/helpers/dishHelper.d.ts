import { Helper } from "./helper";
import { EntitySchema } from "typeorm";
import { Dish } from "../entities/dish";
export declare class dishHelper extends Helper<Dish> {
    getEntitySchema(): EntitySchema<Dish>;
    findDishById(id: string): Promise<Dish | null>;
    findDishes(): Promise<Dish[]>;
    saveDish(dish: Dish): Promise<Dish>;
    deleteDish(id: string): Promise<void>;
}
//# sourceMappingURL=dishHelper.d.ts.map