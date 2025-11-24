import { Menu, Season } from "../entities/menu";
import { menuHelper } from "../helpers/menuHelper";
export declare class menuService {
    private readonly helper;
    constructor(helper: menuHelper);
    findMenuById(id: string): Promise<Menu>;
    findMenus(): Promise<Menu[]>;
    createMenu(truckId: string, description: string, season: Season, priceValue: number): Promise<Menu>;
    updateMenu(id: string, description?: string, season?: Season, priceValue?: number, priceCurrency?: string): Promise<Menu>;
    deleteMenu(id: string): Promise<void>;
}
//# sourceMappingURL=menuService.d.ts.map