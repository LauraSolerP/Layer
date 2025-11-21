import { Menu, Season } from "../entities/menu";
import { MenuNotFound } from "../errors/menu/menuNotFound";
import { menuHelper } from "../helpers/menuHelper";


export class menuService {

    constructor(private readonly helper: menuHelper) { }

    async findMenuById(id: string): Promise<Menu> {

        const menu = await this.helper.findMenuById(id)

        if (!menu) {
            throw new MenuNotFound(id)
        }

        return menu

    }

    async findMenus(): Promise<Menu[]> {
        return this.helper.findMenus()
    }

    async createMenu(truckId: string, description: string, season: Season, priceValue: number): Promise<Menu> {


        const menu = Menu.create(truckId, description, season, priceValue)

        return this.helper.saveMenu(menu)
    }

    async updateMenu(id: string, description?: string, season?: Season, priceValue?: number, priceCurrency?: string): Promise<Menu> {
        const existing = await this.findMenuById(id)

        const updatedMenu = existing.update({ description, season, priceValue, priceCurrency })

        return this.helper.saveMenu(updatedMenu)
    }

    async deleteMenu(id: string): Promise<void> {
        await this.findMenuById(id)
        await this.helper.deleteMenu(id)
    }

}