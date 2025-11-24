"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMenusController = void 0;
class GetMenusController {
    service;
    constructor(service) {
        this.service = service;
    }
    async run(req, res) {
        try {
            const menus = await this.service.findMenus();
            return res.status(200).json({
                ok: true,
                menus: menus
            });
        }
        catch (error) {
            if (error.name === "MenuNotFound") {
                return res.status(404).json({
                    ok: false,
                    message: error.message
                });
            }
            return res.status(500).json({
                ok: false,
                message: "Server internal error",
                error: error.message
            });
        }
    }
}
exports.GetMenusController = GetMenusController;
//# sourceMappingURL=getMenusController.js.map