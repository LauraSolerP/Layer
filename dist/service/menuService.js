"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuService = void 0;
const menu_1 = require("../entities/menu");
const menuNotFound_1 = require("../errors/menu/menuNotFound");
class menuService {
    helper;
    constructor(helper) {
        this.helper = helper;
    }
    async findMenuById(id) {
        const menu = await this.helper.findMenuById(id);
        if (!menu) {
            throw new menuNotFound_1.MenuNotFound(id);
        }
        return menu;
    }
    async findMenus() {
        return this.helper.findMenus();
    }
    async createMenu(truckId, description, season, priceValue) {
        const menu = menu_1.Menu.create(truckId, description, season, priceValue);
        return this.helper.saveMenu(menu);
    }
    async updateMenu(id, description, season, priceValue, priceCurrency) {
        const existing = await this.findMenuById(id);
        const updatedMenu = existing.update({ description, season, priceValue, priceCurrency });
        return this.helper.saveMenu(updatedMenu);
    }
    async deleteMenu(id) {
        await this.findMenuById(id);
        await this.helper.deleteMenu(id);
    }
}
exports.menuService = menuService;
//# sourceMappingURL=menuService.js.map