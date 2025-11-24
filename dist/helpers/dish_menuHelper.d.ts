import { Helper } from "./helper";
import { EntitySchema } from "typeorm";
import { DishMenu } from "../entities/dish_menu";
export declare class dishMenuHelper extends Helper<DishMenu> {
    getEntitySchema(): EntitySchema<DishMenu>;
    findDishMenuById(id: string): Promise<DishMenu | null>;
    findDishMenus(): Promise<DishMenu[]>;
    saveDishMenu(dishMenu: DishMenu): Promise<DishMenu>;
    deleteDishMenu(id: string): Promise<void>;
}
//# sourceMappingURL=dish_menuHelper.d.ts.map