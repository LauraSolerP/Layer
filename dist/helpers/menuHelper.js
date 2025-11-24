"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuHelper = void 0;
const helper_1 = require("./helper");
const menu_model_1 = require("../model/menu.model");
class menuHelper extends helper_1.Helper {
    getEntitySchema() {
        return menu_model_1.MenuModel;
    }
    async findMenuById(id) {
        return (await this.getRepository()).findOneBy({ id });
    }
    async findMenus() {
        return (await this.getRepository()).find();
    }
    async saveMenu(menu) {
        return (await this.getRepository()).save(menu);
    }
    async deleteMenu(id) {
        await (await this.getRepository()).delete(id);
    }
}
exports.menuHelper = menuHelper;
//# sourceMappingURL=menuHelper.js.map