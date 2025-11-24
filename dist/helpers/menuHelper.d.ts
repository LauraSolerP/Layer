import { Helper } from "./helper";
import { EntitySchema } from "typeorm";
import { Menu } from "../entities/menu";
export declare class menuHelper extends Helper<Menu> {
    getEntitySchema(): EntitySchema<Menu>;
    findMenuById(id: string): Promise<Menu | null>;
    findMenus(): Promise<Menu[]>;
    saveMenu(menu: Menu): Promise<Menu>;
    deleteMenu(id: string): Promise<void>;
}
//# sourceMappingURL=menuHelper.d.ts.map