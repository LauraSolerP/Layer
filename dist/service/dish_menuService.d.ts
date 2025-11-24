import { DishMenu } from "../entities/dish_menu";
import { dishMenuHelper } from "../helpers/dish_menuHelper";
export declare class dishMenuService {
    private readonly helper;
    constructor(helper: dishMenuHelper);
    findDishMenuById(id: string): Promise<DishMenu>;
    findDishMenus(): Promise<DishMenu[]>;
    createDishMenu(menuId: string, dishId: string): Promise<DishMenu>;
    updateDishMenu(id: string, menuId?: string, dishId?: string): Promise<DishMenu>;
    deleteDishMenu(id: string): Promise<void>;
}
//# sourceMappingURL=dish_menuService.d.ts.map