import { DishMenu } from "../entities/dish_menu";
import { DishMenuNotFound } from "../errors/dish_menu/dishMenuNotFound";
import { dishMenuHelper } from "../helpers/dish_menuHelper";


export class dishMenuService {

    constructor(private readonly helper: dishMenuHelper) { }

    async findDishMenuById(id: string): Promise<DishMenu> {

        const dishMenu = await this.helper.findDishMenuById(id)

        if (!dishMenu) {
            throw new DishMenuNotFound(id)
        }

        return dishMenu

    }

    async findDishMenus(): Promise<DishMenu[]> {
        return this.helper.findDishMenus()
    }

    async createDishMenu(menuId: string, dishId: string): Promise<DishMenu> {


        const dishMenu = DishMenu.create(menuId, dishId)

        return this.helper.saveDishMenu(dishMenu)
    }

    async updateDishMenu(id: string, menuId?: string, dishId?: string): Promise<DishMenu> {
        const existing = await this.findDishMenuById(id)

        const updatedDishMenu = existing.update({ menuId, dishId })

        return this.helper.saveDishMenu(updatedDishMenu)
    }

    async deleteDishMenu(id: string): Promise<void> {
        await this.findDishMenuById(id)
        await this.helper.deleteDishMenu(id)
    }

}